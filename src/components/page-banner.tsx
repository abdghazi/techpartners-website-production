import { Eyebrow } from "@/components/ui";

export function PageBanner({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_90%_0%,rgba(20,184,177,0.16),transparent),radial-gradient(40%_70%_at_0%_100%,rgba(11,61,134,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-24 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] font-bold tracking-tight text-navy-deep sm:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-lg leading-8 text-muted">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
