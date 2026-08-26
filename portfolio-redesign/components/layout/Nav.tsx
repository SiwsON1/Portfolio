"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

const links = [
  { href: "/projekty", label: "Projekty" },
  { href: "/uslugi", label: "Usługi", hasSubmenu: true },
  { href: "/blog", label: "Blog" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] ${
          megaOpen ? "" : "mix-blend-difference"
        }`}
      >
        <nav
          className="flex items-center justify-between px-6 py-5 md:px-10 md:py-7"
          aria-label="Główna nawigacja"
        >
          <Link
            href="/"
            className="ms-nav-link group relative inline-flex items-center gap-3 py-1 font-display text-2xl italic leading-none text-ink transition-[opacity,letter-spacing] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-90 hover:[letter-spacing:0.006em]"
            data-cursor="HOME"
            onClick={() => setMegaOpen(false)}
          >
            <span
              aria-hidden
              className="ms-nav-mark relative shrink-0 inline-flex items-center justify-center"
              style={{ width: "20px", height: "20px", mixBlendMode: "normal" }}
            >
              <span
                aria-hidden
                className="ms-nav-mark-halo absolute inset-0 rounded-full"
              />
              <span
                aria-hidden
                className="ms-nav-mark-core relative inline-block rounded-full bg-peach"
                style={{ width: "9px", height: "9px" }}
              />
            </span>
            <span className="ms-nav-text relative">Marcin Siwonia</span>
            {isHome ? (
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-8 h-px w-1/3 bg-peach/60"
              />
            ) : null}
          </Link>

          <ul className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
            {links.map((l) =>
              l.hasSubmenu ? (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => setMegaOpen((v) => !v)}
                    onMouseEnter={() => setMegaOpen(true)}
                    aria-expanded={megaOpen}
                    aria-haspopup="dialog"
                    className="relative inline-flex items-center gap-1.5 py-1 hover:text-peach transition-colors cursor-pointer font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
                    data-cursor=""
                  >
                    {l.label}
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      aria-hidden
                      className={`transition-transform duration-300 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M1 2.5L4 5.5L7 2.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="relative inline-block py-1 hover:text-peach transition-colors"
                    data-cursor=""
                    onClick={() => setMegaOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <MobileMenu />
        </nav>
      </header>

      <ServicesMegaMenu
        isOpen={megaOpen}
        onClose={() => setMegaOpen(false)}
      />

      <style jsx global>{`
        @keyframes msNavCorePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.95;
            filter: drop-shadow(0 0 6px rgba(232, 178, 134, 0.65));
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
            filter: drop-shadow(0 0 14px rgba(232, 178, 134, 0.95));
          }
        }
        @keyframes msNavHaloRing {
          0% {
            transform: scale(0.6);
            opacity: 0.85;
            box-shadow: 0 0 0 0 rgba(232, 178, 134, 0.55);
          }
          80% {
            opacity: 0;
            box-shadow: 0 0 0 14px rgba(232, 178, 134, 0);
          }
          100% {
            transform: scale(1);
            opacity: 0;
            box-shadow: 0 0 0 14px rgba(232, 178, 134, 0);
          }
        }
        @keyframes msNavTextBreath {
          0%, 100% {
            letter-spacing: 0em;
          }
          50% {
            letter-spacing: 0.005em;
          }
        }

        .ms-nav-mark-core {
          animation: msNavCorePulse 2.2s ease-in-out infinite;
          will-change: transform, opacity, filter;
        }
        .ms-nav-mark-halo {
          background: radial-gradient(circle, rgba(232, 178, 134, 0.55) 0%, rgba(232, 178, 134, 0) 70%);
          animation: msNavHaloRing 2.2s ease-out infinite;
          will-change: transform, opacity, box-shadow;
        }
        .ms-nav-text {
          display: inline-block;
          animation: msNavTextBreath 5s ease-in-out infinite;
          will-change: letter-spacing;
        }

        @media (prefers-reduced-motion: reduce) {
          .ms-nav-mark-core,
          .ms-nav-mark-halo,
          .ms-nav-text {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
