import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Naprawa: kursor klika „Szukaj”, w logu serwera po kolei pojawiają się wpisy, podejrzany wpis
 * (integracja cofa status zamówienia) zostaje podświetlony, po poprawce status zamówienia zostaje „W realizacji”.
 * 900 Szukaj · 1400/2000/2600 wpisy logu · 3300 podświetlenie · 4300 poprawka · 5600 komunikat.
 */
const LOG: [string, string, number, boolean][] = [
  ["11:10:02", "POST /checkout  zamówienie #5163", 1400, false],
  ["11:12:35", "GET /wp-json/wc/v3/products", 2000, false],
  ["11:13:00", "PUT /orders/5163  status: pending", 2600, true],
];

export const scene: Scene = {
  caption: "Przyczyna znaleziona w logu, nie zgadywana",
  duration: 6600,
  badge: { title: "Naprawa sklepu", sub: "diagnoza w logach", icon: <Glyph name="shield" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="shield" />,
  cursor: [{ at: 900, x: 289, y: 12, click: true }],
  toast: { at: 5600, text: "Zamówienie za pobraniem zostaje w realizacji", short: "Status OK", style: { right: "auto", left: "3%", top: "74%" } },
  panel: (
    <>
      <EditorBar icon="woocommerce" label="Log:" strong="access.log" action={<span>Szukaj</span>} actionAt={900} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "5%", right: "5%", top: "8%" }}>
          {LOG.map(([time, line, at, bad]) => (
            <div
              key={time}
              className="hwC-card relative flex items-center gap-[4%] overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2.6%]"
              style={{ animationDelay: `${at}ms` }}
            >
              <span className="hwC-t-xxs font-mono text-ink-mute">{time}</span>
              <span className={`hwC-t-xxs font-mono ${bad ? "text-peach" : "text-ink"}`}>{line}</span>
              {bad && (
                <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "500ms", animationDelay: "3300ms" } as React.CSSProperties} />
              )}
            </div>
          ))}
        </div>
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "52%", animationDelay: "3500ms" }}>
          Zamówienie #5163
        </p>
        <p className="hwC-t-xs absolute font-mono uppercase tracking-[0.12em]" style={{ left: "5%", top: "58%" }}>
          <span className="hwC-fade relative inline-block" style={{ animationDelay: "3600ms" }}>
            <span className="bp-swap-out text-peach" style={{ animationDelay: "4300ms" }}>Anulowane</span>
            <span className="bp-swap-in absolute left-0 top-0 whitespace-nowrap text-[#a8daff]" style={{ animationDelay: "4350ms" }}>W realizacji</span>
          </span>
        </p>
        <p className="hwC-fade hwC-t-xs absolute text-ink" style={{ left: "5%", top: "65%", width: "62%", animationDelay: "4400ms" }}>
          Mała wtyczka blokuje cofnięcie statusu
        </p>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
