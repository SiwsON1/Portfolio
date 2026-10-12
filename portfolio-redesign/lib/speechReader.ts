"use client";

// Czytanie wpisu na głos przez Web Speech API: jedna wypowiedź na akapit (krótkie wypowiedzi omijają
// limit długości w Chrome i pozwalają podświetlać czytany akapit). Stan wspólny dla przycisku, mini
// odtwarzacza i szyny czytania.

export type ReaderState = {
  supported: boolean;
  status: "idle" | "playing" | "paused";
  index: number;
  total: number;
  section: string;
  rate: number;
  caption: string;
};

const RATES = [1, 1.25, 1.5];
const listeners = new Set<() => void>();
let state: ReaderState = { supported: false, status: "idle", index: 0, total: 0, section: "", rate: 1, caption: "" };
let blocks: HTMLElement[] = [];
let voice: SpeechSynthesisVoice | null = null;
let current: SpeechSynthesisUtterance | null = null;

function set(patch: Partial<ReaderState>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

export function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}
export const getSnapshot = () => state;
const SERVER_STATE: ReaderState = { supported: false, status: "idle", index: 0, total: 0, section: "", rate: 1, caption: "" };
export const getServerSnapshot = () => SERVER_STATE;

/** Najlepszy polski głos: najpierw neuronowe (Edge „Online (Natural)”, Google), potem dowolny pl. */
function pickVoice() {
  const all = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("pl"));
  voice =
    all.find((v) => /natural|online|neural/i.test(v.name)) ??
    all.find((v) => /google/i.test(v.name)) ??
    all[0] ??
    null;
  set({ supported: !!voice });
}

export function initReader() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  pickVoice();
  window.speechSynthesis.addEventListener?.("voiceschanged", pickVoice);
}

function collect() {
  const root = document.getElementById("post-body");
  blocks = root ? Array.from(root.querySelectorAll<HTMLElement>("h2, p, li")).filter((el) => el.innerText.trim() && !el.closest("pre, table, dl")) : [];
  set({ total: blocks.length });
}

function sectionOf(el: HTMLElement) {
  return el.closest("section")?.querySelector("h2")?.textContent?.trim() ?? "";
}

const inView = (el?: HTMLElement) => {
  if (!el) return false;
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight;
};

function mark(i: number) {
  const prev = blocks.find((b) => b.classList.contains("is-reading"));
  blocks.forEach((b) => b.classList.remove("is-reading"));
  const el = blocks[i];
  if (!el) return;
  el.classList.add("is-reading");
  const r = el.getBoundingClientRect();
  // Przewijam za głosem tylko, gdy czytelnik go śledzi (poprzedni akapit był na ekranie albo to start).
  const following = !prev || inView(prev);
  if (following && (r.top < 90 || r.bottom > window.innerHeight - 110)) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  }
}

/** Tekst akapitu do czytania, bez numerów i etykiet zapisanych czcionką mono. */
function readable(el: HTMLElement) {
  const c = el.cloneNode(true) as HTMLElement;
  c.querySelectorAll(".font-mono, [aria-hidden]").forEach((n) => n.remove());
  return (c.textContent ?? "").replace(/\s+/g, " ").trim();
}

/** Zdania akapitu: osobna wypowiedź na zdanie daje napisy i krótsze kawałki dla syntezatora. */
function sentences(text: string) {
  // Kropka między cyframi („2,5”, „1.5”) i po skrótach typu „np.” nie kończy zdania.
  return text.match(/(?:[^.!?…]|\.(?=\d)|(?<=\b(?:np|m|in|tzw|ok|tj|dr|ul|nr))\.)+[.!?…]+[)"”]*|[^.!?…]+$/g)?.map((x) => x.trim()).filter(Boolean) ?? [text];
}

/** Puls przy każdym słowie (zdarzenie boundary); ilustracja nad wpisem faluje mocniej. Bez re-renderu Reacta. */
const pulses = new Set<() => void>();
export function onWord(cb: () => void) {
  pulses.add(cb);
  return () => {
    pulses.delete(cb);
  };
}

function speak(i: number, s = 0) {
  if (i >= blocks.length) return stop();
  const el = blocks[i];
  const parts = sentences(readable(el));
  if (s >= parts.length) return speak(i + 1);
  const u = new SpeechSynthesisUtterance(parts[s]);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? "pl-PL";
  u.rate = state.rate;
  u.onboundary = (e) => {
    if (e.name === "word" || e.name === undefined) pulses.forEach((p) => p());
  };
  u.onend = () => {
    if (current !== u || state.status !== "playing") return;
    speak(i, s + 1);
  };
  current = u;
  set({ status: "playing", index: i, section: sectionOf(el), caption: parts[s] });
  if (s === 0) mark(i);
  pulses.forEach((p) => p());
  window.speechSynthesis.speak(u);
}

export function play(fromIndex?: number) {
  if (!state.supported) return;
  if (!blocks.length || fromIndex !== undefined) collect();
  window.speechSynthesis.cancel();
  speak(fromIndex ?? (state.status === "paused" ? state.index : 0));
}

/** Pauza przez anulowanie i zapamiętanie akapitu: pause()/resume() w Chrome bywa zawodne. */
export function pause() {
  current = null;
  window.speechSynthesis.cancel();
  set({ status: "paused" });
}

export function stop() {
  current = null;
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
  blocks.forEach((b) => b.classList.remove("is-reading"));
  set({ status: "idle", index: 0, section: "", caption: "" });
}

export function cycleRate() {
  const next = RATES[(RATES.indexOf(state.rate) + 1) % RATES.length];
  set({ rate: next });
  if (state.status === "playing") {
    window.speechSynthesis.cancel();
    speak(state.index);
  }
}

/** Skok do sekcji (klik w spisie treści podczas czytania). */
export function playSection(sectionId: string) {
  collect();
  const i = blocks.findIndex((b) => b.closest("section")?.id === sectionId);
  if (i >= 0) {
    window.speechSynthesis.cancel();
    speak(i);
  }
}
