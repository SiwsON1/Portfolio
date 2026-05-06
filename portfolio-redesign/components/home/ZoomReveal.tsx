"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Sticky zoom-through transition — scroll wjeżdża "głębiej" w portal.
 * Sekcja przykleja się na 200vh, podczas których:
 * - Etykieta + portal-frame startują mali (scale 0.4), centrowani.
 * - Scrolla się → portal puchnie do scale 12, jednocześnie znika opacity.
 * - W środku frame'a widać następną scenę (peach mesh + szum) która rośnie
 *   wraz z portalem — efekt "wjazdu kamery do bramy".
 * - Tekst "WEJDŹMY GŁĘBIEJ" zostaje na chwilę pinned, potem fade out.
 */
export function ZoomReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Eyebrow + counter — fade in szybko, fade out pod koniec
      tl.fromTo(
        ".zr-eyebrow",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.15 },
        0
      );
      tl.to(".zr-eyebrow", { autoAlpha: 0, duration: 0.15 }, 0.6);

      // Headline — wyłania się i potem rozjeżdża
      tl.fromTo(
        ".zr-headline",
        { autoAlpha: 0, scale: 0.92, y: 30 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.2 },
        0.05
      );
      tl.to(
        ".zr-headline",
        { autoAlpha: 0, scale: 1.4, y: -40, duration: 0.3 },
        0.5
      );

      // PORTAL frame — startuje mały, rośnie do >viewport, fade out na końcu
      tl.fromTo(
        ".zr-portal",
        { scale: 0.42, autoAlpha: 0.0 },
        { scale: 0.42, autoAlpha: 1, duration: 0.1 },
        0
      );
      tl.to(
        ".zr-portal",
        {
          scale: 14,
          autoAlpha: 0,
          ease: "power2.in",
          duration: 0.85,
        },
        0.15
      );

      // Inner peach mesh — symuluje "scenę za bramą", też rośnie
      tl.fromTo(
        ".zr-inner",
        { scale: 1, autoAlpha: 0.55 },
        { scale: 2.4, autoAlpha: 1, duration: 0.85 },
        0.15
      );

      // Promienie — rotacja podczas scrolla
      tl.to(
        ".zr-rays",
        { rotation: 35, duration: 1, ease: "none" },
        0
      );

      // Coordinates ticker — ucieka w głąb
      tl.fromTo(
        ".zr-coords",
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.15 },
        0.05
      );
      tl.to(
        ".zr-coords",
        { autoAlpha: 0, scale: 1.6, duration: 0.3 },
        0.55
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-bg"
      aria-label="Zoom transition"
    >
      {/* Tło: subtelny noise + gradient żeby nie był pure black */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 65%)",
        }}
      />

      {/* Promienie — cienkie linie wychodzące ze środka */}
      <div
        aria-hidden
        className="zr-rays absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <svg width="120%" height="120%" viewBox="-100 -100 200 200" className="opacity-20">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={Math.cos((angle * Math.PI) / 180) * 100}
                y2={Math.sin((angle * Math.PI) / 180) * 100}
                stroke="#A8DAFF"
                strokeWidth="0.15"
              />
            );
          })}
        </svg>
      </div>

      {/* TOP — eyebrow + coordinates */}
      <div className="zr-eyebrow absolute top-32 left-0 right-0 px-6 md:px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute z-20">
        <span>Sekwencja · 02</span>
        <span className="hidden md:inline">PORTAL · WEJŚCIE GŁĘBIEJ</span>
        <span>Frame 0042</span>
      </div>

      {/* HEADLINE — pod portalem */}
      <div className="zr-headline absolute bottom-32 left-0 right-0 px-6 md:px-10 text-center z-20 pointer-events-none">
        <p
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-peach mb-4"
        >
          ↓ scroll ↓
        </p>
        <h2
          className="display text-ink"
          style={{ fontSize: "clamp(2rem, 1rem + 5vw, 5rem)", lineHeight: 1.05 }}
        >
          Wejdź <em>głębiej</em>.
        </h2>
        <p
          className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute max-w-md mx-auto"
        >
          Trzynaście realizacji za bramą
        </p>
      </div>

      {/* COORDINATES — pod tytułem */}
      <div className="zr-coords absolute bottom-12 left-0 right-0 px-6 md:px-10 flex items-center justify-center gap-8 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-faint z-20">
        <span>LAT 51.10°N</span>
        <span className="text-peach">●</span>
        <span>LON 17.03°E</span>
        <span className="text-peach">●</span>
        <span>EST. MMXX</span>
      </div>

      {/* PORTAL — bramka pośrodku, skaluje się przez cały scroll */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className="zr-portal relative"
          style={{
            width: "min(56vw, 520px)",
            height: "min(56vw, 520px)",
            willChange: "transform, opacity",
          }}
        >
          {/* Outer glow */}
          <div
            aria-hidden
            className="absolute -inset-12"
            style={{
              background:
                "radial-gradient(circle, rgba(232,178,134,0.45) 0%, rgba(58,142,200,0.20) 35%, rgba(20,19,31,0) 70%)",
              mixBlendMode: "screen",
            }}
          />

          {/* Frame ring — peach */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid rgb(232 178 134 / 0.85)",
              boxShadow:
                "inset 0 0 80px rgba(232,178,134,0.25), 0 0 80px rgba(232,178,134,0.35)",
            }}
          />

          {/* Inner ring — cooler blue */}
          <div
            className="absolute inset-6 rounded-full"
            style={{
              border: "1px solid rgb(168 218 255 / 0.55)",
            }}
          />

          {/* Inner mesh — peach gradient, cel "wnętrza portalu" */}
          <div
            className="zr-inner absolute inset-10 rounded-full overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 45%, #FBC58E 0%, #E8B286 30%, #C97A4A 65%, #2A1F3A 100%)",
              willChange: "transform, opacity",
            }}
          >
            {/* Subtle noise overlay (CSS-only) */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.04) 0deg 2deg, transparent 2deg 4deg)",
                mixBlendMode: "overlay",
              }}
            />
          </div>

          {/* Tick marks na obwodzie — orientation marks */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            aria-hidden
          >
            {[0, 90, 180, 270].map((deg) => (
              <line
                key={deg}
                x1="50"
                y1="2"
                x2="50"
                y2="6"
                stroke="rgb(232 178 134 / 0.9)"
                strokeWidth="0.6"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display italic text-bg"
              style={{
                fontSize: "clamp(2.5rem, 1rem + 4vw, 4rem)",
                letterSpacing: "-0.04em",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              MS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
