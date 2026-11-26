import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon, type IconKey } from "@/components/icons";
import { Principles } from "@/components/principles";
import { ButtonLink, CheckItem, SectionHeader } from "@/components/ui";
import { getContent, type Content } from "@/content";
import { localePath, site, type Locale } from "@/content/site";

type SectionProps = { locale: Locale; t: Content };

/** Tells search engines who the company is and that the LinkedIn page is ours. */
function organizationJsonLd(locale: Locale, t: Content) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: `${site.url}${locale === "en" ? "" : localePath(locale, "/")}`,
    logo: `${site.url}/brand/logo.png`,
    description: t.site.description,
    email: site.email,
    sameAs: [site.linkedin],
    founder: {
      "@type": "Person",
      name: t.aboutPage.founder.name,
      jobTitle: t.aboutPage.founder.role,
      image: `${site.url}${site.founderPhoto}`,
      sameAs: [site.founderLinkedin],
    },
    contactPoint: site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.number.replaceAll(" ", ""),
      contactType: "sales",
      areaServed: phone.id.toUpperCase(),
      availableLanguage: ["English", "Arabic"],
    })),
  };
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(locale, t)).replace(/</g, "\\u003c"),
        }}
      />
      <Hero locale={locale} t={t} />
      <Pillars t={t} />
      <ServicesSection locale={locale} t={t} />
      <WhyUs locale={locale} t={t} />
      <Process locale={locale} t={t} />
      <ProposalSection locale={locale} t={t} />
      <Faq t={t} />
      <CtaBand locale={locale} />
    </main>
  );
}

function Hero({ locale, t }: SectionProps) {
  const hero = t.home.hero;
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_65%_at_85%_0%,rgba(20,184,177,0.28),transparent),radial-gradient(50%_70%_at_0%_100%,rgba(11,61,134,0.85),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-28 text-center lg:pt-32 lg:pb-36">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-teal" />
            {hero.badge}
            <span className="hidden sm:inline">{hero.badgeDetail}</span>
          </p>
          <h1 className="mt-7 font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleStart}{" "}
            <span className="bg-gradient-to-r from-teal to-[#5eead4] bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">{hero.text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href={localePath(locale, "/contact")} variant="accent" arrow>
              {t.common.requestProposal}
            </ButtonLink>
            <ButtonLink href={localePath(locale, "/services")} variant="outlineDark">
              {hero.explore}
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-col items-center gap-3 text-sm text-white/75 sm:flex-row sm:justify-center sm:gap-8">
            {hero.checks.map((check) => (
              <CheckItem key={check} tone="dark">
                {check}
              </CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const pillarIcons: IconKey[] = ["server", "shield", "layers", "code"];

function Pillars({ t }: { t: Content }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {t.home.pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`flex flex-col items-start gap-3 px-6 py-8 sm:flex-row sm:items-center sm:gap-4 ${
              index > 0 ? "lg:border-s lg:border-line" : ""
            } ${index % 2 === 1 ? "border-s border-line" : ""} ${
              index > 1 ? "border-t border-line lg:border-t-0" : ""
            }`}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Icon name={pillarIcons[index]} />
            </span>
            <div>
              <p className="font-display font-bold text-navy-deep">{pillar.title}</p>
              <p className="text-sm text-muted">{pillar.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ locale, t }: SectionProps) {
  const copy = t.home.services;
  const servicesHref = localePath(locale, "/services");
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
          <ButtonLink href={servicesHref} variant="outline" arrow className="self-start lg:self-auto">
            {copy.all}
          </ButtonLink>
        </div>
        <div className="mt-14 space-y-12">
          {t.serviceGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-baseline gap-4 border-b border-line pb-4">
                <h3 className="font-display text-lg font-bold text-navy-deep">{group.title}</h3>
                <p className="hidden text-sm text-muted sm:block">{group.text}</p>
              </div>
              <div
                className={`mt-6 grid gap-5 sm:grid-cols-2 ${
                  t.services.filter((service) => service.group === group.id).length % 4 === 0
                    ? "lg:grid-cols-4"
                    : "lg:grid-cols-3"
                }`}
              >
                {t.services
                  .filter((service) => service.group === group.id)
                  .map((service) => (
                    <Link
                      key={service.id}
                      href={`${servicesHref}#${service.id}`}
                      className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-navy/5"
                    >
                      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-teal text-white shadow-md shadow-navy/20">
                        <Icon name={service.icon} className="size-6" />
                      </span>
                      <span className="mt-6 text-xs font-semibold tracking-[0.14em] text-teal-deep uppercase">
                        {service.kicker}
                      </span>
                      <span className="mt-2 font-display text-xl font-bold text-navy-deep">
                        {service.title}
                      </span>
                      <span className="mt-3 flex-1 text-[15px] leading-7 text-muted">
                        {service.summary}
                      </span>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                        {t.common.learnMore}
                        <Icon
                          name="arrowRight"
                          className="size-4 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                        />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs({ locale, t }: SectionProps) {
  const copy = t.home.why;
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
        <ButtonLink href={localePath(locale, "/about")} variant="outline" arrow className="mt-8">
          {copy.about}
        </ButtonLink>
      </div>
      <Principles locale={locale} />
    </section>
  );
}

function Process({ locale, t }: SectionProps) {
  const copy = t.home.process;
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader tone="dark" eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
          <ButtonLink
            href={localePath(locale, "/approach")}
            variant="outlineDark"
            arrow
            className="self-start lg:self-auto"
          >
            {copy.button}
          </ButtonLink>
        </div>
        <div className="relative mt-16">
          <div className="absolute start-0 end-[12%] top-6 hidden h-px bg-gradient-to-r from-teal/60 via-white/20 to-teal/10 lg:block rtl:bg-gradient-to-l" />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="relative flex size-12 items-center justify-center rounded-full border border-teal/40 bg-ink font-display text-base font-bold text-teal ring-8 ring-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProposalSection({ locale, t }: SectionProps) {
  const copy = t.home.proposal;
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-28 lg:grid-cols-2">
      <div className="relative order-2 lg:order-1" aria-hidden="true">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-navy/15 to-teal/25 rtl:-translate-x-4" />
        <div className="relative rounded-2xl border border-line bg-surface p-8 shadow-xl shadow-navy/5">
          <div className="flex items-center justify-between border-b border-line pb-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                <Icon name="file" className="size-5" />
              </span>
              <div>
                <p className="font-display font-bold text-navy-deep">{copy.docTitle}</p>
                <p className="text-xs text-muted">{copy.docSubtitle}</p>
              </div>
            </div>
            <span className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
              {copy.draft}
            </span>
          </div>
          {copy.headings.map((heading, index) => (
            <div key={heading} className="border-b border-line py-4 last:border-0 last:pb-0">
              <p className="text-xs font-semibold tracking-[0.12em] text-teal-deep uppercase">
                {String(index + 1).padStart(2, "0")} · {heading}
              </p>
              <div className="mt-2.5 space-y-2">
                <div className="h-2 rounded-full bg-line" style={{ width: `${92 - index * 6}%` }} />
                <div className="h-2 rounded-full bg-line/70" style={{ width: `${70 - index * 4}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
        <ul className="mt-8 space-y-4 text-foreground">
          {t.proposalIncludes.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
        <ButtonLink href={localePath(locale, "/contact")} arrow className="mt-10">
          {t.common.requestProposal}
        </ButtonLink>
      </div>
    </section>
  );
}

function Faq({ t }: { t: Content }) {
  const copy = t.home.faq;
  return (
    <section className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} text={copy.text} />
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-deep"
          >
            <Icon name="phone" className="size-4" />
            <span dir="ltr">{site.phone}</span>
          </a>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {t.faqs.map((faq) => (
            <details key={faq.q} className="group px-7 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold text-navy-deep">
                {faq.q}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-navy transition group-open:rotate-45 group-open:bg-navy group-open:text-white">
                  <Icon name="plus" className="size-4" />
                </span>
              </summary>
              <p className="pb-6 leading-7 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
