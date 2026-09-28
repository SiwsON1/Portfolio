import { TiltBoard } from "../TiltBoard";
import { chipWidth, sceneCss } from "./cursor";
import type { Scene } from "./types";

/**
 * Plansza scenki: szkło z poświatą i znakiem wodnym, wnętrze od scenki, warstwa dymka, warstwa kursora
 * (klatki generowane z opisu drogi) i plakietka usługi. Wszystko w jednostkach 320 × 236 = % planszy.
 */
export function Board({ id, scene }: { id: string; scene: Scene }) {
  const css = sceneCss(id, scene.duration, scene.cursor, scene.chips);
  const hasClicks = scene.cursor?.some((w) => w.click);
  return (
    <TiltBoard caption={scene.caption} duration={scene.duration} className="hwC-board relative mx-auto w-full max-w-[560px]">
      <div aria-hidden className="hwC-glow absolute -inset-[18%] pointer-events-none" />
      <div aria-hidden className="hwC-wm absolute pointer-events-none" style={{ right: "-14%", top: "-30%", width: "58%" }}>{scene.watermark}</div>

      <div className="hwC-3d relative w-full" style={{ aspectRatio: "320 / 236" }}>
        <div className="hwC-panel absolute inset-0 overflow-hidden rounded-[10px]">{scene.panel}</div>

        <div className="hwC-over absolute inset-0 pointer-events-none">
          {scene.toast && (
            <div className="hwC-toast absolute flex items-center gap-[6px] rounded-[3px] border border-peach/40 bg-[oklch(12%_0.02_280)]/95 px-[2.4%] py-[1.3%] font-mono uppercase tracking-[0.18em] text-peach hwC-t-xs" style={{ right: "3%", top: "12.5%", animationDelay: `${scene.toast.at}ms`, ...scene.toast.style }}>
              <svg viewBox="0 0 12 12" className="hwC-ico-s" aria-hidden><path d="M2 6.5l2.6 2.6 5.4-6" pathLength={1} stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hwC-check" style={{ animationDelay: `${scene.toast.at + 300}ms` }} /></svg>
              <span className="bp-toast-full">{scene.toast.text}</span>
              {scene.toast.short && <span className="bp-toast-short">{scene.toast.short}</span>}
            </div>
          )}
          {scene.over}
        </div>

        {(scene.cursor || scene.chips) && (
          <svg viewBox="0 0 320 236" className="hwC-cur absolute inset-0 h-full w-full" aria-hidden>
            {scene.chips?.map((c, i) => {
              const w = chipWidth(c.text);
              return (
                <g key={i} className={`hwC-chip bp-chip-${id}-${i}`}><rect x="0" y="-7" width={w} height="14" rx="3" /><text x={w / 2} y="3">{c.text}</text></g>
              );
            })}
            {scene.cursor && (
              <g className={`bp-cursor bp-cur-${id}`}>
                <g className={`bp-click ${hasClicks ? `bp-click-${id}` : ""}`}>
                  {hasClicks && <circle cx="0" cy="0" r="7" className={`bp-ripple bp-ripple-${id}`} />}
                  <path d="M0 0 L0 12.5 L3.6 9.4 L6.2 14.4 L8.1 13.5 L5.6 8.6 L10 8.6 Z" fill="oklch(95% 0.01 80)" stroke="oklch(14% 0.02 280)" strokeWidth="0.8" strokeLinejoin="round" />
                </g>
              </g>
            )}
          </svg>
        )}

        <div className="hwC-badge absolute flex items-center gap-[3%] rounded-full border border-[rgba(168,218,255,0.18)] bg-[oklch(13%_0.02_280)]/92 py-[1.4%] pl-[1.4%] pr-[4.5%]" style={{ left: "-5%", bottom: "-7%" }}>
          <span className="hwC-badge-ico flex items-center justify-center rounded-full bg-peach text-bg">{scene.badge.icon}</span>
          <span className="flex flex-col leading-none">
            <span className="hwC-t-md font-display text-ink whitespace-nowrap">{scene.badge.title}</span>
            <span className="hwC-t-xxs mt-[3px] font-mono uppercase tracking-[0.18em] text-ink-mute whitespace-nowrap">{scene.badge.sub}</span>
          </span>
        </div>
      </div>
      <style>{css}</style>
    </TiltBoard>
  );
}
