"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * V2 — Manifest. Pure typography, scroll-snap między 4 ekranami zdań.
 * Tło: subtle floating dust + clock subtitle. Brak figury.
 * Inspirowane: raviklaassens minimalna manifesta + Pentagram editorial.
 */
const ACTS = [
  { lead: "Buduję", word: "strony", suffix: "które się pamięta." },
  { lead: "Piszę", word: "aplikacje", suffix: "które wytrzymują rozbudowę." },
  { lead: "Wdrażam", word: "AI", suffix: "tam gdzie ma sens biznesowy." },
  { lead: "Pozycjonuję", word: "treść", suffix: "tak żeby Google ją znalazł." },
];

export function ManifestHero() {
  const [time, setTime] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(d.toLocaleTimeString("pl-PL", opts) + " CET");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-bg snap-y snap-mandatory overflow-y-auto h-screen"
    >
      {/* Top frame */}
      <div className="fixed top-20 left-0 right-0 z-30 px-6 md:px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mix-blend-difference">
        <span>Marcin Siwonia · Wrocław · {time}</span>
        <span className="hidden md:inline">Manifest · 4 akty</span>
        <span>scroll ↓</span>
      </div>

      {ACTS.map((a, i) => (
        <Act key={i} act={a} index={i} total={ACTS.length} />
      ))}

      {/* Final act — kontakt */}
      <section className="snap-start h-screen relative flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden">
        <DustField />
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-8 relative z-10">
          ([5/5] Następny krok)
        </p>
        <h2
          className="display text-ink text-center mb-12 relative z-10"
          style={{ fontSize: "clamp(3rem, 1.5rem + 8vw, 9rem)" }}
        >
          Napisz <em>mail</em>.
        </h2>
        <Link
          href="mailto:mahinek12@gmail.com"
          className="font-mono text-base md:text-xl text-peach hover:underline underline-offset-4 relative z-10"
          data-cursor="KOPIUJ"
        >
          mahinek12@gmail.com
        </Link>
      </section>
    </div>
  );
}

function Act({
  act,
  index,
  total,
}: {
  act: (typeof ACTS)[number];
  index: number;
  total: number;
}) {
  return (
    <section className="snap-start h-screen relative flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden">
      <DustField seed={index} />

      {/* Numerator */}
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-8 relative z-10">
        ({String(index + 1).padStart(2, "0")} / {String(total + 1).padStart(2, "0")})
      </p>

      <h2
        className="display text-ink text-center max-w-6xl relative z-10"
        style={{ fontSize: "clamp(2.75rem, 1.2rem + 8vw, 11rem)", lineHeight: 0.92 }}
      >
        <span className="block">{act.lead}</span>
        <span className="block text-peach">
          <em>{act.word}</em>
        </span>
        <span className="block">{act.suffix}</span>
      </h2>
    </section>
  );
}

/**
 * Subtle floating dust particles (CSS-only)
 */
function DustField({ seed = 0 }: { seed?: number }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (((i * 37 + seed * 13) % 100) + 0.5).toFixed(1);
        const y = (((i * 53 + seed * 17) % 100) + 0.5).toFixed(1);
        const dur = 18 + ((i * 7 + seed * 3) % 14);
        const delay = ((i * 0.7) % 12).toFixed(1);
        const size = 1 + ((i * 3) % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-peach/40"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `dustFloat ${dur}s ease-in-out infinite`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}
      <style jsx>{`
        @keyframes dustFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          25% { transform: translate(20px, -30px); opacity: 0.7; }
          50% { transform: translate(-15px, -60px); opacity: 0.5; }
          75% { transform: translate(10px, -40px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
