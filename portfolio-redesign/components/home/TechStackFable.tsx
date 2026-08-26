"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  },
  {
    icon: siAnthropic,
    label: "AI",
    caption: "OpenAI, Anthropic, custom workflow + RAG.",
    href: "/uslugi/wdrozenia-ai",
  },
];

/* Słowa wyłącznie z labeli i caption powyżej, nic wymyślonego */
const TICKER = [
  "WordPress",
  "ACF Pro",
  "WooCommerce",
  "Przelewy24",
  "InPost",
  "GA4",
  "Next.js",
  "App Router",
  "RSC",
  "ISR",
  "Vercel edge",
  "React",
  "TypeScript",
  "OpenAI",
  "Anthropic",
  "RAG",
];

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function TechStackFable() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const lockedRef = useRef(false);

  /* Scroll reveal, gated na reduced motion */
  useEffect(() => {
    if (!sectionRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(".tsf-head-el", {
        y: 28,
        autoAlpha: 0,
        duration: 1.1,
        stagger: 0.09,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.from(".tsf-row", {
        y: 40,
        autoAlpha: 0,
        duration: 1.0,
        stagger: 0.07,
        ease: "expo.out",
        scrollTrigger: { trigger: ".tsf-list", start: "top 84%", once: true },
      });
      gsap.from(".tsf-stage-panel", {
        autoAlpha: 0,
        y: 32,
        scale: 0.97,
        duration: 1.3,
        ease: "expo.out",
        scrollTrigger: { trigger: ".tsf-stage", start: "top 85%", once: true },
      });
      gsap.from(".tsf-ticker", {
        autoAlpha: 0,
        duration: 1.0,
        ease: "expo.out",
        scrollTrigger: { trigger: ".tsf-ticker", start: "top 95%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Auto-cykl reflektora, tylko gdy sekcja w kadrze i user nie hoveruje */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      if (!lockedRef.current) {
        setActive((a) => (a + 1) % TECH.length);
      }
    }, 3400);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-20 md:px-10 md:py-40 overflow-hidden border-t border-line"
      aria-label="Stack technologiczny"
    >
      {/* Ambient: peach z lewej u góry, overcast z prawej u dołu */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 42% at 12% 18%, rgba(232,178,134,0.07) 0%, rgba(20,19,31,0) 62%), radial-gradient(ellipse 50% 45% at 88% 78%, rgba(58,142,200,0.09) 0%, rgba(20,19,31,0) 62%)",
        }}
      />

      {/* Header w siatce sekcji: eyebrow 3 / tytuł 9 */}
      <header className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-24">
        <div className="md:col-span-3">
          <p className="tsf-head-el eyebrow">Stack · {TECH.length}</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="tsf-head-el display text-h1 text-ink">
            Z czym <em>pracuję</em> na co dzień.
          </h2>
          <p className="tsf-head-el mt-6 md:mt-8 prose-bound text-ink-mute text-lead">
            Stack dobierany pod problem, nie pod modę. WordPress gdy klient ma
            edytować, Next.js gdy potrzeba performance i custom logiki, AI gdy
            warto skrócić proces który zżera czas.
          </p>
        </div>
      </header>

      <div className="relative grid grid-cols-1 md:grid-cols-12 md:gap-10 lg:gap-14 items-start">
        {/* INDEKS: numerowana lista editorial */}
        <div
          className="tsf-list md:col-span-7 border-b border-line"
          onPointerEnter={() => {
            lockedRef.current = true;
          }}
          onPointerLeave={() => {
            lockedRef.current = false;
          }}
        >
          {TECH.map((t, i) => (
            <Link
              key={t.label}
              href={t.href}
              data-cursor="OTWÓRZ"
              data-active={i === active}
              className="tsf-row group relative grid grid-cols-[2.75rem_1fr_auto] md:grid-cols-[3.5rem_1fr_auto] items-start gap-3 md:gap-5 border-t border-line py-6 md:py-8 outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              {/* Numer + peach kreska aktywności */}
              <span className="relative pt-2 font-mono text-xs tracking-[0.22em] text-ink-faint">
                <span className="tsf-num transition-colors duration-500">
                  0{i + 1}
                </span>
                <span
                  aria-hidden
                  className="tsf-dash absolute left-0 -bottom-1 h-px w-7 bg-peach origin-left scale-x-0 transition-transform duration-700"
                  style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
                />
              </span>

              <span className="min-w-0">
                <h3
                  className="tsf-title font-display italic text-ink will-change-transform"
                  style={{
                    fontSize: "clamp(1.7rem, 1.05rem + 2.6vw, 3.1rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.04,
                    fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                  }}
                >
                  {t.label}
                </h3>
                <span className="block mt-2.5 text-ink-mute text-sm md:text-[0.9375rem] leading-relaxed max-w-[52ch]">
                  {t.caption}
                </span>
              </span>

              {/* Mobile: mała ikona. Desktop: CTA wjeżdżające na hover */}
              <span className="pt-1.5 md:pt-2.5 flex items-center">
                <span className="md:hidden w-7 h-7 opacity-80" aria-hidden>
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d={t.icon.path} fill="var(--ink-faint)" />
                  </svg>
                </span>
                <span className="tsf-cta hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-peach">
                  <span>Zobacz</span>
                  <span aria-hidden>→</span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* SCENA: sticky panel z krzyżującymi się ikonami, czysto dekoracyjny */}
        <div
          aria-hidden
          className="tsf-stage hidden md:block md:col-span-5 md:sticky md:top-24 self-start"
        >
          <div className="tsf-stage-panel relative h-[440px] lg:h-[500px] overflow-hidden border border-line bg-bg-elev/50">
            {/* Wewnętrzny glow sceny */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 75% 60% at 50% 38%, rgba(232,178,134,0.10) 0%, rgba(58,142,200,0.06) 45%, rgba(20,19,31,0) 72%)",
              }}
            />
            {/* Grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{ backgroundImage: GRAIN, mixBlendMode: "overlay" }}
            />
            {/* Narożne znaczniki */}
            <span className="absolute top-3 left-4 font-mono text-[10px] text-ink-faint select-none">
              +
            </span>
            <span className="absolute top-3 right-4 font-mono text-[10px] text-ink-faint select-none">
              +
            </span>

            {/* Widmowe numery 01-05 za ikoną */}
            {TECH.map((t, i) => (
              <div
                key={`num-${t.label}`}
                className="absolute inset-0 flex items-center justify-center pb-10"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(28px)",
                  transition:
                    "opacity 900ms var(--ease-out-expo), transform 900ms var(--ease-out-expo)",
                }}
              >
                <span
                  className="font-display italic select-none"
                  style={{
                    fontSize: "clamp(11rem, 9rem + 6vw, 15rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke:
                      "1.5px color-mix(in oklab, var(--ink) 34%, transparent)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                  }}
                >
                  0{i + 1}
                </span>
              </div>
            ))}

            {/* Ikony, crossfade transform/opacity/filter */}
            {TECH.map((t, i) => (
              <div
                key={`icon-${t.label}`}
                className="absolute inset-0 flex items-center justify-center pb-10"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(0.88)",
                  filter: i === active ? "blur(0px)" : "blur(12px)",
                  transition:
                    "opacity 700ms var(--ease-out-expo), transform 700ms var(--ease-out-expo), filter 700ms var(--ease-out-expo)",
                }}
              >
                <div className="tsf-float w-36 h-36 lg:w-44 lg:h-44">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    style={{
                      filter: "drop-shadow(0 0 30px rgba(232,178,134,0.28))",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id={`tsf-grad-${t.icon.slug}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#A8DAFF" />
                        <stop offset="100%" stopColor="#E8B286" />
                      </linearGradient>
                    </defs>
                    <path
                      d={t.icon.path}
                      fill={`url(#tsf-grad-${t.icon.slug})`}
                    />
                  </svg>
                </div>
              </div>
            ))}

            {/* Dolny pasek sceny */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between border-t border-line px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              <span>
                <span className="text-peach">0{active + 1}</span> / 0{TECH.length}
              </span>
              <span>{TECH[active].label}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker słów stacku, czysto dekoracyjny */}
      <div
        aria-hidden
        className="tsf-ticker relative mt-14 md:mt-24 -mx-6 md:-mx-10 border-y border-line overflow-hidden"
      >
        <div className="tsf-marquee flex w-max">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 py-3">
              {TICKER.map((w) => (
                <span
                  key={`${rep}-${w}`}
                  className="flex items-center gap-5 px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint whitespace-nowrap"
                >
                  <span>{w}</span>
                  <span className="text-peach/60">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Tytuł wiersza: slide + peach na aktywnym (hover ustawia aktywny) */
        .tsf-row .tsf-title {
          transition: transform 600ms var(--ease-out-expo), color 350ms ease;
        }
        .tsf-row[data-active="true"] .tsf-title {
          transform: translateX(10px);
          color: var(--peach);
        }
        .tsf-row[data-active="true"] .tsf-num {
          color: var(--peach);
        }
        .tsf-row[data-active="true"] .tsf-dash {
          transform: scaleX(1);
        }

        /* CTA wjeżdża na aktywnym wierszu */
        .tsf-cta {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 500ms var(--ease-out-expo),
            transform 500ms var(--ease-out-expo);
        }
        .tsf-row[data-active="true"] .tsf-cta {
          opacity: 1;
          transform: translateX(0);
        }

        /* Focus-pull: hover na liście wycisza pozostałe wiersze */
        .tsf-row {
          transition: opacity 500ms var(--ease-out-expo);
        }
        @media (hover: hover) {
          .tsf-list:hover .tsf-row:not([data-active="true"]) {
            opacity: 0.45;
          }
        }

        /* Lewitacja ikony na scenie */
        @keyframes tsfFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .tsf-float {
          animation: tsfFloat 7s ease-in-out infinite;
          will-change: transform;
        }

        /* Ticker */
        @keyframes tsfMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .tsf-marquee {
          animation: tsfMarquee 42s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .tsf-float,
          .tsf-marquee {
            animation: none;
          }
          .tsf-row,
          .tsf-row .tsf-title,
          .tsf-cta {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
