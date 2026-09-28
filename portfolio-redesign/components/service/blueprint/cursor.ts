import type { Chip, Waypoint } from "./types";

const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const START = { x: 330, y: 250 };

/**
 * Generuje CSS kursora, kliknięć, fal i chipów dla jednej scenki. Klatki kluczowe liczone z milisekund,
 * więc scenka opisuje tylko „gdzie i kiedy”, a nie procenty. Klasy są unikatowe per scenka (id = slug).
 */
export function sceneCss(id: string, duration: number, wps: Waypoint[] = [], chips: Chip[] = []) {
  const pct = (ms: number) => ((Math.min(Math.max(ms, 0), duration) / duration) * 100).toFixed(2);
  const out: string[] = [];

  if (wps.length) {
    const first = wps[0];
    const t0 = Math.max(0, first.at - (first.travel ?? 600) - 150);
    const kf: string[] = [`0%, ${pct(t0)}% { translate: ${START.x}px ${START.y}px; opacity: 0; animation-timing-function: ${EASE}; }`, `${pct(t0 + 100)}% { opacity: 1; }`];
    let prev: { x: number; y: number } = START;
    wps.forEach((w, i) => {
      const travel = w.travel ?? 550;
      if (i > 0) kf.push(`${pct(w.at - travel)}% { translate: ${prev.x}px ${prev.y}px; animation-timing-function: ${EASE}; }`);
      kf.push(`${pct(w.at)}% { translate: ${w.x}px ${w.y}px; }`);
      prev = w;
    });
    const last = wps[wps.length - 1];
    const fadeAt = Math.min(duration - 250, last.at + 700);
    kf.push(`${pct(fadeAt)}% { translate: ${last.x}px ${last.y}px; opacity: 1; }`, `100% { translate: ${last.x + 12}px ${last.y - 12}px; opacity: 0; }`);
    out.push(`.bp-cur-${id} { animation: bp-cur-${id} ${duration}ms both; }`, `@keyframes bp-cur-${id} { ${kf.join(" ")} }`);

    const clicks = wps.filter((w) => w.click);
    if (clicks.length) {
      const ck = clicks.flatMap((w) => [`${pct(w.at)}% { scale: 1; }`, `${pct(w.at + 110)}% { scale: 0.82; }`, `${pct(w.at + 260)}% { scale: 1; }`]);
      out.push(`.bp-click-${id} { animation: bp-click-${id} ${duration}ms both; }`, `@keyframes bp-click-${id} { 0% { scale: 1; } ${ck.join(" ")} 100% { scale: 1; } }`);
      const rk = clicks.flatMap((w) => [`${pct(w.at)}% { opacity: 0; scale: 0.3; }`, `${pct(w.at + 20)}% { opacity: 0.9; }`, `${pct(w.at + 420)}% { opacity: 0; scale: 1.6; }`]);
      out.push(`.bp-ripple-${id} { animation: bp-ripple-${id} ${duration}ms both; }`, `@keyframes bp-ripple-${id} { 0% { opacity: 0; scale: 0.3; } ${rk.join(" ")} 100% { opacity: 0; } }`);
    }
  }

  chips.forEach((c, i) => {
    const name = `bp-chip-${id}-${i}`;
    out.push(
      `.${name} { animation: ${name} ${c.end - c.start}ms ${EASE} ${c.start}ms both, hwC-chip-out 220ms ease-out ${c.end}ms forwards; }`,
      `@keyframes ${name} { 0% { translate: ${c.from[0]}px ${c.from[1]}px; opacity: 0; scale: 0.8; } 18% { opacity: 1; scale: 1; } 100% { translate: ${c.to[0]}px ${c.to[1]}px; opacity: 1; } }`,
    );
  });

  return out.join("\n");
}

/** Szerokość chipa w jednostkach planszy dla tekstu mono 6 px. */
export const chipWidth = (text: string) => Math.round(text.length * 4.3 + 12);
