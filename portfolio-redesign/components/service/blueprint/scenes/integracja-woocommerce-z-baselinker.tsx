import { EditorBar } from "../chrome";
import { Glyph, Watermark } from "../icons";
import type { Scene } from "../types";

/**
 * BaseLinker: jedno kliknięcie w przełącznik „Synchronizacja” i dalej wszystko dzieje się samo. Nowe zamówienie
 * w WooCommerce, paczki danych lecą do BaseLinkera, status zmienia się na „Do wysłania”, stan magazynowy spada
 * po obu stronach, drukuje się etykieta, status wraca jako „Wysłane” z numerem przesyłki.
 * 900 przełącznik · 1300 nowe zamówienie · 2000 lot → 2500 w BaseLinkerze · 3300 Do wysłania · 3800 stan 14 → 13 ·
 * 4600 etykieta · 5200 lot z powrotem → 5600 Wysłane · 6300 „Zsynchronizowano”.
 */
const Row = ({ n, s, at, cls = "", swapTo, swapAt, swapTo2, swapAt2 }: { n: string; s: string; at: number; cls?: string; swapTo?: string; swapAt?: number; swapTo2?: string; swapAt2?: number }) => (
  <div className={`hwC-card flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.12)] bg-[rgba(168,218,255,0.04)] px-[6%] py-[3.5%] ${cls}`} style={{ animationDelay: `${at}ms` }}>
    <span className="hwC-t-xs font-mono text-ink">{n}</span>
    <span className="relative hwC-t-xxs font-mono uppercase tracking-[0.14em] text-ink-mute">
      <span className={swapTo ? "bp-swap-out" : ""} style={swapAt ? { animationDelay: `${swapAt}ms` } : undefined}>{s}</span>
      {swapTo && <span className={`bp-swap-in absolute right-0 top-0 whitespace-nowrap text-peach ${swapTo2 ? "bp-swap-out" : ""}`} style={{ animationDelay: swapTo2 ? `${swapAt! + 50}ms, ${swapAt2}ms` : `${swapAt! + 50}ms`, animationName: swapTo2 ? "bp-swap-in, bp-swap-out" : undefined }}>{swapTo}</span>}
      {swapTo2 && <span className="bp-swap-in absolute right-0 top-0 whitespace-nowrap text-[#a8daff]" style={{ animationDelay: `${swapAt2! + 50}ms` }}>{swapTo2}</span>}
    </span>
  </div>
);

const Packets = ({ at, dx, top }: { at: number; dx: string; top: string }) => (
  <>
    {[0, 1, 2].map((i) => (
      <span key={i} className="bp-flow absolute rounded-full bg-peach" style={{ left: "44%", top, width: "1.6cqw", height: "1.6cqw", "--dx": dx, "--dy": `${(i - 1) * 1.2}cqw`, "--dur": "700ms", animationDelay: `${at + i * 110}ms` } as React.CSSProperties} />
    ))}
  </>
);

export const scene: Scene = {
  caption: "Sync zamówień bez klikania",
  duration: 7200,
  badge: { title: "BaseLinker", sub: "Sync z WooCommerce", icon: <Glyph name="link" className="h-[58%] w-[58%]" /> },
  watermark: <Watermark name="link" />,
  cursor: [{ at: 900, x: 289, y: 12, click: true }],
  toast: { at: 6300, text: "Zsynchronizowano w 2 s", short: "Zsynchronizowano", style: { right: "auto", left: "3%", top: "48%" } },
  panel: (
    <>
      <EditorBar
        icon="link"
        label="Integracja:"
        strong="WooCommerce ↔ BaseLinker"
        action={
          <span className="flex items-center gap-[6px]">
            <span>Sync</span>
            <span className="relative block rounded-full bg-[oklch(14%_0.02_280)]/40" style={{ width: "4.4cqw", height: "2.2cqw" }}>
              <span className="bp-knob absolute left-0 top-0 h-full rounded-full bg-bg" style={{ width: "50%", animationDelay: "900ms" }} />
            </span>
          </span>
        }
      />
      <div className="hwC-page absolute" style={{ left: 0, right: 0, top: "10.2%", bottom: 0 }}>
        {/* kolumny */}
        <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[rgba(168,218,255,0.14)]" />
        <p className="hwC-fade hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "5%", top: "6%", animationDelay: "400ms" }}>WooCommerce <span className="text-ink">· zamówienia</span></p>
        <p className="hwC-fade hwC-t-xs absolute font-mono uppercase tracking-[0.2em] text-ink-mute" style={{ left: "55%", top: "6%", animationDelay: "500ms" }}>BaseLinker <span className="text-ink">· wysyłki</span></p>

        <div className="absolute flex flex-col gap-[2%]" style={{ left: "5%", width: "39%", top: "17%" }}>
          <Row n="#1042" s="Nowe" at={1300} cls="bp-hl-row" swapTo="Do wysłania" swapAt={3300} swapTo2="Wysłane" swapAt2={5600} />
          <Row n="#1041" s="Opłacone" at={600} />
          <Row n="#1040" s="Wysłane" at={700} />
        </div>
        <Packets at={2000} dx="47cqw" top="22%" />
        <Packets at={5200} dx="-47cqw" top="27%" />
        <div className="absolute flex flex-col gap-[2%]" style={{ left: "55%", width: "40%", top: "17%" }}>
          <Row n="#1042" s="Nowe" at={2500} swapTo="Do wysłania" swapAt={3300} swapTo2="Wysłane" swapAt2={5400} />
          <Row n="#1041" s="Spakowane" at={800} />
        </div>

        {/* stany magazynowe po obu stronach */}
        {[["5%", 3800], ["55%", 3950]].map(([left, at]) => (
          <div key={left as string} className="hwC-fade absolute flex items-center justify-between rounded-[3px] border border-[rgba(168,218,255,0.12)] px-[3%] py-[2%]" style={{ left: left as string, width: "39%", top: "62%", animationDelay: "900ms" }}>
            <span className="hwC-t-xxs font-mono uppercase tracking-[0.16em] text-ink-mute">Etiopia Sidamo · stan</span>
            <span className="relative hwC-t-sm font-display text-ink">
              <span className="bp-swap-out" style={{ animationDelay: `${at}ms` }}>14</span>
              <span className="bp-swap-in absolute right-0 top-0 text-peach" style={{ animationDelay: `${(at as number) + 60}ms` }}>13</span>
            </span>
          </div>
        ))}

        {/* etykieta InPost: kod kreskowy rysuje się, numer przesyłki wpisuje */}
        <div className="hwC-card absolute rounded-[3px] border border-peach/40 bg-[oklch(12%_0.02_280)] px-[3%] py-[2%]" style={{ left: "55%", width: "40%", top: "77%", height: "18%", animationDelay: "4600ms" }}>
          <div className="flex items-end gap-[1.5%]" style={{ height: "45%" }}>
            {[3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2].map((w, i) => (
              <span key={i} className="bp-grow-y block bg-ink" style={{ width: `${w * 1.3}%`, height: "100%", animationDelay: `${4700 + i * 25}ms`, "--dur": "200ms" } as React.CSSProperties} />
            ))}
          </div>
          <p className="hwC-t-xxs mt-[3%] font-mono uppercase tracking-[0.16em] text-ink-mute">Etykieta · <span className="bp-type text-ink" style={{ "--w": "16ch", "--steps": 14, "--dur": "700ms", animationDelay: "5300ms" } as React.CSSProperties}>620031004821PL</span></p>
        </div>
        {/* powiadomienie do klienta po lewej, gdy status wraca jako Wysłane */}
        <div className="hwC-card absolute flex items-center gap-[4%] rounded-[3px] border border-[rgba(168,218,255,0.12)] bg-[rgba(168,218,255,0.04)] px-[3%] py-[2.5%]" style={{ left: "5%", width: "39%", top: "77%", animationDelay: "5800ms" }}>
          <span className="hwC-live block shrink-0 rounded-full bg-peach" style={{ width: "1.6cqw", height: "1.6cqw" }} />
          <span className="hwC-t-xxs leading-[1.35] text-ink">Klient dostał e-mail i SMS z numerem przesyłki</span>
        </div>
        <div className="hwC-flash absolute inset-0" style={{ animationDelay: "6250ms" }} />
      </div>
    </>
  ),
};
