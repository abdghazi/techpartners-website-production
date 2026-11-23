import { Icon, type IconKey } from "@/components/icons";
import { getContent } from "@/content";
import type { Locale } from "@/content/site";

const icons: IconKey[] = ["file", "target", "steps", "lifebuoy"];

export function Principles({ locale }: { locale: Locale }) {
  const { principles } = getContent(locale);
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {principles.map((item, index) => (
        <div key={item.title} className="bg-surface p-8">
          <span className="flex size-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Icon name={icons[index]} className="size-5.5" />
          </span>
          <h3 className="mt-5 font-display text-lg font-bold text-navy-deep">{item.title}</h3>
          <p className="mt-2 leading-7 text-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
