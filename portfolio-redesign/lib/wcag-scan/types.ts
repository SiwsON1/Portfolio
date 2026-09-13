/** Kontrakt między API /api/scan-wcag a interfejsem /sprawdz-dostepnosc. */

export type ScanSeverity = "krytyczny" | "poważny" | "umiarkowany";

export type ScanIssue = {
  id: string;
  /** Nazwa problemu po polsku, np. „Obrazki bez tekstu alternatywnego”. */
  title: string;
  /** Kryterium WCAG, np. "1.1.1". */
  wcag: string;
  severity: ScanSeverity;
  /** Liczba wystąpień na stronie. */
  count: number;
  /** Maksymalnie 3 fragmenty HTML, każdy do 160 znaków. */
  examples: string[];
  /** Jedno zdanie po polsku: jak to naprawić. */
  fix: string;
};

export type ScanCounts = Record<ScanSeverity, number>;

/** Odpowiedź POST /api/scan-wcag z body { url }. */
export type ScanPreview = {
  url: string;
  score: number;
  /** Liczba rodzajów problemów wg wagi. */
  counts: ScanCounts;
  /** Liczba wszystkich rodzajów problemów. */
  totalIssues: number;
  /** Trzy najpoważniejsze problemy (waga, potem liczba wystąpień). */
  top: ScanIssue[];
  /** Ile rodzajów problemów nie pokazano (totalIssues - top.length). */
  hiddenCount: number;
  checkedAt: string;
};

/** Odpowiedź POST /api/scan-wcag z body { url, email, consent: true, website: "" }. */
export type ScanReportSent = { ok: true; sentTo: string };

export type ScanError = { error: string };
