import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Next.js software house: tablica sprintu i terminal. Kursor przenosi kartę „Płatności online” z „W toku”
 * do „Gotowe”, wysuwa się terminal: git push, budowanie na Vercelu z paskiem, link do podglądu i wynik Lighthouse.
 * 1500 chwyt karty → 2300 upuszczenie · 2800 terminal · 2900 push · 3600 build · 4800 podgląd · 5200 Lighthouse · 5800 dymek.
 */
const COLS: [string, string[]][] = [["Do zrobienia", ["Panel rezerwacji", "Powiadomienia SMS"]], ["W toku", ["Płatności online"]], ["Gotowe", ["Logowanie i konta"]]];

const Card = ({ t, at, cls = "", style }: { t: string; at: number; cls?: string; style?: React.CSSProperties }) => (
  <div className={`hwC-card rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[rgba(168,218,255,0.05)] px-[8%] py-[6%] ${cls}`} style={{ animationDelay: `${at}ms`, ...style }}>
    <span className="block h-[2px] w-[28%] rounded-full bg-peach/70" />
    <p className="hwC-t-xxs mt-[6%] text-ink leading-[1.3]">{t}</p>
  </div>
);

export const scene: Scene = {
  caption: "Podgląd po każdym sprincie",
  duration: 7000,
  badge: { title: "Next.js", sub: "Bezpośrednio z programistą", icon: <Glyph name="nextjs" className="h-[66%] w-[66%]" /> },
  watermark: <Watermark name="nextjs" />,
  cursor: [
    { at: 1500, x: 160, y: 66, click: true },
    { at: 2300, x: 262, y: 66, travel: 800, click: true },
  ],
  chips: [{ text: "Płatności online", from: [130, 66], to: [232, 66], start: 1500, end: 2300 }],
  toast: { at: 5800, text: "Podgląd dla klienta gotowy", short: "Podgląd gotowy" },
  panel: (
    <>
      <EditorBar icon="nextjs" label="Sprint 4 ·" strong="MVP rezerwacji online" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {COLS.map(([name, cards], c) => (
          <div key={name} className="absolute" style={{ left: `${4 + c * 32.5}%`, width: "30%", top: "6%" }}>
            <p className="hwC-fade hwC-t-xxs font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ animationDelay: `${400 + c * 80}ms` }}>{name}</p>
            <div className="mt-[6%] flex flex-col gap-[6%]">
              {cards.map((t, i) => (
                <Card key={t} t={t} at={700 + c * 120 + i * 100} cls={c === 1 ? "bp-gone" : ""} style={c === 1 ? { animationDelay: "820ms, 1500ms", animationName: "hwC-pop, bp-gone" } : undefined} />
              ))}
              {c === 2 && <Card t="Płatności online" at={2300} cls="border-peach/50" />}
            </div>
          </div>
        ))}
        <div className="bp-hl absolute" style={{ left: "68%", width: "31%", top: "13%", height: "26%", animationDelay: "2250ms" }} />

        {/* terminal wysuwany od dołu */}
        <div className="hwC-bar absolute inset-x-0 bottom-0 border-t border-[rgba(168,218,255,0.14)] bg-[oklch(11%_0.02_280)] px-[4%] py-[2.5%]" style={{ height: "40%", translate: "0 100%", animationDelay: "2800ms", animationName: "bp-up" }}>
          <div className="bp-term flex flex-col gap-[1.6%] hwC-t-xxs">
            <p className="bp-term-line text-ink" style={{ animationDelay: "2900ms" }}><span className="text-ink-mute">$</span> git push origin main</p>
            <p className="bp-term-line text-ink-mute" style={{ animationDelay: "3300ms" }}>3 pliki · +214 −38 · feat: płatności online</p>
            <p className="bp-term-line text-ink" style={{ animationDelay: "3600ms" }}><span className="text-ink">▲</span> Vercel · budowanie podglądu</p>
            <span className="bp-grow-x block h-[2px] w-[60%] rounded-full bg-peach" style={{ "--dur": "1100ms", animationDelay: "3700ms" } as React.CSSProperties} />
            <p className="bp-term-line text-[#a8daff]" style={{ animationDelay: "4800ms" }}>✓ Podgląd: <span className="underline decoration-[rgba(168,218,255,0.4)] underline-offset-2">mvp-rezerwacje-git-sprint4.vercel.app</span></p>
            <p className="bp-term-line text-ink-mute" style={{ animationDelay: "5200ms" }}>Lighthouse · wydajność <span className="bp-count text-peach" style={{ "--from": 0, "--to": 98, "--dur": "900ms", animationDelay: "5250ms" } as React.CSSProperties} /> · dostępność <span className="bp-count text-peach" style={{ "--from": 0, "--to": 100, "--dur": "900ms", animationDelay: "5350ms" } as React.CSSProperties} /></p>
            <p className="bp-term-line text-ink-mute" style={{ animationDelay: "5500ms" }}>Gotowe w 41 s · 0 błędów · link wysłany do klienta</p>
          </div>
        </div>
      </div>
    </>
  ),
};
