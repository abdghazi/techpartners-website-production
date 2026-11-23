import { ButtonLink, Eyebrow } from "@/components/ui";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/site";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getContent(locale).notFound;
  return (
    <main className="mx-auto flex max-w-7xl flex-1 flex-col items-start justify-center px-6 py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-deep sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-muted">{t.text}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={localePath(locale, "/")} arrow>
          {t.home}
        </ButtonLink>
        <ButtonLink href={localePath(locale, "/contact")} variant="outline">
          {t.contact}
        </ButtonLink>
      </div>
    </main>
  );
}
