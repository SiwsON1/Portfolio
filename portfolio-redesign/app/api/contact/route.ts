import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = "marcin.siwonia.firma@gmail.com";
const FROM_EMAIL = "Marcin Siwonia <kontakt@marcinsiwonia.pl>";

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, (m) => m).slice(0, max).trim();
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Brak konfiguracji wysyłki maila." },
      { status: 500 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const data = (payload ?? {}) as Record<string, unknown>;

  if (typeof data.website === "string" && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name, MAX_NAME);
  const email = clean(data.email, MAX_EMAIL);
  const subject = clean(data.subject, MAX_SUBJECT) || "Nowa wiadomość z portfolio";
  const message = clean(data.message, MAX_MESSAGE);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Wypełnij imię, e-mail i wiadomość." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Niepoprawny adres e-mail." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Wiadomość jest za krótka — opisz krótko, czego potrzebujesz." },
      { status: 400 }
    );
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.55; color: #1a1a1a; max-width: 560px; margin: 0 auto; padding: 24px;">
      <p style="font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #888; margin: 0 0 8px;">Nowa wiadomość — marcinsiwonia.pl</p>
      <h2 style="font-size: 22px; margin: 0 0 24px; font-weight: 600;">${escapeHtml(subject)}</h2>
      <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 24px;">
        <tr><td style="padding: 6px 0; color: #888; width: 90px;">Od</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #888;">E-mail</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #d97742;">${escapeHtml(email)}</a></td></tr>
      </table>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;" />
      <div style="white-space: pre-wrap; font-size: 15px;">${escapeHtml(message)}</div>
    </div>
  `;

  const text = `Nowa wiadomość z marcinsiwonia.pl

Od: ${name}
E-mail: ${email}
Temat: ${subject}

${message}
`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error", res.status, detail);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend request failed", err);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
      { status: 502 }
    );
  }
}
