import { BrowserBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Next.js: panel klienta. Adres wpisuje się w pasku, wjeżdża nawigacja i szkielety, tabela zamówień wypełnia się
 * danymi z API (liczniki KPI liczą do wartości), klik w filtr „Opłacone” odfiltrowuje wiersz bez przeładowania,
 * klik w wiersz otwiera szczegóły z osią statusów; na dole log zapytania.
 * 400 adres · 1900 nawigacja i szkielet · 2600 dane · 3600 filtr · 4600 wiersz → 4650 szczegóły · 5800 dymek.
 */
const ROWS = [
  { n: "#2314", c: "Lumen Ogrody", a: "1 240 zł", s: "Opłacone", ok: true },
  { n: "#2313", c: "Studio Forma", a: "480 zł", s: "Oczekuje", ok: false },
  { n: "#2312", c: "Palarnia Ziarno", a: "2 960 zł", s: "Opłacone", ok: true },
];

export const scene: Scene = {
  caption: "Panel: dane z API na żywo",
  duration: 7000,
  badge: { title: "Next.js", sub: "Strony i panele", icon: <Glyph name="nextjs" className="h-[66%] w-[66%]" /> },
  watermark: <Watermark name="nextjs" />,
  cursor: [
    { at: 3600, x: 214, y: 58, click: true },
    { at: 4600, x: 150, y: 118, travel: 550, click: true },
  ],
  toast: { at: 5800, text: "Odpowiedź API w 42 ms", short: "42 ms" },
  panel: (
    <>
      <BrowserBar url="panel.lumen-ogrody.pl/zamowienia" typedAt={400} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* nawigacja */}
        <div className="bp-slide-l absolute inset-y-0 left-0 border-r border-[rgba(168,218,255,0.12)] bg-[oklch(13%_0.02_280)]" style={{ width: "22%", animationDelay: "1900ms" }}>
          {["Zamówienia", "Klienci", "Faktury", "Raporty"].map((t, i) => (
            <p key={t} className={`hwC-t-xxs absolute font-mono uppercase tracking-[0.16em] ${i === 0 ? "text-peach" : "text-ink-mute"}`} style={{ left: "12%", top: `${8 + i * 11}%` }}>{i === 0 && <span className="mr-[4px] inline-block h-[1px] w-[6px] bg-peach align-middle" />}{t}</p>
          ))}
        </div>

        {/* KPI */}
        <div className="absolute flex gap-[3%]" style={{ left: "27%", right: "4%", top: "6%" }}>
          {[["Dziś", 18, 12, "zamówień"], ["Średni koszyk", 246, 246, "zł"], ["Do wysłania", 7, 7, "paczek"]].map(([l, to, to2, u], i) => (
            <div key={l as string} className="hwC-fade flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[4%] py-[2.5%]" style={{ animationDelay: `${2000 + i * 100}ms` }}>
              <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">{l}</p>
              <p className="hwC-t-md font-display text-ink leading-none mt-[2%]">
                <span className="relative inline-block">
                  <span className={`bp-count ${to !== to2 ? "bp-swap-out" : ""}`} style={{ "--from": 0, "--to": to, "--dur": "1100ms", animationDelay: to !== to2 ? "2600ms, 3750ms" : "2600ms", animationName: to !== to2 ? "bp-count, bp-swap-out" : undefined } as React.CSSProperties} />
                  {to !== to2 && <span className="bp-swap-in absolute left-0 top-0 text-peach" style={{ animationDelay: "3800ms" }}>{to2}</span>}
                </span>
                <span className="hwC-t-xxs font-mono text-ink-mute"> {u}</span>
              </p>
            </div>
          ))}
        </div>

        {/* filtry */}
        <div className="absolute flex gap-[2%]" style={{ left: "27%", top: "30%" }}>
          {[["Wszystkie", false], ["Opłacone", true], ["Oczekuje", false]].map(([t, on]) => (
            <span key={t as string} className={`hwC-fade rounded-full border border-[rgba(168,218,255,0.2)] px-[8px] py-[3px] font-mono hwC-t-xxs uppercase tracking-[0.14em] text-ink-mute ${on ? "bp-on" : ""}`} style={{ animationDelay: on ? "2200ms, 3600ms" : "2200ms", animationName: on ? "hwC-rise, bp-on" : undefined }}>{t}</span>
          ))}
        </div>

        {/* szkielet → tabela */}
        <div className="bp-gone absolute" style={{ left: "27%", right: "4%", top: "42%", animationDelay: "2550ms" }}>
          {[0, 1, 2].map((i) => <span key={i} className="bp-skel hwC-fade mb-[3%] block rounded-[2px]" style={{ height: "9cqw", animationDelay: `${1950 + i * 80}ms` }} />)}
        </div>
        <div className="absolute" style={{ left: "27%", right: "4%", top: "42%" }}>
          {ROWS.map((r, i) => (
            <div key={r.n} className={`hwC-card flex items-center justify-between border-b border-[rgba(168,218,255,0.1)] py-[2.4%] ${i === 1 ? "bp-gone" : ""} ${i === 0 ? "bp-hl-row" : ""}`} style={{ animationDelay: i === 1 ? `${2600 + i * 120}ms, 3700ms` : `${2600 + i * 120}ms`, animationName: i === 1 ? "hwC-pop, bp-gone" : undefined }}>
              <span className="hwC-t-xxs font-mono text-ink-mute whitespace-nowrap" style={{ width: "14%" }}>{r.n}</span>
              <span className="hwC-t-xs text-ink whitespace-nowrap" style={{ width: "40%" }}>{r.c}</span>
              <span className="hwC-t-xxs font-mono text-ink whitespace-nowrap" style={{ width: "22%" }}>{r.a}</span>
              <span className={`rounded-full px-[6px] py-[2px] font-mono hwC-t-xxs uppercase tracking-[0.12em] ${r.ok ? "bg-[rgba(168,218,255,0.12)] text-[#a8daff]" : "bg-[rgba(232,178,134,0.14)] text-peach"}`}>{r.s}</span>
            </div>
          ))}
          <div className="bp-hl absolute" style={{ left: "-2%", right: "-2%", top: 0, height: "9cqw", animationDelay: "4600ms" }} />
        </div>

        {/* log API */}
        <p className="bp-term bp-term-line absolute hwC-t-xxs text-ink-mute" style={{ left: "27%", bottom: "4%", animationDelay: "3750ms" }}>GET /api/orders?status=paid · <span className="text-[#a8daff]">200</span> · 42 ms · cache HIT</p>

        {/* szczegóły zamówienia */}
        <div className="bp-slide-r absolute right-0 top-0 bottom-0 border-l border-[rgba(168,218,255,0.14)] bg-[oklch(12.5%_0.02_280)]" style={{ width: "38%", animationDelay: "4650ms" }}>
          <p className="hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "8%", top: "6%" }}>Zamówienie</p>
          <p className="hwC-t-md absolute font-display text-ink" style={{ left: "8%", top: "12%" }}>#2314 · Lumen Ogrody</p>
          {[["Złożone", "wt 09:12", 4900], ["Opłacone", "wt 09:14", 5100], ["W realizacji", "śr 08:40", 5300]].map(([t, d, at], i) => (
            <div key={t as string} className="absolute flex items-center gap-[5%]" style={{ left: "8%", right: "8%", top: `${30 + i * 14}%` }}>
              <svg viewBox="0 0 12 12" className="shrink-0" style={{ width: "3cqw", height: "3cqw" }} aria-hidden><circle cx="6" cy="6" r="5" stroke="rgba(168,218,255,0.35)" strokeWidth="0.8" fill="none" /><path d="M3.4 6.3l1.9 1.9 3.6-4" pathLength={1} stroke="#a8daff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" style={{ animationDelay: `${at}ms` }} /></svg>
              <span className="hwC-t-xxs flex-1 text-ink">{t}</span>
              <span className="hwC-t-xxs font-mono text-ink-mute">{d}</span>
            </div>
          ))}
          <div className="hwC-fade absolute flex items-center justify-center bg-peach font-mono uppercase tracking-[0.16em] text-bg hwC-t-xxs" style={{ left: "8%", right: "8%", bottom: "6%", height: "9%", animationDelay: "5500ms" }}>Wystaw fakturę</div>
        </div>
      </div>
    </>
  ),
};
