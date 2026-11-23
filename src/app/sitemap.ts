import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const pages = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/approach", priority: 0.6 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
