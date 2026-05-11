"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  siWordpress,
  siWoocommerce,
  siNextdotjs,
  siReact,
  siAnthropic,
  type SimpleIcon,
} from "simple-icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Tech = {
  icon: SimpleIcon;
  label: string;
  caption: string;
  href: string;
  spin?: boolean;
};

const TECH: Tech[] = [
  {
    icon: siWordpress,
    label: "WordPress",
    caption: "Custom theme, ACF Pro, edycja 1:1 z designem.",
    href: "/uslugi/tworzenie-stron-wordpress",
  },
  {
    icon: siWoocommerce,
    label: "WooCommerce",
    caption: "Przelewy24, InPost, GA4 enhanced ecommerce.",
    href: "/uslugi/sklepy-internetowe-woocommerce",
  },
  {
    icon: siNextdotjs,
    label: "Next.js",
    caption: "App Router, RSC, Vercel edge, ISR.",
    href: "/uslugi/aplikacje-nextjs",
  },
  {
    icon: siReact,
    label: "React",
    caption: "TypeScript, hooks, custom interaktywność.",
    href: "/uslugi/aplikacje-react",
    spin: true,
  },
  {
    icon: siAnthropic,
    label: "AI",
    caption: "OpenAI, Anthropic, custom workflow + RAG.",
    href: "/uslugi/wdrozenia-ai",
  },
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".ts-eyebrow, .ts-title, .ts-lead", {
        y: 24,
        autoAlpha: 0,
        duration: 1.0,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
      gsap.from(".ts-card", {
        y: 40,
        autoAlpha: 0,
        scale: 0.94,
        duration: 1.0,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: ".ts-grid", start: "top 85%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 md:px-10 md:py-40 overflow-hidden border-t border-line"
      aria-label="Stack technologiczny"
    >
      {/* Ambient — peach z lewej, blue z prawej */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(232,178,134,0.08) 0%, rgba(20,19,31,0) 60%), radial-gradient(ellipse 50% 40% at 85% 70%, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 60%)",
        }}
      />

      <header className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-28">
        <div className="md:col-span-3">
          <p className="ts-eyebrow eyebrow">Stack · {TECH.length}</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="ts-title display text-h1 text-ink">
            Z czym <em>pracuję</em> na co dzień.
          </h2>
          <p className="ts-lead mt-6 md:mt-8 prose-bound text-ink-mute text-lead">
            Stack dobierany pod problem, nie pod modę. WordPress gdy klient ma
            edytować, Next.js gdy potrzeba performance i custom logiki, AI gdy
            warto skrócić proces który zżera czas.
          </p>
        </div>
      </header>

      <div className="ts-grid relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-line border-y border-line">
        {TECH.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="ts-card group relative bg-bg p-8 md:p-8 flex flex-col items-center text-center hover:bg-bg-elev transition-colors duration-500 min-h-[200px] sm:min-h-[260px] md:min-h-[320px]"
            data-cursor="OTWÓRZ"
          >
            {/* Glow background na hover */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 35%, rgba(232,178,134,0.18) 0%, rgba(58,142,200,0.10) 35%, rgba(20,19,31,0) 70%)",
                mixBlendMode: "screen",
              }}
            />

            {/* Ring delikatny na hover */}
            <div
              aria-hidden
              className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                border: "1px solid rgb(232 178 134 / 0.25)",
              }}
            />

            <div
              className="relative w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              style={{
                animation: t.spin
                  ? "tsSpin 50s linear infinite, tsPulse 6s ease-in-out infinite"
                  : "tsPulse 5s ease-in-out infinite",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden>
                <defs>
                  <linearGradient
                    id={`ts-grad-${t.icon.slug}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#A8DAFF" />
                    <stop offset="100%" stopColor="#E8B286" />
                  </linearGradient>
                </defs>
                <path d={t.icon.path} fill={`url(#ts-grad-${t.icon.slug})`} />
              </svg>
            </div>

            <h3
              className="font-display italic text-ink mb-3 transition-colors group-hover:text-peach"
              style={{
                fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {t.label}
            </h3>

            <p className="text-ink-mute text-xs md:text-sm leading-relaxed max-w-[24ch]">
              {t.caption}
            </p>

            <span className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint group-hover:text-peach transition-colors flex items-center gap-1.5">
              <span>Zobacz</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        @keyframes tsPulse {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 0 rgba(232,178,134,0)); }
          50% { opacity: 0.85; filter: drop-shadow(0 0 12px rgba(232,178,134,0.35)); }
        }
        @keyframes tsSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
