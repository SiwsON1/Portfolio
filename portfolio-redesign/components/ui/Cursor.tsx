"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: small dot + halo. Halo morphs to a label on hoverable elements
 * tagged with data-cursor="ZOBACZ" (or any string). Hidden on touch devices.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    setHidden(false);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let hx = mx;
    let hy = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.closest("[data-cursor]") as HTMLElement | null;
      if (tag) {
        setLabel(tag.dataset.cursor ?? "");
      } else {
        setLabel("");
      }
    };

    const tick = () => {
      // Dot follows almost instantly
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      // Halo lags
      hx += (mx - hx) * 0.16;
      hy += (my - hy) * 0.16;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      }
      if (halo.current) {
        halo.current.style.transform = `translate3d(${hx}px, ${hy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-peach mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={halo}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] flex items-center justify-center rounded-full border border-ink/20 bg-ink/[0.02] backdrop-blur-[1px] text-[11px] uppercase tracking-[0.18em] text-ink transition-[width,height,background] duration-300 ease-out"
        style={{
          width: label ? 110 : 36,
          height: label ? 110 : 36,
          willChange: "transform, width, height",
        }}
      >
        {label}
      </div>
    </>
  );
}
