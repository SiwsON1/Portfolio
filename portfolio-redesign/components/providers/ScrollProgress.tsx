"use client";

import { useEffect, useRef } from "react";

/**
 * Cienki peach pasek scroll progress fixed na samym top viewport.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${pct / 100})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-peach pointer-events-none"
      ref={ref}
      style={{ transform: "scaleX(0)" }}
    />
  );
}
