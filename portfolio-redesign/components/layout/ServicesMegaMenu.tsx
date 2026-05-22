"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Group = {
  label: string;
  caption: string;
  items: { slug: string; title: string; line: string }[];
};

const GROUPS: Group[] = [
  {
    label: "Strony",
    caption: "Brand, content, lokalne SEO.",
    items: [
      {
        slug: "tworzenie-stron-www",
        title: "Tworzenie stron www",
        line: "Hub. Wybierasz stack po briefie, WordPress lub Next.js.",
      },
      {
        slug: "tworzenie-stron-wordpress",
        title: "Strony WordPress",
        line: "Custom theme bez Elementora, CWV 95+, edycja w panelu.",
      },
      {
        slug: "aplikacje-nextjs",
        title: "Strony Next.js",
        line: "Premium stack, edge deploy, sub-200ms FCP globalnie.",
      },
      {
        slug: "nowoczesna-strona-firmowa-2026",
        title: "Strona firmowa MŚP",
        line: "Pakiet dla firm 5-50 osób. Wycena 24h.",
      },
    ],
  },
  {
    label: "Design + animacje",
    caption: "Awwwards-style, custom interactions.",
    items: [
      {
        slug: "nowoczesne-strony-internetowe",
        title: "Nowoczesne strony internetowe",
        line: "GSAP, custom cursor, page transitions, R3F.",
      },
      {
        slug: "headless-wordpress",
        title: "Headless WordPress",
        line: "Panel WP, frontend Next.js, edge cache.",
      },
      {
        slug: "strony-jamstack",
        title: "Strony Jamstack",
        line: "Pre-render, headless CMS, sub-1s LCP globalnie.",
      },
    ],
  },
  {
    label: "Aplikacje + AI",
    caption: "Logika własna, integracje, automatyzacja.",
    items: [
      {
        slug: "sklepy-internetowe-woocommerce",
        title: "Sklepy WooCommerce",
        line: "Przelewy24, BLIK, InPost, GA4 enhanced ecommerce.",
      },
      {
        slug: "next-js-software-house",
        title: "Next.js outsourcing",
        line: "Retainer 60-100h albo fixed MVP w 4-12 tygodni.",
      },
      {
        slug: "aplikacje-react",
        title: "Aplikacje React",
        line: "Frontend do istniejącego backendu. Vite, shadcn/ui.",
      },
      {
        slug: "wdrozenia-ai",
        title: "Wdrożenia AI",
        line: "RAG, automatyzacja maili, generatory treści.",
      },
    ],
  },
];

export function ServicesMegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop — dimmer + blur reszty strony, ale nie nav */}
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-bg/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mega panel — dropdown z lewej, full-width */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Menu usług"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-0 z-[95] pointer-events-none`}
      >
        <div
          className={`relative bg-bg border-b border-line transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Spacer pod nav (taki sam height jak nav) */}
          <div className="h-[68px] md:h-[88px]" aria-hidden />

          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 80% 0%, rgba(232,178,134,0.08) 0%, rgba(20,19,31,0) 70%)",
            }}
          />

          <div className="relative px-6 md:px-10 pt-2 pb-14 max-w-[1600px] mx-auto">
            {/* Header row */}
            <div className="flex items-baseline justify-between mb-10 pb-6 border-b border-line">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                Usługi · {GROUPS.reduce((a, g) => a + g.items.length, 0)} pozycji
              </p>
              <Link
                href="/uslugi"
                onClick={onClose}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors inline-flex items-center gap-2"
                data-cursor=""
              >
                <span>Wszystkie usługi</span>
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* 3 kolumny */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {GROUPS.map((group) => (
                <section key={group.label}>
                  <header className="mb-6">
                    <h3
                      className="font-display italic text-ink"
                      style={{
                        fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2rem)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.05,
                      }}
                    >
                      {group.label}
                    </h3>
                    <p className="mt-1 text-ink-faint text-[12px] font-mono uppercase tracking-[0.14em]">
                      {group.caption}
                    </p>
                  </header>

                  <ul className="space-y-1">
                    {group.items.map((item, i) => (
                      <li key={item.slug}>
                        <Link
                          href={`/uslugi/${item.slug}`}
                          onClick={onClose}
                          className="group/item block py-3 px-3 -mx-3 rounded-sm hover:bg-ink/[0.04] transition-colors"
                          data-cursor=""
                        >
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[10px] tracking-[0.18em] text-ink-faint w-5 shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="font-display italic text-ink group-hover/item:text-peach transition-colors block leading-tight text-[1.05rem]">
                                {item.title}
                              </span>
                              <span className="block mt-1 text-ink-mute text-[13px] leading-snug">
                                {item.line}
                              </span>
                            </span>
                            <span
                              aria-hidden
                              className="font-mono text-[10px] text-ink-faint group-hover/item:text-peach group-hover/item:translate-x-0.5 transition-all shrink-0 self-start mt-1"
                            >
                              →
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Footer row — CTA strip */}
            <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4">
              <p className="text-ink-mute text-sm leading-relaxed max-w-2xl">
                Nie wiesz którą usługę wybrać? Zadzwoń albo napisz, dobierzemy
                stack pod brief w 24h.
              </p>
              <Link
                href="/kontakt"
                onClick={onClose}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-6 py-3 inline-flex items-center gap-2"
                data-cursor="START"
              >
                <span>Brief w 24h</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
