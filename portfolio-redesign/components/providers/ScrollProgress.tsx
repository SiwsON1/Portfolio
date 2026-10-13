"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    let max = 0;

    const update = () => {
      raf = 0;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${pct / 100})`;
    };

    const scheduleUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const recomputeMax = () => {
      max = document.documentElement.scrollHeight - window.innerHeight;
      scheduleUpdate();
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", recomputeMax);

    const resizeObserver = new ResizeObserver(recomputeMax);
    resizeObserver.observe(document.body);
    recomputeMax();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", recomputeMax);
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
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
