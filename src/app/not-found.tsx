import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-7xl flex-1 flex-col items-start justify-center px-6 py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-deep sm:text-5xl">
        That page is not here.
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-muted">
        The link may be outdated, or the page may have moved.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </main>
  );
}
