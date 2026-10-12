"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cycleRate, getServerSnapshot, getSnapshot, initReader, pause, play, stop, subscribe } from "@/lib/speechReader";

function useReader() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Okrągły przycisk z pierścieniem postępu czytania. */
function PlayRing({ size, progress, playing, onClick, label }: { size: number; progress: number; playing: boolean; onClick: () => void; label: string }) {
  const r = size / 2 - 2;
  const c = 2 * Math.PI * r;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={playing}
      data-cursor={playing ? "PAUZA" : "SŁUCHAJ"}
      className="group relative grid shrink-0 place-items-center rounded-full text-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-line)" strokeWidth="1.5" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </svg>
      <span className="relative grid place-items-center rounded-full bg-peach/10 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-active:scale-95" style={{ width: size - 12, height: size - 12 }}>
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><rect x="2" y="1.5" width="2.6" height="9" rx="1" fill="currentColor" /><rect x="7.4" y="1.5" width="2.6" height="9" rx="1" fill="currentColor" /></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><path d="M3 1.6v8.8a.6.6 0 0 0 .9.5l7-4.4a.6.6 0 0 0 0-1L3.9 1.1a.6.6 0 0 0-.9.5Z" fill="currentColor" /></svg>
        )}
      </span>
    </button>
  );
}

/** Trzy słupki „mówienia”; przy ograniczonym ruchu stoją. */
function Bars({ on }: { on: boolean }) {
  return (
    <span className="listen-bars inline-flex h-3 items-end gap-[2px]" data-on={on} aria-hidden>
      <i /><i /><i />
    </span>
  );
}

/** Wejście do słuchania pod nagłówkiem wpisu + mini odtwarzacz przypięty u dołu, gdy nagłówek zniknie z ekranu. */
export function ListenControl({ minutes }: { minutes: number }) {
  const s = useReader();
  const anchor = useRef<HTMLDivElement>(null);
  const [away, setAway] = useState(false);

  useEffect(() => {
    initReader();
    return () => stop();
  }, []);

  useEffect(() => {
    const el = anchor.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setAway(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
    // Przycisk renderuje się dopiero, gdy przeglądarka ma polski głos, więc obserwator podpinam po tym.
  }, [s.supported]);

  if (!s.supported) return null;
  const playing = s.status === "playing";
  const progress = s.total ? (s.index + (playing ? 0.5 : 0)) / s.total : 0;
  const toggle = () => (playing ? pause() : play());
  const showMini = away && s.status !== "idle";

  return (
    <>
      <div ref={anchor} className="mt-6 flex items-center gap-4">
        <PlayRing size={52} progress={progress} playing={playing} onClick={toggle} label={playing ? "Wstrzymaj czytanie" : "Posłuchaj wpisu"} />
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-ink">
            <span className="font-display italic" style={{ fontSize: "1.25rem", lineHeight: 1.1 }}>
              {s.status === "idle" ? "Posłuchaj wpisu" : playing ? "Czytam" : "Wstrzymane"}
            </span>
            {s.status !== "idle" && <Bars on={playing} />}
          </p>
          <p className="mt-1 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint" aria-live="polite">
            {s.status === "idle" ? `Około ${minutes} min · głos przeglądarki` : s.section || "Wstęp"}
          </p>
        </div>
        <button
          type="button"
          onClick={cycleRate}
          aria-label={`Tempo czytania ${s.rate}×, zmień`}
          className="ml-auto rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tabular-nums text-ink-mute transition-colors hover:border-peach hover:text-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach md:ml-4"
        >
          {s.rate}×
        </button>
      </div>

      <div
        className="listen-mini fixed bottom-[5.75rem] left-1/2 z-50 md:bottom-6 flex items-center gap-3 rounded-full border border-line bg-bg-elev/95 py-1.5 pl-1.5 pr-4 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]"
        data-show={showMini}
        aria-hidden={!showMini}
      >
        <PlayRing size={40} progress={progress} playing={playing} onClick={toggle} label={playing ? "Wstrzymaj czytanie" : "Wznów czytanie"} />
        <span className="flex min-w-0 max-w-[52vw] items-center gap-2 md:max-w-[22rem]">
          <Bars on={playing} />
          <span className="truncate text-sm text-ink">{s.section || "Wstęp"}</span>
        </span>
        <button type="button" onClick={stop} aria-label="Zakończ czytanie" tabIndex={showMini ? 0 : -1} className="ml-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint transition-colors hover:text-peach">
          Stop
        </button>
      </div>
    </>
  );
}
