"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleText } from "@/components/ui/ScrambleText";

const morphWords = ["NEXT.JS", "REACT", "AI", "SEO"];

const PortraitCanvas = dynamic(
  () => import("@/components/home/Atmosphere").then((m) => m.PortraitCanvas),
  { ssr: false, loading: () => null }
);
const WireframeCanvas = dynamic(
  () => import("./WireframeCanvas").then((m) => m.WireframeCanvas),
  { ssr: false, loading: () => null }
);
const CodeRainCanvas = dynamic(
  () => import("./CodeRainCanvas").then((m) => m.CodeRainCanvas),
  { ssr: false, loading: () => null }
);
const NebulaCanvas = dynamic(
  () => import("./NebulaCanvas").then((m) => m.NebulaCanvas),
  { ssr: false, loading: () => null }
);

const VISUALS = {
  portrait: PortraitCanvas,
  wireframe: WireframeCanvas,
  coderain: CodeRainCanvas,
  nebula: NebulaCanvas,
} as const;

type VisualKey = keyof typeof VISUALS;

/**
 * HeroVariant — ten sam layout co Hero.tsx (text bottom-left + visual lower-right
 * + marquee + scroll cue + frame mark) ale z wymiennym wizualem.
 */
export function HeroVariant({
  visual,
  label,
}: {
  visual: VisualKey;
  label: string;
}) {
  const wordRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const Visual = VISUALS[visual];

  useEffect(() => {
    if (!wordRef.current || !titleRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      const lines = titleRef.current.querySelectorAll(".line");
      gsap.from(lines, {
        y: "110%",
        autoAlpha: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: "expo.out",
        delay: 0.2,
      });
      gsap.from(portraitRef.current, {
        autoAlpha: 0,
        scale: 0.85,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.1,
      });
    }
    const el = wordRef.current;
    let i = 0;
    const tick = () => {
      i = (i + 1) % morphWords.length;
      gsap.to(el, {
        duration: 0.4,
        y: "-100%",
        autoAlpha: 0,
        ease: "expo.in",
        onComplete: () => {
          el.textContent = morphWords[i];
          gsap.fromTo(
            el,
            { y: "100%", autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.7, ease: "expo.out" }
          );
        },
      });
    };
    const id = window.setInterval(tick, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-bg">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 65% 38%, rgba(58, 142, 200, 0.16) 0%, rgba(20,19,31,0) 70%)",
        }}
      />

      {/* Visual lower-right */}
      <div
        ref={portraitRef}
        className="absolute z-[1] pointer-events-auto"
        style={{
          top: "16%",
          right: "-4%",
          width: "min(64vw, 760px)",
          height: "min(64vw, 760px)",
        }}
      >
        <Visual />
      </div>

      {/* Top frame mark */}
      <div className="absolute top-24 md:top-28 left-0 right-0 px-6 md:px-10 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>EST. MMXX</span>
        <span className="hidden md:inline">{label}</span>
        <span>FRAME 0001</span>
      </div>

      {/* Main title */}
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-28 md:pb-36 z-10">
        <h1
          ref={titleRef}
          className="display text-ink"
          style={{ fontSize: "clamp(2.75rem, 1.2rem + 8.5vw, 11rem)" }}
        >
          <span className="block overflow-hidden">
            <span className="line block">
              <em>
                <ScrambleText>Marcin</ScrambleText>
              </em>{" "}
              <ScrambleText>Siwonia</ScrambleText>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="line block">
              buduje{" "}
              <span
                className="inline-flex items-center align-middle relative overflow-hidden"
                style={{
                  width: "clamp(6.5rem, 2.5rem + 14vw, 11rem)",
                  height: "1.05em",
                  verticalAlign: "middle",
                  marginInline: "0.1em",
                  transform: "translateY(-0.05em)",
                }}
              >
                <span
                  ref={wordRef}
                  className="absolute inset-0 inline-flex items-center justify-center font-mono not-italic font-medium text-peach text-center whitespace-nowrap"
                  style={{
                    fontSize: "clamp(1rem, 0.5rem + 1.8vw, 2.1rem)",
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                    border: "1px solid rgb(244 180 129 / 0.55)",
                    borderRadius: "9999px",
                    padding: "0",
                  }}
                >
                  {morphWords[0]}
                </span>
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="line block">
              <em>
                <ScrambleText>z polotem.</ScrambleText>
              </em>
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <p
            className="prose-bound text-ink-mute"
            style={{ fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.25rem)" }}
          >
            Niezależny web developer z Wrocławia. Tworzenie stron www,
            aplikacje Next.js i React, wdrożenia AI, pozycjonowanie SEO.
            Ponad trzydzieści wdrożeń komercyjnych dla klientów w Polsce
            i Niemczech od 2020 roku.
          </p>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-peach animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-peach" />
            </span>
            <span>otwarty na nowe projekty</span>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-ink/10 backdrop-blur-[1px] overflow-hidden flex items-center z-10">
        <div className="flex whitespace-nowrap animate-[marquee_38s_linear_infinite] font-mono text-[11px] uppercase tracking-[0.3em] text-ink/70">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-8">Tworzenie stron www</span>
              <span className="text-peach">●</span>
              <span className="px-8">Aplikacje Next.js</span>
              <span className="text-peach">●</span>
              <span className="px-8">Aplikacje React</span>
              <span className="text-peach">●</span>
              <span className="px-8">Wdrożenia AI</span>
              <span className="text-peach">●</span>
              <span className="px-8">Pozycjonowanie SEO</span>
              <span className="text-peach">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
