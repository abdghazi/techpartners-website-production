import { fill, getContent } from "@/content";
import { site, type Locale } from "@/content/site";
import {
  proposalLimits,
  validateProposal,
  type ProposalFields,
} from "@/lib/proposal";

type Body = Partial<ProposalFields> & { locale?: unknown };

function readField(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.slice(0, max);
}

function parseBody(raw: unknown): { fields: ProposalFields; locale: Locale } {
  const body = (raw && typeof raw === "object" ? raw : {}) as Body;
  return {
    fields: {
      name: readField(body.name, proposalLimits.name),
      email: readField(body.email, proposalLimits.email),
      company: readField(body.company, proposalLimits.company),
      service: readField(body.service, 64),
      need: readField(body.need, proposalLimits.need),
    },
    locale: body.locale === "ar" ? "ar" : "en",
  };
}

// The team always reads the request in English.
function serviceLabel(id: string) {
  return (
    getContent("en").services.find((service) => service.id === id)?.title ??
    "Not specified"
  );
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

// Confirmation sent to the person who submitted the form, in the language
// they used. It deliberately does not repeat their message, so the form
// cannot be used to relay arbitrary text to someone else's inbox.
async function sendAutoReply(
  apiKey: string,
  from: string,
  replyTo: string,
  fields: ProposalFields,
  locale: Locale,
) {
  const t = getContent(locale);
  const reply = t.autoReply;
  const rtl = locale === "ar";
  const firstName = fields.name.trim().split(/\s+/)[0].slice(0, 40);
  const greeting = fill(reply.greeting, { name: firstName });
  const phonesText = site.phones
    .map((phone) => `${t.countries[phone.id]}: ${phone.number}`)
    .join("\n");
  const phonesHtml = site.phones
    .map(
      (phone) =>
        `${escapeHtml(t.countries[phone.id])}: <span dir="ltr">${escapeHtml(phone.number)}</span>`,
    )
    .join("<br />");

  const text = [
    greeting,
    "",
    reply.intro,
    "",
    reply.nextTitle,
    ...reply.next.map((item, index) => `${index + 1}. ${item}`),
    "",
    reply.reach,
    phonesText,
    "",
    `${reply.follow} ${site.linkedin}`,
    "",
    reply.signoff,
  ].join("\n");

  const html = `
    <div dir="${rtl ? "rtl" : "ltr"}" style="text-align: ${rtl ? "right" : "left"}">
      <p>${escapeHtml(greeting)}</p>
      <p>${escapeHtml(reply.intro)}</p>
      <p><strong>${escapeHtml(reply.nextTitle)}</strong></p>
      <ol>
        ${reply.next.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
      <p>${escapeHtml(reply.reach)}<br />${phonesHtml}</p>
      <p>${escapeHtml(reply.follow)} <a href="${site.linkedin}">LinkedIn</a></p>
      <p>${escapeHtml(reply.signoff)}</p>
    </div>
  `;

  try {
    const response = await sendEmail(apiKey, {
      from,
      to: [fields.email.trim()],
      reply_to: replyTo,
      subject: reply.subject,
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
    return Response.json({ error: getContent("en").api.invalid }, { status: 400 });
  }

  const { fields, locale } = parseBody(raw);
  const t = getContent(locale);
  const errors = validateProposal(fields, locale);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "TechPartners <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return Response.json({ error: t.api.notConfigured }, { status: 503 });
  }

  const service = serviceLabel(fields.service);
  const language = locale === "ar" ? "Arabic" : "English";
  const subject = `${locale === "ar" ? "[Arabic] " : ""}Proposal request from ${fields.name.trim()}`;
  const text = [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Company: ${fields.company.trim() || "—"}`,
    `Service: ${service}`,
    `Language: ${language}`,
    "",
    fields.need.trim(),
  ].join("\n");

  const html = `
    <h2>New proposal request</h2>
    <p><strong>Name:</strong> ${escapeHtml(fields.name.trim())}</p>
    <p><strong>Email:</strong> ${escapeHtml(fields.email.trim())}</p>
    <p><strong>Company:</strong> ${escapeHtml(fields.company.trim() || "—")}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Language:</strong> ${language}</p>
    <p><strong>Request:</strong></p>
    <p dir="auto">${escapeHtml(fields.need.trim()).replaceAll("\n", "<br />")}</p>
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
      return Response.json({ error: t.api.failed }, { status: 502 });
    }
  } catch (error) {
    console.error("Proposal send failed:", error);
    return Response.json({ error: t.api.failed }, { status: 502 });
  }

  // Resend's shared test sender cannot deliver to outside addresses, so only
  // send the confirmation once a verified domain sender is configured.
  if (!from.includes("@resend.dev")) {
    await sendAutoReply(apiKey, from, to, fields, locale);
  }

  return Response.json({ ok: true });
}
