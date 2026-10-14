import Link from "next/link";
import { plainText } from "@/lib/renderInlineLinks";

// Ramka w połowie wpisu: czytelnik z problemem z tematu wpisu trafia na usługę, która go rozwiązuje.
export function InlineServiceCta({ service }: { service: { slug: string; title: string; lead: string } }) {
  return (
    <aside className="border border-line bg-bg-elev px-6 py-7 md:px-8">
      <p className="eyebrow mb-3">Zrobię to za Ciebie</p>
      <p
        className="font-display italic text-ink"
        style={{ fontSize: "clamp(1.25rem, 1rem + 0.6vw, 1.6rem)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
      >
        {service.title}
      </p>
      <p className="mt-3 text-base text-ink-mute leading-relaxed line-clamp-3">{plainText(service.lead)}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/kontakt"
          className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 font-mono text-[11px] uppercase tracking-[0.2em] text-bg hover:bg-peach-deep transition-colors"
        >
          Zapytaj o wycenę <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
        <Link
          href={`/uslugi/${service.slug}`}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute hover:text-peach transition-colors"
        >
          Jak pracuję
        </Link>
      </div>
    </aside>
  );
}
