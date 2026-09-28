import { EditorBar } from "../chrome";
import { Glyph, Watermark, type GlyphKey } from "../icons";
import type { Scene } from "../types";

/**
 * Strony www: najpierw zakres, potem technologia. Kursor zaznacza kolejne potrzeby w briefie, a rekomendacja
 * po prawej zmienia się: edycja treści → WordPress; sklep → WooCommerce; panel z logowaniem → Next.js
 * (z WordPressem jako panelem treści).
 * 1400 edycja · 2800 sklep · 4200 panel · 5600 „Dobrane”.
 */
const NEEDS: [string, number | null][] = [["Edycja treści przez klienta", 1400], ["Sklep i płatności online", 2800], ["Panel klienta z logowaniem", 4200], ["Blog i techniczne SEO", null]];
const PICKS: { at: number; end?: number; icon: GlyphKey; name: string; lines: string[] }[] = [
  { at: 1500, end: 2900, icon: "wordpress", name: "WordPress", lines: ["Własny motyw, bez kreatora", "Edycja treści bez kodu", "Blog i SEO w standardzie"] },
  { at: 2950, end: 4300, icon: "woocommerce", name: "WooCommerce", lines: ["Płatności, dostawy, B2B", "Ten sam panel do treści", "Integracje sprzedażowe"] },
  { at: 4350, icon: "nextjs", name: "Next.js", lines: ["Panel klienta i logowanie", "WordPress zostaje jako CMS", "Szybkie strony i API"] },
];

export const scene: Scene = {
  caption: "Najpierw zakres, potem kod",
  duration: 6800,
  badge: { title: "Strony www", sub: "WordPress · Next.js · Woo", icon: <Glyph name="globe" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="globe" />,
  cursor: [
    { at: 1400, x: 30, y: 72, click: true },
    { at: 2800, x: 30, y: 100, travel: 500, click: true },
    { at: 4200, x: 30, y: 128, travel: 500, click: true },
  ],
  toast: { at: 5600, text: "Technologia dobrana do zakresu", short: "Dobrane", style: { right: "auto", left: "3%", top: "auto", bottom: "6%" } },
  panel: (
    <>
      <EditorBar icon="globe" label="Brief:" strong="Czego potrzebuje strona?" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "5%", width: "42%", top: "8%" }}>
          {NEEDS.map(([t, at], i) => (
            <div key={t} className={`hwC-card flex items-center gap-[5%] rounded-[3px] border border-[rgba(168,218,255,0.12)] bg-[rgba(168,218,255,0.04)] px-[5%] py-[4%] ${at ? "bp-on" : ""}`} style={{ animationDelay: at ? `${600 + i * 90}ms, ${at}ms` : `${600 + i * 90}ms`, animationName: at ? "hwC-pop, bp-on" : undefined }}>
              <span className="relative block shrink-0 rounded-full bg-[rgba(168,218,255,0.12)]" style={{ width: "5.6cqw", height: "2.8cqw" }}>
                <span className={`absolute left-0 top-0 h-full rounded-full ${at ? "bp-knob bg-peach" : "bg-[rgba(168,218,255,0.35)]"}`} style={{ width: "50%", animationDelay: at ? `${at}ms` : undefined }} />
              </span>
              <span className="hwC-t-xxs text-ink leading-[1.3]">{t}</span>
            </div>
          ))}
        </div>

        {/* rekomendacja */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "53%", top: "8%", animationDelay: "700ms" }}>Rekomendacja</p>
        <div className="hwC-fade absolute rounded-[3px] border border-dashed border-[rgba(168,218,255,0.2)]" style={{ left: "53%", right: "5%", top: "16%", height: "54%", animationDelay: "800ms" }}>
          <p className="hwC-t-xxs absolute font-mono text-ink-mute" style={{ left: "8%", top: "44%", width: "84%", animation: "hwC-fill 300ms both 800ms, bp-gone 300ms both 1500ms" }}>Zaznacz potrzeby po lewej</p>
        </div>
        {PICKS.map((p) => (
          <div key={p.name} className={`hwC-card absolute rounded-[3px] border border-peach/40 bg-[oklch(12.5%_0.02_280)] px-[4%] py-[4%] ${p.end ? "bp-gone" : ""}`} style={{ left: "53%", right: "5%", top: "16%", height: "54%", animationDelay: p.end ? `${p.at}ms, ${p.end}ms` : `${p.at}ms`, animationName: p.end ? "hwC-pop, bp-gone" : undefined }}>
            <div className="flex items-center gap-[5%]">
              <span className="flex items-center justify-center rounded-full bg-peach text-bg" style={{ width: "8cqw", height: "8cqw" }}><Glyph name={p.icon} className="h-[60%] w-[60%]" /></span>
              <span className="hwC-t-md font-display text-ink">{p.name}</span>
            </div>
            <div className="mt-[8%] flex flex-col gap-[5%]">
              {p.lines.map((l, i) => <p key={l} className="hwC-fade hwC-t-xxs flex items-center gap-[4%] text-ink-mute" style={{ animationDelay: `${p.at + 200 + i * 120}ms` }}><span className="block h-[1px] w-[6%] bg-peach/70" />{l}</p>)}
            </div>
          </div>
        ))}
        {/* ścieżka decyzji */}
        <div className="absolute flex items-center gap-[2%] font-mono hwC-t-xxs uppercase tracking-[0.14em] text-ink-mute" style={{ left: "53%", right: "5%", top: "76%" }}>
          {[["WordPress", 1500], ["→", 2950], ["Woo", 2950], ["→", 4350], ["Next.js + WP", 4350]].map(([t, at], i) => <span key={i} className={`hwC-fade ${i === 4 ? "text-peach" : ""}`} style={{ animationDelay: `${at}ms` }}>{t}</span>)}
        </div>
        <p className="hwC-fade hwC-t-xxs absolute text-ink-mute leading-[1.4]" style={{ left: "53%", right: "5%", top: "84%", animationDelay: "4600ms" }}>Zakres rośnie, technologia rośnie razem z nim, bez przepisywania od zera.</p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
