"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { HERO, PORTFOLIO } from "@/src/content/labContent";

function doubleLetters(value: string) {
  return value
    .split("")
    .map((char) => (char === " " ? "  " : `${char}${char}`))
    .join("");
}

export function HeroAtomic() {
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const doubledHeadline = useMemo(() => doubleLetters("STRONY W NEXT.JS"), []);

  useEffect(() => {
    let frame = 0;
    let fadeTimer: ReturnType<typeof setTimeout> | null = null;
    const startedAt = performance.now();
    const duration = 1500;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.round(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        fadeTimer = setTimeout(() => setLoaded(true), 600);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#1E1D1E] px-6 pb-20 pt-28 text-fg md:px-10 md:pt-36"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setParallax({
          x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 20,
          y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 20,
        });
      }}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      {!loaded ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#1E1D1E] transition-opacity duration-[600ms] ease-[var(--ease-out-expo)]">
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-32 w-32">
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_30px_rgba(255,232,31,0.7)]" />
              <span className="atomic-orbit atomic-orbit-a absolute inset-0 rounded-full border border-accent/60" />
              <span className="atomic-orbit atomic-orbit-b absolute inset-4 rounded-full border border-white/20" />
              <span className="atomic-orbit atomic-orbit-c absolute inset-8 rounded-full border border-accent/35" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              {counter}%
            </p>
          </div>
        </div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(circle_at_50%_10%,rgba(255,232,31,0.12),transparent_42%)]"
      />

      <div className={`mx-auto max-w-7xl text-center ${loaded ? "atomic-in" : "opacity-0"}`}>
        <p className="mx-auto inline-flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
          PROJEKT V7 · ATOMIC INSPIRED
          <span className="h-px w-10 bg-accent" />
        </p>

        <h1 className="mt-8 break-words font-sans text-[clamp(3rem,10vw,10rem)] font-black leading-[0.86] tracking-[-0.02em] text-fg">
          {doubledHeadline}
          <span className="mt-4 block font-display text-[clamp(2.5rem,7vw,7rem)] italic font-light text-accent">
            {HERO.h1Accent}
          </span>
        </h1>

        <p className="mt-7 font-display text-2xl italic font-light text-fg-muted/85 md:text-3xl">
          szybkie, bezpieczne, gotowe na SEO
        </p>
      </div>

      <div
        className={`relative mx-auto mt-14 h-[430px] max-w-4xl md:h-[560px] ${loaded ? "atomic-in atomic-delay-1" : "opacity-0"}`}
      >
        <div
          className="absolute left-[8%] top-8 w-[240px] rotate-[-8deg] rounded-[34px] border border-white/15 bg-black p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-[var(--ease-out-expo)] md:left-[22%] md:w-[300px]"
          style={{
            transform: `translate3d(${parallax.x * -0.45}px, ${parallax.y * -0.35}px, 0) rotate(-8deg)`,
          }}
        >
          <div className="relative aspect-[9/19] overflow-hidden rounded-[26px] bg-bg-elev">
            <Image src={PORTFOLIO[0].image} alt="" fill sizes="300px" className="object-cover" priority />
          </div>
        </div>
        <div
          className="absolute right-[5%] top-0 w-[255px] rotate-[7deg] rounded-[36px] border border-accent/50 bg-black p-3 shadow-[0_0_80px_rgba(255,232,31,0.13),0_45px_120px_rgba(0,0,0,0.65)] transition-transform duration-700 ease-[var(--ease-out-expo)] md:right-[22%] md:w-[330px]"
          style={{
            transform: `translate3d(${parallax.x * 0.55}px, ${parallax.y * 0.45}px, 0) rotate(7deg)`,
          }}
        >
          <div className="relative aspect-[9/19] overflow-hidden rounded-[28px] bg-bg-elev">
            <Image src={PORTFOLIO[1].image} alt="" fill sizes="330px" className="object-cover" priority />
          </div>
        </div>
      </div>

      <div className={`mx-auto mt-2 flex justify-center ${loaded ? "atomic-in atomic-delay-2" : "opacity-0"}`}>
        <a
          href="#"
          className="inline-flex items-center gap-4 rounded-full border border-border-strong/70 px-5 py-3 transition duration-500 ease-[var(--ease-out-expo)] hover:border-accent hover:text-accent"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-lg text-[#1E1D1E]">
            ▶
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
            Showreel · 0:33
          </span>
        </a>
      </div>

      <div className={`mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 border-y border-border-strong/50 py-5 font-mono text-[10px] uppercase tracking-[0.24em] text-fg-muted md:grid-cols-3 ${loaded ? "atomic-in atomic-delay-3" : "opacity-0"}`}>
        <p>20+ years on the market</p>
        <p>165+ implementations</p>
        <p>60+ active clients</p>
      </div>

      <style jsx global>{`
        @keyframes atomicSpin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes atomicFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .atomic-orbit::before {
          content: "";
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #ffe81f;
          box-shadow: 0 0 18px rgba(255, 232, 31, 0.85);
        }
        .atomic-orbit-a {
          animation: atomicSpin 1.5s linear infinite;
        }
        .atomic-orbit-b {
          animation: atomicSpin 2.1s linear infinite reverse;
          transform: rotate(64deg);
        }
        .atomic-orbit-c {
          animation: atomicSpin 2.8s linear infinite;
          transform: rotate(-32deg);
        }
        .atomic-in {
          animation: atomicFadeUp 900ms var(--ease-out-expo) both;
        }
        .atomic-delay-1 {
          animation-delay: 100ms;
        }
        .atomic-delay-2 {
          animation-delay: 200ms;
        }
        .atomic-delay-3 {
          animation-delay: 300ms;
        }
        @media (prefers-reduced-motion: reduce) {
          .atomic-orbit-a,
          .atomic-orbit-b,
          .atomic-orbit-c,
          .atomic-in {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
