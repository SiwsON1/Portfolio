import Link from "next/link";
import type { Service } from "@/lib/services";
import { OrbitalMark } from "@/components/service/OrbitalMark";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

/**
 * Wariant C „Blueprint”: hero pokazuje, co usługa robi. Obok tekstu rysuje się techniczny szkic strony
 * (cienkie brzoskwiniowe linie prowadzące, bloki wskakują w układ), potem kursor wpisuje nowy nagłówek
 * w makiecie i pojawia się „Zapisano”. Czyli edycja bez kodu, opowiedziana ruchem. Sam CSS i SVG,
 * kula zostaje jako pieczęć w rogu. Bez JavaScriptu na kliencie.
 */
export function HeroWpC({ s, idx, total }: { s: Service; idx: number; total: number }) {
  const words = s.h1.split(" ");
  return (
    <header className="hwC relative overflow-hidden px-6 pt-32 pb-20 md:px-10 md:pt-44 md:pb-36">
      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <Link href="/uslugi" className="hover:text-peach transition-colors">← Wszystkie usługi</Link>
        <span>Usługa {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      <div className="relative mt-10 grid grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
        {/* Szkic strony: na telefonie nad tekstem, od md po prawej */}
        <div className="order-first md:order-last md:col-span-6 md:col-start-7">
          <div className="hwC-board relative mx-auto w-full max-w-[520px]">
            <svg viewBox="0 0 320 220" className="w-full h-auto" aria-hidden>
              {/* linie prowadzące */}
              <g className="hwC-guides" stroke="rgba(232,178,134,0.35)" strokeWidth="0.6" fill="none">
                <line x1="16" y1="0" x2="16" y2="220" pathLength={1} className="hwC-draw" style={{ animationDelay: "0ms" }} />
                <line x1="304" y1="0" x2="304" y2="220" pathLength={1} className="hwC-draw" style={{ animationDelay: "120ms" }} />
                <line x1="0" y1="36" x2="320" y2="36" pathLength={1} className="hwC-draw" style={{ animationDelay: "240ms" }} />
                <line x1="0" y1="128" x2="320" y2="128" pathLength={1} className="hwC-draw" style={{ animationDelay: "360ms" }} />
              </g>
              {/* obrys strony */}
              <rect x="16" y="12" width="288" height="196" rx="3" pathLength={1} className="hwC-draw hwC-frame" style={{ animationDelay: "300ms" }} />
              {/* nagłówek makiety */}
              <rect x="16" y="12" width="288" height="24" className="hwC-fill" style={{ animationDelay: "900ms" }} />
              <circle cx="30" cy="24" r="4" className="hwC-fill-peach" style={{ animationDelay: "1000ms" }} />
              <g className="hwC-fill" style={{ animationDelay: "1050ms" }}>
                <rect x="200" y="21" width="22" height="5" rx="1" /><rect x="228" y="21" width="22" height="5" rx="1" /><rect x="256" y="21" width="34" height="5" rx="1" className="hwC-peach" />
              </g>
              {/* hero makiety: nagłówek pisany przez kursor */}
              <g className="hwC-fill" style={{ animationDelay: "1200ms" }}>
                <rect x="30" y="52" width="150" height="12" rx="1" className="hwC-typed-bg" />
                <rect x="30" y="70" width="110" height="12" rx="1" className="hwC-typed-bg" />
                <rect x="30" y="98" width="70" height="14" rx="1" className="hwC-peach" />
              </g>
              <rect x="190" y="48" width="100" height="70" rx="2" className="hwC-fill hwC-image" style={{ animationDelay: "1400ms" }} />
              {/* trzy bloki oferty wskakują po kolei */}
              {[0, 1, 2].map((i) => (
                <g key={i} className="hwC-block" style={{ animationDelay: `${1900 + i * 160}ms` }}>
                  <rect x={30 + i * 92} y="142" width="80" height="54" rx="2" className="hwC-fill-solid" />
                  <rect x={38 + i * 92} y="152" width="40" height="5" rx="1" className="hwC-line" />
                  <rect x={38 + i * 92} y="162" width="60" height="4" rx="1" className="hwC-line-faint" />
                  <rect x={38 + i * 92} y="170" width="52" height="4" rx="1" className="hwC-line-faint" />
                </g>
              ))}
            </svg>
            {/* Tekst wpisywany kursorem, nałożony na makietę (mono, żeby maszynopis miał równe kroki) */}
            <div className="hwC-type absolute font-mono text-[10px] md:text-[12px] uppercase tracking-[0.18em] text-ink" style={{ left: "10.6%", top: "24%" }}>
              <span className="hwC-typed">Nowa oferta na wiosnę</span><span className="hwC-caret" aria-hidden />
            </div>
            <div className="hwC-saved absolute right-[6%] top-[55.5%] flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-peach">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-peach" />Zapisano · bez kodu
            </div>
            {/* pieczęć: kula w rogu */}
            <OrbitalMark slug={s.slug} className="hwC-seal absolute -bottom-8 -right-3 w-[76px] md:-bottom-12 md:-right-6 md:w-[110px]" />
          </div>
        </div>

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
          <p className="svc-in mt-7 max-w-2xl text-ink-mute" style={{ "--i": 7, fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.3rem)", lineHeight: 1.5 } as React.CSSProperties}>
            {renderInlineLinks(s.lead)}
          </p>
          <div className="svc-in mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--i": 9 } as React.CSSProperties}>
            <Link href="/kontakt" data-haptic className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-[background-color,transform] duration-200 hover:bg-peach-deep active:scale-[0.97]">
              <span>Zapytaj o wycenę</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href="#realizacje" className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute underline decoration-line underline-offset-8 transition-colors hover:text-peach">Zobacz realizacje</a>
          </div>
        </div>
      </div>
    </header>
  );
}
