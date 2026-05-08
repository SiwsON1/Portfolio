"use client";

import { useEffect, useRef } from "react";
import type { PostHero as PostHeroKind } from "@/lib/posts";

/**
 * Hero animation komponenty per kategoria postu.
 * Lekkie canvas/SVG, 60fps, peach + midnight kolory.
 */
export function PostHero({ kind }: { kind: PostHeroKind["kind"] }) {
  switch (kind) {
    case "nextjs":
      return <NextjsHero />;
    case "wordpress":
      return <WordPressHero />;
    case "ai":
      return <AiHero />;
    case "seo":
      return <SeoHero />;
    case "performance":
      return <PerformanceHero />;
    default:
      return null;
  }
}

/**
 * Next.js hero: orbital geometric nodes (icosahedron-inspired) z peach glow.
 * Statyczny SVG + CSS animations żeby nie ciągnąć R3F dla każdego posta.
 */
function NextjsHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-bg">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(232,178,134,0.18) 0%, rgba(20,19,31,0) 55%)",
        }}
      />
      <svg
        viewBox="0 0 800 440"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(78% 0.13 50)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(64% 0.16 40)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(70% 0.018 60)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(78% 0.13 50)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(70% 0.018 60)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="orbit-slow" style={{ transformOrigin: "400px 220px" }}>
          <circle cx="400" cy="80" r="3" fill="url(#nodeGlow)" />
          <circle cx="600" cy="180" r="3" fill="url(#nodeGlow)" />
          <circle cx="500" cy="340" r="3" fill="url(#nodeGlow)" />
          <circle cx="240" cy="320" r="3" fill="url(#nodeGlow)" />
          <circle cx="180" cy="160" r="3" fill="url(#nodeGlow)" />
          <line x1="400" y1="80" x2="600" y2="180" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="600" y1="180" x2="500" y2="340" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="500" y1="340" x2="240" y2="320" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="240" y1="320" x2="180" y2="160" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="180" y1="160" x2="400" y2="80" stroke="url(#lineGrad)" strokeWidth="1" />
        </g>

        <g className="orbit-fast" style={{ transformOrigin: "400px 220px" }}>
          <circle cx="400" cy="220" r="100" fill="none" stroke="oklch(28% 0.02 280)" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="500" cy="220" r="6" fill="oklch(78% 0.13 50)" />
          <circle cx="300" cy="220" r="4" fill="oklch(64% 0.16 40)" />
        </g>

        <g className="pulse-center" style={{ transformOrigin: "400px 220px" }}>
          <circle cx="400" cy="220" r="14" fill="oklch(78% 0.13 50)" opacity="0.9" />
          <circle cx="400" cy="220" r="22" fill="none" stroke="oklch(78% 0.13 50)" strokeWidth="0.5" />
        </g>
      </svg>

      <CodeStream />

      <style>{`
        @keyframes orbitSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes orbitFast { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes pulseCenter { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.4); opacity: 0.5; } }
        .orbit-slow { animation: orbitSlow 40s linear infinite; }
        .orbit-fast { animation: orbitFast 18s linear infinite; }
        .pulse-center { animation: pulseCenter 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .orbit-slow, .orbit-fast, .pulse-center { animation: none; }
        }
      `}</style>
    </div>
  );
}

/**
 * Code stream — przewijające się tokeny po prawej dolnej stronie.
 */
function CodeStream() {
  const ref = useRef<HTMLDivElement>(null);
  const tokens = [
    "import { Suspense }",
    "export async function",
    "<RouteHandler/>",
    "use client",
    "generateStaticParams",
    "revalidate = 3600",
    "edge runtime",
    "ISR enabled",
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    const tick = () => {
      const span = document.createElement("span");
      span.textContent = tokens[i % tokens.length];
      span.className = "code-token";
      el.appendChild(span);
      i++;
      while (el.children.length > 6) el.removeChild(el.firstChild!);
    };
    tick();
    const id = setInterval(tick, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-1 font-mono text-[10px] tracking-wider text-ink-faint pointer-events-none"
    >
      <style>{`
        .code-token {
          opacity: 0;
          animation: tokenIn 1.4s ease-out forwards;
        }
        @keyframes tokenIn {
          0% { opacity: 0; transform: translateX(8px); }
          15% { opacity: 0.7; transform: translateX(0); }
          85% { opacity: 0.7; }
          100% { opacity: 0; transform: translateX(-8px); }
        }
      `}</style>
    </div>
  );
}

function WordPressHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-bg flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(60,108,168,0.14) 0%, rgba(20,19,31,0) 60%)",
        }}
      />
      <div className="relative grid grid-cols-3 gap-3 wp-stack">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 sm:w-16 sm:h-16 border border-line"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>
      <style>{`
        .wp-stack > div { animation: blockGlow 4s ease-in-out infinite; }
        @keyframes blockGlow {
          0%, 100% { background: transparent; border-color: oklch(28% 0.02 280); }
          50% { background: oklch(60% 0.12 220 / 0.18); border-color: oklch(60% 0.12 220 / 0.6); }
        }
        @media (prefers-reduced-motion: reduce) { .wp-stack > div { animation: none; } }
      `}</style>
    </div>
  );
}

function AiHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-bg">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,178,134,0.22) 0%, rgba(20,19,31,0) 65%)",
        }}
      />
      <svg viewBox="0 0 800 440" className="absolute inset-0 w-full h-full" aria-hidden>
        {[...Array(40)].map((_, i) => {
          const x = (i % 8) * 100 + 50;
          const y = Math.floor(i / 8) * 80 + 40;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1.5"
              fill="oklch(78% 0.13 50)"
              opacity="0.5"
              className="ai-particle"
              style={{ animationDelay: `${(i * 0.09).toFixed(2)}s` }}
            />
          );
        })}
      </svg>
      <style>{`
        .ai-particle { animation: pulseAi 3s ease-in-out infinite; transform-origin: center; transform-box: fill-box; }
        @keyframes pulseAi {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(2.2); }
        }
        @media (prefers-reduced-motion: reduce) { .ai-particle { animation: none; } }
      `}</style>
    </div>
  );
}

function SeoHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-bg flex items-end justify-center pb-12">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,19,31,0) 0%, rgba(232,178,134,0.10) 100%)",
        }}
      />
      <div className="relative flex items-end gap-4 seo-bars">
        {[40, 70, 55, 95, 120, 80, 150].map((h, i) => (
          <div
            key={i}
            className="w-6 sm:w-8 bg-peach"
            style={{ height: `${h}px`, animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
      <style>{`
        .seo-bars > div {
          animation: barGrow 4s ease-in-out infinite;
          transform-origin: bottom;
          opacity: 0.85;
        }
        @keyframes barGrow {
          0%, 100% { transform: scaleY(0.5); opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 0.95; }
        }
        @media (prefers-reduced-motion: reduce) { .seo-bars > div { animation: none; transform: scaleY(1); } }
      `}</style>
    </div>
  );
}

function PerformanceHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] overflow-hidden bg-bg">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,19,31,0) 0%, rgba(232,178,134,0.20) 50%, rgba(20,19,31,0) 100%)",
        }}
      />
      <svg viewBox="0 0 800 440" className="absolute inset-0 w-full h-full" aria-hidden>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="800"
            y1={60 + i * 42}
            y2={60 + i * 42}
            stroke="oklch(78% 0.13 50)"
            strokeWidth="1"
            strokeDasharray="60 200"
            opacity="0.6"
            className="speed-line"
            style={{ animationDelay: `${(i * 0.15).toFixed(2)}s` }}
          />
        ))}
      </svg>
      <style>{`
        .speed-line {
          animation: speedDash 2.8s linear infinite;
        }
        @keyframes speedDash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -260; }
        }
        @media (prefers-reduced-motion: reduce) { .speed-line { animation: none; } }
      `}</style>
    </div>
  );
}
