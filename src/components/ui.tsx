import Link from "next/link";
import { Icon } from "@/components/icons";

const buttonStyles = {
  primary:
    "bg-navy text-white shadow-sm shadow-navy/20 hover:bg-navy-deep",
  accent:
    "bg-teal text-navy-deep shadow-sm shadow-teal/30 hover:bg-white",
  outline:
    "border border-line bg-white text-navy hover:border-navy/40 hover:bg-background",
  outlineDark:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <Icon name="arrowRight" className="size-4 transition group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase ${
        tone === "dark" ? "text-teal" : "text-teal-deep"
      }`}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  tone = "light",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function CheckItem({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <li className="flex gap-3">
      <span
        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
          tone === "dark" ? "bg-teal/20 text-teal" : "bg-teal/15 text-teal-deep"
        }`}
      >
        <Icon name="check" className="size-3.5" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}
