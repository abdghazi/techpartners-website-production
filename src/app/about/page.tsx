import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Principles } from "@/components/principles";
import { SectionHeader } from "@/components/ui";
import { services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TechPartners is an IT consultancy for managed services, outsourcing, cybersecurity, ERP, and AI.",
};

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About us"
        title="An IT partner that stays accountable after the project ends."
      >
        <p>
          {site.name} is an IT consultancy. We run systems, staff delivery,
          close security gaps, roll out ERP, and build the software and AI
          around that work.
        </p>
      </PageBanner>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader eyebrow="Who we are" title="Better together in tech." />
          <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
            <p>
              Clients come to us when they need systems run reliably, delivery
              they cannot staff, security gaps closed, an ERP put in place, or
              new software and AI built around the way they work.
            </p>
            <p>
              A written plan always comes first, so every engagement has a
              scope, an order, and a clear finish line. Then we build or run
              that plan alongside your team, and we stay on to support it.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-navy/15 to-teal/25" />
          <div className="relative flex flex-col items-center rounded-3xl border border-line bg-white px-10 py-14 text-center">
            <Image
              src="/brand/logo.png"
              alt={`${site.name}, ${site.tagline}`}
              width={792}
              height={494}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="How we operate"
            title="Four commitments behind every engagement."
          />
          <Principles />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="What we do"
          title="Seven services, one accountable team."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/services#${service.id}`}
                className="group flex h-full items-center gap-4 rounded-xl border border-line bg-white p-5 transition hover:border-teal/40 hover:shadow-md hover:shadow-navy/5"
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

      <CtaBand />
    </main>
  );
}
