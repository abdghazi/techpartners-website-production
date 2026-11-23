import { pageMetadata } from "@/content/metadata";
import { HomeView } from "@/views/home";

export const metadata = pageMetadata("en", "home");

export default function HomePage() {
  return <HomeView locale="en" />;
}
