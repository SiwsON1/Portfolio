"use client";

import { useEffect, useRef } from "react";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import type { SeoBlock as SeoBlockData } from "@/lib/seoBlocks";

/**
 * Rozbudowany blok tekstowy na dole strony usługi.
 *
 * KLUCZOWE: cała treść jest renderowana po stronie serwera i siedzi w HTML zawsze.
 * <details> chowa ją wyłącznie wizualnie, więc roboty widzą pełny tekst nawet przy
 * zwiniętym bloku. Nie zamieniać na render warunkowy.
 *
 * Układ: spis treści przyklejony po lewej, treść po prawej. Na mobile spis wraca
 * nad treść i nie jest przyklejony, bo zjadłby ekran.
 *
 * JS robi tu jedną rzecz: otwiera blok, gdy ktoś kliknie pozycję ze spisu treści
 * albo wejdzie z linkiem z kotwicą. Bez JS treść dalej rozwija sam <summary>.
 */
export function SeoBlock({ data }: { data: SeoBlockData }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;

    const ids = new Set(data.sections.map((s) => s.id));

    const openForHash = () => {
      const id = window.location.hash.slice(1);
      if (!id || !ids.has(id)) return;
      el.open = true;
      // Kotwica ustawia się zanim blok się rozwinie, więc dosuwamy po otwarciu.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    };

    openForHash();
    window.addEventListener("hashchange", openForHash);
    return () => window.removeEventListener("hashchange", openForHash);
  }, [data.sections]);

  return (
    <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
        <aside className="md:col-span-3">
          <p className="eyebrow mb-2">05 — Poradnik</p>
          <p className="text-ink-faint text-sm font-mono">Dłuższa wersja, bez skrótów.</p>
        </aside>
        <div className="md:col-span-9">
          <h2
            className="display text-ink"
            style={{
              fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {data.heading}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Spis treści: przyklejony na desktopie, zwykły blok na mobile. */}
        <nav
          aria-label="Spis treści poradnika"
          className="md:col-span-4 lg:col-span-3 md:sticky md:top-28 md:self-start md:max-h-[calc(100vh-9rem)] md:overflow-y-auto border-t border-line pt-6 md:pr-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-5">
            W tym poradniku
          </p>
          <ol className="space-y-2.5">
            {data.sections.map((s, i) => (
              <li key={s.id} className="flex gap-3 items-baseline">
                <span className="font-mono text-[10px] text-ink-faint shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${s.id}`}
                  className="text-ink-mute text-[0.95rem] leading-snug hover:text-peach underline underline-offset-4 decoration-line hover:decoration-peach transition-colors duration-300"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="md:col-span-8 lg:col-span-9">
          <div className="space-y-6 text-ink text-lg leading-relaxed">
            {data.intro.map((p, i) => (
              <p key={i}>{renderInlineLinks(p)}</p>
            ))}
          </div>

          <details ref={detailsRef} className="group mt-10 border-t border-line">
            <summary
              className="cursor-pointer list-none flex items-baseline justify-between gap-6 py-7 hover:text-peach transition-colors duration-300"
              data-cursor="ROZWIŃ"
            >
              <span
                className="font-display italic text-ink group-open:text-peach transition-colors duration-500"
                style={{
                  fontSize: "clamp(1.15rem, 1rem + 0.6vw, 1.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="group-open:hidden">Rozwiń pełny poradnik</span>
                <span className="hidden group-open:inline">Zwiń poradnik</span>
              </span>
              <span className="font-mono text-2xl text-ink-faint group-open:text-peach group-open:rotate-45 transition-all duration-500 shrink-0">
                +
              </span>
            </summary>

            <div className="pb-4">
              {data.sections.map((s) => (
                <article key={s.id} className="border-t border-line py-10 first:border-t-0">
                  <h3
                    id={s.id}
                    className="scroll-mt-28 font-display italic text-ink mb-5"
                    style={{
                      fontSize: "clamp(1.25rem, 1rem + 0.9vw, 1.85rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.heading}
                  </h3>
                  <div className="space-y-5 text-ink-mute leading-relaxed">
                    {s.body.map((p, i) => (
                      <p key={i}>{renderInlineLinks(p)}</p>
                    ))}
                    {s.list && (
                      <ul className="space-y-3 border-l border-line pl-6 my-7">
                        {s.list.map((item, i) => (
                          <li key={i} className="relative">
                            <span className="absolute -left-6 top-2.5 w-2 h-px bg-ink-faint" aria-hidden />
                            {renderInlineLinks(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.outro?.map((p, i) => (
                      <p key={`o-${i}`}>{renderInlineLinks(p)}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
