import type { MetadataRoute } from "next";
import { pagePaths, type PageKey } from "@/content/metadata";
import { localePath, locales, site } from "@/content/site";

const priority: Record<PageKey, number> = {
  home: 1,
  services: 0.8,
  approach: 0.6,
  about: 0.6,
  contact: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(pagePaths) as PageKey[];
  return locales.flatMap((locale) =>
    pages.map((page) => {
      const path = pagePaths[page];
      const url = (p: string) => `${site.url}${p === "/" ? "" : p}`;
      return {
        url: url(localePath(locale, path)),
        changeFrequency: "monthly" as const,
        priority: priority[page],
        alternates: {
          languages: {
            en: url(path),
            ar: url(localePath("ar", path)),
          },
        },
      };
    }),
  );
}
