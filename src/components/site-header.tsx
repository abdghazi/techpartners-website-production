"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { nav, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-white/90 backdrop-blur-lg transition-shadow ${
        scrolled || open ? "border-line shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
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
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-navy-deep hover:text-navy lg:flex"
          >
            <Icon name="phone" className="size-4 text-teal-deep" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-navy/20 transition hover:bg-navy-deep"
          >
            Request a proposal
          </Link>
        </div>
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-line text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white px-6 pt-3 pb-6 md:hidden"
          aria-label="Primary"
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
            href="/contact"
            className="mt-5 block rounded-lg bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Request a proposal
          </Link>
          <a
            href={site.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 py-2 text-sm font-medium text-navy"
          >
            <Icon name="phone" className="size-4" />
            {site.phone}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
