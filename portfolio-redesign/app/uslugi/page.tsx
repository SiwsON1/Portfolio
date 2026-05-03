import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Usługi",
  description:
    "Strony www, aplikacje Next.js i React, wdrożenia AI, pozycjonowanie SEO. Pięć specjalności, jeden warsztat.",
  alternates: { canonical: "/uslugi" },
};

export default function UslugiPage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Usługi · {services.length}</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-display text-ink">
            Pięć <em>specjalności</em>,
            <br />
            jeden warsztat.
          </h1>
          <p className="mt-8 prose-bound text-ink-mute text-lead">
            Robię to czego nauczyłem się w bólach przez ostatnie pięć lat.
            Zamiast rozpraszać się na wszystko, skupiam się na obszarach gdzie
            mogę dać konkretną przewagę.
          </p>
        </div>
      </header>

      <ul className="border-t border-line">
        {services.map((s, i) => (
          <li key={s.slug} className="border-b border-line group">
            <Link
              href={`/uslugi/${s.slug}`}
              className="block py-12 md:py-16"
              data-cursor="OTWÓRZ"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <span className="md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint pt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-7">
                  <h2 className="font-display italic text-h1 leading-[0.95] text-ink group-hover:text-peach transition-colors duration-500">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-3">
                  <p className="text-ink-mute">{s.lead.split(".")[0]}.</p>
                </div>
                <span className="md:col-span-1 text-right pt-3 font-mono text-ink-mute group-hover:text-peach group-hover:translate-x-1 transition-all inline-block">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
