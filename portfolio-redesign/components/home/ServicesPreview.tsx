"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesPreview() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".sv-row", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".sv-list",
          start: "top 75%",
          once: true,
        },
      });
      gsap.from(".sv-header > *", {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="uslugi"
      className="relative px-6 py-32 md:px-10 md:py-48 overflow-hidden border-t border-line"
    >
      {/* Subtle ambient glow trailing the active item */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: activeIdx !== null ? 1 : 0,
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(58,142,200,0.08) 0%, rgba(20,19,31,0) 70%)",
        }}
      />

      <div className="sv-header relative mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Co robię · {String(services.length).padStart(2, "0")}</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-h1 text-ink">
            Pięć <em>specjalności</em>,
            <br />
            jeden warsztat.
          </h2>
          <p className="mt-6 prose-bound text-ink-mute text-lead">
            Nie rozpraszam się na wszystko. Te pięć obszarów to suma
            tego co potrafię dostarczyć tak, żeby się potem nie wstydzić.
          </p>
        </div>
      </div>

      <ul className="sv-list relative border-t border-line">
        {services.map((s, i) => (
          <Row
            key={s.slug}
            service={s}
            index={i}
            active={activeIdx === i}
            onEnter={() => setActiveIdx(i)}
            onLeave={() => setActiveIdx((cur) => (cur === i ? null : cur))}
          />
        ))}
      </ul>
    </section>
  );
}

function Row({
  service: s,
  index,
  active,
  onEnter,
  onLeave,
}: {
  service: (typeof services)[number];
  index: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <li className="sv-row group border-b border-line relative overflow-hidden">
      {/* Peach wash sweep on active */}
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left pointer-events-none"
        style={{
          transform: active ? "scaleX(1)" : "scaleX(0)",
          background:
            "linear-gradient(90deg, rgba(232,178,134,0.05) 0%, rgba(232,178,134,0.02) 60%, rgba(232,178,134,0) 100%)",
        }}
      />

      <Link
        href={`/uslugi/${s.slug}`}
        className="relative block py-10 md:py-14"
        data-cursor="OTWÓRZ"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline">
          <span
            className={`col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${
              active ? "text-peach" : "text-ink-faint"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="col-span-10 md:col-span-7">
            <h3
              className={`font-display italic transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active ? "text-peach" : "text-ink"
              }`}
              style={{
                fontSize: "clamp(2rem, 1rem + 4vw, 4.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                transform: active ? "translateX(12px)" : "translateX(0)",
              }}
            >
              {s.title}
            </h3>

            {/* Sub-line that grows on active */}
            <div
              aria-hidden
              className="mt-3 h-px bg-peach origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: active ? "scaleX(1)" : "scaleX(0)",
                width: "5rem",
              }}
            />
          </div>

          <div
            className={`hidden md:block md:col-span-3 transition-all duration-700 ${
              active ? "opacity-100 translate-x-0" : "opacity-60 translate-x-2"
            }`}
          >
            <p className="text-ink-mute text-sm leading-relaxed">
              {s.lead.split(".")[0]}.
            </p>
          </div>

          <span
            className={`col-span-12 md:col-span-1 text-right font-mono text-base transition-all duration-500 ${
              active
                ? "text-peach translate-x-2"
                : "text-ink-mute group-hover:text-peach"
            }`}
          >
            →
          </span>
        </div>
      </Link>
    </li>
  );
}
