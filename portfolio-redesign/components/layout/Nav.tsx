import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { services } from "@/lib/services";

const links = [
  { href: "/projekty", label: "Projekty" },
  { href: "/uslugi", label: "Usługi", hasSubmenu: true },
  { href: "/blog", label: "Blog" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] mix-blend-difference">
      <nav
        className="flex items-center justify-between px-6 py-5 md:px-10 md:py-7"
        aria-label="Główna nawigacja"
      >
        <Link
          href="/"
          className="font-display text-2xl italic leading-none text-ink hover:opacity-80 transition-opacity"
          data-cursor="HOME"
        >
          Marcin Siwonia
        </Link>
        <ul className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
          {links.map((l) =>
            l.hasSubmenu ? (
              <li key={l.href} className="relative group">
                <Link
                  href={l.href}
                  className="relative inline-flex items-center gap-1.5 py-1 hover:text-peach transition-colors"
                  data-cursor=""
                  aria-haspopup="true"
                >
                  {l.label}
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    aria-hidden
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M1 2.5L4 5.5L7 2.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>

                {/* Dropdown — czysty CSS, hover/focus-within */}
                <div
                  className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0"
                  style={{ minWidth: "320px" }}
                >
                  <div className="relative bg-bg border border-line shadow-2xl shadow-black/40 overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 60% at 90% 0%, rgba(232,178,134,0.10) 0%, rgba(20,19,31,0) 60%)",
                      }}
                    />
                    <div className="relative px-5 py-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                        Usługi · {services.length}
                      </p>
                      <ul className="space-y-1">
                        {services.map((s, i) => (
                          <li key={s.slug}>
                            <Link
                              href={`/uslugi/${s.slug}`}
                              className="group/item flex items-center justify-between gap-4 py-2.5 px-3 -mx-3 rounded-sm hover:bg-ink/5 transition-colors normal-case tracking-normal"
                              data-cursor=""
                            >
                              <span className="flex items-baseline gap-3 min-w-0">
                                <span className="font-mono text-[9px] tracking-[0.18em] text-ink-faint w-6 shrink-0 uppercase">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-display italic text-base text-ink group-hover/item:text-peach transition-colors truncate">
                                  {s.title}
                                </span>
                              </span>
                              <span className="font-mono text-[10px] text-ink-faint group-hover/item:text-peach transition-all group-hover/item:translate-x-0.5 shrink-0">
                                →
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-line">
                        <Link
                          href="/uslugi"
                          className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors flex items-center gap-2"
                          data-cursor=""
                        >
                          <span>Wszystkie usługi</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative inline-block py-1 hover:text-peach transition-colors"
                  data-cursor=""
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
  );
}
