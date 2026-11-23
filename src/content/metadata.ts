import type { Metadata } from "next";
import { getContent } from "@/content";
import { localePath, site, type Locale } from "@/content/site";

export const pagePaths = {
  home: "/",
  services: "/services",
  approach: "/approach",
  about: "/about",
  contact: "/contact",
} as const;

export type PageKey = keyof typeof pagePaths;

/** Links each page to its translation so search engines show the right one. */
function alternates(locale: Locale, page: PageKey): Metadata["alternates"] {
  const path = pagePaths[page];
  return {
    canonical: localePath(locale, path),
    languages: {
      en: path,
      ar: localePath("ar", path),
      "x-default": path,
    },
  };
}

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const t = getContent(locale);
  if (page === "home") {
    return {
      title: { absolute: t.meta.homeTitle },
      description: t.site.description,
      alternates: alternates(locale, page),
    };
  }
  const meta = t.meta.pages[page];
  return {
    title: meta.title,
    description: meta.description,
    alternates: alternates(locale, page),
  };
}

/** Site-wide defaults for one language, used by its layout. */
export function siteMetadata(locale: Locale): Metadata {
  const t = getContent(locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || site.url),
    title: {
      default: t.meta.homeTitle,
      template: `%s · ${site.name}`,
    },
    description: t.site.description,
    applicationName: site.name,
    keywords: t.meta.keywords,
    openGraph: {
      type: "website",
      locale: t.meta.ogLocale,
      siteName: site.name,
      title: t.meta.homeTitle,
      description: t.site.description,
      images: [{ url: "/brand/logo.png", width: 792, height: 494, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.homeTitle,
      description: t.site.description,
      images: ["/brand/logo.png"],
    },
  };
}
