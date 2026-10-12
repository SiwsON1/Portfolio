"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, playSection, subscribe } from "@/lib/speechReader";

type Item = { id: string; label: string };

/**
 * Szyna czytania: spis treści na pionowej linii, która wypełnia się kolorem w miarę czytania.
 * Sekcje za czytelnikiem dostają pełną kropkę, bieżąca pulsujący pierścień. Na dole czas do końca.
 * Podczas słuchania klik w sekcję przeskakuje głos do niej.
 */
export function ReadingRail({ items, minutes }: { items: Item[]; minutes: number }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const reader = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const body = document.getElementById("post-body");
      if (!body) return;
      const r = body.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.35 - r.top) / Math.max(1, r.height - vh * 0.35)));
      setProgress(p);
      let a = 0;
      items.forEach((it, i) => {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top < vh * 0.35) a = i;
      });
      setActive(a);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  const left = Math.max(1, Math.ceil(minutes * (1 - progress)));
  const listening = reader.status !== "idle";

  return (
    <nav aria-label="Spis treści" className="reading-rail">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">Spis treści</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums text-ink-faint" aria-live="off">
          {progress >= 0.995 ? "Przeczytane" : `zostało ~${left} min`}
        </p>
      </div>
      <div className="relative">
        <span aria-hidden className="absolute bottom-3 left-[5px] top-3 w-px bg-line" />
        <span
          aria-hidden
          className="absolute bottom-3 left-[5px] top-3 w-px origin-top bg-peach transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `scaleY(${progress})` }}
        />
        <ol className="relative space-y-1">
        {items.map((it, i) => {
          const state = i < active ? "past" : i === active ? "now" : "next";
          return (
            <li key={it.id} className="relative">
              <a
                href={`#${it.id}`}
                onClick={(e) => {
                  if (listening) {
                    e.preventDefault();
                    playSection(it.id);
                    document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                aria-current={state === "now" ? "location" : undefined}
                className="rail-item group flex gap-4 py-1.5 pr-2 text-sm leading-snug"
                data-state={state}
              >
                <span aria-hidden className="rail-dot relative mt-[0.4em] grid h-[11px] w-[11px] shrink-0 place-items-center" />
                <span className="rail-label">
                  <span className="mr-2 font-mono text-[10px] tabular-nums text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  {it.label}
                </span>
              </a>
            </li>
          );
        })}
        </ol>
      </div>
    </nav>
  );
}
