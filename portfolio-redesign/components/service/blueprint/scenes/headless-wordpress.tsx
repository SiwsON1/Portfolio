import { CheckIcon, EditorBar, Photo } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Headless: po lewej edytor WordPressa, po prawej strona w Next.js. Kursor dopisuje w nagłówku „na wymiar”,
 * klika Zapisz, paczki danych przelatują przez API na prawą stronę, podgląd odświeża się bez przeładowania
 * (szkielet → nowy nagłówek i zdjęcie), na dole log zapytania.
 * 1500 klik w nagłówek · 1700 pisanie · 3200 Zapisz · 3300 lot · 3900 szkielet · 4300 nowy podgląd · 5200 „Odświeżono”.
 */
export const scene: Scene = {
  caption: "WP pisze, Next.js wyświetla",
  duration: 6600,
  badge: { title: "Headless WP", sub: "Treść w WP, front w Next.js", icon: <Glyph name="wordpress" className="h-[62%] w-[62%]" /> },
  watermark: <Watermark name="nextjs" />,
  cursor: [
    { at: 1500, x: 70, y: 86, click: true },
    { at: 3200, x: 135, y: 12, travel: 500, click: true },
  ],
  toast: { at: 5200, text: "Podgląd odświeżony · bez przeładowania", short: "Odświeżono", style: { right: "auto", left: "3%", top: "13%" } },
  panel: (
    <>
      <EditorBar icon="wordpress" label="Edytujesz:" strong="Oferta" action={<><span>Zapisz</span><CheckIcon /></>} actionAt={3200} />
      {/* przycisk Zapisz jest na środku paska: nadpisujemy pozycję przez wąski pasek WP po lewej */}
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* lewa: edytor bloków */}
        <div className="absolute inset-y-0 left-0 border-r border-[rgba(168,218,255,0.14)] bg-[oklch(13%_0.02_280)]" style={{ width: "46%" }}>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "8%", top: "6%", animationDelay: "500ms" }}>Blok · Nagłówek</p>
          <div className="bp-hl absolute" style={{ left: "6%", right: "6%", top: "14%", height: "26%", animationDelay: "1500ms" }} />
          <p className="hwC-fade hwC-h absolute font-display text-ink" style={{ left: "8%", right: "8%", top: "16%", fontSize: "clamp(9px, 3.4cqw, 19px)", animationDelay: "600ms" }}>
            Ogrody zimowe<br />
            <span className="bp-type text-peach" style={{ "--w": "9ch", "--steps": 9, "--dur": "800ms", animationDelay: "1700ms" } as React.CSSProperties}>na wymiar</span>
            <span className="hwC-caret" style={{ animationDelay: "1500ms" }} aria-hidden />
          </p>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "8%", top: "48%", animationDelay: "700ms" }}>Blok · Akapit</p>
          <p className="hwC-fade hwC-t-xxs absolute text-ink-mute leading-[1.45]" style={{ left: "8%", right: "8%", top: "56%", animationDelay: "800ms" }}>Aluminiowe profile, szkło z powłoką i montaż w tydzień od pomiaru.</p>
          <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "8%", top: "78%", animationDelay: "900ms" }}>Blok · Obraz</p>
          <span className="hwC-fade hwC-photo-in bp-photo-2 absolute block rounded-[2px]" style={{ left: "8%", top: "86%", width: "22%", height: "10%", animationDelay: "1000ms" }} />
        </div>

        {/* paczki danych przez API */}
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="bp-flow absolute rounded-full bg-peach" style={{ left: "42%", top: `${28 + i * 5}%`, width: "1.6cqw", height: "1.6cqw", "--dx": "36cqw", "--dy": `${(1.5 - i) * 4}cqw`, "--dur": "650ms", animationDelay: `${3300 + i * 90}ms` } as React.CSSProperties} />
        ))}

        {/* prawa: strona w Next.js */}
        <div className="absolute inset-y-0 right-0" style={{ width: "54%" }}>
          <div className="hwC-fade absolute flex items-center gap-[3%] font-mono hwC-t-xxs uppercase tracking-[0.18em] text-ink-mute" style={{ left: "7%", top: "6%", animationDelay: "500ms" }}>
            <Glyph name="nextjs" className="text-ink" style={{ width: "3cqw", height: "3cqw" }} /> ogrody-lumen.pl <span className="hwC-live inline-block rounded-full bg-peach" style={{ width: "1.2cqw", height: "1.2cqw" }} />
          </div>
          {/* stary podgląd */}
          <div className="bp-gone absolute" style={{ left: "7%", right: "7%", top: "16%", height: "70%", animationDelay: "3900ms" }}>
            <p className="hwC-fade hwC-h font-display text-ink" style={{ fontSize: "clamp(10px, 3.8cqw, 22px)", animationDelay: "700ms" }}>Ogrody zimowe</p>
            <span className="hwC-fade hwC-photo-in bp-photo-1 absolute block rounded-[3px]" style={{ left: 0, right: 0, top: "34%", height: "48%", animationDelay: "800ms" }} />
          </div>
          {/* szkielet w trakcie odświeżania */}
          <div className="hwC-fade bp-gone absolute" style={{ left: "7%", right: "7%", top: "16%", height: "70%", animationDelay: "3900ms, 4300ms", animationName: "hwC-rise, bp-gone" }}>
            <span className="bp-skel block rounded-[2px]" style={{ width: "70%", height: "12%" }} />
            <span className="bp-skel mt-[4%] block rounded-[2px]" style={{ width: "45%", height: "12%" }} />
            <span className="bp-skel absolute block rounded-[3px]" style={{ left: 0, right: 0, top: "34%", height: "48%" }} />
          </div>
          {/* nowy podgląd */}
          <div className="absolute" style={{ left: "7%", right: "7%", top: "16%", height: "70%" }}>
            <p className="bp-swap-in hwC-h font-display text-ink" style={{ fontSize: "clamp(10px, 3.8cqw, 22px)", animationDelay: "4300ms" }}>Ogrody zimowe <span className="text-peach">na wymiar</span></p>
            <Photo hue={2} at={4450} style={{ left: 0, right: 0, top: "34%", height: "48%" }} />
          </div>
          <p className="bp-term bp-term-line absolute hwC-t-xxs text-ink-mute" style={{ left: "7%", bottom: "5%", animationDelay: "4400ms" }}>GET /wp-json/wp/v2/pages · <span className="text-[#a8daff]">200</span> · 38 ms · revalidate</p>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ left: "46%", animationDelay: "4250ms" }} />
      </div>
    </>
  ),
};
