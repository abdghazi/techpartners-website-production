import { Icon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { ProposalForm } from "@/components/proposal-form";
import { getContent } from "@/content";
import { site, type Locale } from "@/content/site";

export function ContactView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const copy = t.contactPage;
  return (
    <main>
      <PageBanner eyebrow={copy.eyebrow} title={copy.title}>
        <p>{copy.intro}</p>
      </PageBanner>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <ProposalForm locale={locale} />
        <aside className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-ink p-8 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_100%_0%,rgba(20,184,177,0.3),transparent)]" />
            <p className="relative text-sm text-white/60">{copy.talk}</p>
            <ul className="relative mt-4 space-y-4">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                    {t.countries[phone.id]}
                  </p>
                  <a
                    href={phone.href}
                    className="mt-1 flex items-center gap-3 font-display text-xl font-bold whitespace-nowrap hover:text-teal"
                  >
                    <Icon name="phone" className="size-5 shrink-0 text-teal" />
                    <span dir="ltr">{phone.number}</span>
                  </a>
                  {phone.whatsapp ? (
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-8 mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-white"
                    >
                      <Icon name="chat" className="size-4" />
                      {t.common.whatsapp}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
            <a
              href={site.emailHref}
              className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-6 text-base font-semibold break-all text-white/90 hover:text-teal"
            >
              <Icon name="mail" className="size-5 shrink-0 text-teal" />
              <span dir="ltr">{site.email}</span>
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-8">
            <p className="font-display text-lg font-bold text-navy-deep">{copy.nextTitle}</p>
            <ol className="mt-6 space-y-6">
              {copy.next.map((item, index) => (
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
