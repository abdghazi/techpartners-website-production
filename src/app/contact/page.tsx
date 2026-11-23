import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { ProposalForm } from "@/components/proposal-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a proposal for managed services, outsourcing, cybersecurity, ERP, software, or AI.",
};

const next = [
  {
    title: "We review your request",
    text: "We read what you sent and come back with any questions.",
  },
  {
    title: "Discovery conversation",
    text: "A short call to understand the problem and who it affects.",
  },
  {
    title: "You receive a written plan",
    text: "Scope, sequence, team, and what we would leave for later.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageBanner eyebrow="Contact" title="Request a proposal">
        <p>
          Tell us what you need run, staffed, secured, or built. Your proposal
          starts from that: the problem, the sequence, and what we would leave
          for later.
        </p>
      </PageBanner>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <ProposalForm />
        <aside className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-navy-deep p-8 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_100%_0%,rgba(20,184,177,0.3),transparent)]" />
            <p className="relative text-sm text-white/60">Prefer to talk?</p>
            <ul className="relative mt-4 space-y-4">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                    {phone.country}
                  </p>
                  <a
                    href={phone.href}
                    className="mt-1 flex items-center gap-3 font-display text-xl font-bold whitespace-nowrap hover:text-teal"
                  >
                    <Icon name="phone" className="size-5 shrink-0 text-teal" />
                    {phone.number}
                  </a>
                  {phone.whatsapp ? (
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 ml-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-white"
                    >
                      <Icon name="chat" className="size-4" />
                      Message on WhatsApp
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
            <a
              href={site.emailHref}
              className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-6 break-all text-base font-semibold text-white/90 hover:text-teal"
            >
              <Icon name="mail" className="size-5 shrink-0 text-teal" />
              {site.email}
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-white p-8">
            <p className="font-display text-lg font-bold text-navy-deep">What happens next</p>
            <ol className="mt-6 space-y-6">
              {next.map((item, index) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-sm font-bold text-navy">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-navy-deep">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </main>
  );
}
