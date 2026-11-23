// Facts shared by every language. Translated text lives in en.ts and ar.ts.

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export type IconName =
  | "server"
  | "users"
  | "shield"
  | "layers"
  | "sparkles"
  | "code"
  | "workflow";

export type Service = {
  id: string;
  title: string;
  kicker: string;
  group: "run" | "build";
  icon: IconName;
  summary: string;
  problem: string;
  deliver: string[];
};

export type ServiceGroup = {
  id: "run" | "build";
  title: string;
  text: string;
};

export type CountryId = "ca" | "sa" | "sy";

export const site = {
  name: "TechPartners",
  url: "https://techpartnersconsulting.com",
  // Main number, shown in the header, buttons and FAQ.
  phone: "+963 99 2222 199",
  phoneHref: "tel:+963992222199",
  email: "marwan.ghazi@techpartnersconsulting.com",
  emailHref: "mailto:marwan.ghazi@techpartnersconsulting.com",
  phones: [
    {
      id: "sy",
      number: "+963 99 2222 199",
      href: "tel:+963992222199",
      whatsapp: "https://wa.me/963992222199",
    },
    {
      id: "sa",
      number: "+966 59 244 5001",
      href: "tel:+966592445001",
      whatsapp: "https://wa.me/966592445001",
    },
    {
      id: "ca",
      number: "+1 514 998 9496",
      href: "tel:+15149989496",
      whatsapp: null,
    },
  ] as { id: CountryId; number: string; href: string; whatsapp: string | null }[],
  year: 2026,
};

/** Prefix an internal link with the language folder: "/about" -> "/ar/about". */
export function localePath(locale: Locale, href: string) {
  if (locale === "en") return href;
  return href === "/" ? "/ar" : `/ar${href}`;
}

/** The same page in the other language. */
export function switchLocalePath(locale: Locale, pathname: string) {
  if (locale === "en") return pathname === "/" ? "/ar" : `/ar${pathname}`;
  return pathname.replace(/^\/ar(?=\/|$)/, "") || "/";
}
