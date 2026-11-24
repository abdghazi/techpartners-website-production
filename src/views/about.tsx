import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Principles } from "@/components/principles";
import { SectionHeader } from "@/components/ui";
import { getContent } from "@/content";
import { localePath, site, type Locale } from "@/content/site";

function Founder({ locale }: { locale: Locale }) {
  const founder = getContent(locale).aboutPage.founder;
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-xs lg:mx-0">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-navy/15 to-teal/25 rtl:-translate-x-4" />
          <Image
            src={site.founderPhoto}
            alt={founder.photoAlt}
            width={344}
            height={430}
            sizes="320px"
            className="relative h-auto w-full rounded-3xl border border-line"
          />
        </div>
        <div>
          <SectionHeader eyebrow={founder.eyebrow} title={founder.title} />
          <p className="mt-8 font-display text-2xl font-bold text-navy-deep">{founder.name}</p>
          <p className="mt-1 text-sm font-semibold tracking-[0.14em] text-teal-deep uppercase">
            {founder.role}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="mt-10 text-xs font-semibold tracking-[0.14em] text-teal-deep uppercase">
            {founder.careerTitle}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {founder.career.map((item) => (
              <li key={item.org} className="rounded-xl border border-line bg-surface px-5 py-4">
                <span className="block font-display font-semibold text-navy-deep">{item.org}</span>
                <span className="mt-0.5 block text-sm text-muted">{item.role}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            <span className="font-semibold text-navy-deep">{founder.educationTitle}:</span>{" "}
            {founder.education}
          </p>
          <a
            href={site.founderLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40 hover:bg-background"
          >
            <Icon name="linkedin" className="size-5" />
            {founder.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const copy = t.aboutPage;
  const servicesHref = localePath(locale, "/services");
  return (
    <main>
      <PageBanner eyebrow={copy.eyebrow} title={copy.title}>
        <p>{copy.intro}</p>
      </PageBanner>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader eyebrow={copy.whoEyebrow} title={copy.whoTitle} />
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
            {copy.whoParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy/40 hover:bg-background"
          >
            <Icon name="linkedin" className="size-5" />
            {t.common.linkedin}
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-navy/15 to-teal/25 rtl:-translate-x-4" />
          <div className="relative flex flex-col items-center rounded-3xl border border-line bg-white px-10 py-14 text-center">
            <Image
              src="/brand/logo.png"
              alt={`${site.name}, ${t.site.tagline}`}
              width={792}
              height={494}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <Founder locale={locale} />

      <section className="border-y border-line bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader eyebrow={copy.operateEyebrow} title={copy.operateTitle} />
          <Principles locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow={copy.whatEyebrow} title={copy.whatTitle} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.map((service) => (
            <li key={service.id}>
              <Link
                href={`${servicesHref}#${service.id}`}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-surface p-5 transition hover:border-teal/40 hover:shadow-md hover:shadow-navy/5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition group-hover:bg-navy group-hover:text-white">
                  <Icon name={service.icon} />
                </span>
                <span className="font-display font-semibold text-navy-deep">{service.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand locale={locale} />
    </main>
  );
}
