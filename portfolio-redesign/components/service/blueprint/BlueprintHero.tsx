import Link from "next/link";
import type { Service } from "@/lib/services";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { Board } from "./Board";
import type { Scene } from "./types";

/**
 * Hero usługi z planszą „Blueprint”: po lewej nagłówek wjeżdżający słowami, lead i CTA; po prawej (na telefonie
 * poniżej) plansza ze scenką opisaną w scenes/<slug>.tsx. Każda usługa ma własną scenkę pokazującą, co robi.
 */
export function BlueprintHero({ s, idx, total, hasRealizacje, scene }: { s: Service; idx: number; total: number; hasRealizacje: boolean; scene: Scene }) {
  const words = s.h1.split(" ");
  return (
    <header className="hwC relative overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-56 md:pb-40">
      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <Link href="/uslugi" className="hover:text-peach transition-colors">← Wszystkie usługi</Link>
        <span>Usługa {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      <div className="relative mt-8 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow svc-in" style={{ "--i": 0 } as React.CSSProperties}>Usługa</p>
          <h1 className="display mt-4 text-ink" style={{ fontSize: "clamp(1.9rem, 0.9rem + 4.2vw, 4.8rem)", lineHeight: 1.04, letterSpacing: "-0.025em" }}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                <span className="svc-word inline-block" style={{ "--i": i } as React.CSSProperties}>{w}</span>
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="svc-in mt-6 max-w-2xl text-ink-mute md:mt-7" style={{ "--i": 7, fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.3rem)", lineHeight: 1.5 } as React.CSSProperties}>
            {renderInlineLinks(s.lead)}
          </p>
          <div className="svc-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--i": 9 } as React.CSSProperties}>
            <Link href="/kontakt" className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-[background-color,transform] duration-200 hover:bg-peach-deep active:scale-[0.97]">
              <span>Zapytaj o wycenę</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href={hasRealizacje ? "#realizacje" : "/projekty"} className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute underline decoration-line underline-offset-8 transition-colors hover:text-peach">Zobacz realizacje</a>
          </div>
        </div>

        <div className="hwC-stage md:col-span-6 pt-4 pl-3 md:pl-6">
          <Board id={s.slug.replace(/[^a-z0-9]/g, "")} scene={scene} />
        </div>
      </div>
    </header>
  );
}
