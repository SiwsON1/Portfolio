import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napisz brief, dostaniesz wycenę w 24h. Mail, telefon, LinkedIn, GitHub. Marcin Siwonia, web developer z Wrocławia.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-56">
      <header className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow">Kontakt</p>
        </div>
        <div className="md:col-span-9">
          <h1 className="display text-display text-ink">
            Najszybciej <em>mailem</em>.
          </h1>
          <p className="mt-8 prose-bound text-ink-mute text-lead">
            Opisz w dwóch zdaniach co chcesz zrobić, jaki jest deadline i
            budżet. Odpiszę tego samego dnia roboczego z pierwszą oceną.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 md:col-start-2 space-y-8">
          <div>
            <p className="eyebrow mb-2">E-mail</p>
            <a
              href="mailto:mahinek12@gmail.com"
              className="font-display italic text-h2 text-peach hover:underline underline-offset-4"
              data-cursor="KOPIUJ"
            >
              mahinek12@gmail.com
            </a>
          </div>
          <hr className="hairline" />
          <div>
            <p className="eyebrow mb-2">Telefon</p>
            <p className="font-display italic text-h2 text-ink">
              +48 — — — — — —
            </p>
            <p className="text-sm text-ink-faint mt-1">
              Na życzenie po pierwszej wymianie maili.
            </p>
          </div>
          <hr className="hairline" />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-2">GitHub</p>
              <a
                href="https://github.com/SiwsON1"
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-peach"
              >
                @SiwsON1 →
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-ink hover:text-peach"
              >
                Profil →
              </a>
            </div>
          </div>
        </div>

        <aside className="md:col-span-3 md:col-start-10 border-l border-line pl-6">
          <p className="eyebrow mb-4">Status</p>
          <p className="text-ink mb-6 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-peach animate-pulse" />
            Otwarty na nowe projekty
          </p>
          <p className="eyebrow mb-4">Forma rozliczenia</p>
          <ul className="space-y-1 text-sm text-ink-mute">
            <li>B2B (faktura)</li>
            <li>Umowa o dzieło</li>
            <li>Stawka godzinowa</li>
            <li>Ryczałt projektowy</li>
          </ul>
          <hr className="hairline my-8" />
          <Link
            href="/uslugi"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:text-peach"
            data-cursor="ZOBACZ"
          >
            Lista usług →
          </Link>
        </aside>
      </div>
    </article>
  );
}
