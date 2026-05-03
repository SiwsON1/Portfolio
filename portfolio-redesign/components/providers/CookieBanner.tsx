"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (level: "all" | "necessary") => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ level, ts: Date.now() }));
    if (level === "all") {
      window.dispatchEvent(new Event("consent-granted"));
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookie"
      className="fixed bottom-0 left-0 right-0 z-[140] p-4 md:p-6"
    >
      <div className="max-w-5xl mx-auto bg-bg-elev border border-line backdrop-blur-md p-5 md:p-7 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
              Cookie · GDPR
            </p>
            <p className="text-ink text-sm md:text-base leading-relaxed">
              Strona używa plików cookie do analityki (GA4) i optymalizacji
              treści. Niezbędne cookies działają zawsze, analityczne tylko po
              akceptacji. Więcej w{" "}
              <Link
                href="/polityka-prywatnosci"
                className="text-peach underline underline-offset-4"
              >
                polityce prywatności
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => accept("necessary")}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute hover:text-ink border border-line px-5 py-3 transition-colors"
              data-cursor=""
            >
              Tylko niezbędne
            </button>
            <button
              type="button"
              onClick={() => accept("all")}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg bg-peach hover:bg-peach-deep px-5 py-3 transition-colors"
              data-cursor=""
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
