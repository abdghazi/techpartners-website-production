import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";
import { Principles } from "@/components/principles";
import { SectionHeader } from "@/components/ui";
import { steps } from "@/content/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Discover the problem, agree on a written plan, deliver in usable phases, and stay on after launch.",
};

export default function ApproachPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Our approach"
        title="A written plan first. The work starts once you agree."
      >
        <p>
          The same four-step sequence covers a managed service, an outsourced
          team, a security program, an ERP rollout, or a new build. You always
          know what is happening, what comes next, and who owns it.
        </p>
      </PageBanner>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative max-w-4xl">
        <div className="absolute top-8 bottom-8 left-[3.25rem] hidden w-px bg-gradient-to-b from-navy via-teal to-teal/20 sm:block md:left-[3.75rem]" />
        <ol className="relative space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative grid gap-6 rounded-2xl border border-line bg-white p-8 sm:grid-cols-[4rem_1fr] sm:gap-8 md:p-10"
            >
              <span className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-navy to-teal font-display text-base font-bold text-white shadow-md shadow-navy/20 ring-8 ring-white sm:-ml-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-deep">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{step.text}</p>
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.14em] text-teal-deep uppercase">
                    You receive
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
            eyebrow="Principles"
            title="What you can expect from every engagement."
            text="These hold whether the work is a two-month security review or a multi-year managed service."
          />
          <Principles />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
