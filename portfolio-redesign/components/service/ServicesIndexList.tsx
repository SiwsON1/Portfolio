"use client";

import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { SERVICE_CASE_MAP } from "@/lib/service-project-map";
import { services } from "@/lib/services";

type ServicePreview = {
  service: (typeof services)[number];
  project: Project | null;
};

const padNumber = (value: number) => String(value).padStart(2, "0");

export function ServicesIndexList() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const activeRow = useRef<HTMLLIElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);
  const lastMouseX = useRef(0);

  const servicePreviews = useMemo<ServicePreview[]>(
    () =>
      services.map((service) => ({
        service,
        project:
          projects.find(
            (candidate) => candidate.slug === SERVICE_CASE_MAP[service.slug]?.projectSlug
          ) ?? null,
      })),
    []
  );

  const projectsToPreview = useMemo<Project[]>(() => {
    const seen = new Set<string>();

    return servicePreviews.reduce<Project[]>((acc, item) => {
      if (!item.project || seen.has(item.project.slug)) return acc;
      seen.add(item.project.slug);
      acc.push(item.project);
      return acc;
    }, []);
  }, [servicePreviews]);

  const activePreview = servicePreviews.find((p) => p.service.slug === activeSlug);
  const activeProject = activePreview?.project ?? null;
  const activeIndex = activeSlug
    ? servicePreviews.findIndex((item) => item.service.slug === activeSlug)
    : -1;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const tick = () => {
      if (activeRow.current && wrapRef.current) {
        const wrapRect = wrapRef.current.getBoundingClientRect();
        const rowRect = activeRow.current.getBoundingClientRect();
        const previewRect = imageRef.current?.getBoundingClientRect();
        const width = previewRect?.width || 420;
        const height = previewRect?.height || 315;
        const desiredX = lastMouseX.current - wrapRect.left - width / 2;
        const minX = 16 - wrapRect.left;
        const maxX = window.innerWidth - width - 16 - wrapRect.left;

        target.current.x = Math.min(Math.max(desiredX, minX), maxX);
        target.current.y = rowRect.top + rowRect.height / 2 - wrapRect.top - height / 2;
      }

      const ease = reduce ? 1 : 0.14;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const updateTarget = (event: MouseEvent<HTMLLIElement>) => {
    if (!wrapRef.current) return;

    activeRow.current = event.currentTarget;
    lastMouseX.current = event.clientX;

    const wrapRect = wrapRef.current.getBoundingClientRect();
    const rowRect = event.currentTarget.getBoundingClientRect();
    const previewRect = imageRef.current?.getBoundingClientRect();
    const width = previewRect?.width || 420;
    const height = previewRect?.height || 315;
    const desiredX = event.clientX - wrapRect.left - width / 2;
    const minX = 16 - wrapRect.left;
    const maxX = window.innerWidth - width - 16 - wrapRect.left;

    target.current.x = Math.min(Math.max(desiredX, minX), maxX);
    target.current.y = rowRect.top + rowRect.height / 2 - wrapRect.top - height / 2;

    if (!initialized.current) {
      current.current.x = target.current.x;
      current.current.y = target.current.y;
      initialized.current = true;
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <div className="md:hidden">
        <ol className="border-t border-line">
          {servicePreviews.map(({ service, project }, index) => (
            <li key={service.slug} className="border-b border-line">
              <Link
                href={`/uslugi/${service.slug}`}
                className="grid grid-cols-10 gap-4 py-6"
                data-cursor="OTWÓRZ"
              >
                <div className="relative col-span-3 aspect-[3/2] overflow-hidden bg-bg-elev">
                  {project ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="30vw"
                    />
                  ) : null}
                </div>
                <div className="col-span-7 flex items-center justify-between gap-4">
                  <div>
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                      {padNumber(index + 1)}
                    </span>
                    <h2
                      className="font-display italic text-ink"
                      style={{
                        fontSize: "clamp(1.5rem, 1.1rem + 3vw, 2.5rem)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.03em",
                        fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <span className="font-mono text-base text-ink-mute">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="hidden md:block"
        onMouseLeave={() => {
          setActiveSlug(null);
          activeRow.current = null;
        }}
      >
        <ol className="relative border-t border-line">
          {servicePreviews.map(({ service }, index) => {
            const isActive = activeSlug === service.slug;

            return (
              <li
                key={service.slug}
                className="group relative border-b border-line"
                onMouseEnter={(event) => {
                  setActiveSlug(service.slug);
                  updateTarget(event);
                }}
                onMouseMove={updateTarget}
                onFocus={(event) => {
                  activeRow.current = event.currentTarget;
                  setActiveSlug(service.slug);
                }}
                onBlur={() => {
                  setActiveSlug(null);
                  activeRow.current = null;
                }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 h-px w-10 -translate-y-1/2 bg-peach transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:duration-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translate3d(0, -50%, 0) scaleX(1)"
                      : "translate3d(-12px, -50%, 0) scaleX(0.5)",
                    transformOrigin: "left center",
                  }}
                />
                <Link
                  href={`/uslugi/${service.slug}`}
                  className="block py-10 md:py-14"
                  data-cursor="OTWÓRZ"
                >
                  <div className="grid grid-cols-12 items-baseline gap-4">
                    <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                      {padNumber(index + 1)}
                    </span>
                    <h2
                      className="col-span-10 font-display italic text-ink transition-[color,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-peach motion-reduce:duration-0"
                      style={{
                        fontSize: "clamp(2rem, 1rem + 3.2vw, 4.5rem)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.03em",
                        fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                      }}
                    >
                      {service.title}
                    </h2>
                    <span className="col-span-1 text-right font-mono text-base text-ink-mute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-peach motion-reduce:duration-0">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <div
          ref={imageRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-50"
          style={{
            width: "clamp(360px, 28vw, 480px)",
            aspectRatio: "4 / 3",
            opacity: activeSlug ? 1 : 0,
            transition: "opacity 450ms cubic-bezier(0.23, 1, 0.32, 1)",
            willChange: "transform, opacity",
          }}
        >
          <div className="relative h-full w-full overflow-hidden bg-bg-elev shadow-[0_36px_90px_-24px_rgba(0,0,0,0.82)]">
            {projectsToPreview.map((project) => {
              const isActive = activeProject?.slug === project.slug;

              return (
                <Image
                  key={project.slug}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:duration-0"
                  sizes="480px"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(1.06)",
                  }}
                />
              );
            })}

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(232,178,134,0.24)]"
            />

            {activeProject ? (
              <>
                <div className="absolute bottom-4 left-4 max-w-[calc(100%-7rem)] font-mono text-[10px] uppercase tracking-[0.22em] text-ink mix-blend-difference">
                  {activeProject.client} · {activeProject.year}
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink mix-blend-difference">
                  {padNumber(activeIndex + 1)}/{padNumber(servicePreviews.length)}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
