import { pageMetadata } from "@/content/metadata";
import { ServicesView } from "@/views/services";

export const metadata = pageMetadata("en", "services");

export default function ServicesPage() {
  return <ServicesView locale="en" />;
}
