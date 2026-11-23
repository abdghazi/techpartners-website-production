import { pageMetadata } from "@/content/metadata";
import { ServicesView } from "@/views/services";

export const metadata = pageMetadata("ar", "services");

export default function ServicesPage() {
  return <ServicesView locale="ar" />;
}
