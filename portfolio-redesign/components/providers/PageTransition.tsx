"use client";

import { AnimatePresence, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";

const loadFeatures = () =>
  import("./motion-features").then((module) => module.default);

/**
 * PageTransition — soft fade + slide between routes.
 * Uses motion AnimatePresence keyed on pathname. Mode "wait" so exit
 * finishes before next mounts. RSC content streams in then animates.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
