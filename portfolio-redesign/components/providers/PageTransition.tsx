"use client";

import { ViewTransition } from "react";

/**
 * PageTransition: przejścia między stronami robi natywne View Transitions API (Next experimental.viewTransition).
 * Nazwane elementy (np. zdjęcie realizacji) przechodzą płynnie między stronami, reszta przenika się.
 * Poprzednia wersja na motion/AnimatePresence trzymała starą stronę przy wyjściu i blokowała takie przejścia.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
