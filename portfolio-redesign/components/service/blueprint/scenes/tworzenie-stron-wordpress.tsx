import { CheckIcon, EditorBar, Photo, SideIcons } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * WordPress: strona stolarza powstaje w edytorze. Kursor bierze z panelu Nagłówek, Obraz i Kolumny,
 * upuszcza na stronę, treść wskakuje; na końcu Zapisz, błysk i „Zapisano · bez kodu”.
 * 1500 chwyt → 2100 upuszczenie · 3400 → 3950 · 5000 → 5500 · 6300 Zapisz.
 */
const HEADLINE = ["Meble", "na", "wymiar,", "które", "zostają", "na", "lata"];
const CARDS = [
  { t: "Kuchnie", d: "Front, blat i sprzęt." },
  { t: "Szafy", d: "Do skosu i do wnęki." },
  { t: "Zabudowy", d: "Salon bez szczelin." },
];
const I = {
  h: <svg viewBox="0 0 16 16" className="h-full w-full"><path d="M3 3v10M13 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" /></svg>,
  i: <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2.5" y="3" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M3 11.5l3.2-3.4 2.3 2.2 1.8-1.8L13 11.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" /><circle cx="10.5" cy="6" r="1" fill="currentColor" /></svg>,
  c: <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /><rect x="6.4" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /><rect x="10.8" y="3" width="3.2" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>,
  b: <svg viewBox="0 0 16 16" className="h-full w-full"><rect x="2" y="5" width="12" height="6" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" /><path d="M5.5 8h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
};

export const scene: Scene = {
  caption: "Klient dopisuje ofertę sam",
  duration: 7200,
  badge: { title: "WordPress", sub: "Edycja bez kodu", icon: <Glyph name="wordpress" className="h-[62%] w-[62%]" /> },
  watermark: <Watermark name="wordpress" />,
  cursor: [
    { at: 1500, x: 16, y: 70, click: true },
    { at: 2100, x: 76, y: 64, travel: 600, click: true },
    { at: 3400, x: 16, y: 106, travel: 450, click: true },
    { at: 3950, x: 240, y: 88, travel: 550, click: true },
    { at: 5000, x: 16, y: 142, travel: 450, click: true },
    { at: 5500, x: 160, y: 186, travel: 500, click: true },
    { at: 6300, x: 280, y: 12, travel: 450, click: true },
  ],
  chips: [
    { text: "Nagłówek", from: [22, 62], to: [72, 60], start: 1500, end: 2100 },
    { text: "Obraz", from: [22, 96], to: [222, 84], start: 3400, end: 3950 },
    { text: "Kolumny", from: [22, 130], to: [142, 182], start: 5000, end: 5500 },
  ],
  toast: { at: 6450, text: "Zapisano · bez kodu", short: "Zapisano" },
  panel: (
    <>
      <EditorBar icon="wordpress" label="Edytujesz:" strong="Strona główna" action={<><span>Zapisz</span><CheckIcon /></>} actionAt={6300} />
      <SideIcons items={[{ icon: I.h, at: 900, onAt: 1500 }, { icon: I.i, at: 980, onAt: 3400 }, { icon: I.c, at: 1060, onAt: 5000 }, { icon: I.b, at: 1140 }]} />
      <div className="hwC-page absolute" style={{ left: "10%", right: 0, top: "10.2%", bottom: 0 }}>
        <div className="hwC-insert absolute" style={{ left: "4.5%", top: "8%", width: "50%", height: "40%", animationDelay: "2050ms" }} />
        <div className="hwC-insert absolute" style={{ left: "63%", top: "10%", width: "32%", height: "42%", animationDelay: "3900ms" }} />
        <div className="hwC-insert absolute" style={{ left: "4.5%", top: "70%", width: "91%", height: "28%", animationDelay: "5450ms" }} />

        <p className="hwC-fade hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-peach" style={{ left: "6%", top: "12%", animationDelay: "2150ms" }}>Pracownia stolarska · Meble na wymiar</p>
        <p className="hwC-h absolute font-display text-ink" style={{ left: "6%", top: "19%", width: "50%" }}>
          {HEADLINE.map((w, i) => <span key={i} className="hwC-w inline-block" style={{ animationDelay: `${2200 + i * 95}ms` }}>{w}&nbsp;</span>)}
          <span className="hwC-caret" style={{ animationDelay: "2200ms" }} aria-hidden />
        </p>
        <p className="hwC-fade hwC-t-sm absolute text-ink-mute" style={{ left: "6%", top: "43%", width: "46%", animationDelay: "2950ms" }}>Projekt, pomiar i montaż w jednej ekipie. Dąb, jesion i lakier, który nie żółknie.</p>
        <div className="hwC-fade hwC-cta absolute inline-flex items-center gap-[4px] bg-peach px-[2.4%] py-[1.4%] font-mono uppercase tracking-[0.16em] text-bg hwC-t-xs" style={{ left: "6%", top: "57%", animationDelay: "3150ms" }}>Umów wycenę <span aria-hidden>→</span></div>

        <Photo hue={0} at={3950} style={{ left: "63%", top: "12%", width: "31%", height: "38%" }} />

        <div className="absolute grid grid-cols-3 gap-[2.5%]" style={{ left: "6%", right: "6%", top: "73%", height: "23%" }}>
          {CARDS.map((c, i) => (
            <div key={c.t} className="hwC-card relative rounded-[3px] border border-[rgba(168,218,255,0.14)] bg-[rgba(168,218,255,0.04)] px-[8%] py-[6%]" style={{ animationDelay: `${5550 + i * 120}ms` }}>
              <span className="block rounded-full bg-peach/70" style={{ width: "12%", aspectRatio: "1" }} />
              <p className="hwC-t-md mt-[6%] font-display text-ink leading-none">{c.t}</p>
              <p className="hwC-t-xxs mt-[5%] text-ink-mute leading-[1.35]">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "6350ms" }} />
      </div>
    </>
  ),
};
