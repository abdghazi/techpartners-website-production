import { pageMetadata } from "@/content/metadata";
import { ContactView } from "@/views/contact";

export const metadata = pageMetadata("ar", "contact");

export default function ContactPage() {
  return <ContactView locale="ar" />;
}
