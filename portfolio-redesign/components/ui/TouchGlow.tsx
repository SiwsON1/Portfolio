"use client";

import { useEffect, useRef } from "react";

/**
 * Na ekranach dotykowych zastępuje kursor: naciśnięcie linku albo przycisku rozpala pod palcem
 * brzoskwiniową poświatę (szybko w górę, wolno w dół), a kliknięcie elementu z data-haptic daje
 * krótką wibrację. Poświata tylko przy elementach klikalnych: przy zwykłym przewijaniu zasłaniał ją palec
 * i gasła przy starcie przewijania, więc nikt jej nie widział. Tylko transform i opacity, bez mieszania warstw.
 */
const INTERACTIVE = "a, button, [role='button'], [data-haptic]";

export function TouchGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = glowRef.current;
    if (!el) return;

    const show = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      if (!(e.target as HTMLElement | null)?.closest(INTERACTIVE)) return;
      el.style.transition = "opacity 120ms cubic-bezier(0.23,1,0.32,1), scale 420ms cubic-bezier(0.16,1,0.3,1)";
      el.style.transform = `translate3d(${e.clientX - 110}px, ${e.clientY - 110}px, 0)`;
      el.style.scale = "1";
      el.style.opacity = "1";
    };
    const hide = () => {
      el.style.transition = "opacity 600ms cubic-bezier(0.23,1,0.32,1), scale 600ms cubic-bezier(0.23,1,0.32,1)";
      el.style.opacity = "0";
      el.style.scale = "0.6";
    };
    // Wibracja na click, nie na pointerdown: przewijanie zaczęte na przycisku nie może wibrować.
    const haptic = (e: MouseEvent) => {
      if ((e.target as HTMLElement | null)?.closest("[data-haptic]")) navigator.vibrate?.(12);
    };
    window.addEventListener("pointerdown", show, { passive: true });
    window.addEventListener("pointerup", hide, { passive: true });
    window.addEventListener("pointercancel", hide, { passive: true });
    window.addEventListener("click", haptic, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("pointerup", hide);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("click", haptic);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[220px] w-[220px] rounded-full opacity-0 md:hidden"
      style={{
        scale: "0.6",
        background:
          "radial-gradient(circle, rgba(244,180,129,0.30) 0%, rgba(232,178,134,0.12) 38%, rgba(232,178,134,0) 70%)",
      }}
    />
  );
}
