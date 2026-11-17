import Link from "next/link";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { services, site } from "@/content/site";

const company = [
  { href: "/approach", label: "Our approach" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Request a proposal" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Brand tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
            IT consultancy for managed services, outsourcing, cybersecurity,
            ERP, and AI. {site.tagline}.
          </p>
        </div>
        <FooterColumn title="Run and protect">
          {services
            .filter((s) => s.group === "run")
            .map((s) => (
              <FooterLink key={s.id} href={`/services#${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
        </FooterColumn>
        <FooterColumn title="Build">
          {services
            .filter((s) => s.group === "build")
            .map((s) => (
              <FooterLink key={s.id} href={`/services#${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
        </FooterColumn>
        <FooterColumn title="Company">
          {company.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-teal"
            >
              <Icon name="phone" className="size-4 text-teal" />
              {site.phone}
            </a>
          </li>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.year} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.16em] uppercase">{site.tagline}</p>
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
