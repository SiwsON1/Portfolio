import type { Metadata } from "next";
import Link from "next/link";
import { industries, INDUSTRY_CASES } from "@/lib/industries";
import { projects } from "@/lib/projects";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export const metadata: Metadata = {
  title: { absolute: "Strony internetowe dla branż — kancelarie, sklepy, hotele" },
  description:
    "Strony internetowe dla kancelarii, gabinetów, marek odzieżowych, producentów mebli, hoteli, firm budowlanych i twórców. Widełki cen i terminy przy każdej.",
  alternates: { canonical: "/branze" },
};

export default function StronyDlaPage() {
  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Branże", path: "/branze" },
  ]);

  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Branże · katalog</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-display text-ink">
            Każda branża pyta
            <br />
            <em>o co innego</em>.
          </h1>
          <p className="mt-8 prose-bound text-ink-mute text-lead">
            Kancelaria pyta o tajemnicę zawodową, gabinet o rejestrację pacjentów, producent mebli
            o katalog dla hurtowni, a streamer o to, czy strona pokaże, że jest na żywo. Poniżej
            osiem branż z widełkami cen, terminami i realizacjami, jeśli takie mam. Jeśli Twojej tu
            nie ma, napisz: zakres i tak ustalam indywidualnie.
          </p>
        </div>
      </header>

      <ol className="border-t border-line">
        {industries.map((ind, i) => {
          const cases = (INDUSTRY_CASES[ind.slug] ?? [])
            .map((c) => projects.find((p) => p.slug === c.projectSlug))
            .filter(Boolean);
          return (
            <li key={ind.slug} className="border-b border-line">
              <Link
                href={`/${ind.slug}`}
                className="group relative grid grid-cols-12 gap-4 md:gap-8 items-baseline py-9 md:py-12 overflow-hidden"
                data-cursor="OTWÓRZ"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(232,178,134,0.05) 0%, rgba(232,178,134,0) 70%)",
                  }}
                />
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-peach">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="col-span-10 md:col-span-4 font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.5rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  {ind.title}
                </h2>
                <p className="col-span-12 lg:col-span-4 text-ink-mute leading-relaxed">{ind.h1}</p>
                <div className="col-span-12 md:col-span-7 lg:col-span-3 md:text-right">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink whitespace-nowrap">
                    {ind.pricing.range}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint whitespace-nowrap">
                    {ind.pricing.time}
                    {cases.length > 0
                      ? ` · ${cases.length} ${cases.length === 1 ? "realizacja" : "realizacje"}`
                      : " · nowa nisza"}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

      <section className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Szukasz po technologii?</p>
        </div>
        <div className="md:col-span-9 prose-bound text-ink-mute text-lg leading-relaxed">
          <p>
            Te strony opisują pracę od strony Twojej branży. Jeśli wolisz zacząć od narzędzia, czyli
            WordPressa, WooCommerce, Next.js albo wdrożeń AI, zajrzyj do{" "}
            <Link
              href="/uslugi"
              className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
            >
              katalogu usług
            </Link>
            . Ten sam warsztat, inny punkt wyjścia.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </article>
  );
}
