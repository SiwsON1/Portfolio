"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, onWord, subscribe } from "@/lib/speechReader";

type Kind = "nextjs" | "wordpress" | "ai" | "seo" | "performance";

/** Odcień linii, kolor płynących kresek i tempo per temat wpisu. */
const THEMES: Record<Kind, { label: string; line: string; dash: string; speed: number; lines: number }> = {
  nextjs: { label: "Next.js", line: "236, 226, 212", dash: "232, 178, 134", speed: 1, lines: 20 },
  wordpress: { label: "WordPress", line: "120, 170, 220", dash: "232, 178, 134", speed: 0.85, lines: 22 },
  ai: { label: "AI", line: "190, 170, 235", dash: "232, 178, 134", speed: 1.1, lines: 20 },
  seo: { label: "SEO", line: "150, 200, 190", dash: "232, 178, 134", speed: 0.9, lines: 20 },
  performance: { label: "Wydajność", line: "232, 178, 134", dash: "245, 214, 186", speed: 1.6, lines: 18 },
};

/**
 * Ilustracja wpisu: poziome linie płyną jak fala, po kilku z nich biegną kreski. Gdy wpis jest czytany,
 * fala rośnie przy każdym słowie, a na dole pojawiają się napisy z czytanym zdaniem.
 * Canvas 2D, pauza poza ekranem, jedna klatka przy ograniczonym ruchu.
 */
export function FlowCover({ kind }: { kind?: Kind }) {
  const theme = THEMES[kind ?? "nextjs"];
  const reader = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const canvas = useRef<HTMLCanvasElement>(null);
  const energy = useRef(0);
  const playing = useRef(false);
  playing.current = reader.status === "playing";

  useEffect(() => onWord(() => {
    energy.current = Math.min(1, energy.current + 0.38);
  }), []);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true, t = 0, last = performance.now();

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (dt: number) => {
      t += dt * theme.speed;
      // Energia głosu opada płynnie; podczas czytania nie spada poniżej lekkiego „oddechu”.
      const floor = playing.current ? 0.18 : 0;
      energy.current = Math.max(floor, energy.current - dt * 0.9);
      const e = energy.current;
      ctx.clearRect(0, 0, w, h);
      const n = Math.round(theme.lines * Math.min(1, Math.max(0.6, w / 900)));
      const top = h * 0.16, span = h * 0.68;
      for (let i = 0; i < n; i++) {
        const k = i / (n - 1);
        const base = top + k * span;
        const amp = (h * 0.035 + h * 0.07 * e) * (0.55 + Math.sin(k * Math.PI) * 0.75);
        const ph = i * 0.42;
        ctx.beginPath();
        for (let x = -10; x <= w + 10; x += 10) {
          const u = x / w;
          const env = Math.sin(Math.PI * Math.min(1, Math.max(0, u))) ** 1.4;
          const y =
            base +
            env * amp * Math.sin(u * 6.2 + t * 0.9 + ph) +
            env * amp * 0.45 * Math.sin(u * 13.5 - t * 1.4 + ph * 1.7) +
            env * h * 0.02 * e * Math.sin(u * 31 + t * 6 + i);
          if (x === -10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const g = ctx.createLinearGradient(0, 0, w, 0);
        const a = 0.11 + Math.sin(k * Math.PI) * 0.24 + e * 0.12;
        g.addColorStop(0, `rgba(${theme.line},0)`);
        g.addColorStop(0.5, `rgba(${theme.line},${a.toFixed(3)})`);
        g.addColorStop(1, `rgba(${theme.line},0)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
        // Co trzecia linia niesie płynące kreski: to „ruch” ilustracji.
        if (i % 3 === 1) {
          ctx.strokeStyle = `rgba(${theme.dash},${(0.55 + e * 0.35).toFixed(3)})`;
          ctx.lineWidth = 1.4;
          ctx.setLineDash([46 + i * 3, 210 + i * 11]);
          ctx.lineDashOffset = -t * (90 + i * 7) * (1 + e * 1.5);
          ctx.stroke();
        }
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible) draw(dt);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(cv);
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
    });
    io.observe(cv);
    if (reduce) {
      t = 2;
      draw(0);
    } else raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [theme]);

  const live = reader.status !== "idle";

  return (
    <figure className="flow-cover relative mt-12 overflow-hidden rounded-[20px] border border-line bg-bg" aria-hidden>
      <div className="relative aspect-[4/3] sm:aspect-[16/8] md:aspect-[21/9]">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 55%, rgba(${theme.dash},0.10) 0%, rgba(20,19,31,0) 70%)` }}
        />
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" />
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint sm:left-6 sm:top-5">
          {live ? (
            <>
              <span className={`flow-dot ${reader.status === "playing" ? "is-on" : ""}`} />
              <span className="text-ink-mute">{reader.status === "playing" ? "Na głos" : "Wstrzymane"} · {reader.rate}×</span>
            </>
          ) : (
            <span>Ilustracja · {theme.label}</span>
          )}
        </div>
        <div className="flow-caption absolute inset-x-0 bottom-0 px-4 pb-4 pt-16 sm:px-8 sm:pb-6" data-show={live && !!reader.caption}>
          <p key={reader.caption} className="flow-caption-text mx-auto max-w-3xl text-center font-display italic text-ink" style={{ fontSize: "clamp(1rem, 0.85rem + 0.6vw, 1.45rem)", lineHeight: 1.35 }}>
            {reader.caption}
          </p>
        </div>
      </div>
    </figure>
  );
}
