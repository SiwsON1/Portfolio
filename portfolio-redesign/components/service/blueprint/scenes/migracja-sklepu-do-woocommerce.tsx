import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Migracja sklepu: kursor klika „Przenieś”, paski danych (produkty, klienci, zamówienia, opinie) wypełniają się
 * po kolei, potem stare adresy dostają przekierowania 301 na nowe, na końcu przełączenie domeny.
 * 900 Przenieś · 1200-3000 paski · 3400/3800/4200 przekierowania · 5000 Na żywo · 5600 „Sklep przeniesiony”.
 */
const DATA: [string, number][] = [["Produkty i warianty", 1200], ["Klienci", 1700], ["Historia zamówień", 2200], ["Opinie", 2700]];
const URLS: [string, string, number][] = [
  ["/kategoria/bluzy", "/kategoria-produktu/bluzy/", 3400],
  ["/p/1042-bluza-szara", "/produkt/bluza-szara/", 3800],
  ["/regulamin", "/regulamin/", 4200],
];

export const scene: Scene = {
  caption: "Dane, adresy i przełączenie",
  duration: 6600,
  badge: { title: "Migracja", sub: "Sklep do WooCommerce", icon: <Glyph name="move" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="move" />,
  cursor: [{ at: 900, x: 285, y: 12, click: true }],
  toast: { at: 5600, text: "Sklep przeniesiony, stare adresy działają", short: "Sklep przeniesiony" },
  panel: (
    <>
      <EditorBar icon="move" label="Migracja:" strong="stary sklep → WooCommerce" action={<span>Przenieś</span>} actionAt={900} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* dane */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "6%", animationDelay: "400ms" }}>Dane</p>
        <div className="absolute flex flex-col gap-[4%]" style={{ left: "5%", width: "40%", top: "14%" }}>
          {DATA.map(([label, at]) => (
            <div key={label} className="hwC-fade" style={{ animationDelay: "600ms" }}>
              <div className="flex items-center justify-between">
                <span className="hwC-t-xxs text-ink">{label}</span>
                <span className="relative hwC-t-xxs font-mono text-ink-mute">
                  <span className="bp-swap-out" style={{ animationDelay: `${at + 500}ms` }}>…</span>
                  <span className="bp-swap-in absolute right-0 top-0 text-[#a8daff]" style={{ animationDelay: `${at + 550}ms` }}>✓</span>
                </span>
              </div>
              <div className="mt-[3%] h-[3px] w-full overflow-hidden rounded-full bg-[rgba(168,218,255,0.1)]">
                <span className="bp-grow-x block h-full w-full bg-peach" style={{ "--dur": "500ms", animationDelay: `${at}ms` } as React.CSSProperties} />
              </div>
            </div>
          ))}
        </div>

        {/* przekierowania */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "52%", top: "6%", animationDelay: "500ms" }}>Przekierowania 301</p>
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "52%", right: "5%", top: "14%" }}>
          {URLS.map(([from, to, at]) => (
            <div key={from} className="hwC-card rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[4%] py-[2.6%]" style={{ animationDelay: `${at - 300}ms` }}>
              <p className="hwC-t-xxs truncate font-mono text-ink-mute line-through decoration-ink-mute/40">{from}</p>
              <p className="hwC-fade hwC-t-xxs truncate font-mono text-ink" style={{ animationDelay: `${at}ms` }}><span className="text-peach">301 → </span>{to}</p>
            </div>
          ))}
        </div>

        {/* przełączenie */}
        <div className="hwC-card absolute flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.2)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[2.4%]" style={{ left: "5%", right: "5%", top: "74%", animationDelay: "4600ms" }}>
          <span className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Domena · DNS</span>
          <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
            <span className="bp-swap-out" style={{ animationDelay: "5000ms" }}>wersja testowa</span>
            <span className="bp-swap-in absolute right-0 top-0 whitespace-nowrap text-peach" style={{ animationDelay: "5050ms" }}>na żywo</span>
          </span>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
