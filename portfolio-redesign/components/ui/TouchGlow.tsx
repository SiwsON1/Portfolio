"use client";

import { useEffect, useRef } from "react";

/**
 * Na ekranach dotykowych zastępuje kursor: miękka brzoskwiniowa poświata idzie za palcem
 * i gaśnie po puszczeniu. Elementy z data-haptic dają krótką wibrację (Android; iOS jej nie obsługuje).
 * Tylko transform i opacity, więc przeglądarka animuje to na GPU bez przeliczania układu.
 */
export function TouchGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = glowRef.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const place = () => {
      raf = 0;
      el.style.transform = `translate3d(${x - 90}px, ${y - 90}px, 0)`;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(place);
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      onMove(e);
      el.style.opacity = "1";
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-haptic]")) navigator.vibrate?.(12);
    };
    const onUp = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[180px] w-[180px] rounded-full opacity-0 md:hidden"
      style={{
        background: "radial-gradient(circle, rgba(244,180,129,0.45) 0%, rgba(232,178,134,0.18) 35%, rgba(232,178,134,0) 70%)",
        mixBlendMode: "screen",
        transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1)",
        willChange: "transform, opacity",
      }}
    />
  );
}
