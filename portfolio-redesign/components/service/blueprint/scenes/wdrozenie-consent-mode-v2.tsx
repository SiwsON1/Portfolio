import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Consent Mode: cztery zgody stoją na „denied”, kursor klika „Akceptuję” w banerze,
 * zgody po kolei przechodzą na „granted”, potem GA4 wysyła pierwsze zdarzenie.
 * 1200 klik w banerze · 1800/2300/2800/3300 kolejne zgody · 4300 zdarzenie GA4 · 5600 komunikat.
 */
const ROWS: [string, string, number][] = [
  ["analytics_storage", "pomiar GA4", 1800],
  ["ad_storage", "cookies reklamowe", 2300],
  ["ad_user_data", "dane do Google Ads", 2800],
  ["ad_personalization", "remarketing", 3300],
];

export const scene: Scene = {
  caption: "Tagi czekają na zgodę, a potem liczą raz",
  duration: 6600,
  badge: { title: "Consent Mode v2", sub: "GA4, Ads i Meta", icon: <Glyph name="shield" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="link" />,
  cursor: [{ at: 1200, x: 285, y: 214, click: true }],
  toast: { at: 5600, text: "GA4: purchase wysłany raz, ze zgodą", short: "Zgoda OK", style: { right: "auto", left: "3%", top: "70%" } },
  panel: (
    <>
      <EditorBar icon="wordpress" label="Zgody:" strong="Consent Mode" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        <div className="absolute flex flex-col gap-[2.2%]" style={{ left: "5%", right: "5%", top: "6%" }}>
          {ROWS.map(([key, note, at], i) => (
            <div
              key={key}
              className="hwC-card relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[1.8%]"
              style={{ animationDelay: `${400 + i * 120}ms` }}
            >
              <span className="flex flex-col">
                <span className="hwC-t-xs font-mono text-ink">{key}</span>
                <span className="hwC-t-xxs text-ink-mute">{note}</span>
              </span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em]">
                <span className="bp-swap-out text-peach" style={{ animationDelay: `${at}ms` }}>denied</span>
                <span className="bp-swap-in absolute right-0 top-0 whitespace-nowrap text-[#a8daff]" style={{ animationDelay: `${at + 50}ms` }}>granted</span>
              </span>
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "400ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        <p className="hwC-fade hwC-t-xxs absolute font-mono text-ink-mute" style={{ left: "5%", top: "64%", animationDelay: "4300ms" }}>
          GA4 · purchase · gcs=G111
        </p>
        <div
          className="hwC-card absolute flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.18)] bg-[oklch(14%_0.02_280)] px-[3%] py-[2%]"
          style={{ left: "5%", right: "5%", bottom: "5%", animationDelay: "600ms" }}
        >
          <span className="hwC-t-xxs text-ink-mute">Ta strona używa plików cookie</span>
          <span className="hwC-t-xxs font-mono uppercase tracking-[0.12em] text-peach">Akceptuję</span>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5550ms" }} />
      </div>
    </>
  ),
};
