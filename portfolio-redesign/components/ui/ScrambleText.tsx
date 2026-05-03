"use client";

import { useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789▓▒░█";

/**
 * ScrambleText — owija children w span z literami które scramble'ują się gdy
 * cursor zbliży się w obrębie radius. Subtle awwwards-style micro-interaction.
 */
export function ScrambleText({
  children,
  radius = 120,
  className,
}: {
  children: string;
  radius?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const container = containerRef.current;
    if (!container) return;

    const letterEls: HTMLSpanElement[] = Array.from(
      container.querySelectorAll("[data-letter]")
    );

    let mouseX = -9999;
    let mouseY = -9999;
    let raf = 0;
    const states = letterEls.map((el) => ({
      el,
      original: el.dataset.letter ?? "",
      scrambleUntil: 0,
    }));

    const tick = (t: number) => {
      states.forEach((state) => {
        const r = state.el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - mouseX;
        const dy = cy - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius && state.original !== " ") {
          if (state.scrambleUntil < t) {
            state.el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
            state.scrambleUntil = t + 60 + Math.random() * 60;
          }
        } else if (state.el.textContent !== state.original) {
          state.el.textContent = state.original;
        }
      });
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [children, radius]);

  return (
    <span ref={containerRef} className={className}>
      {children.split("").map((ch, i) => (
        <span key={i} data-letter={ch} aria-hidden style={{ display: "inline-block" }}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
