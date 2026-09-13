"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ScanIssue, ScanPreview, ScanSeverity } from "@/lib/wcag-scan/types";
import "./ScanTool.css";

type Phase = "idle" | "loading" | "result" | "error";
type SendPhase = "idle" | "sending" | "sent" | "error";

const STEPS = ["Pobieram stronę", "Czytam kod HTML", "Sprawdzam 15 testów"];

const SEVERITY_ORDER: ScanSeverity[] = ["krytyczny", "poważny", "umiarkowany"];
const SEVERITY_PLURAL: Record<ScanSeverity, string> = {
  krytyczny: "krytyczne",
  poważny: "poważne",
  umiarkowany: "umiarkowane",
};

function scoreLabel(score: number) {
  if (score >= 90) return "Mało problemów wykrywalnych automatem";
  if (score >= 60) return "Kilka problemów do poprawy";
  return "Dużo problemów do poprawy";
}

function IssueRow({ issue, index }: { issue: ScanIssue; index: number }) {
  return (
    <li className="scan-reveal border-t border-line py-8" data-i={index + 2}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-peach">{issue.severity}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          WCAG {issue.wcag} · {issue.count} {issue.count === 1 ? "wystąpienie" : "wystąpień"}
        </span>
      </div>
      <h3
        className="mt-3 font-display italic text-ink"
        style={{ fontSize: "clamp(1.35rem, 1rem + 1vw, 1.9rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
      >
        {issue.title}
      </h3>
      <p className="mt-4 max-w-2xl text-ink-mute leading-relaxed">
        <span className="text-ink">Jak naprawić: </span>
        {issue.fix}
      </p>
      {issue.examples[0] && (
        <pre className="mt-5 whitespace-pre-wrap border border-line bg-bg-elev p-4 font-mono text-[12px] leading-relaxed text-ink-mute [overflow-wrap:anywhere]">
          <code>{issue.examples[0]}</code>
        </pre>
      )}
    </li>
  );
}

export function ScanTool() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<ScanPreview | null>(null);

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sendPhase, setSendPhase] = useState<SendPhase>("idle");
  const [sendError, setSendError] = useState("");

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase !== "loading") return;
    setStep(0);
    const t1 = window.setTimeout(() => setStep(1), 1200);
    const t2 = window.setTimeout(() => setStep(2), 2400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "result") resultRef.current?.focus();
  }, [phase]);

  async function scan(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "loading") return;
    if (!url.trim()) {
      setError("Wpisz adres strony, na przykład twojsklep.pl");
      setPhase("error");
      return;
    }
    setPhase("loading");
    setError("");
    setResult(null);
    setSendPhase("idle");
    try {
      const res = await fetch("/api/scan-wcag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Nie udało się sprawdzić strony. Spróbuj ponownie za chwilę.");
        setPhase("error");
        return;
      }
      setResult(data as ScanPreview);
      setPhase("result");
    } catch {
      setError("Brak połączenia z serwerem. Sprawdź internet i spróbuj ponownie.");
      setPhase("error");
    }
  }

  async function sendReport(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!result || sendPhase === "sending") return;
    const website = String(new FormData(event.currentTarget).get("website") || "");
    setSendPhase("sending");
    setSendError("");
    try {
      const res = await fetch("/api/scan-wcag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: result.url, email: email.trim(), consent, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSendError(data.error || "Nie udało się wysłać raportu. Spróbuj ponownie.");
        setSendPhase("error");
        return;
      }
      setSendPhase("sent");
    } catch {
      setSendError("Brak połączenia z serwerem. Spróbuj ponownie.");
      setSendPhase("error");
    }
  }

  const urlInvalid = phase === "error" && !!error;

  return (
    <div>
      <form onSubmit={scan} noValidate className="max-w-3xl">
        <label htmlFor="scan-url" className="eyebrow mb-4 block">
          Adres strony do sprawdzenia
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="scan-url"
            name="url"
            type="text"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            placeholder="twojsklep.pl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            aria-invalid={urlInvalid}
            aria-describedby={urlInvalid ? "scan-url-error" : "scan-url-hint"}
            className="min-h-[56px] w-full flex-1 border border-line bg-transparent px-5 text-lg text-ink placeholder:text-ink-faint focus:border-peach focus:outline-none focus-visible:ring-2 focus-visible:ring-peach/60"
          />
          <button
            type="submit"
            disabled={phase === "loading"}
            className="scan-press min-h-[56px] shrink-0 bg-peach px-8 font-mono text-[12px] uppercase tracking-[0.2em] text-bg hover:bg-peach-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach disabled:opacity-70"
          >
            {phase === "loading" ? "Sprawdzam…" : "Sprawdź stronę →"}
          </button>
        </div>
        <p id="scan-url-hint" className="mt-3 text-sm text-ink-faint">
          Test trwa kilka sekund. Sprawdzam jedną podaną stronę, bez logowania i bez instalowania czegokolwiek.
        </p>
      </form>

      <div aria-live="polite" className="max-w-3xl">
        {phase === "loading" && (
          <div className="mt-10">
            <div className="h-px w-full overflow-hidden bg-line">
              <div className="scan-progress h-px w-full bg-peach" />
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
              {STEPS[step]}…
            </p>
          </div>
        )}
        {phase === "error" && error && (
          <p id="scan-url-error" className="mt-6 text-ink" role="alert">
            {error}
          </p>
        )}
      </div>

      {phase === "result" && result && (
        <div ref={resultRef} tabIndex={-1} className="mt-20 outline-none" aria-labelledby="scan-result-heading">
          <div className="scan-reveal grid grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-12" data-i={0}>
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">Wynik testu automatycznego</p>
              <h2 id="scan-result-heading" className="sr-only">
                Wynik dla {result.url}
              </h2>
              <p className="font-display italic text-ink" style={{ fontSize: "clamp(4.5rem, 3rem + 6vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.04em" }}>
                {result.score}
                <span className="text-ink-faint" style={{ fontSize: "0.35em", letterSpacing: "0" }}>
                  /100
                </span>
              </p>
              <p className="mt-4 text-ink">{scoreLabel(result.score)}</p>
              <p className="mt-2 break-all font-mono text-[11px] text-ink-faint">{result.url}</p>
            </div>
            <div className="md:col-span-7">
              <dl className="grid grid-cols-3 border-t border-line">
                {SEVERITY_ORDER.map((sev) => (
                  <div key={sev} className="border-r border-line py-5 pr-3 last:border-r-0 [&:not(:first-child)]:pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{SEVERITY_PLURAL[sev]}</dt>
                    <dd className="mt-2 font-display italic text-ink" style={{ fontSize: "clamp(1.75rem, 1.2rem + 1.5vw, 2.5rem)", lineHeight: 1 }}>
                      {result.counts[sev]}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-ink-mute">
                To liczba rodzajów problemów, które da się wykryć w kodzie strony. Automat nie sprawdza kontrastu,
                obsługi klawiaturą, kolejności czytania ani sensu opisów obrazków. <strong className="font-normal text-ink">Wynik nie oznacza zgodności z przepisami.</strong>
              </p>
            </div>
          </div>

          {result.top.length > 0 ? (
            <div className="mt-16">
              <p className="scan-reveal eyebrow" data-i={1}>
                {result.top.length === 1 ? "Najpoważniejszy problem" : `${result.top.length} najpoważniejsze problemy`}
              </p>
              <ol className="mt-4">
                {result.top.map((issue, i) => (
                  <IssueRow key={issue.id} issue={issue} index={i} />
                ))}
              </ol>
            </div>
          ) : (
            <p className="scan-reveal mt-16 max-w-2xl text-lg text-ink-mute" data-i={1}>
              W kodzie tej strony nie wykryłem żadnego z 15 sprawdzanych problemów. To dobry znak, ale nie dowód
              dostępności: reszta kryteriów wymaga testu klawiaturą i czytnikiem ekranu.
            </p>
          )}

          <section className="scan-reveal mt-16 border border-line p-6 md:p-10" data-i={5} aria-labelledby="scan-report-heading">
            <h2
              id="scan-report-heading"
              className="font-display italic text-ink"
              style={{ fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              {result.hiddenCount > 0
                ? `Pełny raport: jeszcze ${result.hiddenCount} ${result.hiddenCount === 1 ? "rodzaj problemu" : "rodzaje problemów"}`
                : "Wyślij raport na e-mail"}
            </h2>
            <p className="mt-4 max-w-2xl text-ink-mute leading-relaxed">
              Wszystkie wykryte problemy z przykładami kodu i poprawkami. Przydaje się, żeby przekazać go osobie, która
              opiekuje się stroną.
            </p>

            {sendPhase === "sent" ? (
              <p className="mt-8 font-display italic text-peach" style={{ fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.75rem)" }} role="status">
                Raport wysłany na {email}. Sprawdź też folder oferty albo spam.
              </p>
            ) : (
              <form onSubmit={sendReport} noValidate className="mt-8 max-w-2xl">
                <div className="hidden" aria-hidden="true">
                  <label>
                    Strona www (zostaw puste)
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <label htmlFor="scan-email" className="eyebrow mb-3 block">
                  Twój e-mail
                </label>
                <input
                  id="scan-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={sendPhase === "error"}
                  aria-describedby={sendPhase === "error" ? "scan-send-error" : undefined}
                  className="min-h-[52px] w-full border border-line bg-transparent px-4 text-base text-ink placeholder:text-ink-faint focus:border-peach focus:outline-none focus-visible:ring-2 focus-visible:ring-peach/60"
                  placeholder="ty@firma.pl"
                />
                <div className="mt-5 flex items-start gap-3">
                  <input
                    id="scan-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 accent-[var(--peach)]"
                  />
                  <label htmlFor="scan-consent" className="text-sm leading-relaxed text-ink-mute">
                    Chcę dostać pełny raport na e-mail. Marcin Siwonia może odpisać w sprawie wyników. Szczegóły w{" "}
                    <Link href="/polityka-prywatnosci" className="text-ink underline underline-offset-4 hover:text-peach">
                      polityce prywatności
                    </Link>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={sendPhase === "sending" || !consent || !email.trim()}
                  className="scan-press mt-6 min-h-[52px] w-full bg-peach px-8 font-mono text-[12px] uppercase tracking-[0.2em] text-bg hover:bg-peach-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {sendPhase === "sending" ? "Wysyłam…" : "Wyślij pełny raport →"}
                </button>
                {sendPhase === "error" && (
                  <p id="scan-send-error" className="mt-4 text-ink" role="alert">
                    {sendError}
                  </p>
                )}
              </form>
            )}
          </section>

          <p className="scan-reveal mt-10 max-w-2xl text-ink-mute" data-i={5}>
            Chcesz, żeby ktoś sprawdził resztę kryteriów i od razu naprawił błędy?{" "}
            <Link href="/audyt-wcag" className="text-ink underline underline-offset-4 hover:text-peach">
              Zobacz, jak wygląda audyt WCAG z naprawą
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
