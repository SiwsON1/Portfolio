"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Stały przycisk wyceny na telefonie. Pojawia się po przewinięciu pierwszego ekranu. */
export function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hidden = pathname === "/kontakt" || pathname.startsWith("/sprawdz-dostepnosc");

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const footer = document.querySelector("footer");
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hidden, pathname]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-bg/95 px-4 pt-3 backdrop-blur-sm transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-4">
        <p className="min-w-0 flex-1 text-[13px] leading-snug text-ink-mute">
          Odpowiadam w&nbsp;24&nbsp;h robocze.
        </p>
        <Link
          href="/kontakt"
          tabIndex={visible ? 0 : -1}
          data-haptic
          className="inline-flex min-h-12 shrink-0 items-center gap-3 bg-peach px-5 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-colors active:bg-peach-deep"
        >
          Wyceń projekt <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
