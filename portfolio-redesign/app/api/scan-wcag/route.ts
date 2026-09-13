import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { runChecks, toPreview } from "../../../lib/wcag-scan/checks";
import { fetchHtml, ScanFetchError } from "../../../lib/wcag-scan/fetch";
import type { ScanIssue } from "../../../lib/wcag-scan/types";

export const runtime = "nodejs";
export const maxDuration = 20;

const FROM_EMAIL = "Marcin Siwonia <kontakt@marcinsiwonia.pl>";
const TO_EMAIL = "marcin.siwonia.firma@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const rateLimits = new Map<string, number[]>();
// Wysyłka maili z naszej zweryfikowanej domeny na podany adres to potencjalny kanał spamu,
// dlatego osobny, ostrzejszy limit: na IP i na odbiorcę.
const MAIL_IP_WINDOW_MS = 60 * 60 * 1000;
const MAIL_IP_LIMIT = 2;
const MAIL_TO_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAIL_TO_LIMIT = 2;
const mailByIp = new Map<string, number[]>();
const mailByRecipient = new Map<string, number[]>();

function hit(store: Map<string, number[]>, key: string, windowMs: number, limit: number): boolean {
  const now = Date.now();
  if (store.size > 5000) {
    for (const [k, v] of store) if (!v.some((t) => now - t < windowMs)) store.delete(k);
  }
  const recent = (store.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    store.set(key, recent);
    return true;
  }
  recent.push(now);
  store.set(key, recent);
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",", 1)[0].trim() || "unknown";
}

function exceedsRateLimit(ip: string): boolean {
  return hit(rateLimits, ip, RATE_WINDOW_MS, RATE_LIMIT);
}

function errorResponse(error: unknown) {
  if (error instanceof ScanFetchError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  console.error("WCAG scan failed", error instanceof Error ? error.message : "Unknown error");
  return NextResponse.json(
    { error: "Nie udało się przeskanować strony. Spróbuj ponownie później." },
    { status: 500 },
  );
}

function reportRows(issues: ScanIssue[]): string {
  if (!issues.length) {
    return '<tr><td colspan="6" style="padding:12px;border:1px solid #ddd;">Automat nie wykrył problemów w wykonanych testach.</td></tr>';
  }
  return issues.map((issue) => `
    <tr>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${escapeHtml(issue.title)}</td>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${escapeHtml(issue.wcag)}</td>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${escapeHtml(issue.severity)}</td>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${issue.count}</td>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${issue.examples.map((example) => `<code style="display:block;white-space:pre-wrap;overflow-wrap:anywhere;margin-bottom:6px;">${escapeHtml(example)}</code>`).join("")}</td>
      <td style="padding:8px;border:1px solid #ddd;vertical-align:top;">${escapeHtml(issue.fix)}</td>
    </tr>`).join("");
}

function userReportHtml(url: string, score: number, issues: ScanIssue[]): string {
  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.55;color:#1a1a1a;max-width:900px;margin:0 auto;padding:24px;">
      <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#777;">Raport automatycznego skanu WCAG</p>
      <h1 style="font-size:26px;">Wynik: ${score}/100</h1>
      <p><strong>Adres strony:</strong> ${escapeHtml(url.replace(/^https?:\/\//, ""))}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <thead><tr><th style="padding:8px;border:1px solid #ddd;text-align:left;">Problem</th><th style="padding:8px;border:1px solid #ddd;text-align:left;">WCAG</th><th style="padding:8px;border:1px solid #ddd;text-align:left;">Waga</th><th style="padding:8px;border:1px solid #ddd;text-align:left;">Liczba</th><th style="padding:8px;border:1px solid #ddd;text-align:left;">Przykłady</th><th style="padding:8px;border:1px solid #ddd;text-align:left;">Jak naprawić</th></tr></thead>
        <tbody>${reportRows(issues)}</tbody>
      </table>
      <h2 style="font-size:20px;margin-top:28px;">Ograniczenia automatycznego testu</h2>
      <p>Automat nie ocenia kontrastu, obsługi klawiaturą, pułapek fokusa, kolejności czytania, sensu tekstów alternatywnych ani treści dodawanych przez JavaScript po załadowaniu strony.</p>
      <p><strong>Wynik automatycznego testu nie oznacza zgodności z przepisami.</strong></p>
      <p><a href="https://www.marcinsiwonia.pl/audyt-wcag">Zobacz, co obejmuje pełny audyt WCAG</a>.</p>
    </div>`;
}

function userReportText(url: string, score: number, issues: ScanIssue[]): string {
  const details = issues.length
    ? issues.map((issue) => `${issue.title} | WCAG ${issue.wcag} | ${issue.severity} | ${issue.count}\nPrzykłady: ${issue.examples.join("; ") || "brak"}\nPoprawka: ${issue.fix}`).join("\n\n")
    : "Automat nie wykrył problemów w wykonanych testach.";
  return `Raport automatycznego skanu WCAG

Adres strony: ${url}
Wynik: ${score}/100

${details}

Ograniczenia automatycznego testu
Automat nie ocenia kontrastu, obsługi klawiaturą, pułapek fokusa, kolejności czytania, sensu tekstów alternatywnych ani treści dodawanych przez JavaScript po załadowaniu strony.

Wynik automatycznego testu nie oznacza zgodności z przepisami.

Pełny audyt WCAG: https://www.marcinsiwonia.pl/audyt-wcag
`;
}

async function sendEmail(apiKey: string, body: Record<string, unknown>): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error("Resend error", response.status);
    throw new Error("Resend request failed");
  }
}

export async function POST(request: NextRequest) {
  if (exceedsRateLimit(clientIp(request))) {
    return NextResponse.json(
      { error: "Przekroczono limit 5 skanów na 10 minut. Spróbuj ponownie później." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }
  const data = payload as Record<string, unknown>;
  const isReportRequest = "email" in data || "consent" in data || "website" in data;

  if (isReportRequest && typeof data.website === "string" && data.website.length > 0) {
    return NextResponse.json({ ok: true, sentTo: "" });
  }
  const rawUrl = typeof data.url === "string" ? data.url : "";

  if (!isReportRequest) {
    try {
      const { finalUrl, html } = await fetchHtml(rawUrl);
      return NextResponse.json(toPreview(finalUrl, runChecks(html, finalUrl)));
    } catch (error) {
      return errorResponse(error);
    }
  }

  const email = typeof data.email === "string" ? data.email.trim().slice(0, 200) : "";
  if (!EMAIL_RE.test(email) || data.consent !== true) {
    return NextResponse.json(
      { error: "Podaj poprawny adres e-mail i zaznacz zgodę na otrzymanie raportu." },
      { status: 400 },
    );
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Brak konfiguracji wysyłki maila." }, { status: 500 });
  }
  if (
    hit(mailByIp, clientIp(request), MAIL_IP_WINDOW_MS, MAIL_IP_LIMIT) ||
    hit(mailByRecipient, email.toLowerCase(), MAIL_TO_WINDOW_MS, MAIL_TO_LIMIT)
  ) {
    return NextResponse.json(
      { error: "Na ten adres albo z tego połączenia wysłano już raporty. Spróbuj ponownie później." },
      { status: 429 },
    );
  }

  try {
    const { finalUrl, html } = await fetchHtml(rawUrl);
    const issues = runChecks(html, finalUrl);
    const preview = toPreview(finalUrl, issues);
    const host = new URL(finalUrl).host;
    const userHtml = userReportHtml(finalUrl, preview.score, issues);
    const userText = userReportText(finalUrl, preview.score, issues);
    const noticeHtml = `<p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Adres strony:</strong> <a href="${escapeHtml(finalUrl)}">${escapeHtml(finalUrl)}</a></p><p><strong>Wynik:</strong> ${preview.score}/100</p><p><strong>Liczba problemów:</strong> ${issues.length}</p>`;
    const noticeText = `E-mail: ${email}\nAdres strony: ${finalUrl}\nWynik: ${preview.score}/100\nLiczba problemów: ${issues.length}`;

    await Promise.all([
      sendEmail(apiKey, {
        from: FROM_EMAIL,
        to: [email],
        reply_to: TO_EMAIL,
        subject: `Raport skanu dostępności — ${host}`,
        html: userHtml,
        text: userText,
      }),
      sendEmail(apiKey, {
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Skan WCAG] ${host} — wynik ${preview.score}`,
        html: noticeHtml,
        text: noticeText,
      }),
    ]);
    return NextResponse.json({ ok: true, sentTo: email });
  } catch (error) {
    if (error instanceof ScanFetchError) return errorResponse(error);
    console.error("WCAG report sending failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Nie udało się wysłać raportu. Spróbuj ponownie później." },
      { status: 502 },
    );
  }
}
