import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Pogadajmy</p>
            <h2 className="display text-[clamp(2.5rem,1.5rem+5vw,7rem)] text-ink">
              Masz <em>pomysł</em>,
              <br />
              piszę <em>kod</em>.
            </h2>
            <Link
              href="mailto:mahinek12@gmail.com"
              className="mt-10 inline-block text-2xl md:text-3xl text-peach hover:underline underline-offset-4"
              data-cursor="EMAIL"
            >
              mahinek12@gmail.com
            </Link>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-4">Mapa</p>
              <ul className="space-y-2 text-ink-mute">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Start
                  </Link>
                </li>
                <li>
                  <Link href="/projekty" className="hover:text-ink">
                    Projekty
                  </Link>
                </li>
                <li>
                  <Link href="/uslugi" className="hover:text-ink">
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link href="/o-mnie" className="hover:text-ink">
                    O mnie
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-ink">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-ink">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Tu też jestem</p>
              <ul className="space-y-2 text-ink-mute">
                <li>
                  <a
                    href="https://github.com/SiwsON1"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/ms_cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink"
                  >
                    CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-8 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>© {year} Marcin Siwonia. Wszystkie prawa zastrzeżone.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Wrocław · PL</p>
        </div>
      </div>
    </footer>
  );
}
