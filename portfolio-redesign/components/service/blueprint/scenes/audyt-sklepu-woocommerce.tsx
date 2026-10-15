import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Audyt: kursor klika „Sprawdź”, przy czterech obszarach sklepu po kolei pojawia się wynik
 * z priorytetem, na końcu podsumowanie znalezisk.
 * 900 Sprawdź · 1400/2100/2800/3500 kolejne obszary · 4400 podsumowanie · 5600 komunikat.
 */
const ROWS: [string, string, number, "pilne" | "plan" | "ok"][] = [
  ["Synchronizacja stanów", "cofa sprzedaż co godzinę", 1400, "pilne"],
  ["Klucze API", "stary klucz z pełnym dostępem", 2100, "pilne"],
  ["Kasa na telefonie", "zamówienie testowe przechodzi", 2800, "ok"],
  ["Pixel i GA4", "zdarzenia z serwera nie idą", 3500, "plan"],
];

const LABEL = { pilne: "Pilne", plan: "Do planu", ok: "OK" } as const;
const COLOR = { pilne: "text-peach", plan: "text-ink", ok: "text-[#a8daff]" } as const;

export const scene: Scene = {
  caption: "Znaleziska z priorytetem, nie lista ostrzeżeń",
  duration: 6600,
  badge: { title: "Audyt sklepu", sub: "WooCommerce i WordPress", icon: <Glyph name="gauge" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="gauge" />,
  cursor: [{ at: 900, x: 289, y: 12, click: true }],
  toast: { at: 5600, text: "2 pilne, 1 do planu, reszta działa", short: "2 pilne", style: { right: "auto", left: "3%", top: "78%" } },
  panel: (
    <>
      <EditorBar icon="woocommerce" label="Audyt:" strong="sklep" action={<span>Sprawdź</span>} actionAt={900} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex flex-col gap-[2.4%]" style={{ left: "5%", right: "5%", top: "7%" }}>
          {ROWS.map(([area, note, at, level], i) => (
            <div
              key={area}
              className="hwC-card relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2.2%]"
              style={{ animationDelay: `${500 + i * 120}ms` }}
            >
              <span className="flex flex-col">
                <span className="hwC-t-xs font-mono text-ink">{area}</span>
                <span className="hwC-fade hwC-t-xxs text-ink-mute" style={{ animationDelay: `${at + 200}ms` }}>{note}</span>
              </span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
                <span className="bp-swap-out" style={{ animationDelay: `${at + 300}ms` }}>czeka</span>
                <span className={`bp-swap-in absolute right-0 top-0 whitespace-nowrap ${COLOR[level]}`} style={{ animationDelay: `${at + 350}ms` }}>{LABEL[level]}</span>
              </span>
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "400ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        <p className="hwC-fade hwC-t-xs absolute text-ink" style={{ left: "5%", top: "68%", width: "62%", animationDelay: "4400ms" }}>
          Przy każdym punkcie: skutek i sposób naprawy
        </p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
