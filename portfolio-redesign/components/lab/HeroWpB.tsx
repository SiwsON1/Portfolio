"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Service } from "@/lib/services";
import { OrbitalMark } from "@/components/service/OrbitalMark";
import { renderInlineLinks } from "@/lib/renderInlineLinks";

/**
 * Wariant B „Sygnatura”: hero niesie typografia. Nazwa technologii kursywą w brzoskwini,
 * kula skurczona do rozmiaru litery siedzi w zdaniu (jak morfująca odznaka na stronie głównej),
 * licznik usługi odlicza do właściwego numeru, a garść cząstek rozpływa się z kuli w tekst na wejściu.
 */
const PARTS = Array.from({ length: 22 }, (_, i) => ({
  dx: Math.cos(i * 2.39996) * (60 + (i * 37) % 120),
  dy: Math.sin(i * 2.39996) * (40 + (i * 53) % 90),
  d: 80 + (i * 41) % 380,
  s: i % 3 === 0 ? 3 : 2,
}));

function Counter({ to, total }: { to: number; total: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1100);
      const e = 1 - Math.pow(1 - p, 4);
      setN(Math.round(e * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span className="tabular-nums text-ink">{String(n).padStart(2, "0")}<span className="text-ink-faint"> / {String(total).padStart(2, "0")}</span></span>;
}

export function HeroWpB({ s, idx, total }: { s: Service; idx: number; total: number }) {
  // „WordPress” to słowo-klucz usługi: dostaje kursywę i kolor, kula wchodzi tuż przed nim.
  const key = "WordPress";
  const [before, after] = s.h1.includes(key) ? s.h1.split(key) : [s.h1, ""];
  return (
    <header className="hwB relative overflow-hidden px-6 pt-32 pb-20 md:px-10 md:pt-32 md:pb-28">
      <div aria-hidden className="hwB-ghost absolute -right-4 top-20 md:right-10 md:top-24 font-display italic select-none pointer-events-none">
        {String(idx + 1).padStart(2, "0")}
      </div>

      <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <Link href="/uslugi" className="hover:text-peach transition-colors">← Wszystkie usługi</Link>
        <span>Usługa <Counter to={idx + 1} total={total} /></span>
      </div>

      <h1 className="display relative mt-14 text-ink md:mt-10" style={{ fontSize: "clamp(2.6rem, 1rem + 6.4vw, 7rem)", lineHeight: 0.95, letterSpacing: "-0.035em", maxWidth: "14ch" }}>
        <span className="svc-word inline-block" style={{ "--i": 0 } as React.CSSProperties}>{before}</span>
        <span className="relative inline-block align-[-0.12em] mx-[0.08em]" style={{ width: "0.92em", height: "0.92em" }}>
          <OrbitalMark slug={s.slug} className="absolute -inset-[30%]" />
          {PARTS.map((p, i) => (
            <span key={i} aria-hidden className="hwB-part absolute left-1/2 top-1/2 rounded-full bg-peach" style={{ width: p.s, height: p.s, "--dx": `${p.dx}px`, "--dy": `${p.dy}px`, "--d": `${p.d}ms` } as React.CSSProperties} />
          ))}
        </span>
        {s.h1.includes(key) && (
          <>
            <em className="svc-word inline-block text-peach" style={{ "--i": 2 } as React.CSSProperties}>{key}</em>
            <span className="svc-word inline-block" style={{ "--i": 4 } as React.CSSProperties}>{after}</span>
          </>
        )}
      </h1>

      <div className="relative mt-12 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-12">
        <p className="svc-in md:col-span-6 md:col-start-6 text-ink-mute" style={{ "--i": 6, fontSize: "clamp(1rem, 0.95rem + 0.45vw, 1.35rem)", lineHeight: 1.5 } as React.CSSProperties}>
          {renderInlineLinks(s.lead)}
        </p>
        <div className="svc-in md:col-span-6 md:col-start-6 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--i": 8 } as React.CSSProperties}>
          <Link href="/kontakt" data-haptic className="group inline-flex min-h-11 items-center gap-3 bg-peach px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-bg transition-[background-color,transform] duration-200 hover:bg-peach-deep active:scale-[0.97]">
            <span>Zapytaj o wycenę</span><span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a href="#realizacje" className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.22em] text-ink-mute underline decoration-line underline-offset-8 transition-colors hover:text-peach">Zobacz realizacje</a>
        </div>
      </div>
    </header>
  );
}
