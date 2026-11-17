import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { Principles } from "@/components/principles";
import { ButtonLink, CheckItem, SectionHeader } from "@/components/ui";
import {
  faqs,
  proposalIncludes,
  serviceGroups,
  services,
  site,
  steps,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <ServicesSection />
      <WhyUs />
      <Process />
      <ProposalSection />
      <Faq />
      <CtaBand />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_65%_at_85%_0%,rgba(20,184,177,0.28),transparent),radial-gradient(50%_70%_at_0%_100%,rgba(11,61,134,0.85),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28 lg:pb-32">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-teal" />
            IT consultancy
            <span className="hidden sm:inline">· Managed services · Security · ERP · AI</span>
          </p>
          <h1 className="mt-7 font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technology partners who plan it, build it, and{" "}
            <span className="bg-gradient-to-r from-teal to-[#5eead4] bg-clip-text text-transparent">
              keep it running.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
            {site.name} runs, protects, and builds the systems your business
            depends on. Every engagement starts with a written plan you
            approve. Then one accountable team delivers it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="accent" arrow>
              Request a proposal
            </ButtonLink>
            <ButtonLink href="/services" variant="outlineDark">
              Explore services
            </ButtonLink>
          </div>
          <ul className="mt-12 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
            <CheckItem tone="dark">Written plan first</CheckItem>
            <CheckItem tone="dark">One accountable team</CheckItem>
            <CheckItem tone="dark">Support after launch</CheckItem>
          </ul>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const phases = [
    { name: "Discover", status: "Complete", value: 100 },
    { name: "Plan", status: "Approved", value: 100 },
    { name: "Deliver", status: "In progress", value: 64 },
    { name: "Support", status: "Scheduled", value: 0 },
  ];
  return (
    <div
      className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none"
      style={{ animationDelay: "120ms" }}
      aria-hidden="true"
    >
      <div className="animate-float rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="rounded-xl bg-white p-6 text-navy-deep">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted">Example engagement</p>
              <p className="mt-1 font-display text-lg font-bold">ERP rollout · Phase 3</p>
            </div>
            <span className="rounded-full bg-teal/15 px-2.5 py-1 text-xs font-semibold text-teal-deep">
              On track
            </span>
          </div>
          <ul className="mt-6 space-y-4">
            {phases.map((phase) => (
              <li key={phase.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{phase.name}</span>
                  <span className="text-xs text-muted">{phase.status}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-navy to-teal"
                    style={{ width: `${phase.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
            {[
              { label: "Phases", value: "04" },
              { label: "Live now", value: "03" },
              { label: "Next", value: "01" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-bold text-navy">{stat.value}</p>
                <p className="mt-0.5 text-[11px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-8 hidden w-60 rounded-xl border border-white/10 bg-navy-deep/90 p-4 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-teal/15 text-teal">
            <Icon name="shield" className="size-5" />
          </span>
          <div>
            <p className="text-xs text-white/60">Security monitoring</p>
            <p className="text-sm font-semibold text-white">All systems healthy</p>
          </div>
        </div>
      </div>
      <div className="absolute -top-6 -right-4 hidden rounded-xl border border-white/10 bg-navy-deep/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span>
          Proposal approved
        </div>
      </div>
    </div>
  );
}

function Pillars() {
  const pillars = [
    { title: "Run", text: "Managed services and outsourcing", icon: "server" as const },
    { title: "Protect", text: "Detection, response, and compliance", icon: "shield" as const },
    { title: "Operate", text: "ERP that connects the business", icon: "layers" as const },
    { title: "Build", text: "Software, AI, and agentic workflows", icon: "code" as const },
  ];
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`flex flex-col items-start gap-3 px-6 py-8 sm:flex-row sm:items-center sm:gap-4 ${
              index > 0 ? "lg:border-l lg:border-line" : ""
            } ${index % 2 === 1 ? "border-l border-line" : ""} ${
              index > 1 ? "border-t border-line lg:border-t-0" : ""
            }`}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Icon name={pillar.icon} />
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

function ServicesSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="One partner across operations, security, and new builds."
            text="Most firms do one of these. We cover the full lifecycle, so the team that builds your system is the team that runs and protects it."
          />
          <ButtonLink href="/services" variant="outline" arrow className="self-start lg:self-auto">
            All services
          </ButtonLink>
        </div>
        <div className="mt-14 space-y-12">
          {serviceGroups.map((group) => (
            <div key={group.id}>
              <div className="flex items-baseline gap-4 border-b border-line pb-4">
                <h3 className="font-display text-lg font-bold text-navy-deep">{group.title}</h3>
                <p className="hidden text-sm text-muted sm:block">{group.text}</p>
              </div>
              <div
                className={`mt-6 grid gap-5 sm:grid-cols-2 ${
                  group.id === "run" ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {services
                  .filter((service) => service.group === group.id)
                  .map((service) => (
                    <Link
                      key={service.id}
                      href={`/services#${service.id}`}
                      className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-xl hover:shadow-navy/5"
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
                        Learn more
                        <Icon
                          name="arrowRight"
                          className="size-4 transition group-hover:translate-x-1"
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

function WhyUs() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <SectionHeader
          eyebrow={`Why ${site.name}`}
          title="Accountable from the first plan to the last support ticket."
          text="Technology projects rarely fail on code. They fail on unclear scope, missing owners, and nobody staying after launch. Our model is built to remove those gaps."
        />
        <ButtonLink href="/about" variant="outline" arrow className="mt-8">
          About us
        </ButtonLink>
      </div>
      <Principles />
    </section>
  );
}

function Process() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            tone="dark"
            eyebrow="How we work"
            title="A clear path from first call to ongoing support."
            text="The same four-step sequence covers a managed service, a security program, an ERP rollout, or a new build."
          />
          <ButtonLink href="/approach" variant="outlineDark" arrow className="self-start lg:self-auto">
            Our approach
          </ButtonLink>
        </div>
        <div className="relative mt-16">
        <div className="absolute top-6 right-[12%] left-0 hidden h-px bg-gradient-to-r from-teal/60 via-white/20 to-teal/10 lg:block" />
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="relative flex size-12 items-center justify-center rounded-full border border-teal/40 bg-navy-deep font-display text-base font-bold text-teal ring-8 ring-navy-deep">
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

function ProposalSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:py-28 lg:grid-cols-2">
      <div className="relative order-2 lg:order-1" aria-hidden="true">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-navy/15 to-teal/25" />
        <div className="relative rounded-2xl border border-line bg-white p-8 shadow-xl shadow-navy/5">
          <div className="flex items-center justify-between border-b border-line pb-5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                <Icon name="file" className="size-5" />
              </span>
              <div>
                <p className="font-display font-bold text-navy-deep">Proposal</p>
                <p className="text-xs text-muted">Prepared for your team</p>
              </div>
            </div>
            <span className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
              Draft v1
            </span>
          </div>
          {["Problem", "Scope and phases", "Team", "Out of scope", "Support"].map(
            (heading, index) => (
              <div key={heading} className="border-b border-line py-4 last:border-0 last:pb-0">
                <p className="text-xs font-semibold tracking-[0.12em] text-teal-deep uppercase">
                  {String(index + 1).padStart(2, "0")} · {heading}
                </p>
                <div className="mt-2.5 space-y-2">
                  <div className="h-2 rounded-full bg-line" style={{ width: `${92 - index * 6}%` }} />
                  <div className="h-2 rounded-full bg-line/70" style={{ width: `${70 - index * 4}%` }} />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <SectionHeader
          eyebrow="Your proposal"
          title="You see the whole plan before anything starts."
          text="A proposal from us is a working document, not a sales deck. It tells you exactly what we will do, in what order, and with whom."
        />
        <ul className="mt-8 space-y-4 text-foreground">
          {proposalIncludes.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
        <ButtonLink href="/contact" arrow className="mt-10">
          Request a proposal
        </ButtonLink>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            text="Anything else, call us or send a request and we will answer it directly."
          />
          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-teal-deep"
          >
            <Icon name="phone" className="size-4" />
            {site.phone}
          </a>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((faq) => (
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
