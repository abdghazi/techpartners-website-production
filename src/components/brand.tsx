import Image from "next/image";
import Link from "next/link";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/site";

export function Brand({
  tone = "light",
  locale = "en",
}: {
  tone?: "light" | "dark";
  locale?: Locale;
}) {
  return (
    <Link
      href={localePath(locale, "/")}
      className="flex shrink-0 items-center gap-2.5"
      aria-label={getContent(locale).header.homeAria}
    >
      {tone === "dark" ? (
        <Image src="/brand/mark-white.png" alt="" width={537} height={291} className="h-8 w-auto" />
      ) : (
        <>
          <Image
            src="/brand/mark.png"
            alt=""
            width={537}
            height={291}
            priority
            className="h-8 w-auto dark:hidden"
          />
          <Image
            src="/brand/mark-white.png"
            alt=""
            width={537}
            height={291}
            className="hidden h-8 w-auto dark:block"
          />
        </>
      )}
      {/* The brand name is always written left to right. */}
      <span dir="ltr" className="font-display text-xl font-bold tracking-tight">
        <span className={tone === "dark" ? "text-white" : "text-navy dark:text-white"}>Tech</span>
        <span className="text-teal">Partners</span>
      </span>
    </Link>
  );
}
