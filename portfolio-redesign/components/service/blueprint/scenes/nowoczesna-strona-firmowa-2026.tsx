import { EditorBar, Photo } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Strona firmowa dla małej firmy: lista zakresu po lewej odhacza się punkt po punkcie, a po prawej strona
 * gabinetu fizjoterapii składa się sekcja po sekcji: nagłówek ze zdjęciem, usługi, zespół, mapa z telefonem,
 * opinie. Na końcu kursor klika „Zadzwoń”.
 * 1200 nagłówek · 2000 usługi · 2800 zespół · 3600 mapa · 4400 opinie · 5200 Zadzwoń · 5400 „Wersja testowa”.
 */
const SCOPE: [string, number][] = [["Oferta i usługi", 2000], ["O nas i zespół", 2800], ["Kontakt i mapa", 3600], ["Opinie klientów", 4400], ["Edycja treści", 4900]];

export const scene: Scene = {
  caption: "Oferta, kontakt i mapa",
  duration: 6600,
  badge: { title: "Strona firmowa", sub: "Prosty zakres, szybki start", icon: <Glyph name="store" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="store" />,
  cursor: [{ at: 5200, x: 262, y: 168, click: true }],
  toast: { at: 5400, text: "Wersja testowa gotowa", short: "Wersja testowa", style: { right: "auto", left: "3%", top: "62%" } },
  panel: (
    <>
      <EditorBar icon="store" label="Strona firmowa:" strong="Gabinet fizjoterapii" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* zakres */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "7%", animationDelay: "500ms" }}>Zakres</p>
        <div className="absolute flex flex-col gap-[4%]" style={{ left: "5%", width: "30%", top: "15%" }}>
          {SCOPE.map(([t, at], i) => (
            <div key={t} className="hwC-fade flex items-center gap-[6%]" style={{ animationDelay: `${600 + i * 80}ms` }}>
              <svg viewBox="0 0 12 12" className="shrink-0" style={{ width: "3cqw", height: "3cqw" }} aria-hidden><rect x="1" y="1" width="10" height="10" rx="2" stroke="rgba(168,218,255,0.35)" strokeWidth="0.8" fill="none" /><path d="M3.4 6.3l1.9 1.9 3.6-4" pathLength={1} stroke="oklch(78% 0.13 50)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" style={{ animationDelay: `${at}ms` }} /></svg>
              <span className="hwC-t-xxs text-ink leading-[1.25]">{t}</span>
            </div>
          ))}
        </div>

        {/* strona */}
        <div className="hwC-fade absolute overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[oklch(15%_0.02_280)]" style={{ left: "40%", right: "5%", top: "7%", height: "88%", animationDelay: "700ms" }}>
          {/* nagłówek + hero */}
          <div className="hwC-card absolute" style={{ left: "6%", right: "6%", top: "5%", height: "30%", animationDelay: "1200ms" }}>
            <div className="flex items-center justify-between"><span className="hwC-t-xs font-display text-ink">Fizjo Ruch</span><span className="rounded-[2px] bg-peach px-[6px] py-[2px] font-mono hwC-t-xxs uppercase tracking-[0.12em] text-bg">Umów</span></div>
            <p className="hwC-t-sm mt-[3%] font-display text-ink leading-[1.05]" style={{ width: "52%" }}>Wracasz do formy bez bólu</p>
            <Photo hue={2} at={1300} style={{ right: 0, top: "34%", width: "40%", height: "62%" }} />
          </div>
          {/* usługi */}
          <div className="hwC-card absolute flex gap-[3%]" style={{ left: "6%", right: "6%", top: "39%", height: "16%", animationDelay: "2000ms" }}>
            {["Rehabilitacja", "Masaż", "Terapia manualna"].map((t) => <span key={t} className="flex flex-1 items-center rounded-[2px] border border-[rgba(168,218,255,0.14)] px-[5%] hwC-t-xxs text-ink leading-[1.2]">{t}</span>)}
          </div>
          {/* zespół */}
          <div className="hwC-card absolute flex items-center gap-[3%]" style={{ left: "6%", right: "6%", top: "58%", height: "10%", animationDelay: "2800ms" }}>
            {[0, 1, 2].map((i) => <span key={i} className={`hwC-photo-in bp-photo-${i} block rounded-full`} style={{ width: "6.5cqw", height: "6.5cqw" }} />)}
            <span className="hwC-t-xxs text-ink-mute">Zespół · 3 fizjoterapeutów</span>
          </div>
          {/* mapa + telefon */}
          <div className="hwC-card absolute flex gap-[3%]" style={{ left: "6%", right: "6%", top: "71%", height: "13%", animationDelay: "3600ms" }}>
            <span className="relative block flex-1 overflow-hidden rounded-[2px] bg-[rgba(168,218,255,0.08)]">
              <span className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(168,218,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(168,218,255,0.12) 1px, transparent 1px)", backgroundSize: "22% 40%" }} />
              <span className="hwC-card absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach" style={{ width: "2.4cqw", height: "2.4cqw", animationDelay: "3900ms", boxShadow: "0 0 0 3px rgba(232,178,134,0.25)" }} />
            </span>
            <span className="hwC-save flex items-center justify-center rounded-[2px] bg-peach px-[5%] font-mono hwC-t-xxs uppercase tracking-[0.12em] text-bg" style={{ animationDelay: "5200ms" }}>Zadzwoń</span>
          </div>
          {/* opinie */}
          <div className="hwC-card absolute flex items-center gap-[4%]" style={{ left: "6%", right: "6%", top: "88%", animationDelay: "4400ms" }}>
            <span className="text-peach hwC-t-xxs tracking-[0.1em]">★★★★★</span>
            <span className="hwC-t-xxs text-ink-mute">„Po trzech wizytach wróciłam do biegania”</span>
          </div>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ left: "40%", animationDelay: "5350ms" }} />
      </div>
    </>
  ),
};
