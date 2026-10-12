import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Integracje WooCommerce: kursor klika „Test”, jedno zamówienie przechodzi kolejno przez płatność, kuriera,
 * Allegro i hurtownię; przy każdym systemie paczka danych leci z kolumny sklepu, a status zmienia się na ✓.
 * 900 Test · 1400/2300/3200/4100 kolejne systemy · 5000 status zamówienia · 5600 „Zamówienie przeszło przez 4 systemy”.
 */
const SYSTEMS: [string, string, number][] = [
  ["Płatność", "BLIK potwierdzony", 1400],
  ["Kurier", "Etykieta InPost", 2300],
  ["Allegro", "Stan zdjęty z oferty", 3200],
  ["Hurtownia", "Zamówienie przekazane", 4100],
];

export const scene: Scene = {
  caption: "Jedno zamówienie, cztery systemy",
  duration: 6600,
  badge: { title: "Integracje", sub: "WooCommerce z systemami", icon: <Glyph name="layers" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="layers" />,
  cursor: [{ at: 900, x: 289, y: 12, click: true }],
  toast: { at: 5600, text: "Zamówienie przeszło przez 4 systemy", short: "4 systemy OK" },
  panel: (
    <>
      <EditorBar icon="woocommerce" label="Sklep:" strong="integracje zamówień" action={<span>Test</span>} actionAt={900} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* zamówienie */}
        <div className="hwC-card absolute rounded-[3px] border border-[rgba(168,218,255,0.2)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[3%]" style={{ left: "5%", width: "34%", top: "8%", animationDelay: "500ms" }}>
          <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Zamówienie</p>
          <p className="hwC-t-sm mt-[8%] font-display leading-none text-ink">#2187</p>
          <p className="relative mt-[10%] hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
            <span className="bp-swap-out" style={{ animationDelay: "5000ms" }}>W trakcie</span>
            <span className="bp-swap-in absolute left-0 top-0 whitespace-nowrap text-peach" style={{ animationDelay: "5050ms" }}>Do wysyłki</span>
          </p>
        </div>
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "52%", animationDelay: "700ms" }}>Źródło prawdy</p>
        <p className="hwC-fade hwC-t-xs absolute text-ink" style={{ left: "5%", top: "59%", width: "34%", animationDelay: "800ms" }}>Stany: hurtownia · Statusy: sklep</p>

        {/* systemy */}
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "47%", right: "5%", top: "8%" }}>
          {SYSTEMS.map(([name, note, at]) => (
            <div key={name} className="hwC-card relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[4%] py-[3%]" style={{ animationDelay: `${600 + SYSTEMS.findIndex((s) => s[0] === name) * 120}ms` }}>
              <span className="flex flex-col">
                <span className="hwC-t-xs font-mono text-ink">{name}</span>
                <span className="hwC-fade hwC-t-xxs text-ink-mute" style={{ animationDelay: `${at + 300}ms` }}>{note}</span>
              </span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
                <span className="bp-swap-out" style={{ animationDelay: `${at + 300}ms` }}>czeka</span>
                <span className="bp-swap-in absolute right-0 top-0 text-[#a8daff]" style={{ animationDelay: `${at + 350}ms` }}>✓</span>
              </span>
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "400ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        {SYSTEMS.map(([name, , at], i) => (
          <span key={name} className="bp-flow absolute rounded-full bg-peach" style={{ left: "39%", top: `${16 + i * 17}%`, width: "1.6cqw", height: "1.6cqw", "--dx": "7cqw", "--dy": "0cqw", "--dur": "500ms", animationDelay: `${at - 450}ms` } as React.CSSProperties} />
        ))}
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
