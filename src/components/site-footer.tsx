import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { getContent } from "@/content";
import { localePath, site, type Locale } from "@/content/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const servicesHref = localePath(locale, "/services");
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Brand tone="dark" locale={locale} />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
            {t.footer.blurb} {t.site.tagline}.
          </p>
        </div>
        <FooterColumn title={t.footer.runTitle}>
          {t.services
            .filter((s) => s.group === "run")
            .map((s) => (
              <FooterLink key={s.id} href={`${servicesHref}#${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
        </FooterColumn>
        <FooterColumn title={t.footer.buildTitle}>
          {t.services
            .filter((s) => s.group === "build")
            .map((s) => (
              <FooterLink key={s.id} href={`${servicesHref}#${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
        </FooterColumn>
        <FooterColumn title={t.footer.companyTitle}>
          {t.footer.company.map((item) => (
            <FooterLink key={item.href} href={localePath(locale, item.href)}>
              {item.label}
            </FooterLink>
          ))}
          {site.phones.map((phone) => (
            <li key={phone.href}>
              <a
                href={phone.href}
                className="inline-flex items-center gap-2 whitespace-nowrap text-white/80 transition hover:text-teal"
              >
                <Icon name="phone" className="size-4 shrink-0 text-teal" />
                <span>
                  <span dir="ltr">{phone.number}</span>
                  <span className="ms-2 text-xs text-white/40">{t.countries[phone.id]}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2 break-all text-white/80 transition hover:text-teal"
            >
              <Icon name="mail" className="size-4 shrink-0 text-teal" />
              <span dir="ltr">{site.email}</span>
            </a>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.name}. {t.footer.rights}
          </p>
          <p className="tracking-[0.16em] uppercase">{t.site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/80 transition hover:text-teal">
        {children}
      </Link>
    </li>
  );
}
