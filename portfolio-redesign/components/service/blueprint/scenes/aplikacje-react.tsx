import { BrowserBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * React: panel serwisu rowerowego. Klik w status zlecenia zmienia go od razu na „Gotowe” (licznik 3 → 4),
 * wpisanie „Kowal” w szukajce filtruje listę bez przeładowania, klik „Wyślij SMS” wysyła powiadomienie.
 * 1500 status · 3000 szukajka · 3100 pisanie · 3700 filtr · 4800 SMS · 5200 „SMS wysłany”.
 */
const JOBS = [
  { n: "Rower gravel · Kowalczyk", s: "W naprawie", keep: true },
  { n: "E-bike miejski · Nowak", s: "W naprawie", keep: false, flip: true },
  { n: "Dziecięcy 20\" · Kowal", s: "Przyjęte", keep: true },
  { n: "Szosa karbon · Lis", s: "Gotowe", keep: false },
];

export const scene: Scene = {
  caption: "Zmiany widać od razu",
  duration: 6600,
  badge: { title: "React", sub: "Panele i aplikacje", icon: <Glyph name="react" className="h-[66%] w-[66%]" /> },
  watermark: <Watermark name="react" />,
  cursor: [
    { at: 1500, x: 262, y: 96, click: true },
    { at: 3000, x: 70, y: 46, travel: 550, click: true },
    { at: 4800, x: 262, y: 72, travel: 550, click: true },
  ],
  toast: { at: 5200, text: "SMS do klienta wysłany", short: "SMS wysłany", style: { top: "auto", bottom: "8%" } },
  panel: (
    <>
      <BrowserBar url="panel.serwis-rowerowy.pl" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* KPI + szukajka */}
        <div className="hwC-fade absolute flex items-center gap-[2%] rounded-[3px] border border-[rgba(168,218,255,0.2)] px-[3%] py-[2%] font-mono hwC-t-xxs text-ink-mute" style={{ left: "5%", width: "40%", top: "6%", animationDelay: "500ms" }}>
          <svg viewBox="0 0 12 12" className="shrink-0" style={{ width: "2.4cqw", height: "2.4cqw" }} aria-hidden><circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M8 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
          <span className="bp-type text-ink" style={{ "--w": "5ch", "--steps": 5, "--dur": "500ms", animationDelay: "3100ms" } as React.CSSProperties}>Kowal</span>
          <span className="hwC-caret" style={{ animationDelay: "3000ms" }} aria-hidden />
        </div>
        <div className="hwC-fade absolute flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2%]" style={{ left: "48%", right: "5%", top: "6%", animationDelay: "600ms" }}>
          <span className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Gotowe do odbioru</span>
          <span className="relative hwC-t-sm font-display text-ink leading-none">
            <span className="bp-swap-out" style={{ animationDelay: "1550ms" }}>3</span>
            <span className="bp-swap-in absolute right-0 top-0 text-peach" style={{ animationDelay: "1600ms" }}>4</span>
          </span>
        </div>

        {/* lista zleceń */}
        <div className="absolute flex flex-col gap-[2%]" style={{ left: "5%", right: "5%", top: "24%" }}>
          {JOBS.map((j, i) => (
            <div key={j.n} className={`hwC-card flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.12)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[2.6%] ${j.keep ? "" : "bp-gone"}`} style={{ animationDelay: j.keep ? `${700 + i * 100}ms` : `${700 + i * 100}ms, 3700ms`, animationName: j.keep ? undefined : "hwC-pop, bp-gone" }}>
              <span className="hwC-t-xs text-ink">{j.n}</span>
              <span className="flex items-center gap-[8px]">
                {i === 0 && <span className="hwC-fade hwC-save rounded-[2px] bg-peach px-[6px] py-[2px] font-mono hwC-t-xxs uppercase tracking-[0.12em] text-bg" style={{ animationDelay: "3900ms, 4800ms", animationName: "hwC-rise, hwC-press" }}>Wyślij SMS</span>}
                <span className={`relative rounded-full border px-[7px] py-[2px] font-mono hwC-t-xxs uppercase tracking-[0.12em] ${j.s === "Gotowe" ? "border-[rgba(168,218,255,0.4)] text-[#a8daff]" : "border-[rgba(232,178,134,0.4)] text-peach"} ${j.flip ? "bp-ok" : ""}`} style={j.flip ? { animationDelay: "1500ms" } : undefined}>
                  <span className={j.flip ? "bp-swap-out" : ""} style={j.flip ? { animationDelay: "1500ms" } : undefined}>{j.s}</span>
                  {j.flip && <span className="bp-swap-in absolute inset-0 flex items-center justify-center" style={{ animationDelay: "1550ms" }}>Gotowe</span>}
                </span>
              </span>
            </div>
          ))}
        </div>
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.16em] text-ink-mute" style={{ left: "5%", top: "78%", animationDelay: "3800ms" }}>2 z 4 zleceń · filtr „Kowal”</p>
        <p className="bp-term bp-term-line absolute hwC-t-xxs text-ink-mute" style={{ left: "5%", top: "86%", animationDelay: "1600ms" }}>stan zaktualizowany lokalnie · zapis w tle <span className="text-[#a8daff]">✓</span></p>
      </div>
    </>
  ),
};
