import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Merchant Center: kursor klika „Sprawdź feed”, przy trzech wariantach produktu po kolei
 * pojawia się wynik kontroli, odrzucony wariant bez SKU dostaje kod i zmienia status na „Aktywny”.
 * 900 Sprawdź · 1500/2300/3100 kolejne warianty · 4200 poprawka SKU · 5000 licznik aktywnych · 5600 komunikat.
 */
const ROWS: [string, string, number, boolean][] = [
  ["Komplet Gigi · 128", "SKU GG-128", 1500, true],
  ["Komplet Gigi · 134", "SKU GG-134", 2300, true],
  ["Komplet Gigi · 140", "brak SKU", 3100, false],
];

export const scene: Scene = {
  caption: "Feed sprawdzony, zanim trafi do Google",
  duration: 6600,
  badge: { title: "Merchant Center", sub: "feed z WooCommerce", icon: <Glyph name="store" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="store" />,
  cursor: [{ at: 900, x: 289, y: 12, click: true }],
  toast: { at: 5600, text: "3 z 3 wariantów aktywne w Merchant Center", short: "3/3 aktywne", style: { right: "auto", left: "3%", top: "74%" } },
  panel: (
    <>
      <EditorBar icon="woocommerce" label="Feed:" strong="Zakupy Google" action={<span>Sprawdź</span>} actionAt={900} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "5%", right: "5%", top: "8%" }}>
          {ROWS.map(([name, sku, at, ok], i) => (
            <div
              key={name}
              className="hwC-card relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2.6%]"
              style={{ animationDelay: `${500 + i * 120}ms` }}
            >
              <span className="flex flex-col">
                <span className="hwC-t-xs font-mono text-ink">{name}</span>
                <span className="relative hwC-t-xxs text-ink-mute">
                  {ok ? (
                    <span className="hwC-fade" style={{ animationDelay: `${at + 200}ms` }}>{sku}</span>
                  ) : (
                    <>
                      <span className="bp-swap-out text-peach" style={{ animationDelay: "4200ms" }}>{sku}</span>
                      <span className="bp-swap-in absolute left-0 top-0 whitespace-nowrap" style={{ animationDelay: "4250ms" }}>SKU GG-140</span>
                    </>
                  )}
                </span>
              </span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
                {ok ? (
                  <>
                    <span className="bp-swap-out" style={{ animationDelay: `${at + 300}ms` }}>czeka</span>
                    <span className="bp-swap-in absolute right-0 top-0 text-[#a8daff]" style={{ animationDelay: `${at + 350}ms` }}>Aktywny</span>
                  </>
                ) : (
                  <>
                    <span className="bp-swap-out" style={{ animationDelay: `${at + 300}ms` }}>czeka</span>
                    <span className="bp-swap-out absolute right-0 top-0" style={{ animationDelay: "4550ms" }}>
                      <span className="bp-swap-in whitespace-nowrap text-peach" style={{ animationDelay: `${at + 350}ms` }}>Odrzucony</span>
                    </span>
                  </>
                )}
              </span>
              {!ok && (
                <span className="bp-swap-in absolute right-[3%] top-1/2 -translate-y-1/2 hwC-t-xxs font-mono uppercase tracking-[0.12em] text-[#a8daff]" style={{ animationDelay: "4600ms" }}>
                  Aktywny
                </span>
              )}
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "400ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "56%", animationDelay: "3500ms" }}>
          Poprawka u źródła
        </p>
        <p className="hwC-fade hwC-t-xs absolute text-ink" style={{ left: "5%", top: "62%", width: "60%", animationDelay: "3600ms" }}>
          Kod produktu dopisany w sklepie, nie w feedzie
        </p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
