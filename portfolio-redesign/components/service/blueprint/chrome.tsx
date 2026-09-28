import type { ReactNode } from "react";
import { Glyph, type GlyphKey } from "./icons";

/** Wspólne kawałki interfejsu w miniaturach: pasek edytora, pasek przeglądarki, panel ikon. Pozycje w % planszy. */

export function EditorBar({ icon, label, strong, action, actionAt }: { icon: GlyphKey; label: string; strong: string; action?: ReactNode; actionAt?: number }) {
  return (
    <div className="hwC-bar absolute inset-x-0 top-0 flex items-center justify-between border-b border-[rgba(168,218,255,0.12)] bg-[oklch(12%_0.02_280)] px-[3%]" style={{ height: "10.2%" }}>
      <div className="flex items-center gap-[2%] text-ink">
        <Glyph name={icon} className="hwC-barlogo shrink-0" />
        <span className="hwC-t-xs font-mono uppercase tracking-[0.16em] text-ink-mute whitespace-nowrap">{label} <span className="text-ink">{strong}</span></span>
      </div>
      {action && <div className="hwC-save flex items-center gap-[6px] rounded-[3px] bg-peach px-[2.6%] py-[1.2%] font-mono uppercase tracking-[0.14em] text-bg hwC-t-xs" style={{ animationDelay: `${actionAt ?? 999999}ms` }}>{action}</div>}
    </div>
  );
}

export function BrowserBar({ url, typedAt, right }: { url: string; typedAt?: number; right?: ReactNode }) {
  return (
    <div className="hwC-bar absolute inset-x-0 top-0 flex items-center gap-[3%] border-b border-[rgba(168,218,255,0.12)] bg-[oklch(12%_0.02_280)] px-[3%]" style={{ height: "10.2%" }}>
      <span className="flex gap-[4px]">{[0, 1, 2].map((i) => <span key={i} className="block rounded-full bg-[rgba(168,218,255,0.22)]" style={{ width: "1.6cqw", height: "1.6cqw" }} />)}</span>
      <span className="flex flex-1 items-center rounded-[3px] bg-[rgba(168,218,255,0.06)] px-[2%] py-[0.9%] font-mono hwC-t-xs text-ink-mute">
        {typedAt != null ? <span className="bp-type text-ink" style={{ "--w": `${url.length}ch`, "--steps": url.length, "--dur": `${url.length * 55}ms`, animationDelay: `${typedAt}ms` } as React.CSSProperties}>{url}</span> : url}
      </span>
      {right}
    </div>
  );
}

export function SideIcons({ items }: { items: { icon: ReactNode; at: number; onAt?: number }[] }) {
  return (
    <div className="hwC-side absolute bottom-0 left-0 border-r border-[rgba(168,218,255,0.10)] bg-[oklch(13%_0.02_280)]" style={{ top: "10.2%", width: "10%" }}>
      {items.map((it, n) => (
        <div key={n} className="hwC-ic bp-ic absolute left-1/2 -translate-x-1/2 rounded-[4px] p-[18%] text-ink-mute" style={{ top: `${13 + n * 15.5}%`, width: "56%", aspectRatio: "1", animation: `hwC-fill 400ms ease-out ${it.at}ms both${it.onAt != null ? `, hwC-ic-on 700ms ease-out ${it.onAt}ms both` : ""}` }}>
          {it.icon}
        </div>
      ))}
    </div>
  );
}

export const CheckIcon = () => <svg viewBox="0 0 12 12" className="hwC-ico-s" aria-hidden><path d="M2 6.5l2.6 2.6 5.4-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>;

/** Gradientowe „zdjęcie” z ziarnem; `hue` steruje kolorem (0 = brzoskwinia/drewno, 1 = chłodny błękit, 2 = zieleń szałwii). */
export function Photo({ hue = 0, className = "", style, at }: { hue?: 0 | 1 | 2; className?: string; style?: React.CSSProperties; at: number }) {
  return (
    <div className={`hwC-photo absolute overflow-hidden rounded-[3px] ${className}`} style={{ ...style, animationDelay: `${at}ms` }}>
      <div className={`hwC-photo-in bp-photo-${hue} absolute inset-0`} />
      <div className="hwC-shine absolute inset-0" style={{ animationDelay: `${at + 350}ms` }} />
    </div>
  );
}
