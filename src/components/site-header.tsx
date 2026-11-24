"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { getContent } from "@/content";
import { localePath, site, switchLocalePath, type Locale } from "@/content/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const nav = t.nav.map((item) => ({ ...item, href: localePath(locale, item.href) }));
  const contactHref = localePath(locale, "/contact");
  const switchHref = switchLocalePath(locale, pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const languageSwitch = (className: string) => (
    <Link
      href={switchHref}
      hrefLang={t.header.switchLang}
      lang={t.header.switchLang}
      aria-label={t.header.switchAria}
      className={className}
    >
      {t.header.switchLabel}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-surface/90 backdrop-blur-lg transition-shadow ${
        scrolled || open ? "border-line shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6">
        <Brand locale={locale} />
        <nav className="hidden items-center gap-1 md:flex" aria-label={t.header.primaryNav}>
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
                  active ? "text-navy" : "text-muted hover:text-navy-deep"
                }`}
              >
                {item.label}
                <span
                  className={`mx-auto mt-0.5 block h-0.5 rounded-full bg-teal transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex lg:gap-4">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-navy-deep hover:text-navy xl:flex"
          >
            <Icon name="phone" className="size-4 text-teal-deep" />
            <span dir="ltr">{site.phone}</span>
          </a>
          <ThemeToggle label={t.header.themeToggle} />
          {languageSwitch(
            "rounded-md border border-line px-3 py-2 text-sm font-semibold text-navy transition hover:border-navy/40",
          )}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.linkedin}
            title={t.common.linkedin}
            className="flex size-10 items-center justify-center rounded-lg border border-line text-navy transition hover:border-navy/40"
          >
            <Icon name="linkedin" className="size-5" />
          </a>
          <Link
            href={contactHref}
            className="rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-navy/20 transition hover:bg-ink"
          >
            {t.common.requestProposal}
          </Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle label={t.header.themeToggle} />
          {languageSwitch(
            "rounded-md px-2.5 py-2 text-sm font-semibold text-navy",
          )}
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg border border-line text-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-surface px-6 pt-3 pb-6 md:hidden"
          aria-label={t.header.primaryNav}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="flex items-center justify-between border-b border-line py-3.5 text-base font-medium text-navy-deep"
                >
                  {item.label}
                  <Icon name="arrowRight" className="size-4 text-muted" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={contactHref}
            className="mt-5 block rounded-lg bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {t.common.requestProposal}
          </Link>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 py-2 text-sm font-medium text-navy"
          >
            <Icon name="phone" className="size-4" />
            <span dir="ltr">{site.phone}</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-navy"
          >
            <Icon name="linkedin" className="size-4" />
            {t.common.linkedin}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
