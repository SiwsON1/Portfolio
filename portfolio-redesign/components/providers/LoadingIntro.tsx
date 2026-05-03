"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Loading intro — czarna kurtyna z "MS" mark + plasma bloom, opada na powitanie.
 * Gra raz na sesję (sessionStorage), na powrocie przewinięcia = pomijamy.
 */
export function LoadingIntro() {
  const [active, setActive] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setSkipped(true);
      setActive(false);
      return;
    }
    sessionStorage.setItem("intro-seen", "1");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setActive(false);
      },
    });

    // Counter animation
    const counterObj = { val: 0 };
    tl.to(
      counterObj,
      {
        val: 100,
        duration: 1.7,
        ease: "expo.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.floor(counterObj.val)).padStart(3, "0");
          }
        },
      },
      0
    );

    // Mark MS scale + bloom
    tl.from(
      markRef.current,
      {
        scale: 0.4,
        autoAlpha: 0,
        duration: 1.2,
        ease: "expo.out",
      },
      0
    );

    tl.from(
      bloomRef.current,
      {
        scale: 0.2,
        autoAlpha: 0,
        duration: 1.4,
        ease: "expo.out",
      },
      0.1
    );

    // Bloom expands, mark scales up
    tl.to(
      bloomRef.current,
      {
        scale: 3.5,
        autoAlpha: 0,
        duration: 0.8,
        ease: "expo.in",
      },
      1.7
    );

    tl.to(
      markRef.current,
      {
        scale: 1.6,
        autoAlpha: 0,
        duration: 0.7,
        ease: "expo.in",
      },
      1.75
    );

    // Curtain reveal (slide up)
    tl.to(
      rootRef.current,
      {
        yPercent: -100,
        duration: 1.1,
        ease: "expo.inOut",
      },
      2.0
    );

    return () => {
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (skipped) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg pointer-events-none"
      style={{
        display: active ? "flex" : "none",
      }}
    >
      {/* Plasma bloom */}
      <div
        ref={bloomRef}
        className="absolute"
        style={{
          width: "min(60vw, 700px)",
          height: "min(60vw, 700px)",
          background:
            "radial-gradient(ellipse at center, rgba(120, 200, 255, 0.55) 0%, rgba(58, 142, 200, 0.25) 40%, rgba(20, 19, 31, 0) 70%)",
          mixBlendMode: "screen",
          filter: "blur(20px)",
        }}
      />

      {/* MS mark center */}
      <div
        ref={markRef}
        className="relative flex items-baseline gap-3 z-10"
      >
        <span
          className="font-display italic text-ink"
          style={{
            fontSize: "clamp(4rem, 2rem + 8vw, 9rem)",
            letterSpacing: "-0.045em",
            lineHeight: 1,
            fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          }}
        >
          M
        </span>
        <span
          className="font-display text-ink"
          style={{
            fontSize: "clamp(4rem, 2rem + 8vw, 9rem)",
            letterSpacing: "-0.045em",
            lineHeight: 1,
            fontVariationSettings: '"opsz" 144, "SOFT" 20, "WONK" 0',
          }}
        >
          S
        </span>
      </div>

      {/* Bottom counter */}
      <div className="absolute bottom-10 left-0 right-0 px-6 md:px-10 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>Marcin Siwonia · est. MMXX</span>
        <span>
          [<span ref={counterRef}>000</span>]
        </span>
      </div>
    </div>
  );
}
