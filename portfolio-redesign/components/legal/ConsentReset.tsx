"use client";

import { useState } from "react";

/** Wycofanie albo zmiana zgody na cookies analityczne: kasuje zapisany wybór i wczytuje stronę od nowa. */
export function ConsentReset() {
  const [done, setDone] = useState(false);

  const reset = () => {
    try {
      localStorage.removeItem("cookie-consent");
    } catch {}
    setDone(true);
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center gap-3 border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-peach hover:text-peach focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peach"
    >
      {done ? "Wczytuję ponownie…" : "Zmień ustawienia cookies"}
    </button>
  );
}
