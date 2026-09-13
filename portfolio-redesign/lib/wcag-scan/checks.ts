import { parse, type HTMLElement } from "node-html-parser";
import type { ScanIssue, ScanPreview, ScanSeverity } from "./types";

// Role WAI-ARIA 1.2, które autor może nadać. Role abstrakcyjne (command, composite, input, landmark,
// range, roletype, section, sectionhead, select, structure, widget, window) są celowo pominięte,
// bo ich użycie w kodzie jest błędem, tak samo jak w axe-core.
export const WAI_ARIA_12_ROLES = new Set([
  "alert", "alertdialog", "application", "article", "banner", "blockquote", "button",
  "caption", "cell", "checkbox", "code", "columnheader", "combobox",
  "complementary", "contentinfo", "definition", "deletion", "dialog",
  "directory", "document", "emphasis", "feed", "figure", "form", "generic", "grid",
  "gridcell", "group", "heading", "img", "insertion", "link",
  "list", "listbox", "listitem", "log", "main", "marquee", "math", "menu", "menubar",
  "menuitem", "menuitemcheckbox", "menuitemradio", "meter", "navigation", "none", "note",
  "option", "paragraph", "presentation", "progressbar", "radio", "radiogroup",
  "region", "row", "rowgroup", "rowheader", "scrollbar", "search", "searchbox",
  "separator", "slider", "spinbutton", "status", "strong",
  "subscript", "superscript", "switch", "tab", "table", "tablist", "tabpanel",
  "term", "textbox", "time", "timer", "toolbar", "tooltip", "tree", "treegrid", "treeitem",
]);

function isValidRole(role: string): boolean {
  return WAI_ARIA_12_ROLES.has(role) || /^(?:doc|graphics)-[a-z]+$/.test(role);
}

const WEIGHT: Record<ScanSeverity, number> = {
  krytyczny: 3,
  poważny: 2,
  umiarkowany: 1,
};

function compactExample(element: HTMLElement): string {
  const compact = element.outerHTML.replace(/\s+/g, " ").trim();
  return compact.length <= 160 ? compact : `${compact.slice(0, 159)}…`;
}

function issue(
  id: string,
  title: string,
  wcag: string,
  severity: ScanSeverity,
  elements: HTMLElement[],
  fix: string,
  count = elements.length,
): ScanIssue | null {
  if (count === 0) return null;
  return { id, title, wcag, severity, count, examples: elements.slice(0, 3).map(compactExample), fix };
}

function hasText(value: string | undefined): boolean {
  return Boolean(value?.trim());
}

function hasNamingAttribute(element: HTMLElement): boolean {
  return hasText(element.getAttribute("aria-label")) ||
    hasText(element.getAttribute("aria-labelledby")) ||
    hasText(element.getAttribute("title"));
}

function hasAccessibleContent(element: HTMLElement): boolean {
  return hasText(element.textContent) ||
    hasNamingAttribute(element) ||
    element.querySelectorAll("img[alt]").some((image) => hasText(image.getAttribute("alt")));
}

export function runChecks(html: string, _pageUrl: string): ScanIssue[] {
  const root = parse(html);
  const results: Array<ScanIssue | null> = [];
  const htmlElement = root.querySelector("html");
  const langFailures = !htmlElement || !hasText(htmlElement.getAttribute("lang"))
    ? [htmlElement ?? root]
    : [];
  results.push(issue("html-lang", "Brak języka dokumentu", "3.1.1", "poważny", langFailures,
    "Dodaj do elementu html atrybut lang z kodem języka strony, na przykład lang=\"pl\"."));

  const title = root.querySelector("title");
  const titleFailures = !title || !hasText(title.textContent) ? [title ?? root] : [];
  results.push(issue("document-title", "Brak tytułu dokumentu", "2.4.2", "poważny", titleFailures,
    "Dodaj w sekcji head krótki i jednoznaczny element title opisujący stronę."));

  const images = root.querySelectorAll("img");
  const missingAlt = images.filter((image) =>
    !image.hasAttribute("alt") && image.getAttribute("role") !== "presentation" &&
    image.getAttribute("aria-hidden")?.toLowerCase() !== "true");
  results.push(issue("image-alt", "Obrazki bez tekstu alternatywnego", "1.1.1", "krytyczny", missingAlt,
    "Dodaj do każdego informacyjnego obrazka opisowy atrybut alt, a dekoracyjnemu ustaw pusty alt."));

  const filenameAlt = images.filter((image) => {
    const alt = image.getAttribute("alt")?.trim() ?? "";
    return /\.(?:jpe?g|png|gif|webp|svg|avif|bmp|tiff?)$/i.test(alt) || /^(?:img|dsc)[-_ ]?\d+/i.test(alt);
  });
  results.push(issue("image-alt-filename", "Nazwy plików zamiast opisów obrazków", "1.1.1", "umiarkowany", filenameAlt,
    "Zastąp nazwę pliku w atrybucie alt krótkim opisem znaczenia obrazka."));

  const controls = root.querySelectorAll("input, select, textarea");
  const unlabeled = controls.filter((control) => {
    if (control.tagName === "INPUT" && ["hidden", "submit", "button", "image", "reset"].includes((control.getAttribute("type") ?? "text").toLowerCase())) return false;
    if (hasNamingAttribute(control)) return false;
    // Tak jak axe-core: placeholder daje polu dostępną nazwę, choć gorszą niż etykieta.
    if (hasText(control.getAttribute("placeholder"))) return false;
    if (control.closest("label")) return false;
    const id = control.getAttribute("id");
    return !id || !root.querySelectorAll("label[for]").some((label) => label.getAttribute("for") === id);
  });
  results.push(issue("input-label", "Pola formularza bez etykiety", "1.3.1, 4.1.2", "krytyczny", unlabeled,
    "Połącz każde pole z widoczną etykietą label albo nadaj mu jednoznaczną dostępną nazwę."));

  const unnamedLinks = root.querySelectorAll("a[href]").filter((link) => !hasAccessibleContent(link));
  results.push(issue("link-name", "Linki bez dostępnej nazwy", "2.4.4", "poważny", unnamedLinks,
    "Dodaj do każdego linku zrozumiały tekst lub dostępną nazwę opisującą jego cel."));

  const unnamedButtons = root.querySelectorAll("button").filter((button) => !hasAccessibleContent(button));
  results.push(issue("button-name", "Przyciski bez dostępnej nazwy", "4.1.2", "krytyczny", unnamedButtons,
    "Dodaj do każdego przycisku widoczny tekst lub jednoznaczny atrybut aria-label."));

  const genericTexts = new Set(["kliknij tutaj", "tutaj", "więcej", "czytaj więcej", "zobacz więcej", "link", "kliknij"]);
  const genericLinks = root.querySelectorAll("a[href]").filter((link) => genericTexts.has(link.textContent.replace(/\s+/g, " ").trim().toLowerCase()));
  results.push(issue("link-text-generic", "Nieprecyzyjne teksty linków", "2.4.4", "umiarkowany", genericLinks,
    "Zastąp ogólny tekst linku opisem celu zrozumiałym także poza kontekstem."));

  const headings = root.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const headingFailures: HTMLElement[] = [];
  let headingCount = 0;
  if (!headings.some((heading) => heading.tagName === "H1")) {
    headingFailures.push(root.querySelector("body") ?? htmlElement ?? root);
    headingCount += 1;
  }
  let previousLevel = 0;
  for (const heading of headings) {
    const level = Number(heading.tagName.slice(1));
    if (previousLevel && level > previousLevel + 1) {
      headingFailures.push(heading);
      headingCount += 1;
    }
    previousLevel = level;
  }
  results.push(issue("heading-order", "Nieprawidłowa struktura nagłówków", "1.3.1", "umiarkowany", headingFailures,
    "Dodaj jeden główny nagłówek h1 i zachowaj kolejność poziomów bez przeskoków.", headingCount));

  const seenIds = new Set<string>();
  const duplicateIds = root.querySelectorAll("[id]").filter((element) => {
    const id = element.getAttribute("id") ?? "";
    if (!id || !seenIds.has(id)) {
      if (id) seenIds.add(id);
      return false;
    }
    return true;
  });
  results.push(issue("duplicate-id", "Zduplikowane identyfikatory", "4.1.1", "umiarkowany", duplicateIds,
    "Nadaj każdemu elementowi na stronie unikalną wartość atrybutu id."));

  const untitledFrames = root.querySelectorAll("iframe").filter((frame) => !hasText(frame.getAttribute("title")));
  results.push(issue("frame-title", "Ramki bez tytułu", "4.1.2", "poważny", untitledFrames,
    "Dodaj do każdej ramki iframe krótki atrybut title opisujący jej zawartość."));

  const tablesWithoutHeaders = root.querySelectorAll("table").filter((table) => table.querySelectorAll("tr").length > 1 && !table.querySelector("th"));
  results.push(issue("table-headers", "Tabele danych bez nagłówków", "1.3.1", "poważny", tablesWithoutHeaders,
    "Dodaj komórki th i poprawnie powiąż je z komórkami danych w każdym wierszu lub kolumnie."));

  const badViewports = root.querySelectorAll("meta[name]").filter((meta) => {
    if (meta.getAttribute("name")?.toLowerCase() !== "viewport") return false;
    const content = meta.getAttribute("content") ?? "";
    return /user-scalable\s*=\s*(?:no|0)\b/i.test(content) || Array.from(content.matchAll(/maximum-scale\s*=\s*([\d.]+)/gi)).some((match) => Number(match[1]) < 2);
  });
  results.push(issue("meta-viewport", "Viewport blokuje powiększanie", "1.4.4", "umiarkowany", badViewports,
    "Usuń blokadę user-scalable i ustaw maximum-scale na co najmniej 2 albo pomiń ten parametr."));

  const autoplayMedia = root.querySelectorAll("video[autoplay], audio[autoplay]").filter((media) => !media.hasAttribute("muted"));
  results.push(issue("media-autoplay", "Multimedia odtwarzane automatycznie", "1.4.2", "poważny", autoplayMedia,
    "Usuń autoplay albo wycisz automatycznie uruchamiane multimedia i zapewnij kontrolę odtwarzania."));

  const invalidRoles = root.querySelectorAll("[role]").filter((element) => {
    const roles = (element.getAttribute("role") ?? "").trim().toLowerCase().split(/\s+/).filter(Boolean);
    return roles.length === 0 || !roles.some(isValidRole);
  });
  results.push(issue("aria-role", "Nieprawidłowe role ARIA", "4.1.2", "poważny", invalidRoles,
    "Usuń błędny atrybut role albo zastąp go właściwą rolą z WAI-ARIA 1.2."));

  return results.filter((result): result is ScanIssue => result !== null)
    .sort((a, b) => WEIGHT[b.severity] - WEIGHT[a.severity] || b.count - a.count);
}

export function scoreIssues(issues: ScanIssue[]): number {
  const penalty: Record<ScanSeverity, number> = { krytyczny: 12, poważny: 6, umiarkowany: 2 };
  const uniqueIssues = new Map(issues.map((current) => [current.id, current]));
  const totalPenalty = Array.from(uniqueIssues.values())
    .reduce((sum, current) => sum + penalty[current.severity], 0);
  return Math.max(0, Math.min(100, 100 - totalPenalty));
}

export function toPreview(url: string, issues: ScanIssue[]): ScanPreview {
  const counts = { krytyczny: 0, poważny: 0, umiarkowany: 0 };
  for (const current of issues) counts[current.severity] += 1;
  return {
    url,
    score: scoreIssues(issues),
    counts,
    totalIssues: issues.length,
    top: issues.slice(0, 3),
    hiddenCount: Math.max(0, issues.length - 3),
    checkedAt: new Date().toISOString(),
  };
}
