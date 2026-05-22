"use client";

import Link from "next/link";
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
            className="font-display text-2xl italic leading-none text-ink hover:opacity-80 transition-opacity"
            data-cursor="HOME"
            onClick={() => setMegaOpen(false)}
          >
            Marcin Siwonia
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
    </>
  );
}
