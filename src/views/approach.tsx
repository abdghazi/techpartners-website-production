import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import { Principles } from "@/components/principles";
import { SectionHeader } from "@/components/ui";
import { getContent } from "@/content";
import type { Locale } from "@/content/site";

export function ApproachView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const copy = t.approachPage;
  return (
    <main>
      <PageBanner eyebrow={copy.eyebrow} title={copy.title}>
        <p>{copy.intro}</p>
      </PageBanner>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative max-w-4xl">
          <div className="absolute start-[3.25rem] top-8 bottom-8 hidden w-px bg-gradient-to-b from-navy via-teal to-teal/20 sm:block md:start-[3.75rem]" />
          <ol className="relative space-y-6">
            {t.steps.map((step, index) => (
              <li
                key={step.title}
                className="relative grid gap-6 rounded-2xl border border-line bg-surface p-8 sm:grid-cols-[4rem_1fr] sm:gap-8 md:p-10"
              >
                <span className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-navy to-teal font-display text-base font-bold text-white shadow-md shadow-navy/20 ring-8 ring-surface sm:-ms-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-deep">{step.title}</h2>
                  <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{step.text}</p>
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.14em] text-teal-deep uppercase">
                      {copy.receive}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {step.outputs.map((output) => (
                        <li
                          key={output}
                          className="rounded-full border border-line bg-background px-3.5 py-1.5 text-sm font-medium text-navy-deep"
                        >
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow={copy.principlesEyebrow}
            title={copy.principlesTitle}
            text={copy.principlesText}
          />
          <Principles locale={locale} />
        </div>
      </section>

      <CtaBand locale={locale} />
    </main>
  );
}
