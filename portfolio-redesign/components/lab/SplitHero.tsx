"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortraitCanvas = dynamic(
  () => import("@/components/home/Atmosphere").then((m) => m.PortraitCanvas),
  { ssr: false, loading: () => null }
);

/**
 * V4 — Split. 50/50 split-screen cinema.
 * Lewa: portret z plasma, prawa: scrolling manifesto + ticker.
 * Mouse na lewej połowie → prawa dimuje. Mouse na prawej → lewa dimuje.
 */
const MANIFEST = [
  ["Niezależny web developer.", "Wrocław, est. 2020."],
  ["Strony www, aplikacje", "Next.js i React, AI, SEO."],
  ["Trzydzieści wdrożeń.", "Polska i Niemcy."],
  ["Nie zostawiam kodu", "komuś kto go nie pisał."],
  ["Pogadajmy.", "mahinek12@gmail.com"],
];

export function SplitHero() {
  const [side, setSide] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const x = e.clientX - r.left;
      setSide(x < r.width / 2 ? "left" : "right");
    };
    const onLeave = () => setSide(null);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-bg overflow-hidden flex"
    >
      {/* LEFT — portrait */}
      <div
        className="relative w-1/2 h-full transition-opacity duration-700"
        style={{ opacity: side === "right" ? 0.35 : 1 }}
      >
        <div className="absolute inset-8 md:inset-12">
          <PortraitCanvas />
        </div>
        {/* Frame label */}
        <div className="absolute top-24 left-8 md:left-12 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          A · Portret
        </div>
      </div>

      {/* Center divider with mark */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-line z-20 flex items-center justify-center">
        <div className="bg-bg px-3 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-faint">
          EST. MMXX
        </div>
      </div>

      {/* RIGHT — scrolling manifesto */}
      <div
        className="relative w-1/2 h-full transition-opacity duration-700 flex flex-col"
        style={{ opacity: side === "left" ? 0.35 : 1 }}
      >
        <div className="absolute top-24 right-8 md:right-12 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          B · Manifesto
        </div>

        <div className="flex-1 flex flex-col justify-center pl-8 md:pl-16 pr-8 md:pr-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-8">
            5 zdań / Marcin Siwonia
          </p>
          <ol className="space-y-8 md:space-y-12">
            {MANIFEST.map(([line1, line2], i) => (
              <li key={i} className="flex items-baseline gap-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-display italic text-ink leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 0.8rem + 1.8vw, 2.6rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {line1} <span className="not-italic text-ink-mute font-sans text-[0.7em] block mt-1">{line2}</span>
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="/kontakt"
            className="mt-12 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-peach hover:translate-x-1 transition-transform self-start"
            data-cursor="START"
          >
            <span>Pełen kontakt</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right ticker bottom */}
        <div className="h-10 border-t border-ink/10 flex items-center px-8 md:px-12 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
          <span className="truncate">Available June 2026 · 4-6 clients in parallel</span>
        </div>
      </div>
    </section>
  );
}
