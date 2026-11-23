import { SiteShell } from "@/components/site-shell";
import { siteMetadata } from "@/content/metadata";

export const metadata = siteMetadata("ar");

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="ar">{children}</SiteShell>;
}
