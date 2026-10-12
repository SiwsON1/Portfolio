import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Konfigurator: klient wybiera po kolei wysokość, długość i kolor ogrodzenia, podsumowanie po prawej aktualizuje
 * się przy każdym wyborze, reguła dopłaty dopisuje się sama, kursor klika „Wyślij”, wycena trafia do firmy.
 * 1000/1800/2600 wybory · 3300 dopłata · 4400 Wyślij · 5000 „Wycena wysłana do firmy”.
 */
const STEPS: [string, string[], number, number][] = [
  ["Wysokość", ["1,2 m", "1,5 m", "1,8 m"], 1, 1000],
  ["Długość", ["12 m", "24 m", "36 m"], 1, 1800],
  ["Kolor", ["Antracyt", "Grafit", "Biały"], 0, 2600],
];

export const scene: Scene = {
  caption: "Wycena w trakcie wyboru",
  duration: 6200,
  badge: { title: "Konfigurator", sub: "Wycena na stronie", icon: <Glyph name="sliders" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="sliders" />,
  cursor: [{ at: 4400, x: 287, y: 12, click: true }],
  toast: { at: 5000, text: "Wycena wysłana do firmy", short: "Wycena wysłana" },
  panel: (
    <>
      <EditorBar icon="sliders" label="Konfigurator:" strong="ogrodzenie panelowe" action={<span>Wyślij</span>} actionAt={4400} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* wybory */}
        <div className="absolute flex flex-col gap-[6%]" style={{ left: "5%", width: "54%", top: "7%" }}>
          {STEPS.map(([label, opts, pick, at]) => (
            <div key={label} className="hwC-fade" style={{ animationDelay: "500ms" }}>
              <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">{label}</p>
              <div className="mt-[3%] flex gap-[3%]">
                {opts.map((o, i) => (
                  <span
                    key={o}
                    className={`flex-1 rounded-[3px] border border-[rgba(168,218,255,0.14)] py-[3%] text-center hwC-t-xxs text-ink ${i === pick ? "bp-on" : ""}`}
                    style={i === pick ? { animationDelay: `${at}ms` } : undefined}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* podsumowanie */}
        <div className="hwC-card absolute rounded-[3px] border border-[rgba(168,218,255,0.2)] bg-[rgba(168,218,255,0.04)] px-[3.5%] py-[3%]" style={{ left: "64%", right: "5%", top: "7%", bottom: "12%", animationDelay: "600ms" }}>
          <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Twoja wycena</p>
          {STEPS.map(([label, opts, pick, at]) => (
            <p key={label} className="hwC-fade mt-[10%] flex justify-between hwC-t-xxs" style={{ animationDelay: `${at + 150}ms` }}>
              <span className="text-ink-mute">{label}</span>
              <span className="text-ink">{opts[pick]}</span>
            </p>
          ))}
          <p className="hwC-fade mt-[12%] hwC-t-xxs text-peach" style={{ animationDelay: "3300ms" }}>+ furtka i montaż</p>
          <p className="hwC-fade mt-[12%] hwC-t-sm font-display leading-none text-ink" style={{ animationDelay: "3600ms" }}>Gotowa</p>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "4950ms" }} />
      </div>
    </>
  ),
};
