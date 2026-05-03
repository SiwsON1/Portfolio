import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/projekty", label: "Projekty" },
  { href: "/uslugi", label: "Usługi" },
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
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative inline-block py-1 hover:text-peach transition-colors"
                data-cursor=""
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
}
