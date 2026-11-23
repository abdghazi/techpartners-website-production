import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { getContent } from "@/content";
import { localePath, site, type Locale } from "@/content/site";

export function CtaBand({
  locale,
  title,
  text,
}: {
  locale: Locale;
  title?: string;
  text?: string;
}) {
  const t = getContent(locale);
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-16 md:py-16">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_80%_at_100%_0%,rgba(20,184,177,0.35),transparent),radial-gradient(40%_80%_at_30%_100%,rgba(11,61,134,0.8),transparent)]" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title ?? t.cta.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">{text ?? t.cta.text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href={localePath(locale, "/contact")} variant="accent" arrow>
              {t.common.requestProposal}
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              <Icon name="phone" className="size-4" />
              <span dir="ltr">{site.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
