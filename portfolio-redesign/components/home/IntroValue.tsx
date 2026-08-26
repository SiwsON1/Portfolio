"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ROTATING = [
  "strony internetowe",
  "sklepy WooCommerce",
  "aplikacje Next.js",
  "wdrożenia AI",
];

const CHIPS = [
  { label: "Strony WordPress", href: "/uslugi/tworzenie-stron-wordpress" },
  { label: "Sklepy WooCommerce", href: "/uslugi/sklepy-internetowe-woocommerce" },
  { label: "Aplikacje Next.js", href: "/uslugi/aplikacje-nextjs" },
  { label: "Wdrożenia AI", href: "/uslugi/wdrozenia-ai" },
];

// grain — statyczny szum jako data-uri, mix-blend soft-light, ledwo widoczny
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function IntroValue() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const longest = ROTATING.reduce((a, b) => (a.length >= b.length ? a : b));

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const reveal = (delay: number) => ({
    initial: reduce ? {} : { y: 24, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  return (
    <section
      className="relative isolate overflow-hidden border-t border-line px-6 py-24 md:px-10 md:py-36"
      aria-label="Czym się zajmuję"
    >
      {/* ATMOSFERA — dryfujący gradient-mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="iv-orb iv-orb-a" />
        <div className="iv-orb iv-orb-b" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
          style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
        />
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {/* LEWA — eyebrow + meta */}
        <div className="md:col-span-3">
          <motion.p {...reveal(0)} className="eyebrow">
            — Zacznijmy od konkretu
          </motion.p>
          <motion.p
            {...reveal(0.08)}
            className="mt-6 font-mono text-[0.8125rem] leading-relaxed tracking-[0.04em] text-ink-mute md:mt-8"
          >
            Wrocław + zdalnie
            <br />
            <span className="text-ink-faint">6 lat w kodzie · 30+ wdrożeń</span>
            <br />
            <span className="text-ink-faint">Polska &amp; Niemcy</span>
          </motion.p>
        </div>

        {/* PRAWA — kinetyczny nagłówek + tekst + chipy */}
        <div className="md:col-span-9">
          <h2
            className="display text-ink"
            style={{
              fontSize: "clamp(2.5rem, 1.2rem + 5vw, 5.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            <motion.span {...reveal(0)} className="block">
              Buduję
            </motion.span>

            {/* słowo rotujące — własna linia, zero layout-shiftu */}
            <motion.span
              {...reveal(0.06)}
              className="relative block"
              style={{ minHeight: "1.05em" }}
            >
              {/* sizer — trzyma wysokość/szerokość najdłuższego wariantu */}
              <span aria-hidden className="invisible italic">
                {longest}
              </span>
              <span className="absolute inset-0 flex items-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.em
                    key={idx}
                    initial={reduce ? false : { y: "0.4em", opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={reduce ? { opacity: 0 } : { y: "-0.4em", opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="not-italic"
                    style={{ color: "var(--peach)", fontStyle: "italic" }}
                  >
                    {ROTATING[idx]}
                  </motion.em>
                </AnimatePresence>
              </span>
            </motion.span>

            <motion.span {...reveal(0.12)} className="block">
              które robią <em>robotę</em>.
            </motion.span>
          </h2>

          <motion.div
            {...reveal(0.16)}
            className="mt-9 max-w-[58ch] space-y-5 text-lead text-ink-mute md:mt-12"
          >
            <p>
              Od sześciu lat robię{" "}
              <span className="font-medium text-ink">
                strony, sklepy i aplikacje
              </span>{" "}
              dla firm w Polsce i Niemczech. Ponad trzydzieści wdrożeń, każde inne,
              każde dopięte do końca, od briefu po produkcję.
            </p>
            <p>
              Dobieram technologię pod Ciebie, nie odwrotnie.{" "}
              <span className="font-medium text-ink">
                WordPress, gdy masz edytować sam. Next.js, gdy liczy się szybkość.
              </span>{" "}
              Pracuję sam, więc rozmawiasz z osobą, która naprawdę pisze ten kod.
            </p>
          </motion.div>

          {/* chipy — wewnętrzne linki + frazy */}
          <ul className="mt-10 flex flex-wrap gap-3 md:mt-12">
            {CHIPS.map((c, i) => (
              <motion.li key={c.href} {...reveal(0.2 + i * 0.06)}>
                <Link
                  href={c.href}
                  data-cursor="OTWÓRZ"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-peach/60 hover:text-peach"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 140% at 50% 120%, rgba(232,178,134,0.18), transparent 70%)",
                    }}
                  />
                  <span>{c.label}</span>
                  <span
                    aria-hidden
                    className="text-ink-faint transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:text-peach"
                  >
                    →
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .iv-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          will-change: transform;
        }
        .iv-orb-a {
          top: -10%;
          left: -5%;
          width: 46vw;
          height: 46vw;
          max-width: 620px;
          max-height: 620px;
          background: radial-gradient(circle, rgba(232, 178, 134, 0.16), transparent 68%);
          animation: ivDriftA 22s ease-in-out infinite alternate;
        }
        .iv-orb-b {
          right: -8%;
          bottom: -16%;
          width: 42vw;
          height: 42vw;
          max-width: 560px;
          max-height: 560px;
          background: radial-gradient(circle, rgba(74, 124, 168, 0.14), transparent 68%);
          animation: ivDriftB 26s ease-in-out infinite alternate;
        }
        @keyframes ivDriftA {
          from {
            transform: translate3d(0, 0, 0) scale(1);
          }
          to {
            transform: translate3d(8%, 12%, 0) scale(1.12);
          }
        }
        @keyframes ivDriftB {
          from {
            transform: translate3d(0, 0, 0) scale(1.05);
          }
          to {
            transform: translate3d(-10%, -8%, 0) scale(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .iv-orb-a,
          .iv-orb-b {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
