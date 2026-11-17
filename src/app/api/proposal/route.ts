import { services } from "@/content/site";
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
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email.trim(),
        subject,
        text,
        html,
      }),
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

  return Response.json({ ok: true });
}
