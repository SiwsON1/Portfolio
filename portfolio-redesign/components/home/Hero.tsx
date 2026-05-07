"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  siNextdotjs,
  siReact,
  siAnthropic,
  siWordpress,
  siWoocommerce,
  type SimpleIcon,
} from "simple-icons";

const PortraitCanvas = dynamic(
  () => import("@/components/home/WireframeCanvas").then((m) => m.WireframeCanvas),
  { ssr: false, loading: () => null }
);

type MorphEntry = { label: string; icon: SimpleIcon };
const morphEntries: MorphEntry[] = [
  { label: "NEXT.JS", icon: siNextdotjs },
  { label: "REACT", icon: siReact },
  { label: "AI", icon: siAnthropic },
  { label: "WORDPRESS", icon: siWordpress },
  { label: "WOOCOMMERCE", icon: siWoocommerce },
];

export function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const iconPathRef = useRef<SVGPathElement>(null);
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

    const wordEl = wordRef.current;
    const iconEl = iconRef.current;
    const pathEl = iconPathRef.current;
    let i = 0;
    const tick = () => {
      i = (i + 1) % morphEntries.length;
      const next = morphEntries[i];
      gsap.to([wordEl, iconEl], {
        duration: 0.4,
        y: "-100%",
        autoAlpha: 0,
        ease: "expo.in",
        onComplete: () => {
          wordEl.textContent = next.label;
          if (pathEl) pathEl.setAttribute("d", next.icon.path);
          gsap.fromTo(
            [wordEl, iconEl],
            { y: "100%", autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.7, ease: "expo.out" }
          );
        },
      });
    };
    const id = window.setInterval(tick, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-bg" style={{ height: "100svh", minHeight: "640px", maxHeight: "1100px" }}>
      {/* Background ambient — soft cool radial behind portrait area */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 65% 38%, rgba(58, 142, 200, 0.16) 0%, rgba(20,19,31,0) 70%)",
        }}
      />

      {/* PORTRAIT wrapper — lower-right. Mobile mniejsza i wyżej żeby nie kolidowała z H1. */}
      <div
        ref={portraitRef}
        className="absolute z-[20] top-[8%] md:top-[16%] -right-[12%] md:right-[-4%] w-[58vw] md:w-[min(64vw,760px)] aspect-square"
        style={{ pointerEvents: "none" }}
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
        <div className="relative w-full h-full" style={{ pointerEvents: "auto" }}>
          <PortraitCanvas />
        </div>
      </div>

      {/* Top frame mark */}
      <div className="absolute top-24 md:top-28 left-0 right-0 px-6 md:px-10 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>EST. MMXX</span>
        <span className="hidden md:inline">Wrocław · 51.10°N · 17.03°E</span>
        <span>FRAME 0001</span>
      </div>

      {/* Main title — bottom-anchored left. pointer-events-none żeby nie blokował drag-to-rotate sfery po prawej (z-15). */}
      <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-20 md:pb-28 z-10 pointer-events-none">
        <h1
          ref={titleRef}
          className="display text-ink"
          style={{
            // fluid: bierz mniejsze z vw vs vh, żeby na niskich monitorach (np. mały Mac 1280x800) H1 nie rozjeżdżał poza viewport
            fontSize: "clamp(2.25rem, min(6.8vw, 11.5vh), 8rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
          }}
        >
          <span className="block overflow-hidden">
            <span className="line block">
              <em>Marcin</em> Siwonia
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="line block">
              buduje{" "}
              <span
                className="inline-flex items-center justify-center align-middle relative rounded-full"
                style={{
                  width: "0.85em",
                  height: "0.85em",
                  verticalAlign: "middle",
                  marginInline: "0.18em",
                  border: "1px solid rgb(244 180 129 / 0.5)",
                  background: "rgba(232, 178, 134, 0.04)",
                }}
                aria-label={morphEntries[0].label}
              >
                <svg
                  ref={iconRef}
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="shrink-0"
                  style={{
                    width: "0.55em",
                    height: "0.55em",
                  }}
                >
                  <defs>
                    <linearGradient id="hero-morph-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A8DAFF" />
                      <stop offset="100%" stopColor="#E8B286" />
                    </linearGradient>
                  </defs>
                  <path ref={iconPathRef} d={morphEntries[0].icon.path} fill="url(#hero-morph-grad)" />
                </svg>
                {/* SR-only label żeby zostało semantyczne nazwy */}
                <span ref={wordRef} className="sr-only">{morphEntries[0].label}</span>
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="line block">
              <em>z polotem.</em>
            </span>
          </span>
        </h1>

        {/* Screen-reader semantic H1 — pełna fraza SEO */}
        <h2 className="sr-only">
          Tworzenie stron www Wrocław. Marcin Siwonia — freelancer i programista Next.js, React, WordPress, WooCommerce. Wdrożenia AI. Sześć lat doświadczenia, ponad 30 wdrożeń komercyjnych w Polsce i Niemczech od 2020 roku.
        </h2>

        <div className="mt-6 md:mt-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <p
            className="prose-bound text-ink-mute"
            style={{ fontSize: "clamp(0.875rem, 0.5rem + 0.6vw, 1.125rem)", lineHeight: 1.5 }}
          >
            Niezależny web developer z Wrocławia. <strong className="text-ink font-normal">Tworzenie stron www</strong>,
            sklepów <strong className="text-ink font-normal">WooCommerce</strong>, aplikacji <strong className="text-ink font-normal">Next.js</strong> i <strong className="text-ink font-normal">React</strong>,
            wdrożenia <strong className="text-ink font-normal">AI</strong>.
            Ponad 30 wdrożeń komercyjnych dla klientów w Polsce i Niemczech od 2020 roku.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
