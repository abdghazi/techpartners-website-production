import { pageMetadata } from "@/content/metadata";
import { ContactView } from "@/views/contact";

export const metadata = pageMetadata("en", "contact");

export default function ContactPage() {
  return <ContactView locale="en" />;
}
