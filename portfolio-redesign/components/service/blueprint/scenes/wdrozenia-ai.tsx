import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * AI: faktura wpada do asystenta, model podświetla pola w dokumencie i przepisuje je do formularza z paskiem
 * pewności; jedno pole dostaje flagę „sprawdź”, człowiek klika „Zatwierdź”, dokument idzie do księgowości.
 * 800 dokument · 1800/2100/2400/2700 pola · 3400 flaga · 4600 Zatwierdź · 4800 „Przekazano”.
 */
const FIELDS = [
  { l: "Sprzedawca", v: "Studio Forma sp. z o.o.", c: 99, at: 1800, top: "22%" },
  { l: "NIP", v: "526 ••• •• 41", c: 98, at: 2100, top: "30%" },
  { l: "Kwota brutto", v: "4 920,00 zł", c: 99, at: 2400, top: "52%" },
  { l: "Termin płatności", v: "14 dni · 12.10", c: 86, at: 2700, top: "60%", flag: true },
];

export const scene: Scene = {
  caption: "AI czyta, człowiek decyduje",
  duration: 6400,
  badge: { title: "AI w firmie", sub: "Z kontrolą człowieka", icon: <Glyph name="sparkle" className="h-[60%] w-[60%]" /> },
  watermark: <Watermark name="sparkle" />,
  cursor: [
    { at: 3800, x: 236, y: 150 },
    { at: 4600, x: 252, y: 206, travel: 500, click: true },
  ],
  toast: { at: 4800, text: "Przekazano do księgowości · 1 z 12", short: "Przekazano", style: { right: "auto", left: "3%", top: "auto", bottom: "6%" } },
  panel: (
    <>
      <EditorBar icon="sparkle" label="Asystent:" strong="Faktury przychodzące" />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* dokument */}
        <div className="hwC-card absolute rounded-[2px] border border-[rgba(168,218,255,0.14)] bg-[oklch(16%_0.02_280)] px-[3%] py-[3%]" style={{ left: "5%", width: "42%", top: "7%", height: "80%", animationDelay: "800ms" }}>
          <p className="hwC-t-xs font-mono uppercase tracking-[0.16em] text-ink">Faktura VAT 118/09</p>
          <p className="hwC-t-xxs mt-[2%] text-ink-mute" style={{ paddingTop: "2%" }}>Studio Forma sp. z o.o.</p>
          <p className="hwC-t-xxs text-ink-mute">NIP 526 ••• •• 41</p>
          {[68, 54, 72, 48].map((w, i) => <span key={i} className="mt-[4%] block h-[3px] rounded-full bg-[rgba(168,218,255,0.12)]" style={{ width: `${w}%` }} />)}
          <div className="mt-[8%] flex items-center justify-between"><span className="hwC-t-xxs text-ink-mute">Razem brutto</span><span className="hwC-t-xs font-mono text-ink">4 920,00 zł</span></div>
          <div className="mt-[3%] flex items-center justify-between"><span className="hwC-t-xxs text-ink-mute">Termin płatności</span><span className="hwC-t-xxs font-mono text-ink">12.10</span></div>
          {/* ramki wykryte przez model */}
          {FIELDS.map((f) => <span key={f.l} className="bp-hl absolute" style={{ left: "3%", right: "3%", top: f.top, height: "7%", animationDelay: `${f.at}ms`, animationIterationCount: 1 }} />)}
          <div className="bp-flash-doc absolute inset-0" />
        </div>

        {/* formularz */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "52%", top: "7%", animationDelay: "600ms" }}>Odczytane pola</p>
        <div className="absolute flex flex-col gap-[3%]" style={{ left: "52%", right: "5%", top: "14%" }}>
          {FIELDS.map((f) => (
            <div key={f.l} className="hwC-fade relative rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[4%] py-[3%]" style={{ animationDelay: `${f.at + 150}ms` }}>
              <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">{f.l}{f.flag && <span className="hwC-fade ml-[6px] rounded-[2px] bg-[rgba(232,178,134,0.16)] px-[4px] text-peach" style={{ animationDelay: "3400ms" }}>sprawdź</span>}</p>
              <p className="hwC-t-xs mt-[2%] font-mono text-ink"><span className="bp-type" style={{ "--w": `${f.v.length}ch`, "--steps": f.v.length, "--dur": `${f.v.length * 40}ms`, animationDelay: `${f.at + 300}ms` } as React.CSSProperties}>{f.v}</span></p>
              <span className="absolute bottom-0 left-0 h-[2px] rounded-full bg-[rgba(168,218,255,0.14)]" style={{ width: "100%" }} />
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] rounded-full" style={{ width: `${f.c}%`, background: f.flag ? "oklch(78% 0.13 50)" : "#a8daff", "--dur": "700ms", animationDelay: `${f.at + 500}ms` } as React.CSSProperties} />
              <span className="hwC-fade absolute right-[4%] top-[12%] font-mono hwC-t-xxs text-ink-mute" style={{ animationDelay: `${f.at + 900}ms` }}>{f.c}%</span>
            </div>
          ))}
        </div>
        <div className="hwC-save absolute flex items-center justify-center bg-peach font-mono uppercase tracking-[0.16em] text-bg hwC-t-xxs" style={{ left: "52%", right: "5%", bottom: "5%", height: "10%", animationDelay: "4600ms" }}>Zatwierdź i przekaż</div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "4700ms" }} />
      </div>
    </>
  ),
};
