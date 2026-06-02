"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/lib/projects";

const CUBE_FACES = ["front", "back", "left", "right", "top", "bottom"] as const;
const SLOTS_PER_FACE = 9;
const MARQUEE_REPEATS = 4;

type CellEntry = { slot: number; project: Project };

export function PortfolioCube() {
  const [viewportLabel, setViewportLabel] = useState("1440 x 900");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setViewportLabel(`${window.innerWidth} x ${window.innerHeight}`);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cubeSlots = useMemo<{ face: typeof CUBE_FACES[number]; entries: CellEntry[] }[]>(
    () =>
      CUBE_FACES.map((face, faceIndex) => ({
        face,
        entries: Array.from({ length: SLOTS_PER_FACE }, (_, slot) => {
          const idx = (faceIndex * SLOTS_PER_FACE + slot) % projects.length;
          return { slot, project: projects[idx] };
        }),
      })),
    []
  );

  const marqueeItems = useMemo(() => {
    const seen = new Set<string>();
    const unique = projects.filter((p) => {
      if (seen.has(p.slug)) return false;
      seen.add(p.slug);
      return true;
    });
    return Array.from({ length: MARQUEE_REPEATS }, (_, repeatIndex) =>
      unique.map((project) => ({
        key: `${repeatIndex}-${project.slug}`,
        slug: project.slug,
        displayName: project.client === "Lab" ? project.title : project.client,
      }))
    ).flat();
  }, []);

  const isPaused = activeSlug !== null;

  // Rotacja sterowana JS-em: powolny idle spin + chwytanie myszką z inercją (jak drag-orbit u Corentina)
  const cubeRef = useRef<HTMLDivElement>(null);
  const rot = useRef({ x: -22, y: 32 });
  const vel = useRef({ x: 0, y: 0 });
  const drag = useRef({ active: false, lx: 0, ly: 0, moved: 0 });
  const scale = useRef(1);
  const activeRef = useRef(false);
  activeRef.current = isPaused;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Lokalna normalna każdej ściany (kierunek na zewnątrz) — do liczenia czy patrzy na kamerę
    const faceNormals: Record<string, [number, number, number]> = {
      front: [0, 0, 1],
      back: [0, 0, -1],
      right: [1, 0, 0],
      left: [-1, 0, 0],
      top: [0, -1, 0],
      bottom: [0, 1, 0],
    };
    const faceEls = cubeRef.current
      ? (Object.keys(faceNormals)
          .map((name) => {
            const el = cubeRef.current!.querySelector<HTMLElement>(
              `.portfolio-cube-face--${name}`
            );
            return el ? { el, n: faceNormals[name] } : null;
          })
          .filter(Boolean) as { el: HTMLElement; n: [number, number, number] }[])
      : [];

    const rad = (d: number) => (d * Math.PI) / 180;
    let raf = 0;
    const tick = () => {
      const r = rot.current;
      if (!drag.current.active) {
        r.x += vel.current.x;
        r.y += vel.current.y;
        vel.current.x *= 0.92;
        vel.current.y *= 0.92;
        if (!reduce) r.y += 0.14;
      }
      if (r.x > 60) r.x = 60;
      if (r.x < -60) r.x = -60;
      // Zoom-in gdy wybrana nazwa projektu (cube przybliża się do widza)
      const targetScale = activeRef.current ? 1.16 : 1;
      scale.current += (targetScale - scale.current) * 0.12;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `scale(${scale.current.toFixed(3)}) rotateX(${r.x}deg) rotateY(${r.y}deg)`;
      }
      // Wyszarzanie ścian zwróconych w głąb (efekt głębi jak u Corentina)
      const cx = Math.cos(rad(r.x));
      const sx = Math.sin(rad(r.x));
      const cy = Math.cos(rad(r.y));
      const sy = Math.sin(rad(r.y));
      for (const f of faceEls) {
        const [nx, ny, nz] = f.n;
        // obrót normalnej: Ry potem Rx (zgodnie z transform rotateX rotateY)
        const z1 = -nx * sy + nz * cy;
        const worldZ = ny * sx + z1 * cx;
        // worldZ > 0 = patrzy na kamerę (kolor); < 0 = w głębi (greyscale)
        const t = Math.max(0, Math.min(1, (0.2 - worldZ) / 0.7));
        f.el.style.filter = `grayscale(${t.toFixed(2)}) brightness(${(1 - t * 0.5).toFixed(2)})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current = { active: true, lx: e.clientX, ly: e.clientY, moved: 0 };
    vel.current = { x: 0, y: 0 };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lx;
    const dy = e.clientY - drag.current.ly;
    drag.current.lx = e.clientX;
    drag.current.ly = e.clientY;
    drag.current.moved += Math.abs(dx) + Math.abs(dy);
    rot.current.y += dx * 0.4;
    rot.current.x -= dy * 0.4;
    vel.current = { x: -dy * 0.06, y: dx * 0.06 };
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };
  // Nie nawiguj jeśli to był drag (a nie klik) — próg 6px
  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative flex min-h-[100svh] flex-col justify-center border-b border-line px-6 pb-10 pt-28 md:px-10 md:pt-32">
      <div className="relative z-10 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span>{viewportLabel}</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-peach" aria-hidden />
          {projects.length.toString().padStart(3, "0")} realizacji
        </span>
      </div>

      {/* Editorial info corner lewy dolny — jak Corentin "Corentin Bernadou / Freelance Developer + Issue" */}
      <div className="pointer-events-none absolute bottom-6 left-0 z-20 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:block md:left-4 lg:left-6">
        <div>Marcin Siwonia</div>
        <div className="text-ink-mute/60">Freelance Developer</div>
        <div className="mt-3">Issue · No.001 / Coll. 2026</div>
        <div className="text-ink-mute/60">Ref. MS-032026-R01</div>
      </div>

      {/* Status bar prawy dolny — mała info linia */}
      <div className="pointer-events-none absolute bottom-6 right-0 z-20 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint md:block md:right-4 lg:right-6">
        <div className="text-right">Wrocław · 51.10°N · 17.03°E</div>
        <div className="text-right text-ink-mute/60">Status · Live · 2026</div>
      </div>

      <div
        className="portfolio-cube-stage relative"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        style={{ touchAction: "none", cursor: "grab" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "min(60vw, 620px)",
            height: "min(50vw, 480px)",
            background:
              "radial-gradient(ellipse at center, rgba(232,178,134,0.22) 0%, rgba(232,178,134,0.06) 35%, rgba(20,19,31,0) 70%)",
            mixBlendMode: "screen",
            filter: "blur(28px)",
          }}
        />

        {/* Floor drop shadow pod cube (floating feel) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: "8%",
            width: "min(38vw, 440px)",
            height: "60px",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0) 80%)",
            filter: "blur(18px)",
          }}
        />

        <div
          ref={cubeRef}
          className="portfolio-cube"
          aria-label="Cube projektow"
        >
          {cubeSlots.map(({ face, entries }) => (
            <div key={face} className={`portfolio-cube-face portfolio-cube-face--${face}`}>
              {entries.map(({ slot, project }) => {
                const isActive = activeSlug === null || activeSlug === project.slug;
                return (
                  <a
                    key={`${face}-${slot}`}
                    href={`/projekty/${project.slug}`}
                    className="portfolio-cube-cell"
                    data-active={isActive ? "true" : "false"}
                    data-focused={activeSlug === project.slug ? "true" : "false"}
                    title={project.client === "Lab" ? project.title : project.client}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="portfolio-cube-img"
                      loading="lazy"
                      draggable={false}
                    />
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <aside
        aria-label="Lista projektow"
        className="pointer-events-auto fixed right-6 top-[28vh] z-30 hidden h-[52vh] w-44 overflow-hidden lg:block lg:right-10 xl:w-52"
        onMouseLeave={() => setActiveSlug(null)}
      >
        <div className={`portfolio-marquee ${isPaused ? "portfolio-marquee--paused" : ""}`}>
          {marqueeItems.map((item) => {
            const isActive = activeSlug === item.slug;
            const isDimmed = activeSlug !== null && !isActive;
            return (
              <a
                key={item.key}
                href={`/projekty/${item.slug}`}
                className={`portfolio-marquee-item block py-1 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? "text-peach" : isDimmed ? "text-ink-faint/30" : "text-ink-mute hover:text-ink"
                }`}
                onMouseEnter={() => setActiveSlug(item.slug)}
                onFocus={() => setActiveSlug(item.slug)}
                onBlur={() => setActiveSlug(null)}
              >
                {item.displayName}
              </a>
            );
          })}
        </div>
      </aside>

      <style jsx>{`
        .portfolio-cube-stage {
          --cube-size: clamp(360px, 40vw, 520px);
          --cube-depth: calc(var(--cube-size) / 2);
          align-items: center;
          display: flex;
          justify-content: center;
          min-height: 64vh;
          perspective: 1700px;
          perspective-origin: 50% 45%;
          position: relative;
          z-index: 10;
        }

        .portfolio-cube {
          height: var(--cube-size);
          position: relative;
          transform-style: preserve-3d;
          width: var(--cube-size);
          will-change: transform;
        }

        .portfolio-cube--paused {
          animation-play-state: paused;
        }

        @keyframes portfolioCubeRotate {
          0% {
            transform: rotateX(-25deg) rotateY(35deg) rotateZ(-2deg);
          }
          25% {
            transform: rotateX(-20deg) rotateY(125deg) rotateZ(1deg);
          }
          50% {
            transform: rotateX(-28deg) rotateY(215deg) rotateZ(-3deg);
          }
          75% {
            transform: rotateX(-20deg) rotateY(305deg) rotateZ(1deg);
          }
          100% {
            transform: rotateX(-25deg) rotateY(395deg) rotateZ(-2deg);
          }
        }

        .portfolio-cube-face {
          display: grid;
          gap: clamp(12px, 1.5vw, 22px);
          padding: clamp(12px, 1.5vw, 22px);
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          inset: 0;
          position: absolute;
          transform-style: preserve-3d;
        }

        .portfolio-cube-face--front {
          transform: rotateY(0deg) translateZ(var(--cube-depth));
        }
        .portfolio-cube-face--back {
          filter: brightness(0.78);
          transform: rotateY(180deg) translateZ(var(--cube-depth));
        }
        .portfolio-cube-face--left {
          filter: brightness(0.88);
          transform: rotateY(-90deg) translateZ(var(--cube-depth));
        }
        .portfolio-cube-face--right {
          filter: brightness(0.88);
          transform: rotateY(90deg) translateZ(var(--cube-depth));
        }
        .portfolio-cube-face--top {
          transform: rotateX(90deg) translateZ(var(--cube-depth));
        }
        .portfolio-cube-face--bottom {
          filter: brightness(0.78);
          transform: rotateX(-90deg) translateZ(var(--cube-depth));
        }

        .portfolio-cube-cell {
          background: var(--bg);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
          display: block;
          overflow: hidden;
          position: relative;
          transition: opacity 350ms cubic-bezier(0.23, 1, 0.32, 1),
            filter 350ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .portfolio-cube-cell::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.18) 100%
          );
          opacity: 0.65;
          mix-blend-mode: overlay;
        }

        .portfolio-cube-cell[data-active="false"] .portfolio-cube-img {
          filter: grayscale(1) brightness(0.45) contrast(0.9);
          opacity: 0.55;
        }

        /* Najechany projekt — pełny kolor + peach ring, wybija się ze sceny */
        .portfolio-cube-cell[data-focused="true"] {
          box-shadow: inset 0 0 0 1.5px rgba(232, 178, 134, 0.95),
            0 0 22px rgba(232, 178, 134, 0.35);
          z-index: 2;
        }
        .portfolio-cube-cell[data-focused="true"] .portfolio-cube-img {
          filter: brightness(1.12) saturate(1.18) contrast(1.02);
          transform: scale(1.04);
        }

        .portfolio-cube-cell:hover .portfolio-cube-img {
          filter: brightness(1.15) saturate(1.1);
          transform: scale(1.03);
        }

        .portfolio-cube-img {
          display: block;
          height: 100%;
          object-fit: cover;
          object-position: top;
          /* Soft contrast — text na screenshotach mniej dominujący, ogólny tone bardziej editorial */
          filter: contrast(0.92) saturate(1.05);
          transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1),
            filter 350ms cubic-bezier(0.23, 1, 0.32, 1);
          width: 100%;
        }

        .portfolio-marquee {
          animation: portfolioMarquee 48s linear infinite;
          will-change: transform;
        }

        .portfolio-marquee--paused {
          animation-play-state: paused;
        }

        @keyframes portfolioMarquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-75%);
          }
        }

        @media (max-width: 767px) {
          .portfolio-cube-stage {
            min-height: 380px;
            --cube-size: clamp(220px, 60vw, 300px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-cube,
          .portfolio-marquee {
            animation: none;
          }
          .portfolio-cube {
            transform: rotateX(-25deg) rotateY(35deg) rotateZ(-2deg);
          }
        }
      `}</style>
    </div>
  );
}
