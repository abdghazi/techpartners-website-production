import { fill, getContent } from "@/content";
import type { Locale } from "@/content/site";

export type ProposalFields = {
  name: string;
  email: string;
  company: string;
  service: string;
  need: string;
};

export type ProposalErrors = Partial<Record<"name" | "email" | "need", string>>;

export const emptyProposal: ProposalFields = {
  name: "",
  email: "",
  company: "",
  service: "",
  need: "",
};

export const proposalLimits = { name: 120, email: 200, company: 160, need: 5000 };

export function validateProposal(
  fields: ProposalFields,
  locale: Locale = "en",
): ProposalErrors {
  const messages = getContent(locale).validation;
  const errors: ProposalErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const need = fields.need.trim();
  if (name.length < 2 || name.length > proposalLimits.name) {
    errors.name = messages.name;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > proposalLimits.email) {
    errors.email = messages.email;
  }
  if (need.length < 20) {
    errors.need = messages.needShort;
  } else if (need.length > proposalLimits.need) {
    errors.need = fill(messages.needLong, { max: proposalLimits.need });
  }
  return errors;
}
