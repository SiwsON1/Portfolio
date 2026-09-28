"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Plansza z głębią: warstwy (.hwC-panel/.hwC-over/.hwC-cur/.hwC-badge) leżą na różnych translateZ,
 * a wrapper obraca się za myszą (komputer) albo przechyłem (telefon); wartości wygładzane w rAF.
 * Sekwencja CSS stoi (animation-play-state) do chwili, gdy plansza wjedzie w kadr; nasłuchy działają
 * tylko, gdy jest widoczna. Po zakończeniu scenki pojawia się „Odtwórz”, który remontuje dzieci
 * (restart animacji CSS). Sama plansza jest dekoracją: aria-hidden, klucz idzie do podpisu i przycisku.
 */
export function TiltBoard({ children, caption, duration = 7600, className = "" }: { children: React.ReactNode; caption: string; duration?: number; className?: string }) {
  const SEQUENCE_MS = duration + 400;
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(0);
  const [played, setPlayed] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      el.style.setProperty("--rx", cur.x.toFixed(3));
      el.style.setProperty("--ry", cur.y.toFixed(3));
      raf = Math.abs(cur.x - target.x) + Math.abs(cur.y - target.y) > 0.01 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const onMouse = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
      const ny = (e.clientY - (r.top + r.height / 2)) / innerHeight;
      target.x = Math.max(-1, Math.min(1, nx * 2)) * 5;
      target.y = Math.max(-1, Math.min(1, ny * 2)) * -4;
      kick();
    };
    let base: { b: number; g: number } | null = null;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      if (!base) base = { b: e.beta, g: e.gamma };
      base.b += (e.beta - base.b) * 0.01; base.g += (e.gamma - base.g) * 0.01;
      target.x = Math.max(-1, Math.min(1, (e.gamma - base.g) / 22)) * 8;
      target.y = Math.max(-1, Math.min(1, (e.beta - base.b) / 22)) * -7;
      kick();
    };
    const coarse = matchMedia("(hover: none) and (pointer: coarse)").matches;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: unknown } | undefined;
    const iosNeedsAsk = typeof DOE?.requestPermission === "function";
    const gyroOk = coarse && !!DOE && (!iosNeedsAsk || sessionStorage.getItem("tilt-permission") === "granted");
    let listening = false;
    const listen = (on: boolean) => {
      if (reduce || on === listening) return;
      listening = on;
      if (coarse) { if (gyroOk) window[on ? "addEventListener" : "removeEventListener"]("deviceorientation", onOrient as EventListener, { passive: true } as AddEventListenerOptions); }
      else window[on ? "addEventListener" : "removeEventListener"]("mousemove", onMouse as EventListener, { passive: true } as AddEventListenerOptions);
      if (!on) { target.x = 0; target.y = 0; kick(); }
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.setAttribute("data-play", ""); setPlayed(true); }
      listen(e.isIntersecting);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); listen(false); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (!played) return;
    setDone(false);
    const t = setTimeout(() => setDone(true), SEQUENCE_MS);
    return () => clearTimeout(t);
  }, [played, run]);

  return (
    <div className={className}>
      <div ref={ref} className="hwC-tilt relative" style={{ "--rx": 0, "--ry": 0 } as React.CSSProperties} aria-hidden>
        <div key={run} className="contents">{children}</div>
      </div>
      <div className="mt-12 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute md:mt-14">
        <p className="flex items-center gap-2.5 whitespace-nowrap">
          <span aria-hidden className="hwC-live inline-block h-1.5 w-1.5 rounded-full bg-peach" />
          <span>{caption}</span>
        </p>
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className={`hwC-replay inline-flex min-h-11 items-center gap-2 whitespace-nowrap transition-[opacity,color] duration-300 hover:text-peach focus-visible:text-peach ${done ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden={!done}
          tabIndex={done ? 0 : -1}
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9M13.5 2.5v2.4h-2.4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Odtwórz
        </button>
      </div>
    </div>
  );
}
