"use client";

import { useEffect, useRef } from "react";

/**
 * V1C — Code rain. Pionowe kolumny tech-keywordów (Next.js, React, AI, useEffect)
 * spadają w dół z fade. Peach accents na keywordach, faint cyan na symbolach.
 * Canvas2D — lekki, performant.
 */

const KEYWORDS = [
  "Next.js", "React", "TypeScript", "AI",
  "SEO", "Tailwind", "GSAP", "WebGL",
  "useEffect", "useState", "async", "await",
  "Suspense", "RSC", "OG",
  "<App/>", "{...}", "→", "●",
];

const PEACH = "#FBC58E";
const CYAN = "#D9EFFF";
const FAINT = "#6E8FB0";

export function CodeRainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.6);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const FONT_SIZE = 22;
    const COL_WIDTH = FONT_SIZE * 4.2;
    type Drop = {
      x: number;
      y: number;
      speed: number;
      stack: string[];
      offsetIndex: number;
    };
    let drops: Drop[] = [];
    const initDrops = () => {
      const cols = Math.max(3, Math.floor(canvas.width / dpr / COL_WIDTH));
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * COL_WIDTH + COL_WIDTH / 2,
        y: -Math.random() * canvas.height / dpr,
        speed: 0.5 + Math.random() * 0.9,
        stack: Array.from({ length: 8 + Math.floor(Math.random() * 8) }, () =>
          KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)]
        ),
        offsetIndex: Math.floor(Math.random() * 100),
      }));
    };
    initDrops();
    const ro2 = new ResizeObserver(initDrops);
    ro2.observe(canvas);

    let lastTime = performance.now();
    const tick = (now: number) => {
      const delta = (now - lastTime) / 16.6;
      lastTime = now;

      // Hard clear (no trail) + tinted bg dla kontrastu
      ctx.fillStyle = "#14131F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `500 ${FONT_SIZE * dpr}px ui-monospace, "Geist Mono", monospace`;
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      const h = canvas.height / dpr;
      drops.forEach((d) => {
        for (let i = 0; i < d.stack.length; i++) {
          const charY = d.y - i * (FONT_SIZE * 1.9);
          if (charY < -FONT_SIZE * 2 || charY > h) continue;
          const alpha = Math.max(0.15, 1 - (i * 1.1) / d.stack.length);
          if (i === 0) {
            ctx.fillStyle = PEACH;
          } else if (i < 2) {
            ctx.fillStyle = CYAN;
          } else {
            ctx.fillStyle = FAINT;
          }
          ctx.globalAlpha = alpha;
          const text = d.stack[(i + d.offsetIndex) % d.stack.length];
          ctx.fillText(text, d.x * dpr, charY * dpr);
        }
        d.y += d.speed * delta * 1.0;
        if (d.y > h + d.stack.length * FONT_SIZE * 1.9) {
          d.y = -Math.random() * 80;
          d.offsetIndex = Math.floor(Math.random() * 100);
        }
      });
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      ro2.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(20,19,31,0) 30%, rgba(20,19,31,0.45) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -inset-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(232, 178, 134, 0.20) 0%, rgba(232, 178, 134, 0) 70%)",
          mixBlendMode: "screen",
          animation: "portraitGlow 5.5s ease-in-out infinite",
        }}
      />
    </div>
  );
}
