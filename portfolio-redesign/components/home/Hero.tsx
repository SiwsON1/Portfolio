"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleText } from "@/components/ui/ScrambleText";

const PortraitCanvas = dynamic(
  () => import("@/components/lab/WireframeCanvas").then((m) => m.WireframeCanvas),
  { ssr: false, loading: () => null }
);

const morphWords = ["NEXT.JS", "REACT", "AI", "SEO"];

export function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

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
      {/* Background ambient — soft cool radial behind portrait area */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 65% 38%, rgba(58, 142, 200, 0.16) 0%, rgba(20,19,31,0) 70%)",
        }}
      />

      {/* PORTRAIT wrapper — lower-right, większy */}
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
        {/* Outer cyan bloom — emanuje z portretu na okolicę */}
        <div
          aria-hidden
          className="absolute -inset-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(58, 142, 200, 0.35) 0%, rgba(58, 142, 200, 0) 70%)",
            mixBlendMode: "screen",
            animation: "portraitGlow 5.5s ease-in-out infinite",
          }}
        />
        {/* Secondary larger ambient halo */}
        <div
          aria-hidden
          className="absolute -inset-32 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 50% 45%, rgba(168, 218, 255, 0.18) 0%, rgba(168, 218, 255, 0) 75%)",
            mixBlendMode: "screen",
            animation: "portraitGlow 7s ease-in-out infinite reverse",
          }}
        />
        <div className="relative w-full h-full">
          <PortraitCanvas />
        </div>
      </div>

      {/* Top frame mark */}
      <div className="absolute top-24 md:top-28 left-0 right-0 px-6 md:px-10 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>EST. MMXX</span>
        <span className="hidden md:inline">Wrocław · 51.10°N · 17.03°E</span>
        <span>FRAME 0001</span>
      </div>

      {/* Main title — bottom-anchored left */}
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
                  width: "clamp(7rem, 3rem + 14vw, 12rem)",
                  height: "1.15em",
                  verticalAlign: "middle",
                  marginInline: "0.15em",
                  transform: "translateY(-0.05em)",
                }}
              >
                {/* Static peach pill background — pulses subtly */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgb(244 180 129 / 0.7)",
                    background:
                      "linear-gradient(135deg, rgba(232,178,134,0.10) 0%, rgba(232,178,134,0.02) 100%)",
                    boxShadow:
                      "0 0 24px rgba(232,178,134,0.18), inset 0 0 12px rgba(232,178,134,0.08)",
                  }}
                />
                {/* Pulsing dot left */}
                <span
                  aria-hidden
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-peach"
                  style={{ animation: "pillPulse 1.6s ease-in-out infinite" }}
                />
                {/* Word slot — full width centered */}
                <span
                  ref={wordRef}
                  className="absolute inset-0 inline-flex items-center justify-center font-mono not-italic font-medium text-peach text-center whitespace-nowrap"
                  style={{
                    fontSize: "clamp(0.95rem, 0.5rem + 1.7vw, 2rem)",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    paddingLeft: "1.3em",
                    paddingRight: "0.6em",
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

      {/* Scroll cue */}
      <a
        href="#projekty"
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10 z-10 group flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors"
        data-cursor="SCROLL"
      >
        <span className="block">scroll</span>
        <span className="block w-[1px] h-10 bg-current relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 bg-peach animate-[scrollDown_2s_ease-in-out_infinite]" />
        </span>
      </a>

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
