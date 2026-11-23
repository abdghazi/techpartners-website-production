import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { CheckItem } from "@/components/ui";
import { getContent } from "@/content";
import type { Locale } from "@/content/site";

export function ServicesView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const copy = t.servicesPage;
  return (
    <main>
      <PageBanner eyebrow={copy.eyebrow} title={copy.title}>
        <p>{copy.intro}</p>
      </PageBanner>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-8" aria-label={copy.navLabel}>
            {t.serviceGroups.map((group) => (
              <div key={group.id}>
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                  {group.title}
                </p>
                <ul className="mt-3 space-y-1 border-s border-line">
                  {t.services
                    .filter((s) => s.group === group.id)
                    .map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="-ms-px block border-s-2 border-transparent py-1.5 ps-4 text-sm font-medium text-muted transition hover:border-teal hover:text-navy"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div className="space-y-20">
          {t.serviceGroups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <div className="border-b border-line pb-5">
                <h2
                  id={`group-${group.id}`}
                  className="font-display text-2xl font-bold text-navy-deep"
                >
                  {group.title}
                </h2>
                <p className="mt-1 text-muted">{group.text}</p>
              </div>
              <div className="mt-8 space-y-6">
                {t.services
                  .filter((s) => s.group === group.id)
                  .map((service) => (
                    <article
                      key={service.id}
                      id={service.id}
                      className="scroll-mt-28 rounded-2xl border border-line bg-surface p-8 transition hover:shadow-lg hover:shadow-navy/5 md:p-10"
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-teal text-white shadow-md shadow-navy/20">
                          <Icon name={service.icon} className="size-7" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.14em] text-teal-deep uppercase">
                            {service.kicker}
                          </p>
                          <h3 className="mt-1.5 font-display text-2xl font-bold text-navy-deep">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-lg leading-8 text-muted">{service.summary}</p>
                        </div>
                      </div>
                      <div className="mt-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                        <div className="rounded-xl bg-background p-6">
                          <p className="text-sm font-semibold text-navy-deep">{copy.challenge}</p>
                          <p className="mt-3 leading-7 text-muted">{service.problem}</p>
                        </div>
                        <div className="p-1 md:p-6">
                          <p className="text-sm font-semibold text-navy-deep">{copy.deliver}</p>
                          <ul className="mt-4 space-y-3 text-[15px] leading-6 text-foreground">
                            {service.deliver.map((item) => (
                              <CheckItem key={item}>{item}</CheckItem>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand locale={locale} title={t.cta.servicesTitle} text={t.cta.servicesText} />
    </main>
  );
}
