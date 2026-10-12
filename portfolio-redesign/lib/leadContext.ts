// Ścieżka odwiedzającego w tej karcie, trzymana tylko w pamięci (bez cookies i localStorage).
// Formularz kontaktowy dołącza ją do maila, żeby było widać, skąd przyszło zapytanie.

const MAX_PAGES = 8;

let landing = "";
const pages: string[] = [];

export function recordPath(path: string) {
  if (!landing) landing = path;
  if (pages[pages.length - 1] === path) return;
  pages.push(path);
  if (pages.length > MAX_PAGES) pages.shift();
}

export function leadContext() {
  let referrer = "";
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {}
  if (referrer === location.hostname) referrer = "";
  return { landing, pages: [...pages], referrer };
}

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
