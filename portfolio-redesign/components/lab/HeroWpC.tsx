import Link from "next/link";
import type { Service } from "@/lib/services";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { TiltBoard } from "./TiltBoard";

/**
 * Wariant C „Blueprint” v2: hero pokazuje, co usługa robi. Obok tekstu rysuje się techniczny szkic strony,
 * po czym kursor buduje ją blok po bloku: klika w miejsce nagłówka i wpisuje tekst, wstawia obraz,
 * wrzuca trzy bloki oferty, na końcu klika „Zapisz” i wyskakuje potwierdzenie. Czyli edycja bez kodu,
 * opowiedziana ruchem. Cała choreografia to CSS na trzech warstwach SVG rozsuniętych w głąb (TiltBoard).
 *
 * Oś czasu (ms): 0 linie i rama · 900 pasek nagłówka · 1600 klik + pisanie · 3400 klik obraz ·
 * 4200 klik bloki (3 × 120) · 4700 wymiarowanie · 5200 klik „Zapisz” · 5300 błysk + „Zapisano”.
 */
const T = {
  frame: 12, left: 16, right: 304, bottom: 208,
  headRow: 36, hero: 52, img: { x: 190, y: 48, w: 100, h: 70 },
  blocksY: 142, blockW: 80, blockH: 54, blockXs: [30, 122, 214],
};

function Board() {
  return (
    <TiltBoard className="hwC-board relative mx-auto w-[94%] md:w-full max-w-[540px]">
      <div className="hwC-3d relative w-full" style={{ aspectRatio: "320 / 236" }}>
        {/* Warstwa tylna: papier milimetrowy, linie prowadzące, rama, wymiarowanie */}
        <svg viewBox="0 0 320 236" className="hwC-back absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <pattern id="hwC-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="0.45" fill="rgba(168,218,255,0.28)" />
            </pattern>
            <linearGradient id="hwC-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="1" /><stop offset="1" stopColor="#fff" stopOpacity="0.15" />
            </linearGradient>
            <mask id="hwC-gridmask"><rect x="0" y="0" width="320" height="236" fill="url(#hwC-fade)" /></mask>
          </defs>
          <rect x={T.left} y={T.frame} width={T.right - T.left} height={T.bottom - T.frame} className="hwC-paper" style={{ animationDelay: "450ms" }} />
          <rect x={T.left} y={T.frame} width={T.right - T.left} height={T.bottom - T.frame} mask="url(#hwC-gridmask)" className="hwC-gridrect" style={{ animationDelay: "550ms" }} />
          <g stroke="rgba(232,178,134,0.32)" strokeWidth="0.6" fill="none">
            <line x1={T.left} y1="0" x2={T.left} y2="236" pathLength={1} className="hwC-draw" style={{ animationDelay: "0ms" }} />
            <line x1={T.right} y1="0" x2={T.right} y2="236" pathLength={1} className="hwC-draw" style={{ animationDelay: "120ms" }} />
            <line x1="0" y1={T.headRow} x2="320" y2={T.headRow} pathLength={1} className="hwC-draw" style={{ animationDelay: "240ms" }} />
            <line x1="0" y1="128" x2="320" y2="128" pathLength={1} className="hwC-draw" style={{ animationDelay: "360ms" }} />
          </g>
          {/* krzyżyki w narożnikach jak na rysunku technicznym */}
          {[[T.left, T.frame], [T.right, T.frame], [T.left, T.bottom], [T.right, T.bottom]].map(([x, y], i) => (
            <g key={i} stroke="rgba(232,178,134,0.7)" strokeWidth="0.7" className="hwC-fill" style={{ animationDelay: `${700 + i * 60}ms` }}>
              <line x1={x - 4} y1={y} x2={x + 4} y2={y} /><line x1={x} y1={y - 4} x2={x} y2={y + 4} />
            </g>
          ))}
          <rect x={T.left} y={T.frame} width={T.right - T.left} height={T.bottom - T.frame} rx="3" pathLength={1} className="hwC-draw hwC-frame" style={{ animationDelay: "300ms" }} />
          {/* wymiarowanie pod blokami: rysuje się, gdy układ jest gotowy */}
          <g className="hwC-dim" style={{ animationDelay: "4700ms" }} stroke="rgba(232,178,134,0.6)" strokeWidth="0.6" fill="none">
            <line x1={T.blockXs[0]} y1="222" x2={T.blockXs[2] + T.blockW} y2="222" pathLength={1} className="hwC-draw" style={{ animationDelay: "4700ms" }} />
            <line x1={T.blockXs[0]} y1="218" x2={T.blockXs[0]} y2="226" /><line x1={T.blockXs[2] + T.blockW} y1="218" x2={T.blockXs[2] + T.blockW} y2="226" />
            <line x1={T.blockXs[1]} y1="219" x2={T.blockXs[1]} y2="225" /><line x1={T.blockXs[2]} y1="219" x2={T.blockXs[2]} y2="225" />
          </g>
          <text x="162" y="232.5" textAnchor="middle" fontSize="6" fontFamily="var(--font-mono), monospace" letterSpacing="0.6" className="hwC-label" style={{ animationDelay: "5000ms" }}>
            12 KOLUMN · 3 BLOKI · 1440 PX
          </text>
        </svg>

        {/* Warstwa środkowa: strona, która powstaje */}
        <svg viewBox="0 0 320 236" className="hwC-front absolute inset-0 h-full w-full" aria-hidden>
          <rect x={T.left} y={T.frame} width={T.right - T.left} height={T.headRow - T.frame} className="hwC-fill" style={{ animationDelay: "900ms" }} />
          <circle cx="30" cy="24" r="4" className="hwC-fill-peach" style={{ animationDelay: "1000ms" }} />
          <g className="hwC-fill" style={{ animationDelay: "1050ms" }}>
            <rect x="196" y="21.5" width="20" height="5" rx="1" /><rect x="222" y="21.5" width="20" height="5" rx="1" />
          </g>
          {/* przycisk Zapisz: kursor go wciśnie na końcu */}
          <g className="hwC-save" style={{ animationDelay: "1100ms" }}>
            <rect x="256" y="18" width="38" height="12" rx="2" className="hwC-save-bg" />
            <path d="M262 24 h6 M279 21.5 l2.4 2.6 l4.4 -5" stroke="oklch(14% 0.02 280)" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* pole nagłówka: przerywana ramka wstawiania miga przy kliknięciu, potem tło pod pisany tekst */}
          <rect x="28" y="50" width="154" height="16" rx="1.5" className="hwC-insert" style={{ animationDelay: "1600ms" }} />
          <rect x="30" y={T.hero} width="150" height="12" rx="1" className="hwC-typed-bg hwC-pop" style={{ animationDelay: "1650ms" }} />
          <rect x="30" y="70" width="110" height="12" rx="1" className="hwC-typed-bg hwC-pop" style={{ animationDelay: "2500ms" }} />
          <rect x="30" y="98" width="70" height="14" rx="1" className="hwC-peach hwC-pop hwC-cta" style={{ animationDelay: "2900ms" }} />

          {/* obraz: ramka wstawiania, potem blok z połyskiem */}
          <rect x={T.img.x - 2} y={T.img.y - 2} width={T.img.w + 4} height={T.img.h + 4} rx="2.5" className="hwC-insert" style={{ animationDelay: "3400ms" }} />
          <g className="hwC-pop" style={{ animationDelay: "3450ms" }}>
            <rect x={T.img.x} y={T.img.y} width={T.img.w} height={T.img.h} rx="2" className="hwC-image" />
            <path d={`M${T.img.x + 10} ${T.img.y + 52} l22 -22 l16 16 l10 -10 l32 32`} stroke="rgba(168,218,255,0.45)" strokeWidth="1" fill="none" />
            <circle cx={T.img.x + 22} cy={T.img.y + 17} r="5" fill="rgba(232,178,134,0.6)" />
            <rect x={T.img.x} y={T.img.y} width={T.img.w} height={T.img.h} rx="2" className="hwC-shine" style={{ animationDelay: "3600ms" }} />
          </g>

          {/* trzy bloki oferty: ramka wstawiania na cały rząd, potem bloki wskakują kolejno */}
          <rect x={T.blockXs[0] - 2} y={T.blocksY - 2} width={T.blockXs[2] + T.blockW - T.blockXs[0] + 4} height={T.blockH + 4} rx="2.5" className="hwC-insert" style={{ animationDelay: "4200ms" }} />
          {T.blockXs.map((x, i) => (
            <g key={i} className="hwC-block" style={{ animationDelay: `${4250 + i * 120}ms`, transformOrigin: `${x + T.blockW / 2}px ${T.blocksY + T.blockH / 2}px` }}>
              <rect x={x} y={T.blocksY} width={T.blockW} height={T.blockH} rx="2" className="hwC-fill-solid" />
              <circle cx={x + 12} cy={T.blocksY + 13} r="4" fill="rgba(232,178,134,0.55)" />
              <rect x={x + 8} y={T.blocksY + 24} width="42" height="5" rx="1" className="hwC-line" />
              <rect x={x + 8} y={T.blocksY + 34} width="60" height="4" rx="1" className="hwC-line-faint" />
              <rect x={x + 8} y={T.blocksY + 42} width="50" height="4" rx="1" className="hwC-line-faint" />
            </g>
          ))}

          {/* błysk zapisu: przechodzi po stronie jak migawka */}
          <rect x={T.left} y={T.frame} width={T.right - T.left} height={T.bottom - T.frame} rx="3" className="hwC-flash" style={{ animationDelay: "5300ms" }} />
        </svg>

        {/* Warstwa górna HTML: tekst pisany kursorem i potwierdzenie zapisu */}
        <div className="hwC-over absolute inset-0 pointer-events-none">
          <div className="hwC-type absolute font-mono uppercase tracking-[0.16em] text-ink" style={{ left: "10.2%", top: "22.6%" }}>
            <span className="hwC-typed">Nowa oferta na wiosnę</span><span className="hwC-caret" aria-hidden />
          </div>
          <div className="hwC-toast absolute flex items-center gap-2 border border-peach/40 bg-bg/90 px-3 py-1.5 font-mono uppercase tracking-[0.2em] text-peach" style={{ right: "5%", top: "15.5%" }}>
            <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden><path d="M2 6.5 l2.6 2.6 l5.4 -6" pathLength={1} stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" /></svg>
            Zapisano<span className="hwC-toast-more"> · bez kodu</span>
          </div>
        </div>

        {/* Kursor: najwyżej, porusza się w jednostkach viewBoxa */}
        <svg viewBox="0 0 320 236" className="hwC-cur absolute inset-0 h-full w-full" aria-hidden>
          <g className="hwC-cursor">
            <g className="hwC-cursor-click">
              <circle cx="0" cy="0" r="7" className="hwC-ripple" />
              <path d="M0 0 L0 12.5 L3.6 9.4 L6.2 14.4 L8.1 13.5 L5.6 8.6 L10 8.6 Z" fill="oklch(95% 0.01 80)" stroke="oklch(14% 0.02 280)" strokeWidth="0.8" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </TiltBoard>
  );
}

export function HeroWpC({ s, idx, total }: { s: Service; idx: number; total: number }) {
  const words = s.h1.split(" ");
  return (
    <header className="hwC relative overflow-hidden px-6 pt-24 pb-14 md:px-10 md:pt-44 md:pb-36">
      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <Link href="/uslugi" className="hover:text-peach transition-colors">← Wszystkie usługi</Link>
        <span>Usługa {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>

      <div className="relative mt-6 grid grid-cols-1 items-center gap-6 md:mt-16 md:gap-12 md:grid-cols-12 md:gap-12">
        {/* Makieta: na telefonie nad tekstem i cofa się przy przewijaniu, od md po prawej */}
        <div className="hwC-stage order-first md:order-last md:col-span-6 md:col-start-7">
          <Board />
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
          <p className="svc-in mt-6 max-w-2xl text-ink-mute md:mt-7" style={{ "--i": 7, fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.3rem)", lineHeight: 1.5 } as React.CSSProperties}>
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
