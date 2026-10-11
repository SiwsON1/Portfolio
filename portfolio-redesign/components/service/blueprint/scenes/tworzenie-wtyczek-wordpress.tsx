import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * Wtyczka na zamówienie: plik wtyczki pisze się linijka po linijce (haki WordPressa), kursor klika „Aktywuj”,
 * po prawej pojawia się nowy panel w kokpicie, testy przechodzą po kolei, na koniec pierwsza prośba o opinię
 * trafia do kolejki.
 * 500-2600 kod · 3000 Aktywuj · 3300 panel · 4000/4400/4800 testy · 5400 „Prośba zaplanowana”.
 */
const CODE: [string, string, number][] = [
  ["/* Plugin Name: Opinie o sklepie */", "text-ink-mute", 500],
  ["add_action( 'woocommerce_order_status_completed',", "text-ink", 900],
  ["  'opinie_zaplanuj_prosbe' );", "text-ink", 1300],
  ["function opinie_zaplanuj_prosbe( $order_id ) {", "text-[#a8daff]", 1700],
  ["  as_schedule_single_action( time() + 7 * DAY_IN_SECONDS,", "text-ink", 2100],
  ["    'opinie_wyslij_mail', [ $order_id ] );", "text-ink", 2400],
  ["}", "text-[#a8daff]", 2600],
];

const TESTS: [string, number][] = [["zamówienie zrealizowane → mail za 7 dni", 4000], ["jedna prośba na zamówienie", 4400], ["opinia czeka na moderację", 4800]];

export const scene: Scene = {
  caption: "Funkcja dopisana do sklepu",
  duration: 6600,
  badge: { title: "Wtyczki WP", sub: "Funkcje na zamówienie", icon: <Glyph name="code" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="code" />,
  cursor: [{ at: 3000, x: 282, y: 12, click: true }],
  toast: { at: 5400, text: "Pierwsza prośba o opinię zaplanowana", short: "Prośba zaplanowana" },
  panel: (
    <>
      <EditorBar icon="code" label="Wtyczka:" strong="opinie-sklepu.php" action={<span>Aktywuj</span>} actionAt={3000} />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* kod */}
        <div className="absolute flex flex-col overflow-hidden font-mono" style={{ left: "5%", width: "59%", top: "8%", rowGap: "2.6cqw" }}>
          {CODE.map(([line, cls, at], i) => (
            <p key={i} className="hwC-t-xxs flex whitespace-pre leading-none">
              <span className="hwC-fade mr-[4%] text-ink-mute/50" style={{ animationDelay: `${at - 100}ms` }}>{String(i + 1).padStart(2, "0")}</span>
              <span className={`bp-type ${cls}`} style={{ whiteSpace: "pre", "--w": `${line.length}ch`, "--steps": line.length, "--dur": "350ms", animationDelay: `${at}ms` } as React.CSSProperties}>{line}</span>
            </p>
          ))}
        </div>

        {/* nowy panel w kokpicie */}
        <div className="hwC-fade absolute rounded-[3px] border border-[rgba(168,218,255,0.2)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[3%]" style={{ left: "67%", right: "5%", top: "7%", height: "50%", animationDelay: "3300ms" }}>
          <p className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Kokpit · Opinie</p>
          <p className="hwC-t-sm mt-[10%] font-display text-ink leading-none">Prośby po zakupie</p>
          {["Mail po 7 dniach", "Moderacja", "Kod rabatowy"].map((t, i) => (
            <div key={t} className="hwC-fade mt-[9%] flex items-center justify-between" style={{ animationDelay: `${3500 + i * 150}ms` }}>
              <span className="hwC-t-xxs text-ink-mute">{t}</span>
              <span className="relative block rounded-full bg-peach" style={{ width: "5.5cqw", height: "3cqw" }}>
                <span className="absolute right-[12%] top-1/2 block -translate-y-1/2 rounded-full bg-bg" style={{ width: "2.2cqw", height: "2.2cqw" }} />
              </span>
            </div>
          ))}
        </div>

        {/* testy */}
        <p className="hwC-fade hwC-t-xxs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "62%", animationDelay: "3800ms" }}>Testy na kopii sklepu</p>
        <div className="absolute flex flex-col gap-[2%]" style={{ left: "5%", right: "5%", top: "69%" }}>
          {TESTS.map(([t, at]) => (
            <div key={t} className="hwC-fade relative flex items-center justify-between overflow-hidden rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[1.6%]" style={{ animationDelay: `${at - 200}ms` }}>
              <span className="hwC-t-xxs text-ink">{t}</span>
              <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.12em] text-ink-mute">
                <span className="bp-swap-out" style={{ animationDelay: `${at + 300}ms` }}>test…</span>
                <span className="bp-swap-in absolute right-0 top-0 text-[#a8daff]" style={{ animationDelay: `${at + 350}ms` }}>✓ OK</span>
              </span>
              <span className="bp-grow-x absolute bottom-0 left-0 h-[2px] w-full bg-peach" style={{ "--dur": "400ms", animationDelay: `${at}ms` } as React.CSSProperties} />
            </div>
          ))}
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "5350ms" }} />
      </div>
    </>
  ),
};
