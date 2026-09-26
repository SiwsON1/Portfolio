"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { services } from "@/lib/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Service = (typeof services)[number];

const GROUPS: { main: string; line: string; subs: string[] }[] = [
  {
    main: "tworzenie-stron-www",
    line: "Strona dla firmy, która ma przyprowadzać klientów z Google i dobrze działać na telefonie.",
    subs: ["nowoczesna-strona-firmowa-2026", "nowoczesne-strony-internetowe", "strony-jamstack"],
  },
  {
    main: "tworzenie-stron-wordpress",
    line: "Strona albo sklep, które edytujesz sam, bez zaglądania do kodu.",
    subs: [
      "sklepy-internetowe-woocommerce",
      "integracja-woocommerce-z-baselinker",
      "opieka-wordpress",
      "przyspieszanie-stron-wordpress",
      "headless-wordpress",
    ],
  },
  {
    main: "aplikacje-nextjs",
    line: "Szybkie strony i aplikacje z własną logiką: panele klienta, konfiguratory, portale z danymi.",
    subs: ["aplikacje-react", "next-js-software-house"],
  },
  {
    main: "wdrozenia-ai",
    line: "Automatyzacja powtarzalnej pracy w firmie: zapytania, opisy, raporty.",
    subs: [],
  },
];

const bySlug = (slug: string) => services.find((x) => x.slug === slug) as Service;

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
      className="relative px-6 py-20 md:px-10 md:py-48 overflow-hidden border-t border-line"
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

      <div className="sv-header relative mb-12 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Co robię · katalog</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display text-h1 text-ink">
            Strony, sklepy, aplikacje,
            <br />
            <em>jeden warsztat</em>.
          </h2>
          <p className="mt-6 prose-bound text-ink-mute text-lead">
            Nie rozpraszam się na wszystko. Robię strony i sklepy WordPress,
            aplikacje Next.js i React oraz wdrożenia AI. Tyle, ile potrafię
            dostarczyć tak, żeby było czym się chwalić.
          </p>
        </div>
      </div>

      <ul className="sv-list relative border-t border-line">
        {GROUPS.map((g, i) => (
          <Row
            key={g.main}
            service={bySlug(g.main)}
            line={g.line}
            subs={g.subs.map(bySlug).filter(Boolean)}
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
  line,
  subs,
  index,
  active,
  onEnter,
  onLeave,
}: {
  service: Service;
  line: string;
  subs: Service[];
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
        className={`relative block pt-8 md:pt-14 ${subs.length ? "pb-4 md:pb-6" : "pb-8 md:pb-14"}`}
        data-cursor="OTWÓRZ"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        <div className="grid grid-cols-12 gap-3 md:gap-6 items-baseline">
          <span
            className={`col-span-2 md:col-span-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${
              active ? "text-peach" : "text-ink-faint"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="col-span-9 md:col-span-7">
            <h3
              className={`font-display italic transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                active ? "text-peach" : "text-ink"
              }`}
              style={{
                fontSize: "clamp(1.5rem, 0.85rem + 3vw, 4.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                transform: active ? "translateX(12px)" : "translateX(0)",
              }}
            >
              {s.title}
            </h3>

            <p className="mt-3 text-[15px] leading-snug text-ink-mute md:hidden">{line}</p>

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
            <p className="text-ink-mute text-sm leading-relaxed">{line}</p>
          </div>

          <span
            className={`col-span-1 md:col-span-1 text-right font-mono text-sm md:text-base transition-all duration-500 ${
              active
                ? "text-peach translate-x-2"
                : "text-ink-mute group-hover:text-peach"
            }`}
          >
            →
          </span>
        </div>
      </Link>
      {subs.length > 0 && (
        <div className="relative grid grid-cols-12 gap-3 pb-8 md:gap-6 md:pb-14">
          <div aria-hidden className="col-span-2 md:col-span-1" />
          <ul className="col-span-10 flex flex-wrap gap-x-5 gap-y-1" aria-label={`Usługi powiązane: ${s.title}`}>
            {subs.map((sub) => (
              <li key={sub.slug}>
                <Link
                  href={`/uslugi/${sub.slug}`}
                  className="inline-flex min-h-9 items-center text-sm text-ink-mute underline decoration-line underline-offset-4 transition-colors hover:text-peach hover:decoration-peach"
                >
                  {sub.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
