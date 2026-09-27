"use client";

import { useEffect, ViewTransition } from "react";

/**
 * PageTransition: przejścia między stronami robi natywne View Transitions API (Next experimental.viewTransition).
 * Nowa strona otwiera się kołem od miejsca kliknięcia, zdjęcie realizacji leci osobno (nazwany element).
 * Poprzednia wersja na motion/AnimatePresence trzymała starą stronę przy wyjściu i blokowała takie przejścia.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const onDown = (e: PointerEvent) => {
      if (!(e.target as HTMLElement | null)?.closest("a[href^='/']")) return;
      root.style.setProperty("--vt-x", `${e.clientX}px`);
      root.style.setProperty("--vt-y", `${e.clientY}px`);
    };
    // Cofanie gestem w iOS ma własny podgląd strony; bez tego animacja odgrywała się drugi raz.
    const onPop = (e: PopStateEvent) => {
      root.style.removeProperty("--vt-x");
      root.style.removeProperty("--vt-y");
      if ((e as PopStateEvent & { hasUAVisualTransition?: boolean }).hasUAVisualTransition) {
        root.classList.add("vt-native");
        window.setTimeout(() => root.classList.remove("vt-native"), 800);
      }
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  return <ViewTransition default="page">{children}</ViewTransition>;
}
