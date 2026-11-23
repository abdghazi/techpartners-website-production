import { pageMetadata } from "@/content/metadata";
import { ApproachView } from "@/views/approach";

export const metadata = pageMetadata("ar", "approach");

export default function ApproachPage() {
  return <ApproachView locale="ar" />;
}
