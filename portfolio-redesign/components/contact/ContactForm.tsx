"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Nie udało się wysłać. Spróbuj ponownie.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Brak połączenia. Spróbuj ponownie za chwilę.");
    }
  }

  const fieldBase =
    "w-full bg-transparent border-0 border-b border-line text-ink placeholder:text-ink-faint py-3 outline-none transition-colors focus:border-peach";
  const labelBase = "eyebrow mb-2 block";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label htmlFor="contact-name" className={labelBase}>
            Imię
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            disabled={status === "loading"}
            className={fieldBase}
            placeholder="Jak się do Ciebie zwracać"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelBase}>
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            disabled={status === "loading"}
            className={fieldBase}
            placeholder="ty@firma.pl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelBase}>
          Temat
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={200}
          disabled={status === "loading"}
          className={fieldBase}
          placeholder="Krótko o czym to jest"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelBase}>
          Wiadomość
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          disabled={status === "loading"}
          className={`${fieldBase} resize-y leading-relaxed`}
          placeholder="Co chcesz zrobić, deadline, budżet"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label>
          Strona www (zostaw puste)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          data-cursor="WYŚLIJ"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:text-peach disabled:opacity-50 disabled:hover:text-ink transition-colors text-left"
        >
          {status === "loading" ? "Wysyłam…" : "Wyślij wiadomość →"}
        </button>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          Odpowiedź w 24h roboczych
        </p>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-peach font-display italic text-h3">
            Dzięki — odezwę się tak szybko, jak się da.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-ink-mute">
            {errorMsg} Możesz też napisać bezpośrednio na{" "}
            <a
              href="mailto:marcin.siwonia.firma@gmail.com"
              className="text-peach underline underline-offset-4"
            >
              marcin.siwonia.firma@gmail.com
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
