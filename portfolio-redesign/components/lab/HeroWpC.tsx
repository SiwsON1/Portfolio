import Link from "next/link";
import type { Service } from "@/lib/services";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { OrbitalMark } from "@/components/service/OrbitalMark";
import { TiltBoard } from "./TiltBoard";

/**
 * Wariant C „Blueprint” v3: miniatura prawdziwej strony (serif, brzoskwinia, zdjęcie, teksty) budowana
 * w edytorze WordPress na oczach odwiedzającego. Kursor bierze blok z panelu po lewej, przeciąga go na stronę,
 * blok wskakuje z treścią; na końcu klik „Zapisz”, błysk i potwierdzenie. Kula z logo WordPressa unosi się
 * nad rogiem jak pieczęć. Warstwy rozsunięte w głąb, całość obraca się za myszą albo przechyłem (TiltBoard).
 * Sekwencja startuje, gdy plansza wjedzie w kadr (na telefonie leży pod tekstem hero).
 *
 * Układ w procentach planszy 320 × 236 (te same liczby w jednostkach viewBoxa dla kursora i chipów).
 * Oś czasu (ms): 0 plansza · 500 pasek · 700 panel · 1500 chwyt „Nagłówek” → 2100 upuszczenie, pisanie ·
 * 3400 chwyt „Obraz” → 3950 · 5000 chwyt „Kolumny” → 5500 (3 × 120) · 6300 klik „Zapisz” → 6450 „Zapisano”.
 */
const HEADLINE = ["Meble", "na", "wymiar,", "które", "zostają", "na", "lata"];
const CARDS = [
  { t: "Kuchnie", d: "Front, blat i sprzęt." },
  { t: "Szafy", d: "Do skosu i do wnęki." },
  { t: "Zabudowy", d: "Salon bez szczelin." },
];

function IconHeading() { return <svg viewBox="0 0 16 16" className="h-full w-full"><path d="M3 3v10M13 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" /></svg>; }
function IconImage() { return <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2.5" y="3" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M3 11.5l3.2-3.4 2.3 2.2 1.8-1.8L13 11.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" /><circle cx="10.5" cy="6" r="1" fill="currentColor" /></svg>; }
function IconColumns() { return <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /><rect x="6.4" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /><rect x="10.8" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>; }
function IconButton() { return <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2" y="5" width="12" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M5.5 8h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>; }
function WpLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
    </svg>
  );
}

function Board({ slug }: { slug: string }) {
  return (
    <TiltBoard className="hwC-board relative mx-auto w-full max-w-[560px]">
            {/* poświata jak za kulą na stronie głównej, poza kontekstem 3D */}
      <div aria-hidden className="hwC-glow absolute -inset-[18%] pointer-events-none" />
      <div className="hwC-3d relative w-full" style={{ aspectRatio: "320 / 236" }}>

        {/* Warstwa: plansza edytora */}
        <div className="hwC-panel absolute inset-0 overflow-hidden rounded-[10px]">
          {/* pasek edytora WordPress */}
          <div className="hwC-bar absolute inset-x-0 top-0 flex items-center justify-between border-b border-[rgba(168,218,255,0.12)] bg-[oklch(12%_0.02_280)] px-[3%]" style={{ height: "10.2%" }}>
            <div className="flex items-center gap-[2%] text-ink">
              <WpLogo className="hwC-barlogo shrink-0" />
              <span className="hwC-t-xs font-mono uppercase tracking-[0.16em] text-ink-mute whitespace-nowrap">Edytujesz: <span className="text-ink">Strona główna</span></span>
            </div>
            <div className="hwC-save flex items-center gap-[6px] rounded-[3px] bg-peach px-[2.6%] py-[1.2%] font-mono uppercase tracking-[0.14em] text-bg hwC-t-xs">
              <span>Zapisz</span>
              <svg viewBox="0 0 12 12" className="hwC-ico-s" aria-hidden><path d="M2 6.5l2.6 2.6 5.4-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>

          {/* panel bloków (inserter) */}
          <div className="hwC-side absolute bottom-0 left-0 border-r border-[rgba(168,218,255,0.10)] bg-[oklch(13%_0.02_280)]" style={{ top: "10.2%", width: "10%" }}>
            {[["h", IconHeading], ["i", IconImage], ["c", IconColumns], ["b", IconButton]].map(([k, Ic], n) => (
              <div key={k as string} className={`hwC-ic hwC-ic-${k} absolute left-1/2 -translate-x-1/2 rounded-[4px] p-[18%] text-ink-mute`} style={{ top: `${13 + n * 15.5}%`, width: "56%", aspectRatio: "1" }}>
                <Ic />
              </div>
            ))}
          </div>

          {/* treść strony */}
          <div className="hwC-page absolute" style={{ left: "10%", right: 0, top: "10.2%", bottom: 0 }}>
            {/* ramki wstawiania: migają w miejscu upuszczenia */}
            <div className="hwC-insert absolute" style={{ left: "4.5%", top: "8%", width: "50%", height: "40%", animationDelay: "2050ms" }} />
            <div className="hwC-insert absolute" style={{ left: "63%", top: "10%", width: "32%", height: "42%", animationDelay: "3900ms" }} />
            <div className="hwC-insert absolute" style={{ left: "4.5%", top: "70%", width: "91%", height: "28%", animationDelay: "5450ms" }} />

            {/* hero miniatury */}
            <p className="hwC-fade hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-peach" style={{ left: "6%", top: "12%", animationDelay: "2150ms" }}>Pracownia stolarska · Wrocław</p>
            <h3 className="hwC-h absolute font-display text-ink" style={{ left: "6%", top: "19%", width: "50%" }}>
              {HEADLINE.map((w, i) => <span key={i} className="hwC-w inline-block" style={{ animationDelay: `${2200 + i * 95}ms` }}>{w}&nbsp;</span>)}
              <span className="hwC-caret" style={{ animationDelay: "2200ms" }} aria-hidden />
            </h3>
            <p className="hwC-fade hwC-t-sm absolute text-ink-mute" style={{ left: "6%", top: "43%", width: "46%", animationDelay: "2950ms" }}>Projekt, pomiar i montaż w jednej ekipie. Dąb, jesion i lakier, który nie żółknie.</p>
            <div className="hwC-fade hwC-cta absolute inline-flex items-center gap-[4px] bg-peach px-[2.4%] py-[1.4%] font-mono uppercase tracking-[0.16em] text-bg hwC-t-xs" style={{ left: "6%", top: "57%", animationDelay: "3150ms" }}>Umów wycenę <span aria-hidden>→</span></div>

            {/* zdjęcie: gradientowa fotografia z ziarnem, odsłania się od dołu */}
            <div className="hwC-photo absolute overflow-hidden rounded-[3px]" style={{ left: "63%", top: "12%", width: "31%", height: "38%", animationDelay: "3950ms" }}>
              <div className="hwC-photo-in absolute inset-0" />
              <div className="hwC-shine absolute inset-0" style={{ animationDelay: "4300ms" }} />
            </div>

            {/* trzy kolumny oferty */}
            <div className="absolute grid grid-cols-3 gap-[2.5%]" style={{ left: "6%", right: "6%", top: "73%", height: "23%" }}>
              {CARDS.map((c, i) => (
                <div key={c.t} className="hwC-card relative rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[rgba(168,218,255,0.04)] px-[8%] py-[6%]" style={{ animationDelay: `${5550 + i * 120}ms` }}>
                  <span className="block rounded-full bg-peach/70" style={{ width: "12%", aspectRatio: "1" }} />
                  <p className="hwC-t-md mt-[6%] font-display text-ink leading-none">{c.t}</p>
                  <p className="hwC-t-xxs mt-[5%] text-ink-mute leading-[1.35]">{c.d}</p>
                </div>
              ))}
            </div>

            {/* błysk zapisu */}
            <div className="hwC-flash absolute inset-0" style={{ animationDelay: "6350ms" }} />
          </div>
        </div>

        {/* Warstwa wyżej: dymek pod „Zapisz” */}
        <div className="hwC-over absolute inset-0 pointer-events-none">
          <div className="hwC-toast absolute flex items-center gap-[6px] rounded-[3px] border border-peach/40 bg-[oklch(12%_0.02_280)]/95 px-[2.4%] py-[1.3%] font-mono uppercase tracking-[0.18em] text-peach hwC-t-xs" style={{ right: "3%", top: "12.5%" }}>
            <svg viewBox="0 0 12 12" className="hwC-ico-s" aria-hidden><path d="M2 6.5l2.6 2.6 5.4-6" pathLength={1} stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" /></svg>
            Zapisano<span className="hwC-toast-more"> · bez kodu</span>
          </div>
        </div>

        {/* Warstwa: kursor i przeciągane chipy, w jednostkach viewBoxa 320 × 236 */}
        <svg viewBox="0 0 320 236" className="hwC-cur absolute inset-0 h-full w-full" aria-hidden>
          <g className="hwC-chip hwC-chip1"><rect x="0" y="-7" width="52" height="14" rx="3" /><text x="26" y="3">Nagłówek</text></g>
          <g className="hwC-chip hwC-chip2"><rect x="0" y="-7" width="36" height="14" rx="3" /><text x="18" y="3">Obraz</text></g>
          <g className="hwC-chip hwC-chip3"><rect x="0" y="-7" width="48" height="14" rx="3" /><text x="24" y="3">Kolumny</text></g>
          <g className="hwC-cursor">
            <g className="hwC-cursor-click">
              <circle cx="0" cy="0" r="7" className="hwC-ripple" />
              <path d="M0 0 L0 12.5 L3.6 9.4 L6.2 14.4 L8.1 13.5 L5.6 8.6 L10 8.6 Z" fill="oklch(95% 0.01 80)" stroke="oklch(14% 0.02 280)" strokeWidth="0.8" strokeLinejoin="round" />
            </g>
          </g>
        </svg>

        {/* Pieczęć: kula z logo WordPressa, najwyżej, lekko się unosi */}
        <div className="hwC-seal absolute" style={{ left: "-7%", bottom: "-9%", width: "24%" }}>
          <OrbitalMark slug={slug} className="relative w-full" />
        </div>
      </div>
    </TiltBoard>
  );
}

export function HeroWpC({ s, idx, total }: { s: Service; idx: number; total: number }) {
  const words = s.h1.split(" ");
  return (
    <header className="hwC relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-44 md:pb-36">
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
            <Link href="/kontakt" data-haptic className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-[background-color,transform] duration-200 hover:bg-peach-deep active:scale-[0.97]">
              <span>Zapytaj o wycenę</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href="#realizacje" className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute underline decoration-line underline-offset-8 transition-colors hover:text-peach">Zobacz realizacje</a>
          </div>
        </div>

        {/* Makieta: na telefonie pod tekstem (sekwencja rusza, gdy wjedzie w kadr), od md po prawej */}
        <div className="hwC-stage md:col-span-6 pt-4 pl-3 md:pl-6">
          <Board slug={s.slug} />
        </div>
      </div>
    </header>
  );
}
