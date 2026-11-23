import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/content/site";

/**
 * Header, page and footer for one language. Arabic pages are marked
 * lang="ar" dir="rtl" here, which switches the font and mirrors the layout.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const arabic = locale === "ar";
  return (
    <div
      lang={arabic ? "ar" : undefined}
      dir={arabic ? "rtl" : undefined}
      className="flex flex-1 flex-col"
    >
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
