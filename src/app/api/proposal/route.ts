import { services, site } from "@/content/site";
import {
  proposalLimits,
  validateProposal,
  type ProposalFields,
} from "@/lib/proposal";

type Body = Partial<ProposalFields>;

function readField(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.slice(0, max);
}

function parseBody(raw: unknown): ProposalFields {
  const body = (raw && typeof raw === "object" ? raw : {}) as Body;
  return {
    name: readField(body.name, proposalLimits.name),
    email: readField(body.email, proposalLimits.email),
    company: readField(body.company, proposalLimits.company),
    service: readField(body.service, 64),
    need: readField(body.need, proposalLimits.need),
  };
}

function serviceLabel(id: string) {
  return services.find((service) => service.id === id)?.title ?? "Not specified";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

// Confirmation sent to the person who submitted the form. It deliberately
// does not repeat their message, so the form cannot be used to relay
// arbitrary text to someone else's inbox.
async function sendAutoReply(
  apiKey: string,
  from: string,
  replyTo: string,
  fields: ProposalFields,
) {
  const firstName = fields.name.trim().split(/\s+/)[0].slice(0, 40);
  const phonesText = site.phones
    .map((phone) => `${phone.country}: ${phone.number}`)
    .join("\n");
  const phonesHtml = site.phones
    .map((phone) => `${escapeHtml(phone.country)}: ${escapeHtml(phone.number)}`)
    .join("<br />");

  const text = [
    `Hi ${firstName},`,
    "",
    `Thank you for contacting ${site.name}. We have received your proposal request and will review it shortly.`,
    "",
    "What happens next:",
    "1. We review your request and come back with any questions.",
    "2. A short discovery call to understand the problem and who it affects.",
    "3. You receive a written plan: scope, sequence, team, and what we would leave for later.",
    "",
    "If you need to reach us sooner, reply to this email or call:",
    phonesText,
    "",
    `The ${site.name} team`,
  ].join("\n");

  const html = `
    <p>Hi ${escapeHtml(firstName)},</p>
    <p>Thank you for contacting ${escapeHtml(site.name)}. We have received your proposal request and will review it shortly.</p>
    <p><strong>What happens next</strong></p>
    <ol>
      <li>We review your request and come back with any questions.</li>
      <li>A short discovery call to understand the problem and who it affects.</li>
      <li>You receive a written plan: scope, sequence, team, and what we would leave for later.</li>
    </ol>
    <p>If you need to reach us sooner, reply to this email or call:<br />${phonesHtml}</p>
    <p>The ${escapeHtml(site.name)} team</p>
  `;

  try {
    const response = await sendEmail(apiKey, {
      from,
      to: [fields.email.trim()],
      reply_to: replyTo,
      subject: `We received your request – ${site.name}`,
      text,
      html,
    });
    if (!response.ok) {
      console.error("Auto-reply error:", response.status, await response.text());
    }
  } catch (error) {
    console.error("Auto-reply failed:", error);
  }
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const fields = parseBody(raw);
  const errors = validateProposal(fields);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "TechPartners <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return Response.json(
      {
        error:
          "Proposal delivery is not configured yet. Please call us, or try again later.",
      },
      { status: 503 },
    );
  }

  const service = serviceLabel(fields.service);
  const subject = `Proposal request from ${fields.name.trim()}`;
  const text = [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Company: ${fields.company.trim() || "—"}`,
    `Service: ${service}`,
    "",
    fields.need.trim(),
  ].join("\n");

  const html = `
    <h2>New proposal request</h2>
    <p><strong>Name:</strong> ${escapeHtml(fields.name.trim())}</p>
    <p><strong>Email:</strong> ${escapeHtml(fields.email.trim())}</p>
    <p><strong>Company:</strong> ${escapeHtml(fields.company.trim() || "—")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Request:</strong></p>
    <p>${escapeHtml(fields.need.trim()).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const response = await sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: fields.email.trim(),
      subject,
      text,
      html,
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", response.status, detail);
      return Response.json(
        { error: "We could not send that request. Please call us instead." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Proposal send failed:", error);
    return Response.json(
      { error: "We could not send that request. Please call us instead." },
      { status: 502 },
    );
  }

  // Resend's shared test sender cannot deliver to outside addresses, so only
  // send the confirmation once a verified domain sender is configured.
  if (!from.includes("@resend.dev")) {
    await sendAutoReply(apiKey, from, to, fields);
  }

  return Response.json({ ok: true });
}
