"use client";

import { useEffect, useRef } from "react";
import { Icon, SLUG_TO_ICON } from "./ServiceHeroVisual";

/**
 * OrbitalMark: sygnatura marki z hero strony głównej (siatkowa kula, brzoskwiniowe cząstki na orbicie),
 * ale narysowana na canvasie 2D. Kilka kilobajtów zamiast Three.js, więc może być w hero każdej usługi,
 * także na telefonie. W środku ikona usługi. Kula obraca się sama, dodatkowo reaguje na przechył telefonu
 * i ruch myszy, a przy przewijaniu cofa się w głąb (scroll-driven CSS na wrapperze, .svc-mark).
 * Rysowanie zatrzymuje się poza ekranem i na nieaktywnej karcie. prefers-reduced-motion: jedna klatka.
 */

type V3 = [number, number, number];

/** Ikosaedr podzielony raz: 42 wierzchołki, 120 krawędzi. Ta sama bryła co na stronie głównej. */
function icosphere(subdiv: number) {
  const t = (1 + Math.sqrt(5)) / 2;
  let verts: V3[] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map((v) => norm(v as V3));
  let faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];
  for (let s = 0; s < subdiv; s++) {
    const cache = new Map<string, number>();
    const mid = (a: number, b: number) => {
      const k = a < b ? `${a}-${b}` : `${b}-${a}`;
      const hit = cache.get(k);
      if (hit !== undefined) return hit;
      const p = norm([(verts[a][0] + verts[b][0]) / 2, (verts[a][1] + verts[b][1]) / 2, (verts[a][2] + verts[b][2]) / 2]);
      verts.push(p);
      cache.set(k, verts.length - 1);
      return verts.length - 1;
    };
    faces = faces.flatMap(([a, b, c]) => {
      const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
      return [[a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]] as [number, number, number][];
    });
  }
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  for (const [a, b, c] of faces) {
    for (const [x, y] of [[a, b], [b, c], [c, a]]) {
      const k = x < y ? `${x}-${y}` : `${y}-${x}`;
      if (!edgeSet.has(k)) { edgeSet.add(k); edges.push([x, y]); }
    }
  }
  verts = verts.map((v) => v);
  return { verts, edges };
}
function norm(v: V3): V3 { const l = Math.hypot(v[0], v[1], v[2]); return [v[0] / l, v[1] / l, v[2] / l]; }

const PARTICLES = 90;

export function OrbitalMark({ slug, className = "" }: { slug: string; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const icon = SLUG_TO_ICON[slug] ?? "modern";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Każda usługa obraca się w innym kierunku i tempie, więc dwie sąsiednie strony nie wyglądają identycznie.
    const seed = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
    const dir = seed % 2 ? 1 : -1;
    const speed = 0.10 + (seed % 5) * 0.012;
    const { verts, edges } = icosphere(1);
    const particles = Array.from({ length: PARTICLES }, (_, i) => ({
      a: (i / PARTICLES) * Math.PI * 2 + ((seed * (i + 1)) % 97) / 97,
      y: (((seed * (i + 7)) % 61) / 61 - 0.5) * 0.5,
      r: 1.28 + ((seed * (i + 3)) % 41) / 41 * 0.22,
      s: 0.4 + ((seed * (i + 11)) % 53) / 53 * 0.8,
    }));

    let w = 0, h = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Przechył telefonu (jeśli czujnik działa bez pytania albo zgoda już jest) i ruch myszy na komputerze.
    const tilt = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let base: { b: number; g: number } | null = null;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      if (!base) base = { b: e.beta, g: e.gamma };
      base.b += (e.beta - base.b) * 0.01;
      base.g += (e.gamma - base.g) * 0.01;
      target.x = Math.max(-1, Math.min(1, (e.beta - base.b) / 25));
      target.y = Math.max(-1, Math.min(1, (e.gamma - base.g) / 25));
    };
    const onMouse = (e: MouseEvent) => {
      target.y = (e.clientX / window.innerWidth - 0.5) * 1.2;
      target.x = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: unknown } | undefined;
    const iosNeedsAsk = typeof DOE?.requestPermission === "function";
    if (!reduce) {
      if (coarse && DOE && (!iosNeedsAsk || sessionStorage.getItem("tilt-permission") === "granted")) {
        window.addEventListener("deviceorientation", onOrient, { passive: true });
      } else if (!coarse) {
        window.addEventListener("mousemove", onMouse, { passive: true });
      }
    }

    let raf = 0;
    let visible = true;
    let t0 = performance.now();
    let rotY = seed % 6, rotX = 0.35;
    const draw = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;
      if (!reduce) {
        rotY += dt * speed * dir;
        rotX += dt * speed * 0.35;
        tilt.x += (target.x - tilt.x) * 0.06;
        tilt.y += (target.y - tilt.y) * 0.06;
      }
      const cx = w / 2, cy = h / 2;
      const R = Math.min(w, h) * 0.38;
      const ax = rotX + tilt.x * 0.35, ay = rotY + tilt.y * 0.45;
      const sx = Math.sin(ax), cxr = Math.cos(ax), sy = Math.sin(ay), cyr = Math.cos(ay);
      const proj = (v: V3) => {
        // obrót wokół Y, potem X, lekka perspektywa
        const x1 = v[0] * cyr + v[2] * sy;
        const z1 = -v[0] * sy + v[2] * cyr;
        const y2 = v[1] * cxr - z1 * sx;
        const z2 = v[1] * sx + z1 * cxr;
        const p = 1 / (1 + z2 * 0.18);
        return { x: cx + x1 * R * p + tilt.y * R * 0.12, y: cy + y2 * R * p - tilt.x * R * 0.1, z: z2 };
      };

      ctx.clearRect(0, 0, w, h);
      // Wnętrze jak na stronie głównej: ciemna kula gasi tylne krawędzie, jasny rdzeń oddycha.
      const pulse = 0.94 + Math.sin(now / 900) * 0.06;
      ctx.fillStyle = "rgba(26,23,38,0.86)";
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.97, 0, Math.PI * 2); ctx.fill();
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.55 * pulse);
      core.addColorStop(0, "rgba(168,218,255,0.55)");
      core.addColorStop(0.45, "rgba(58,142,200,0.38)");
      core.addColorStop(1, "rgba(58,142,200,0)");
      ctx.fillStyle = core;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.55 * pulse, 0, Math.PI * 2); ctx.fill();

      const P = verts.map(proj);
      ctx.lineWidth = 1;
      for (const [a, b] of edges) {
        const za = (P[a].z + P[b].z) / 2;
        const alpha = za > 0 ? 0.85 : 0.14;
        ctx.strokeStyle = `rgba(168,218,255,${alpha})`;
        ctx.beginPath(); ctx.moveTo(P[a].x, P[a].y); ctx.lineTo(P[b].x, P[b].y); ctx.stroke();
      }
      // Cząstki na orbicie, tył przed kulą, przód po niej nie rozróżniamy: additive światło i tak je unosi.
      const tt = now / 1000;
      for (const pt of particles) {
        const ang = pt.a + (reduce ? 0 : tt * pt.s * 0.35 * dir);
        const v: V3 = [Math.cos(ang) * pt.r, pt.y + Math.sin(ang * 1.3) * 0.12, Math.sin(ang) * pt.r];
        const q = proj(v);
        const a = q.z > 0 ? 0.95 : 0.35;
        ctx.fillStyle = `rgba(232,178,134,${a})`;
        ctx.beginPath(); ctx.arc(q.x, q.y, q.z > 0 ? 1.6 : 1.1, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const start = () => { if (!raf) { t0 = performance.now(); raf = requestAnimationFrame(draw); } };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }, { threshold: 0.05 });
    io.observe(canvas);
    const onVis = () => { if (!document.hidden) start(); };
    document.addEventListener("visibilitychange", onVis);
    start();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("deviceorientation", onOrient);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [slug]);

  return (
    <div className={`svc-mark aspect-square ${className}`} aria-hidden>
      {/* Poświata z hero strony głównej */}
      <div
        className="absolute -inset-[18%] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 48%, rgba(58,142,200,0.34) 0%, rgba(58,142,200,0) 62%)",
          mixBlendMode: "screen",
          animation: "portraitGlow 5.5s ease-in-out infinite",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="svc-mark-icon w-[38%]">
          <Icon icon={icon} />
        </div>
      </div>
    </div>
  );
}
