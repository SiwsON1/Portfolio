import { EditorBar, Photo } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Nowoczesne strony: panel właściwości jak w narzędziu do projektowania i makieta hero po prawej. Kursor
 * wybiera serif z charakterem (nagłówek zmienia krój), brzoskwiniowy akcent (przycisk i linie przebarwiają się)
 * i „wejście warstwami” (makieta odgrywa animację wejścia ze stopniowaniem).
 * 1500 krój · 2800 kolor · 4200 ruch · 5600 „Gotowa”.
 */
const Opt = ({ t, on, at, first }: { t: string; on?: boolean; at?: number; first?: number }) => (
  <div className={`hwC-fade rounded-[3px] border border-[rgba(168,218,255,0.14)] px-[8%] py-[5%] font-mono hwC-t-xxs uppercase tracking-[0.12em] text-ink-mute ${on ? "bp-on" : ""}`} style={{ animationDelay: on ? `${first}ms, ${at}ms` : `${first}ms`, animationName: on ? "hwC-rise, bp-on" : undefined }}>{t}</div>
);

export const scene: Scene = {
  caption: "Krój, kolor i ruch pod markę",
  duration: 6800,
  badge: { title: "Design", sub: "Figma → kod → ruch", icon: <Glyph name="figma" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="figma" spin={false} />,
  cursor: [
    { at: 1500, x: 46, y: 88, click: true },
    { at: 2800, x: 56, y: 132, travel: 500, click: true },
    { at: 4200, x: 34, y: 176, travel: 500, click: true },
  ],
  toast: { at: 5600, text: "Makieta gotowa do prezentacji", short: "Gotowa", style: { right: "auto", left: "3%", top: "auto", bottom: "5%" } },
  panel: (
    <>
      <EditorBar icon="figma" label="Projekt:" strong="Pracownia architektury · hero" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* właściwości */}
        <div className="absolute inset-y-0 left-0 border-r border-[rgba(168,218,255,0.12)] bg-[oklch(13%_0.02_280)]" style={{ width: "28%" }}>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "10%", top: "7%", animationDelay: "500ms" }}>Typografia</p>
          <div className="absolute flex flex-col gap-[6%]" style={{ left: "10%", right: "10%", top: "14%" }}>
            <Opt t="Geometryczna" first={600} />
            <Opt t="Serif z charakterem" on at={1500} first={680} />
          </div>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "10%", top: "44%", animationDelay: "760ms" }}>Akcent</p>
          <div className="absolute flex gap-[8%]" style={{ left: "10%", top: "51%" }}>
            {["#a8daff", "#c9c4b8", "oklch(78% 0.13 50)", "#7fb69a"].map((c, i) => (
              <span key={c} className="hwC-fade relative block rounded-full" style={{ width: "4.2cqw", height: "4.2cqw", background: c, animationDelay: `${840 + i * 60}ms` }}>
                {i === 2 && <span className="hwC-fade absolute -inset-[30%] rounded-full border border-peach" style={{ animationDelay: "2800ms" }} />}
              </span>
            ))}
          </div>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "10%", top: "66%", animationDelay: "1000ms" }}>Ruch</p>
          <div className="hwC-fade absolute flex items-center gap-[8%]" style={{ left: "10%", right: "10%", top: "73%", animationDelay: "1100ms" }}>
            <span className="relative block shrink-0 rounded-full bg-[rgba(168,218,255,0.12)]" style={{ width: "5.6cqw", height: "2.8cqw" }}><span className="bp-knob bg-peach absolute left-0 top-0 h-full rounded-full" style={{ width: "50%", animationDelay: "4200ms" }} /></span>
            <span className="hwC-t-xxs text-ink leading-[1.25]">Wejście warstwami</span>
          </div>
        </div>

        {/* makieta hero */}
        <div className="hwC-fade absolute rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[oklch(15%_0.02_280)]" style={{ left: "33%", right: "5%", top: "8%", height: "84%", animationDelay: "600ms" }}>
          <div className="absolute flex items-center justify-between" style={{ left: "6%", right: "6%", top: "6%" }}>
            <span className="bp-replay hwC-t-xs font-display text-ink" style={{ animationDelay: "4300ms" }}>Atelier Nord</span>
            <span className="flex gap-[6px]">{[0, 1, 2].map((i) => <span key={i} className="bp-replay block h-[2px] rounded-full bg-[rgba(168,218,255,0.35)]" style={{ width: "10px", animationDelay: `${4340 + i * 40}ms` }} />)}</span>
          </div>
          <p className="bp-replay hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "6%", top: "20%", animationDelay: "4400ms" }}>Domy, które <span className="bp-accent" style={{ animationDelay: "2800ms" }}>oddychają</span></p>
          <div className="bp-replay absolute" style={{ left: "6%", width: "54%", top: "28%", animationDelay: "4480ms" }}>
            <p className="bp-swap-out absolute left-0 top-0 font-mono text-ink" style={{ fontSize: "clamp(9px, 3.1cqw, 18px)", lineHeight: 1.05, letterSpacing: "-0.02em", animationDelay: "1500ms" }}>PROJEKTUJEMY PRZESTRZEŃ NA LATA</p>
            <p className="bp-swap-in hwC-h font-display text-ink" style={{ fontSize: "clamp(10px, 3.6cqw, 21px)", animationDelay: "1550ms" }}>Projektujemy przestrzeń <em className="bp-accent" style={{ animationDelay: "2800ms" }}>na lata</em></p>
          </div>
          <div className="bp-replay bp-accent-bg absolute flex items-center justify-center font-mono uppercase tracking-[0.14em] text-bg hwC-t-xxs" style={{ left: "6%", top: "64%", width: "34%", height: "10%", background: "#a8daff", animationDelay: "4560ms, 2800ms", animationName: "bp-replay, bp-accent-bg" }}>Zobacz projekty</div>
          <div className="bp-replay absolute" style={{ left: "64%", right: "6%", top: "20%", height: "60%", animationDelay: "4640ms" }}>
            <Photo hue={1} at={900} style={{ inset: 0 }} />
          </div>
          <span className="bp-replay bp-accent-bg absolute h-[2px]" style={{ left: "6%", width: "12%", top: "82%", background: "#a8daff", animationDelay: "4720ms, 2800ms", animationName: "bp-replay, bp-accent-bg" }} />
          <p className="bp-replay hwC-t-xxs absolute font-mono uppercase tracking-[0.16em] text-ink-mute" style={{ left: "6%", top: "87%", animationDelay: "4800ms" }}>Przewiń</p>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ left: "28%", animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
