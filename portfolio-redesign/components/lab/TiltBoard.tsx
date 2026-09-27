"use client";

import { useEffect, useRef } from "react";

/**
 * Lekka głębia 3D dla makiety: warstwy (.hwC-back/.hwC-front/.hwC-over/.hwC-cur) leżą na różnych
 * translateZ, a wrapper obraca się za myszą (komputer) albo przechyłem (telefon). Wartości są
 * wygładzane w rAF i wpisywane jako --rx/--ry; pętla śpi, gdy nic się nie zmienia.
 */
export function TiltBoard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
      target.x = Math.max(-1, Math.min(1, nx * 2)) * 7;
      target.y = Math.max(-1, Math.min(1, ny * 2)) * -6;
      kick();
    };
    let base: { b: number; g: number } | null = null;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      if (!base) base = { b: e.beta, g: e.gamma };
      base.b += (e.beta - base.b) * 0.01; base.g += (e.gamma - base.g) * 0.01;
      target.x = Math.max(-1, Math.min(1, (e.gamma - base.g) / 22)) * 9;
      target.y = Math.max(-1, Math.min(1, (e.beta - base.b) / 22)) * -8;
      kick();
    };
    const coarse = matchMedia("(hover: none) and (pointer: coarse)").matches;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: unknown } | undefined;
    const iosNeedsAsk = typeof DOE?.requestPermission === "function";
    if (coarse) {
      if (DOE && (!iosNeedsAsk || sessionStorage.getItem("tilt-permission") === "granted")) {
        window.addEventListener("deviceorientation", onOrient, { passive: true });
      }
    } else {
      window.addEventListener("mousemove", onMouse, { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, []);
  return <div ref={ref} className={className} style={{ "--rx": 0, "--ry": 0 } as React.CSSProperties}>{children}</div>;
}
