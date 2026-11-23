import { pageMetadata } from "@/content/metadata";
import { AboutView } from "@/views/about";

export const metadata = pageMetadata("ar", "about");

export default function AboutPage() {
  return <AboutView locale="ar" />;
}
