import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Jamstack: trzy etapy „Treść → Build → CDN”. Klik „Publikuj” w CMS, paczki lecą do buildu, licznik generuje
 * 148 stron z paskiem, paczki lecą na brzeg sieci, węzły zapalają się po kolei; na dole metryki: TTFB, wynik
 * Lighthouse na łuku, brak serwera do utrzymania.
 * 1500 Publikuj · 1600 lot · 2200 build (0 → 148) · 3500 lot · 4100 węzły · 4700 metryki · 5600 „Opublikowano”.
 */
const Stage = ({ title, left, at, children }: { title: string; left: string; at: number; children: React.ReactNode }) => (
  <div className="hwC-card absolute rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[2.5%]" style={{ left, width: "26%", top: "8%", height: "44%", animationDelay: `${at}ms` }}>
    <p className="hwC-t-xxs font-mono uppercase tracking-[0.18em] text-ink-mute">{title}</p>
    {children}
  </div>
);

const Flow = ({ at, left }: { at: number; left: string }) => (
  <>
    <span className="absolute border-t border-dashed border-[rgba(168,218,255,0.2)]" style={{ left, width: "6%", top: "30%" }} />
    {[0, 1, 2].map((i) => <span key={i} className="bp-flow absolute rounded-full bg-peach" style={{ left, top: "29.2%", width: "1.6cqw", height: "1.6cqw", "--dx": "6cqw", "--dy": "0px", "--dur": "500ms", animationDelay: `${at + i * 120}ms` } as React.CSSProperties} />)}
  </>
);

export const scene: Scene = {
  caption: "Gotowe, zanim ktoś wejdzie",
  duration: 6800,
  badge: { title: "Jamstack", sub: "CMS → build → CDN", icon: <Glyph name="jamstack" className="h-[60%] w-[60%]" /> },
  watermark: <Watermark name="jamstack" />,
  cursor: [{ at: 1500, x: 55, y: 106, click: true }],
  toast: { at: 5600, text: "Opublikowano na CDN · 148 stron", short: "Opublikowano" },
  panel: (
    <>
      <EditorBar icon="jamstack" label="Wdrożenie:" strong="manufaktura-swiec.pl" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <Stage title="Treść · CMS" left="5%" at={500}>
          {["Nowa kolekcja jesień", "Świece sojowe · FAQ", "Dostawa i zwroty"].map((t, i) => (
            <p key={t} className="hwC-fade hwC-t-xxs mt-[5%] flex items-center gap-[4%] text-ink" style={{ animationDelay: `${700 + i * 90}ms` }}><span className="block h-[1px] w-[8%] bg-peach/70" />{t}</p>
          ))}
          <div className="hwC-save absolute flex items-center justify-center bg-peach font-mono uppercase tracking-[0.14em] text-bg hwC-t-xxs" style={{ left: "8%", right: "8%", bottom: "8%", height: "16%", animationDelay: "1500ms" }}>Publikuj</div>
        </Stage>
        <Flow at={1600} left="31.5%" />
        <Stage title="Build" left="38%" at={600}>
          <p className="hwC-t-md mt-[6%] font-display text-ink leading-none"><span className="bp-count" style={{ "--from": 0, "--to": 148, "--dur": "1200ms", animationDelay: "2200ms" } as React.CSSProperties} /><span className="hwC-t-xxs font-mono text-ink-mute"> stron</span></p>
          <span className="bp-grow-x mt-[6%] block h-[2px] w-full rounded-full bg-peach" style={{ "--dur": "1200ms", animationDelay: "2200ms" } as React.CSSProperties} />
          {["HTML gotowy z góry", "Obrazy w WebP", "Sitemap i meta"].map((t, i) => (
            <p key={t} className="hwC-fade hwC-t-xxs mt-[4%] text-ink-mute" style={{ animationDelay: `${2500 + i * 300}ms` }}>✓ {t}</p>
          ))}
        </Stage>
        <Flow at={3500} left="64.5%" />
        <Stage title="CDN · brzeg sieci" left="71%" at={700}>
          <div className="mt-[8%] grid grid-cols-3 gap-[6%]">
            {["Warszawa", "Frankfurt", "Sztokholm", "Paryż", "Dublin", "Madryt"].map((c, i) => (
              <span key={c} className="flex flex-col items-center gap-[3px]">
                <span className="bp-fill-peach block rounded-full border border-[rgba(168,218,255,0.35)]" style={{ width: "2.6cqw", height: "2.6cqw", animationDelay: `${4100 + i * 110}ms` }} />
                <span className="bp-hide-narrow hwC-t-xxs font-mono text-ink-mute" style={{ fontSize: "clamp(4px, 1.3cqw, 7px)" }}>{c}</span>
              </span>
            ))}
          </div>
          <p className="hwC-fade hwC-t-xxs absolute font-mono text-ink-mute" style={{ left: "8%", bottom: "8%", animationDelay: "4800ms" }}>Kopia strony blisko odwiedzającego</p>
        </Stage>

        {/* metryki */}
        <div className="absolute flex gap-[3%]" style={{ left: "5%", right: "5%", top: "60%", height: "34%" }}>
          <div className="hwC-fade flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "4700ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Czas do pierwszego bajtu</p>
            <p className="hwC-t-md mt-[4%] font-display text-ink leading-none"><span className="bp-count" style={{ "--from": 0, "--to": 38, "--dur": "1000ms", animationDelay: "4800ms" } as React.CSSProperties} /><span className="hwC-t-xxs font-mono text-ink-mute"> ms</span></p>
          </div>
          <div className="hwC-fade relative flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "4800ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Lighthouse · wydajność</p>
            <div className="absolute flex items-center gap-[6%]" style={{ left: "6%", right: "6%", top: "38%", bottom: "8%" }}>
              <svg viewBox="0 0 36 36" className="h-full" aria-hidden><circle cx="18" cy="18" r="15" fill="none" stroke="rgba(168,218,255,0.14)" strokeWidth="3" /><circle cx="18" cy="18" r="15" fill="none" stroke="oklch(78% 0.13 50)" strokeWidth="3" strokeLinecap="round" pathLength={1} className="bp-gauge" style={{ "--v": 1, animationDelay: "5000ms", rotate: "-90deg", transformOrigin: "center" } as React.CSSProperties} /></svg>
              <span className="hwC-t-md font-display text-ink leading-none"><span className="bp-count" style={{ "--from": 0, "--to": 100, "--dur": "1300ms", animationDelay: "5000ms" } as React.CSSProperties} /></span>
            </div>
          </div>
          <div className="hwC-fade flex-1 rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[3%]" style={{ animationDelay: "4900ms" }}>
            <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Serwer do utrzymania</p>
            <p className="hwC-t-md mt-[4%] font-display text-ink leading-none">Brak</p>
            <p className="hwC-t-xxs mt-[3%] text-ink-mute">Same gotowe pliki, nic do łatania.</p>
          </div>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
