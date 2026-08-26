"use client";

import { useEffect, useRef, useState } from "react";
import { PERF_METRICS } from "@/src/content/labContent";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function MetricNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const tick = (time: number) => {
          if (!start) start = time;
          const progress = Math.min((time - start) / 1400, 1);
          const next = value * easeOutExpo(progress);
          setDisplay(value < 10 ? Number(next.toFixed(1)) : Math.round(next));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function PerfBenchmarkZee() {
  return (
    <section className="bg-[#1E1D1E] px-6 py-24 text-fg md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Perf benchmark
          </p>
          <h2 className="mt-4 font-sans text-[clamp(2.25rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.025em]">
            WordPress vs <span className="font-display italic font-light text-accent">Next.js.</span>
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border-strong/60">
          <div className="grid grid-cols-3 bg-white/[0.04] px-4 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent md:px-6">
            <span>Metryka</span>
            <span>WP</span>
            <span>Next.js</span>
          </div>
          {PERF_METRICS.rows.map((row) => (
            <div
              key={row.metric}
              className="grid grid-cols-3 items-center border-t border-border-strong/50 px-4 py-5 md:px-6"
            >
              <span className="font-sans font-bold">{row.metric}</span>
              <span className="text-fg-muted">{row.wordpress}</span>
              <span className="font-sans text-2xl font-black text-accent">
                <MetricNumber value={row.value} suffix={row.suffix} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
