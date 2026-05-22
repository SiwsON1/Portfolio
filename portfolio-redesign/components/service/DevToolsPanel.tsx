"use client";

import { useEffect, useRef, useState } from "react";

type Resource = {
  name: string;
  type: string;
  size: number;
  duration: number;
  cached: boolean;
};

type PerfMemory = {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
};

function formatSize(bytes: number) {
  if (bytes <= 0) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function shortName(url: string) {
  try {
    const u = new URL(url);
    const decoded = decodeURIComponent(u.pathname);
    const parts = decoded.split("/").filter(Boolean);
    if (parts.length === 0) return u.host;

    let last = parts[parts.length - 1];
    const queryIdx = last.indexOf("?");
    if (queryIdx > -1) last = last.slice(0, queryIdx);
    // Trim Next.js asset hashes like _next/static/chunks/abc123-xyz.js
    if (last.length > 38) {
      last = last.slice(0, 32) + "…" + last.slice(-3);
    }
    const parent = parts.length > 1 ? parts[parts.length - 2] : "";
    if (parent && parent.length < 24 && !parent.includes("[")) {
      return `${parent}/${last}`;
    }
    return last;
  } catch {
    return url.slice(0, 40);
  }
}

function resourceKind(initiatorType: string, name: string): string {
  if (initiatorType === "css" || /\.css(\?|$)/.test(name)) return "stylesheet";
  if (initiatorType === "script" || /\.js(\?|$)/.test(name)) return "script";
  if (/\.(woff2?|ttf|otf|eot)(\?|$)/.test(name)) return "font";
  if (/\.(png|jpg|jpeg|webp|avif|svg|gif)(\?|$)/.test(name)) return "image";
  if (initiatorType === "fetch" || initiatorType === "xmlhttprequest") return "fetch";
  return initiatorType || "other";
}

export function DevToolsPanel() {
  const [mounted, setMounted] = useState(false);
  const [fps, setFps] = useState(60);
  const [renderMs, setRenderMs] = useState<number | null>(null);
  const [ttfb, setTtfb] = useState<number | null>(null);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [memory, setMemory] = useState<number | null>(null);
  const [resources, setResources] = useState<Resource[]>([]);
  const [resourceCount, setResourceCount] = useState(0);
  const [totalTransfer, setTotalTransfer] = useState(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    startRef.current = performance.now();

    let frameId = 0;
    let frames = 0;
    let lastFpsTick = performance.now();
    let lastUiTick = performance.now();

    const loop = () => {
      const now = performance.now();
      frames += 1;

      if (now - lastFpsTick >= 500) {
        const measuredFps = Math.round((frames * 1000) / (now - lastFpsTick));
        setFps(Math.min(measuredFps, 120));
        frames = 0;
        lastFpsTick = now;
      }

      if (now - lastUiTick >= 100) {
        setTimeOnPage((now - startRef.current) / 1000);
        const perfWithMem = performance as Performance & { memory?: PerfMemory };
        if (perfWithMem.memory) {
          setMemory(perfWithMem.memory.usedJSHeapSize / 1024 / 1024);
        }
        lastUiTick = now;
      }

      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    const collectResources = () => {
      const nav = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;
      if (nav) {
        const render = nav.domContentLoadedEventEnd - nav.responseEnd;
        setRenderMs(Math.max(0, Math.round(render)));
        setTtfb(Math.max(0, Math.round(nav.responseStart - nav.requestStart)));
      }

      const all = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
      let totalBytes = 0;
      all.forEach((r) => {
        totalBytes += r.transferSize || r.encodedBodySize || 0;
      });
      setResourceCount(all.length);
      setTotalTransfer(totalBytes);

      const picks: Resource[] = [];
      const seenKinds = new Set<string>();
      const order = ["document", "stylesheet", "script", "font", "image"];

      if (nav) {
        picks.push({
          name: shortName(nav.name),
          type: "document",
          size: nav.transferSize || nav.encodedBodySize || 0,
          duration: Math.round(nav.responseEnd - nav.requestStart),
          cached: (nav.transferSize || 0) === 0 && (nav.encodedBodySize || 0) > 0,
        });
        seenKinds.add("document");
      }

      for (const kind of order) {
        if (seenKinds.has(kind)) continue;
        const match = all.find((r) => resourceKind(r.initiatorType, r.name) === kind);
        if (!match) continue;
        picks.push({
          name: shortName(match.name),
          type: kind,
          size: match.transferSize || match.encodedBodySize || 0,
          duration: Math.round(match.duration),
          cached: (match.transferSize || 0) === 0 && (match.encodedBodySize || 0) > 0,
        });
        seenKinds.add(kind);
        if (picks.length >= 5) break;
      }
      setResources(picks);
    };

    collectResources();
    const interval = window.setInterval(collectResources, 4000);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearInterval(interval);
    };
  }, []);

  const fpsColor =
    fps >= 55 ? "text-emerald-300" : fps >= 30 ? "text-peach" : "text-rose-300";

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-px pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,178,134,0.10), transparent 45%)",
          mixBlendMode: "screen",
        }}
      />
      <div className="relative border border-line bg-bg-elev font-mono text-[13px] text-ink-mute">
        <div className="flex items-center justify-between border-b border-line px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5">
              <span className="block h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="block h-2.5 w-2.5 rounded-full bg-peach/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              devtools · live
            </span>
          </div>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-peach">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-peach/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-peach" />
            </span>
            performance.now()
          </span>
        </div>

        <div className="grid grid-cols-2 divide-y divide-x divide-line border-b border-line">
          <Stat
            label="Frame rate"
            value={mounted ? `${fps}fps` : "—"}
            caption="Cel: 60 FPS · 16.67 ms / frame"
            valueClass={fpsColor}
            note="Twoja przeglądarka renderuje ten panel płynnie."
          />
          <Stat
            label="Render JS"
            value={mounted && renderMs !== null ? `${renderMs}ms` : "—"}
            caption={ttfb !== null ? `TTFB ${ttfb}ms · DOMContentLoaded` : "DOMContentLoaded"}
            note="Czas od pierwszego bajtu HTML do gotowego DOM."
          />
          <Stat
            label="Time on page"
            value={mounted ? `${timeOnPage.toFixed(1)}s` : "0.0s"}
            caption="Licznik od pageshow"
            note="Liczone z window.performance.now()."
          />
          <Stat
            label="Memory used"
            value={mounted && memory !== null ? `~${Math.round(memory)}mb` : "n/a"}
            caption={
              memory !== null ? "performance.memory" : "Chrome / Edge tylko"
            }
            note="Heap silnika JavaScript w Twojej karcie."
          />
        </div>

        <div className="px-4 py-5 md:px-6">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              Network
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/80">
              idle · {resourceCount} req · {formatSize(totalTransfer)}
            </p>
          </div>

          <ul className="space-y-2.5 md:space-y-2">
            {resources.map((r) => (
              <li
                key={`${r.type}-${r.name}`}
                className="flex flex-wrap md:grid md:grid-cols-12 gap-x-3 gap-y-1 items-baseline"
              >
                <span className="text-emerald-300/90 md:col-span-1">200</span>
                <span className="text-ink-faint text-[10px] uppercase tracking-[0.14em] md:col-span-2">
                  {r.type}
                </span>
                <span className="basis-full md:basis-auto truncate text-ink md:col-span-6">
                  {r.name}
                </span>
                <span className="text-ink-mute md:col-span-2 md:text-right">
                  {formatSize(r.size)}
                </span>
                <span className="text-ink-faint md:col-span-1 md:text-right">
                  {r.cached ? "cached" : `${r.duration} ms`}
                </span>
              </li>
            ))}
            <li className="pt-3 mt-2 border-t border-line text-ink-faint flex items-baseline gap-3">
              <span className="text-[11px] uppercase tracking-[0.22em]">···</span>
              <span>żadnych zapytań do bazy danych z tego widoku</span>
            </li>
          </ul>
        </div>

        <div className="border-t border-line px-4 py-3 md:px-6 text-[11px] text-ink-faint leading-relaxed">
          ↑ Te liczby pochodzą z <code className="text-ink-mute">window.performance</code> w Twojej
          przeglądarce, nie z naszego API. Otwórz DevTools (F12), zakładkę
          Performance i sprawdź sam.
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  caption,
  note,
  valueClass = "text-ink",
}: {
  label: string;
  value: string;
  caption: string;
  note?: string;
  valueClass?: string;
}) {
  return (
    <div className="p-5 md:p-6 group">
      <p className="text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
        {label}
      </p>
      <p
        className={`font-display ${valueClass}`}
        style={{
          fontSize: "clamp(1.75rem, 1rem + 2vw, 2.5rem)",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          fontStyle: "italic",
          fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
        }}
      >
        {value}
      </p>
      <p className="mt-3 text-[11px] text-ink-faint leading-snug">{caption}</p>
      {note ? (
        <p className="mt-2 text-[11px] text-ink-mute leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}
