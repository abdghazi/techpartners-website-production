import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} home`}>
      <Image
        src={tone === "dark" ? "/brand/mark-white.png" : "/brand/mark.png"}
        alt=""
        width={537}
        height={291}
        priority={tone === "light"}
        className="h-8 w-auto"
      />
      <span className="font-display text-xl font-bold tracking-tight">
        <span className={tone === "dark" ? "text-white" : "text-navy"}>Tech</span>
        <span className="text-teal">Partners</span>
      </span>
    </Link>
  );
}
