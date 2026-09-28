import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Opieka nad WordPressem: pulpit monitoringu. Słupki dostępności wyrastają, kopia zapasowa się odhacza,
 * kursor klika „Aktualizuj”, cztery wtyczki przechodzą po kolei z paskiem i ptaszkiem, na koniec raport
 * miesięczny leci do klienta.
 * 700 słupki · 1400 Aktualizuj · 1500/2200/2900/3600 wtyczki · 4600 kopia · 5600 „Raport wysłany”.
 */
const PLUGINS: [string, string, string, number][] = [["WooCommerce", "9.3", "9.4", 1500], ["Rank Math", "1.0.2", "1.0.3", 2200], ["WP Rocket", "3.17", "3.18", 2900], ["Motyw własny", "2.4", "2.5", 3600]];

export const scene: Scene = {
  caption: "Aktualizacje i kopie same",
  duration: 6800,
  badge: { title: "Opieka WP", sub: "Aktualizacje, kopie, monitoring", icon: <Glyph name="shield" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="shield" />,
  cursor: [{ at: 1400, x: 282, y: 12, click: true }],
  toast: { at: 5600, text: "Raport miesięczny wysłany do klienta", short: "Raport wysłany" },
  panel: (
    <>
      <EditorBar icon="shield" label="Opieka:" strong="sklep-ceramika.pl" action={<span>Aktualizuj</span>} actionAt={1400} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* kafle */}
        <div className="absolute flex gap-[3%]" style={{ left: "5%", right: "5%", top: "6%", height: "30%" }}>
          <div className="hwC-fade relative flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "500ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Dostępność · 30 dni</p>
            <div className="absolute flex items-end gap-[1.2%]" style={{ left: "6%", right: "6%", top: "40%", bottom: "34%" }}>
              {Array.from({ length: 30 }, (_, i) => <span key={i} className="bp-grow-y block flex-1 rounded-[1px] bg-[#a8daff]/70" style={{ height: "100%", animationDelay: `${700 + i * 25}ms`, "--dur": "300ms" } as React.CSSProperties} />)}
            </div>
            <p className="hwC-t-md absolute font-display text-ink leading-none" style={{ left: "6%", bottom: "8%" }}><span className="bp-count" style={{ "--from": 0, "--to": 100, "--dur": "1200ms", animationDelay: "800ms" } as React.CSSProperties} /><span className="hwC-t-xxs font-mono text-ink-mute"> %</span></p>
          </div>
          <div className="hwC-fade relative flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "600ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Kopia zapasowa</p>
            <p className="hwC-t-sm mt-[6%] font-display text-ink leading-none">Dziś 03:10</p>
            <p className="hwC-t-xxs mt-[4%] text-ink-mute">Pliki + baza · poza serwerem</p>
            <span className="absolute right-[6%] top-[10%] flex items-center justify-center rounded-full border border-[rgba(168,218,255,0.35)]" style={{ width: "5cqw", height: "5cqw" }}><svg viewBox="0 0 12 12" className="h-[60%] w-[60%]" aria-hidden><path d="M2.5 6.3l2.3 2.3 4.7-5" pathLength={1} stroke="#a8daff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" style={{ animationDelay: "4600ms" }} /></svg></span>
          </div>
          <div className="hwC-fade relative flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "700ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Certyfikat i PHP</p>
            <p className="hwC-t-sm mt-[6%] font-display text-ink leading-none">SSL ważny · 71 dni</p>
            <p className="hwC-t-xxs mt-[4%] text-ink-mute">PHP 8.3 · 0 błędów w logu</p>
          </div>
        </div>

        {/* aktualizacje */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "42%", animationDelay: "800ms" }}>Aktualizacje <span className="text-ink">· 4 do wykonania</span></p>
        <div className="absolute flex flex-col gap-[2%]" style={{ left: "5%", right: "5%", top: "49%" }}>
          {PLUGINS.map(([n, v1, v2, at], i) => (
            <div key={n} className="hwC-fade relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2%]" style={{ animationDelay: `${900 + i * 80}ms` }}>
              <span className="hwC-t-xs text-ink" style={{ width: "34%" }}>{n}</span>
              <span className="hwC-t-xxs font-mono text-ink-mute" style={{ width: "30%" }}>{v1} → <span className="text-ink">{v2}</span></span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute" style={{ width: "26%", textAlign: "right" }}>
                <span className="bp-swap-out" style={{ animationDelay: `${at + 600}ms` }}>oczekuje</span>
                <span className="bp-swap-in absolute right-0 top-0 text-[#a8daff]" style={{ animationDelay: `${at + 650}ms` }}>✓ kopia · gotowe</span>
              </span>
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "600ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        <p className="bp-term bp-term-line absolute hwC-t-xxs text-ink-mute" style={{ left: "5%", top: "93%", animationDelay: "4400ms" }}>test po aktualizacji: strona główna, koszyk, formularz · <span className="text-[#a8daff]">OK</span></p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
