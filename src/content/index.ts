import { ar } from "@/content/ar";
import { en, type Content } from "@/content/en";
import type { Locale } from "@/content/site";

const content: Record<Locale, Content> = { en, ar };

export function getContent(locale: Locale): Content {
  return content[locale];
}

/** Replace {key} placeholders, e.g. fill("Hi {name}", { name: "Sam" }). */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export type { Content };
