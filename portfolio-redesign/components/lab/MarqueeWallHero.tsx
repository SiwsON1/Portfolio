"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const PortraitCanvas = dynamic(
  () => import("@/components/home/Atmosphere").then((m) => m.PortraitCanvas),
  { ssr: false, loading: () => null }
);

/**
 * V5 — Marquee Wall. Brutalist editorial.
 * 5 marquees stacked, alternating speeds + directions. Tytuł HUGE bottom.
 * Portret-sticker w upper-right z magnetism.
 */
const ROWS = [
  {
    items: ["TWORZENIE STRON WWW", "APLIKACJE NEXT.JS", "REACT", "WDROŻENIA AI", "POZYCJONOWANIE SEO"],
    duration: 36,
    direction: "normal" as const,
    style: "display" as const,
  },
  {
    items: ["NextJS 16", "React 19", "TypeScript", "Tailwind 4", "GSAP", "Three.js", "R3F", "WebGL", "Postgres", "Sanity"],
    duration: 28,
    direction: "reverse" as const,
    style: "mono" as const,
  },
  {
    items: ["EST. MMXX", "WROCŁAW", "PL · DE", "30+ wdrożeń", "B2B / UoD / hr", "Available June 2026"],
    duration: 44,
    direction: "normal" as const,
    style: "mono" as const,
  },
  {
    items: ["adhotel", "tokenizer", "queenscarlet", "kancelaria-mpiontek", "galabau-darius", "apartamenty-zlota-grota", "maciejanka", "stys-glass"],
    duration: 32,
    direction: "reverse" as const,
    style: "italic" as const,
  },
  {
    items: ["KOD", "DESIGN", "DEPLOY", "SUPPORT", "60-DAY GUARANTEE", "RESPONSE WITHIN 24H"],
    duration: 38,
    direction: "normal" as const,
    style: "display" as const,
  },
];

export function MarqueeWallHero() {
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const cur = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 30;
      target.y = (e.clientY / window.innerHeight - 0.5) * 20;
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      if (stickerRef.current) {
        stickerRef.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) rotate(-6deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="relative h-screen w-full bg-bg overflow-hidden flex flex-col">
      {/* Top label */}
      <div className="absolute top-24 left-6 md:left-10 z-30 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        V5 · Marquee Wall · Brutalist editorial
      </div>

      {/* Marquees center fill */}
      <div className="flex-1 flex flex-col justify-center pt-32 pb-32">
        {ROWS.map((row, i) => (
          <MarqueeRow key={i} {...row} index={i} />
        ))}
      </div>

      {/* Sticker portrait — upper-right with magnetism */}
      <div
        ref={stickerRef}
        className="absolute top-32 right-6 md:right-12 z-20 will-change-transform"
        style={{ transform: "rotate(-6deg)" }}
      >
        <div
          className="relative bg-bg-elev p-2 shadow-2xl"
          style={{
            width: "min(28vw, 240px)",
            height: "min(28vw, 240px)",
          }}
        >
          <div className="absolute inset-2 overflow-hidden">
            <PortraitCanvas />
          </div>
          <div className="absolute top-0 left-0 right-0 px-3 py-1 font-mono text-[8px] uppercase tracking-[0.22em] text-ink-mute flex justify-between">
            <span>POLAROID</span>
            <span>2026</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink text-center">
            Marcin Siwonia
          </div>
        </div>
      </div>

      {/* Title HUGE bottom */}
      <div className="absolute bottom-12 left-6 md:left-10 right-6 md:right-10 z-10">
        <h1
          className="display text-ink"
          style={{
            fontSize: "clamp(3rem, 1.5rem + 9vw, 12rem)",
            lineHeight: 0.9,
          }}
        >
          <em>Marcin</em> Siwonia.
        </h1>
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <span>WROCŁAW · WEB DEVELOPER · EST. MMXX</span>
          <span>→ scroll</span>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  duration,
  direction,
  style: rowStyle,
  index,
}: {
  items: string[];
  duration: number;
  direction: "normal" | "reverse";
  style: "display" | "mono" | "italic";
  index: number;
}) {
  const isDisplay = rowStyle === "display";
  const isItalic = rowStyle === "italic";
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{ borderTop: index === 0 ? "1px solid var(--line)" : undefined, borderBottom: "1px solid var(--line)" }}
    >
      <div
        className="flex items-center"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: direction,
        }}
      >
        {Array.from({ length: 4 }).map((_, dup) => (
          <div key={dup} className="flex items-center shrink-0">
            {items.map((it, i) => (
              <span key={i} className="flex items-center shrink-0">
                {isDisplay ? (
                  <span
                    className="font-display text-ink"
                    style={{
                      fontSize: "clamp(2rem, 1.2rem + 3vw, 4.5rem)",
                      padding: "0.4em 0.6em",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {it}
                  </span>
                ) : isItalic ? (
                  <span
                    className="font-display italic text-peach"
                    style={{
                      fontSize: "clamp(1.5rem, 0.9rem + 2vw, 3rem)",
                      padding: "0.4em 0.5em",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                    }}
                  >
                    {it}
                  </span>
                ) : (
                  <span
                    className="font-mono text-ink-mute uppercase"
                    style={{
                      fontSize: "clamp(0.7rem, 0.5rem + 0.5vw, 0.95rem)",
                      letterSpacing: "0.22em",
                      padding: "0.5em 0.6em",
                    }}
                  >
                    {it}
                  </span>
                )}
                <span className="text-peach mx-3">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
