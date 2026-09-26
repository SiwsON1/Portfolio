"use client";

import { useState, type ReactNode } from "react";

/** Na telefonie chowa treść za przyciskiem, od md zawsze widoczna. */
export function MobileReveal({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-12 w-full items-center justify-between border border-line px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-peach hover:text-peach md:hidden"
      >
        <span>{open ? "Zwiń pomiar" : label}</span>
        <span aria-hidden className={`text-base transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div className={open ? "mt-6 md:mt-0" : "hidden md:block"}>{children}</div>
    </>
  );
}
