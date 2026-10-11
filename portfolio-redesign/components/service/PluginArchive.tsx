"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PLUGINS, PLUGIN_EXHIBITS, PLUGIN_TOTALS, type PluginCategory } from "@/lib/plugins";

const CATEGORIES: PluginCategory[] = ["GEO i SEO", "Automatyzacje", "Integracje i API", "WooCommerce", "Treści i UX", "Bezpieczeństwo"];

const display = {
  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
  letterSpacing: "-0.03em",
} as const;

/** Archiwum wtyczek na stronie usługi: zrzuty działających wtyczek z żywych stron i filtrowany spis. */
export function PluginArchive() {
  const [shown, setShown] = useState(0);
  const [cat, setCat] = useState<PluginCategory | null>(null);
  const list = cat ? PLUGINS.filter((p) => p.category === cat) : PLUGINS;
  const ex = PLUGIN_EXHIBITS[shown];

  return (
    <section id="wtyczki" className="scroll-mt-24 border-t border-line px-6 py-16 md:px-10 md:py-32">
      {/* Nagłówek */}
      <div className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-12">
        <aside className="md:col-span-3">
          <p className="eyebrow mb-2">Archiwum · wtyczki w produkcji</p>
          <p className="hidden font-mono text-sm text-ink-faint lg:block">Zrzuty z żywych stron, nie makiety.</p>
        </aside>
        <div className="md:col-span-9">
          <h2 className="display text-h1 text-ink">
            {PLUGIN_TOTALS.plugins.charAt(0).toUpperCase() + PLUGIN_TOTALS.plugins.slice(1)} wtyczek, które <em>już pracują</em> w {PLUGIN_TOTALS.sites} serwisach.
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-mute">
            SEO i widoczność w AI, automatyzacje sprzedaży, integracje przez API, funkcje WooCommerce i zabezpieczenia. Każda napisana pod konkretny problem konkretnego serwisu.
          </p>
        </div>
      </div>

      {/* Wystawa: lista po lewej, zrzut po prawej (desktop); przewijany pasek (telefon) */}
      <div className="hidden gap-12 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-3">
        <ol className="lg:sticky lg:top-28" aria-label="Wtyczki na zrzutach">
          {PLUGIN_EXHIBITS.map((e, i) => {
            const on = i === shown;
            return (
              <li key={e.image} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setShown(i)}
                  onMouseEnter={() => setShown(i)}
                  aria-pressed={on}
                  className="group flex w-full items-baseline gap-4 py-5 text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-peach"
                  data-cursor="POKAŻ"
                >
                  <span className={`font-mono text-[11px] tracking-[0.22em] transition-colors duration-500 ${on ? "text-peach" : "text-ink-faint"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={`block font-display italic transition-[color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${on ? "translate-x-1 text-ink" : "text-ink-mute group-hover:text-ink"}`}
                      style={{ ...display, fontSize: "clamp(1.2rem, 0.9rem + 0.7vw, 1.6rem)", lineHeight: 1.1 }}
                    >
                      {e.name}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">{e.site}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        </div>

        <figure className="lg:col-span-9">
          <BrowserFrame url={ex.url}>
            {PLUGIN_EXHIBITS.map((e, i) => (
              <Image
                key={e.image}
                src={e.image}
                alt={`${e.name}, ${e.site}: zrzut z działającej strony`}
                fill
                sizes="(min-width: 1024px) 66vw, 60vw"
                className={`object-cover object-top transition-opacity duration-700 ease-out motion-reduce:transition-none ${i === shown ? "opacity-100" : "opacity-0"}`}
                priority={i === 0}
              />
            ))}
          </BrowserFrame>
          <figcaption className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-9">
            <p className="text-ink-mute leading-relaxed lg:col-span-6">{ex.body}</p>
            <Link
              href={`/projekty/${ex.project}`}
              className="group inline-flex items-baseline gap-2 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors lg:col-span-3 lg:justify-self-end"
              data-cursor="OTWÓRZ"
            >
              <span>Realizacja {ex.site}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </figcaption>
        </figure>
      </div>

      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 scroll-px-6 [scrollbar-width:none] md:-mx-10 md:scroll-px-10 md:px-10 lg:hidden" aria-label="Wtyczki na zrzutach">
        {PLUGIN_EXHIBITS.map((e) => (
          <figure key={e.image} className="w-[85%] shrink-0 snap-start md:w-[62%]">
            <BrowserFrame url={e.url} mobile>
              <Image src={e.image} alt={`${e.name}, ${e.site}: zrzut z działającej strony`} fill sizes="170vw" className="object-cover" style={{ objectPosition: e.focus, transform: "scale(1.7)", transformOrigin: e.focus }} />
            </BrowserFrame>
            <figcaption className="mt-4">
              <p className="font-display italic text-ink" style={{ ...display, fontSize: "1.3rem", lineHeight: 1.1 }}>{e.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">{e.site}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-mute">{e.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Spis */}
      <div className="mt-20 md:mt-32">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <h3 className="font-display italic text-ink" style={{ ...display, fontSize: "clamp(1.75rem, 1rem + 2vw, 2.75rem)", lineHeight: 1 }}>
            Spis wtyczek
          </h3>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtruj wtyczki">
            <Chip on={cat === null} onClick={() => setCat(null)} label="Wszystkie" count={PLUGINS.length} />
            {CATEGORIES.map((c) => (
              <Chip key={c} on={cat === c} onClick={() => setCat(cat === c ? null : c)} label={c} count={PLUGINS.filter((p) => p.category === c).length} />
            ))}
          </div>
        </div>

        <ul className="border-b border-line">
          {list.map((p) => (
            <li
              key={p.name}
              className="group grid grid-cols-1 gap-2 border-t border-line py-5 transition-colors duration-500 hover:bg-bg-elev md:grid-cols-12 md:gap-8 md:px-4 md:py-6"
            >
              <p className="flex gap-3 font-mono text-[10px] uppercase tracking-[0.22em] md:col-span-2 md:flex-col md:gap-1 md:pt-2">
                <span className="text-ink-faint">{String(PLUGINS.indexOf(p) + 1).padStart(2, "0")}</span>
                <span className="text-peach">{p.category}</span>
              </p>
              <p
                className="font-display italic text-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 motion-reduce:transition-none md:col-span-4"
                style={{ ...display, fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.75rem)", lineHeight: 1.1 }}
              >
                {p.name}
              </p>
              <div className="md:col-span-6">
                <p className="leading-relaxed text-ink-mute">{p.body}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                  {p.project ? (
                    <Link href={`/projekty/${p.project}`} className="underline decoration-line underline-offset-4 hover:text-peach" data-cursor="OTWÓRZ">
                      {p.site}
                    </Link>
                  ) : (
                    p.site
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          Serwisy klientów, których nie ma w realizacjach, opisuję bez nazwy.
        </p>
      </div>
    </section>
  );
}

function BrowserFrame({ url, mobile, children }: { url: string; mobile?: boolean; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[6px] border border-line bg-bg-elev shadow-[0_40px_80px_-40px_oklch(5%_0.02_280/0.9)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-2 w-2 rounded-full bg-[oklch(40%_0.02_280)]" />
          ))}
        </span>
        <span className="truncate rounded-[3px] bg-bg px-3 py-1 font-mono text-[11px] text-ink-mute">{url}</span>
      </div>
      <div className={`relative w-full ${mobile ? "aspect-[4/3.4]" : "aspect-[1552/751]"}`}>{children}</div>
    </div>
  );
}

function Chip({ on, onClick, label, count }: { on: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`inline-flex min-h-[40px] items-center gap-2 rounded-full border px-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-peach ${
        on ? "border-peach bg-peach text-bg" : "border-line text-ink-mute hover:border-border-strong hover:text-ink"
      }`}
    >
      {label}
      <span className={on ? "text-bg/70" : "text-ink-faint"}>{count}</span>
    </button>
  );
}
