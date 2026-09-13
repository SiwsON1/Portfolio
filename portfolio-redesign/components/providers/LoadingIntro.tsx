"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

// Ukrywa overlay przed pierwszym malowaniem, zanim React się zhydratuje.
// Bez tego przy powrocie w tej samej sesji overlay zasłaniał treść do hydracji
// i był elementem LCP.
const HIDE_IF_SEEN = `try{if(sessionStorage.getItem("intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches){document.getElementById("ms-intro").style.display="none"}}catch(e){}`;

export function LoadingIntro() {
  // Intro tylko przy twardym wejściu na stronę główną. Landingi i wpisy
  // z wyszukiwarki pokazują treść od razu.
  const pathname = usePathname();
  const [enabled] = useState(pathname === "/");
  const [active, setActive] = useState(true);
  const [skipped, setSkipped] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const letterMRef = useRef<HTMLSpanElement>(null);
  const letterSRef = useRef<HTMLSpanElement>(null);
  const shineRef = useRef<SVGRectElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const counterShellRef = useRef<HTMLSpanElement>(null);
  const captionRef = useRef<HTMLSpanElement>(null);
  const creditRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !enabled) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(false);
      return;
    }

    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setSkipped(true);
      setActive(false);
      return;
    }

    sessionStorage.setItem("intro-seen", "1");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const counter = { value: 0 };

    let failsafeId = 0;
    const dismiss = () => {
      window.clearTimeout(failsafeId);
      document.body.style.overflow = previousOverflow;
      setActive(false);
    };

    gsap.set(rootRef.current, {
      yPercent: 0,
      willChange: "transform",
    });

    gsap.set(markRef.current, {
      transformStyle: "preserve-3d",
      transformPerspective: 900,
      willChange: "transform",
    });

    gsap.set(letterMRef.current, {
      autoAlpha: 0,
      scale: 0.7,
      rotateY: 90,
      rotateX: 30,
      transformOrigin: "50% 50%",
      transformStyle: "preserve-3d",
      transformPerspective: 900,
      filter: "drop-shadow(0 18px 34px rgba(232,178,134,0.12))",
      willChange: "transform, opacity, filter",
    });

    gsap.set(letterSRef.current, {
      autoAlpha: 0,
      scale: 0.7,
      rotateY: -90,
      rotateX: -30,
      transformOrigin: "50% 50%",
      transformStyle: "preserve-3d",
      transformPerspective: 900,
      filter: "drop-shadow(0 18px 34px rgba(232,178,134,0.12))",
      willChange: "transform, opacity, filter",
    });

    gsap.set(shineRef.current, {
      x: -360,
      autoAlpha: 0,
      willChange: "transform, opacity",
    });

    gsap.set([counterShellRef.current, captionRef.current, creditRef.current], {
      autoAlpha: 0,
      y: 8,
      willChange: "transform, opacity",
    });

    const pulseM = gsap.to(letterMRef.current, {
      filter: "drop-shadow(0 18px 42px rgba(232,178,134,0.34))",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    const pulseS = gsap.to(letterSRef.current, {
      filter: "drop-shadow(0 18px 42px rgba(232,178,134,0.32))",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    const tl = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        pulseM.kill();
        pulseS.kill();
        dismiss();
      },
    });

    tl.to(counterShellRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "expo.out" }, 0);
    tl.to(captionRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "expo.out" }, 0);
    tl.to(creditRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "expo.out" }, 0.04);

    tl.to(
      counter,
      {
        value: 100,
        duration: 2.1,
        ease: "power3.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.floor(counter.value)).padStart(3, "0");
          }
        },
      },
      0
    );

    tl.to(
      letterMRef.current,
      {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.7,
        ease: "expo.out",
        onStart: () => pulseM.play(),
      },
      0.3
    );

    tl.to(
      letterSRef.current,
      {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.7,
        ease: "expo.out",
        onStart: () => pulseS.play(),
      },
      0.5
    );

    tl.to(
      shineRef.current,
      {
        x: 360,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.inOut",
      },
      1.3
    );

    tl.to(shineRef.current, { autoAlpha: 0, duration: 0.12, ease: "power2.inOut" }, 1.78);

    tl.to(
      letterMRef.current,
      {
        rotateY: 3,
        duration: 0.15,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
      },
      1.9
    );

    tl.to(
      letterSRef.current,
      {
        rotateY: -3,
        duration: 0.15,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
      },
      1.9
    );

    tl.call(
      () => {
        pulseM.kill();
        pulseS.kill();
      },
      [],
      2.2
    );

    tl.to(
      letterMRef.current,
      {
        scale: 0.95,
        autoAlpha: 0,
        filter: "blur(6px) drop-shadow(0 18px 28px rgba(232,178,134,0))",
        duration: 0.4,
        ease: "expo.in",
      },
      2.2
    );

    tl.to(
      letterSRef.current,
      {
        scale: 0.95,
        autoAlpha: 0,
        filter: "blur(6px) drop-shadow(0 18px 28px rgba(232,178,134,0))",
        duration: 0.4,
        ease: "expo.in",
      },
      2.25
    );

    tl.to(
      [counterShellRef.current, captionRef.current, creditRef.current],
      {
        autoAlpha: 0,
        y: -6,
        duration: 0.35,
        ease: "power2.inOut",
      },
      2.2
    );

    tl.to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, 2.2);

    // Failsafe: jeśli GSAP się zatnie (licznik stoi na [000]), nie zostawiaj
    // blokującego overlaya na zawsze — wymuś zamknięcie po max czasie animacji.
    failsafeId = window.setTimeout(dismiss, 4200);

    return () => {
      window.clearTimeout(failsafeId);
      pulseM.kill();
      pulseS.kill();
      tl.kill();
      document.body.style.overflow = previousOverflow;
    };
  }, [enabled]);

  if (skipped || !enabled) return null;

  return (
    <>
    <div
      ref={rootRef}
      id="ms-intro"
      suppressHydrationWarning
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-bg"
      style={{
        display: active ? "flex" : "none",
        willChange: "transform",
      }}
    >
      <div
        ref={markRef}
        className="relative flex select-none items-center justify-center font-display italic text-[#F5E9D8]"
        style={{
          fontSize: "clamp(7rem, 4rem + 15vw, 15rem)",
          lineHeight: 0.78,
          letterSpacing: "-0.08em",
          fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          perspective: "900px",
          transformStyle: "preserve-3d",
        }}
      >
        <span ref={letterMRef} className="relative inline-block">
          M
        </span>
        <span ref={letterSRef} className="relative inline-block">
          S
        </span>

        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 420 220"
          aria-hidden
          style={{ mixBlendMode: "screen" }}
        >
          <defs>
            <linearGradient id="ms-intro-shine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(232,178,134,0)" />
              <stop offset="42%" stopColor="rgba(232,178,134,0.22)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.92)" />
              <stop offset="58%" stopColor="rgba(245,233,216,0.28)" />
              <stop offset="100%" stopColor="rgba(232,178,134,0)" />
            </linearGradient>
            <clipPath id="ms-intro-clip">
              <text
                x="210"
                y="160"
                textAnchor="middle"
                fontFamily="var(--font-fraunces), Fraunces, serif"
                fontSize="170"
                fontStyle="italic"
                fontWeight="700"
                letterSpacing="-18"
              >
                MS
              </text>
            </clipPath>
          </defs>
          <rect
            ref={shineRef}
            x="0"
            y="-20"
            width="120"
            height="260"
            fill="url(#ms-intro-shine)"
            clipPath="url(#ms-intro-clip)"
            transform="skewX(-14)"
          />
        </svg>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex items-end justify-between px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute md:px-10">
        <span ref={creditRef}>Marcin Siwonia · est. MMXX</span>
        <span className="flex items-center gap-3">
          <span
            ref={captionRef}
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-faint"
          >
            ŁADUJĘ
          </span>
          <span
            ref={counterShellRef}
            style={{
              filter: "drop-shadow(0 0 8px rgba(232,178,134,0.45))",
            }}
          >
            [<span ref={counterRef}>000</span>]
          </span>
        </span>
      </div>
    </div>
    <script dangerouslySetInnerHTML={{ __html: HIDE_IF_SEEN }} />
    </>
  );
}
