import { BrowserBar, Photo } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * WooCommerce: sklep palarni kawy od strony klienta. Klik „Do koszyka”, kropka leci do ikony koszyka,
 * wysuwa się koszyk, wybór Paczkomatu przelicza sumę, „Zapłać BLIK”, kod wpisuje się sam, pasek autoryzacji,
 * „Zamówienie #1042 opłacone”.
 * 1500 do koszyka · 2600 koszyk · 3500 Paczkomat · 4600 BLIK · 6500 opłacone.
 */
const PRODUCTS = [
  { n: "Etiopia Sidamo", p: "54,00 zł", hue: 0 as const },
  { n: "Brazylia Cerrado", p: "46,00 zł", hue: 2 as const },
  { n: "Kolumbia Huila", p: "49,00 zł", hue: 1 as const },
];

const Cart = () => <svg viewBox="0 0 16 16" className="h-full w-full" aria-hidden><path d="M2 3h2l1.6 7.5h6.9L14 5.5H5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" /><circle cx="6.5" cy="13" r="1" fill="currentColor" /><circle cx="11.5" cy="13" r="1" fill="currentColor" /></svg>;

export const scene: Scene = {
  caption: "Od koszyka do płatności BLIK",
  duration: 7400,
  badge: { title: "WooCommerce", sub: "Sklep i płatności", icon: <Glyph name="woocommerce" className="h-[84%] w-[84%]" /> },
  watermark: <Watermark name="woocommerce" spin={false} />,
  cursor: [
    { at: 1500, x: 160, y: 156, click: true },
    { at: 2600, x: 300, y: 12, travel: 600, click: true },
    { at: 3500, x: 186, y: 128, travel: 550, click: true },
    { at: 4600, x: 243, y: 206, travel: 550, click: true },
  ],
  toast: { at: 6500, text: "Zamówienie #1042 opłacone", short: "Opłacone", style: { top: "13%" } },
  panel: (
    <>
      <BrowserBar
        url="palarnia-ziarno.pl/sklep"
        right={
          <span className="relative block text-ink" style={{ width: "4.4cqw", height: "4.4cqw" }}>
            <Cart />
            <span className="hwC-card absolute -right-[45%] -top-[40%] flex items-center justify-center rounded-full bg-peach font-mono text-bg" style={{ width: "2.6cqw", height: "2.6cqw", fontSize: "1.6cqw", animationDelay: "2050ms" }}>1</span>
          </span>
        }
      />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <p className="hwC-fade hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-peach" style={{ left: "5%", top: "5%", animationDelay: "500ms" }}>Świeżo palona · wysyłka w 24 h</p>
        {PRODUCTS.map((pr, i) => (
          <div key={pr.n} className="hwC-card absolute rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[rgba(168,218,255,0.04)]" style={{ left: `${5 + i * 31}%`, top: "14%", width: "28%", height: "64%", animationDelay: `${600 + i * 120}ms` }}>
            <Photo hue={pr.hue} at={700 + i * 120} style={{ left: "6%", top: "5%", width: "88%", height: "48%" }} />
            <p className="hwC-t-sm absolute font-display text-ink leading-none" style={{ left: "6%", top: "58%" }}>{pr.n}</p>
            <p className="hwC-t-xxs absolute font-mono text-ink-mute" style={{ left: "6%", top: "69%" }}>250 g · {pr.p}</p>
            <div className={`absolute flex items-center justify-center bg-peach font-mono uppercase tracking-[0.14em] text-bg hwC-t-xxs ${i === 1 ? "hwC-save" : ""}`} style={{ left: "6%", right: "6%", top: "80%", height: "13%", animationDelay: i === 1 ? "1500ms" : undefined }}>Do koszyka</div>
          </div>
        ))}
        {/* kropka lecąca z przycisku do koszyka */}
        <span className="bp-flow absolute rounded-full bg-peach" style={{ left: "50%", top: "62%", width: "2cqw", height: "2cqw", "--dx": "43cqw", "--dy": "-52cqw", "--dur": "550ms", animationDelay: "1520ms" } as React.CSSProperties} />

        {/* koszyk wysuwany z prawej */}
        <div className="bp-slide-r absolute right-0 top-0 bottom-0 border-l border-[rgba(168,218,255,0.14)] bg-[oklch(12.5%_0.02_280)]" style={{ width: "50%", animationDelay: "2650ms" }}>
          <p className="hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-ink" style={{ left: "8%", top: "6%" }}>Koszyk <span className="text-ink-mute">· 1</span></p>
          <div className="absolute flex items-center gap-[5%]" style={{ left: "8%", right: "8%", top: "15%" }}>
            <span className="hwC-photo-in bp-photo-0 relative block rounded-[2px]" style={{ width: "16%", aspectRatio: "1" }} />
            <span className="flex flex-col"><span className="hwC-t-xs text-ink leading-none">Etiopia Sidamo</span><span className="hwC-t-xxs mt-[3px] font-mono text-ink-mute">1 × 54,00 zł</span></span>
          </div>
          <p className="hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "8%", top: "36%" }}>Dostawa</p>
          {[["Paczkomat InPost 24/7", "12,99 zł", 3500], ["Kurier", "16,99 zł", null]].map(([n, p, at], i) => (
            <div key={n as string} className="absolute flex items-center gap-[4%]" style={{ left: "8%", right: "8%", top: `${45 + i * 11}%` }}>
              <span className={`block shrink-0 rounded-full border border-[rgba(168,218,255,0.4)] ${at ? "bp-fill-peach" : ""}`} style={{ width: "2.6cqw", height: "2.6cqw", animationDelay: at ? `${at}ms` : undefined }} />
              <span className="hwC-t-xxs flex-1 text-ink leading-none">{n}</span>
              <span className="hwC-t-xxs font-mono text-ink-mute">{p}</span>
            </div>
          ))}
          <div className="absolute border-t border-[rgba(168,218,255,0.14)]" style={{ left: "8%", right: "8%", top: "68%" }} />
          <div className="absolute flex items-center justify-between" style={{ left: "8%", right: "8%", top: "72%" }}>
            <span className="hwC-t-xs font-mono uppercase tracking-[0.18em] text-ink-mute">Razem</span>
            <span className="relative hwC-t-sm font-display text-ink">
              <span className="bp-swap-out" style={{ animationDelay: "3550ms" }}>54,00 zł</span>
              <span className="bp-swap-in absolute right-0 top-0" style={{ animationDelay: "3600ms" }}>66,99 zł</span>
            </span>
          </div>
          {/* kod BLIK pojawia się po kliknięciu Zapłać */}
          <div className="hwC-fade absolute flex items-center rounded-[3px] border border-[rgba(168,218,255,0.2)] px-[6%]" style={{ left: "8%", right: "8%", top: "79%", height: "10%", animationDelay: "4700ms" }}>
            <span className="hwC-t-xxs font-mono uppercase tracking-[0.18em] text-ink-mute">BLIK&nbsp;</span><span className="hwC-t-sm font-mono tracking-[0.25em] text-ink leading-none"><span className="bp-type" style={{ "--w": "7.5ch", "--steps": 6, "--dur": "900ms", animationDelay: "4800ms" } as React.CSSProperties}>428715</span></span>
            <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "700ms", animationDelay: "5800ms" } as React.CSSProperties} />
          </div>
          <div className="hwC-save absolute flex items-center justify-center bg-peach font-mono uppercase tracking-[0.16em] text-bg hwC-t-xs" style={{ left: "8%", right: "8%", top: "91%", height: "9%", animationDelay: "4600ms" }}>Zapłać BLIK</div>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "6450ms" }} />
      </div>
    </>
  ),
};
