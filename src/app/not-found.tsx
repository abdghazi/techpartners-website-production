import { SiteShell } from "@/components/site-shell";
import { NotFoundView } from "@/views/not-found";

export default function NotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundView locale="en" />
    </SiteShell>
  );
}
