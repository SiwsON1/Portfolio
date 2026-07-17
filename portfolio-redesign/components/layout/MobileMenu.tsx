"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/projekty", label: "Projekty" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
];

const services = [
  { href: "/uslugi/tworzenie-stron-www", label: "Tworzenie stron www" },
  { href: "/uslugi/tworzenie-stron-wordpress", label: "Strony WordPress" },
  { href: "/uslugi/aplikacje-nextjs", label: "Strony Next.js" },
  { href: "/uslugi/sklepy-internetowe-woocommerce", label: "Sklepy WooCommerce" },
  { href: "/uslugi/opieka-wordpress", label: "Opieka WordPress" },
  { href: "/uslugi/wdrozenia-ai", label: "Wdrożenia AI" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        className="md:hidden relative z-[110] flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
        data-cursor=""
      >
        <span className="relative w-5 h-3 flex flex-col justify-between">
          <span
            className="block h-px bg-current transition-transform duration-300"
            style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-px bg-current transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px bg-current transition-transform duration-300"
            style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
          />
        </span>
        <span>{open ? "Zamknij" : "Menu"}</span>
      </button>

      {/* Drawer overlay */}
      <div
        aria-hidden={!open}
        className="md:hidden fixed inset-0 z-[105] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-2%)",
        }}
      >
        <div className="absolute inset-0 bg-bg" />

        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(58,142,200,0.16) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        <div className="relative h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
          {/* Top eyebrow */}
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-8">
            Menu · {new Date().getFullYear()}
          </p>

          {/* Main links */}
          <nav className="flex-1">
            <ul className="space-y-1 mb-12">
              {links.map((l, i) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-line"
                    style={{
                      transform: open ? "translateY(0)" : "translateY(20px)",
                      opacity: open ? 1 : 0,
                      transition: `all 700ms cubic-bezier(0.16,1,0.3,1) ${100 + i * 60}ms`,
                    }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display italic text-ink group-hover:text-peach transition-colors"
                      style={{
                        fontSize: "clamp(2.25rem, 1rem + 8vw, 4rem)",
                        lineHeight: 1.0,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Services subnav */}
            <div className="mb-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                Usługi (skróty)
              </p>
              <ul className="grid grid-cols-1 gap-1">
                {services.map((s, i) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-ink-mute hover:text-peach transition-colors text-sm"
                      style={{
                        transform: open ? "translateY(0)" : "translateY(20px)",
                        opacity: open ? 1 : 0,
                        transition: `all 700ms cubic-bezier(0.16,1,0.3,1) ${500 + i * 40}ms`,
                      }}
                    >
                      {s.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer of drawer */}
          <div
            className="pt-8 border-t border-line"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transition: "all 700ms cubic-bezier(0.16,1,0.3,1) 800ms",
            }}
          >
            <a
              href="mailto:mahinek12@gmail.com"
              className="block font-display italic text-peach mb-2"
              style={{ fontSize: "clamp(1.25rem, 1rem + 1vw, 1.75rem)" }}
            >
              mahinek12@gmail.com
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              Wrocław · est. MMXX · otwarty na nowe projekty
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
