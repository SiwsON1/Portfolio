import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Przyspieszanie: dwa wskaźniki „przed” i „po” (przykładowy pomiar). Lewy łuk staje na 41, kursor klika
 * „Optymalizuj”, po kolei odhaczają się kroki (obrazy, cache, CSS, skrypty), prawy łuk rośnie do 96,
 * a metryki przeskakują: czas ładowania, waga strony, liczba zapytań.
 * 800 przed · 1600 Optymalizuj · 1800/2400/3000/3600 kroki · 3800 po (0 → 96) · 4200–4600 metryki · 5600 „Raport”.
 */
const STEPS: [string, number][] = [["Obrazy w WebP i lazy loading", 1800], ["Cache strony i CDN", 2400], ["Krytyczny CSS, reszta później", 3000], ["Skrypty odroczone", 3600]];
const METRICS: [string, string, string, number][] = [["Największy element (LCP)", "4,8 s", "1,2 s", 4200], ["Waga strony", "3,4 MB", "0,9 MB", 4400], ["Zapytania", "92", "31", 4600]];

const Gauge = ({ label, from, to, at, muted }: { label: string; from: number; to: number; at: number; muted?: boolean }) => (
  <div className="hwC-fade relative flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[4%] py-[4%]" style={{ animationDelay: `${at - 300}ms` }}>
    <p className="hwC-t-xxs font-mono uppercase tracking-[0.2em] text-ink-mute">{label}</p>
    <div className="absolute flex items-center gap-[8%]" style={{ left: "8%", right: "8%", top: "32%", bottom: "10%" }}>
      <svg viewBox="0 0 36 36" className="h-full" aria-hidden>
        <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(168,218,255,0.14)" strokeWidth="3" />
        <circle cx="18" cy="18" r="15" fill="none" stroke={muted ? "rgba(168,218,255,0.45)" : "oklch(78% 0.13 50)"} strokeWidth="3" strokeLinecap="round" pathLength={1} className="bp-gauge" style={{ "--v": to / 100, animationDelay: `${at}ms`, rotate: "-90deg", transformOrigin: "center" } as React.CSSProperties} />
      </svg>
      <span className={`hwC-h font-display leading-none ${muted ? "text-ink-mute" : "text-ink"}`} style={{ fontSize: "clamp(12px, 5cqw, 28px)" }}><span className="bp-count" style={{ "--from": from, "--to": to, "--dur": "1300ms", animationDelay: `${at}ms` } as React.CSSProperties} /></span>
    </div>
  </div>
);

export const scene: Scene = {
  caption: "Ten sam pomiar przed i po",
  duration: 7000,
  badge: { title: "Wydajność", sub: "Pomiar przed i po", icon: <Glyph name="gauge" className="h-[60%] w-[60%]" /> },
  watermark: <Watermark name="gauge" />,
  cursor: [{ at: 1600, x: 276, y: 12, click: true }],
  toast: { at: 5600, text: "Raport przed / po wysłany", short: "Raport wysłany", style: { top: "auto", bottom: "4%" } },
  panel: (
    <>
      <EditorBar icon="gauge" label="Pomiar:" strong="przykładowa strona sklepu" action={<span>Optymalizuj</span>} actionAt={1600} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex gap-[3%]" style={{ left: "5%", right: "5%", top: "6%", height: "36%" }}>
          <Gauge label="Przed" from={0} to={41} at={800} muted />
          <Gauge label="Po" from={0} to={96} at={3800} />
        </div>

        {/* kroki */}
        <div className="absolute flex flex-col gap-[2.5%]" style={{ left: "5%", width: "46%", top: "48%" }}>
          {STEPS.map(([t, at], i) => (
            <div key={t} className="hwC-fade flex items-center gap-[4%]" style={{ animationDelay: `${900 + i * 80}ms` }}>
              <svg viewBox="0 0 12 12" className="shrink-0" style={{ width: "3cqw", height: "3cqw" }} aria-hidden><circle cx="6" cy="6" r="5" stroke="rgba(168,218,255,0.35)" strokeWidth="0.8" fill="none" /><path d="M3.4 6.3l1.9 1.9 3.6-4" pathLength={1} stroke="oklch(78% 0.13 50)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" style={{ animationDelay: `${at}ms` }} /></svg>
              <span className="hwC-t-xxs text-ink leading-[1.25]">{t}</span>
            </div>
          ))}
        </div>

        {/* metryki */}
        <div className="absolute flex flex-col gap-[2.5%]" style={{ left: "55%", right: "5%", top: "48%" }}>
          {METRICS.map(([l, a, b, at], i) => (
            <div key={l} className="hwC-fade flex items-center justify-between border-b border-[rgba(168,218,255,0.1)] pb-[2%]" style={{ animationDelay: `${1000 + i * 80}ms` }}>
              <span className="hwC-t-xxs text-ink-mute" style={{ width: "58%" }}>{l}</span>
              <span className="relative hwC-t-xs font-mono text-ink" style={{ width: "40%", textAlign: "right" }}>
                <span className="bp-swap-out" style={{ animationDelay: `${at}ms` }}>{a}</span>
                <span className="bp-swap-in absolute right-0 top-0 text-peach" style={{ animationDelay: `${at + 50}ms` }}>{b}</span>
              </span>
            </div>
          ))}
        </div>
        {/* czas ładowania: dwa paski, przed i po */}
        <div className="absolute" style={{ left: "5%", right: "5%", top: "70%" }}>
          {[["Przed", "4,8 s", 100, 1200, false], ["Po", "1,2 s", 25, 4200, true]].map(([l, v, w, at, hot]) => (
            <div key={l as string} className="hwC-fade mb-[2%] flex items-center gap-[3%]" style={{ animationDelay: `${(at as number) - 200}ms` }}>
              <span className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute" style={{ width: "9%" }}>{l}</span>
              <span className="relative block h-[3px] flex-1 rounded-full bg-[rgba(168,218,255,0.08)]"><span className={`bp-grow-x absolute left-0 top-0 h-full rounded-full ${hot ? "bg-peach" : "bg-[rgba(168,218,255,0.4)]"}`} style={{ width: `${w}%`, "--dur": hot ? "800ms" : "1400ms", animationDelay: `${at}ms` } as React.CSSProperties} /></span>
              <span className={`hwC-t-xxs font-mono ${hot ? "text-peach" : "text-ink-mute"}`} style={{ width: "10%", textAlign: "right" }}>{v}</span>
            </div>
          ))}
        </div>
        <p className="bp-term bp-term-line absolute hwC-t-xxs text-ink-mute" style={{ left: "5%", top: "90%", animationDelay: "4900ms" }}>ten sam adres i sieć · 3 przebiegi</p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
