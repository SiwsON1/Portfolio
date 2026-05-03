import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FlamePortraitClient } from "@/components/layout/FlamePortraitClient";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Marcin Siwonia — freelancer i programista Next.js z Wrocławia. Strony www, aplikacje React, wdrożenia AI, pozycjonowanie SEO. Sześć lat doświadczenia, 30+ wdrożeń.",
  alternates: { canonical: "/o-mnie" },
};

export default function OMniePage() {
  return (
    <article className="relative">
      {/* HERO */}
      <header className="relative px-6 pt-40 pb-24 md:px-10 md:pt-56 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-between mb-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <span>Profile · Marcin Siwonia</span>
          <span>2020 — teraz</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">O mnie</p>
            <h1 className="display text-display text-ink">
              Marcin <em>Siwonia</em>.
            </h1>
            <p
              className="mt-10 max-w-xl text-ink-mute"
              style={{ fontSize: "clamp(1.125rem, 1rem + 0.6vw, 1.5rem)", lineHeight: 1.55 }}
            >
              Web developer, freelancer, prowadzi blog SEO/AI po godzinach.
              Wrocław, jeden monitor, dużo kawy.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <figure className="relative aspect-square bg-bg overflow-visible">
              <div className="absolute inset-0">
                <FlamePortraitClient />
              </div>
              <figcaption className="absolute -bottom-8 left-0 right-0 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute z-10">
                <span>Marcin · Wrocław</span>
                <span>2026</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* FACTS row — full width strip */}
      <section className="px-6 md:px-10 border-t border-line">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-line">
          {[
            { label: "Bazuję", value: "Wrocław · PL" },
            { label: "Pracuję od", value: "2020" },
            { label: "Wdrożenia", value: "30+" },
            { label: "Klienci z", value: "PL · DE" },
            { label: "Forma", value: "B2B / UoD / hr" },
          ].map((f, i) => (
            <div
              key={i}
              className="px-4 py-8 md:px-6 md:py-10 first:pl-0 last:pr-0 group"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
                {f.label}
              </p>
              <p
                className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                style={{
                  fontSize: "clamp(1.25rem, 1rem + 1vw, 2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BIO — long-form with marginalia */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">01 — Historia</p>
            <p className="text-ink-faint text-sm font-mono leading-relaxed">
              Skąd się wziąłem, gdzie pracowałem, dlaczego poszedłem na swoje.
            </p>
          </aside>
          <div className="md:col-span-7 prose-bound space-y-6 text-ink text-lg leading-relaxed">
            <p>
              Z wykształcenia ekonomista. Pierwszą stronę napisałem w 2018 dla
              znajomego z liceum, prowadził budę z burgerami i potrzebował
              menu&nbsp;na&nbsp;Facebooku. Zrobiłem ją w 6 godzin, dostałem
              pizzę i tak się zaczęło.
            </p>
            <p>
              Przez kolejne dwa lata, równolegle do studiów, zrobiłem dwa
              bootcampy programistyczne i kilkanaście projektów dla siebie. W
              2020 zatrudniłem się jako frontend developer w software house we
              Wrocławiu. Robiłem komponenty, dashboardy, integracje, czasem
              backend w Node.
            </p>
            <p>
              Pod koniec 2022 roku poszedłem na swoje. Zaczęło się od trzech
              klientów, dziś obsługuję 4-6 jednocześnie. Połowę czasu spędzam
              programując, drugą połowę na rozmowach o tym co warto napisać a
              czego nie.
            </p>
            <p>
              Specjalizuję się w stronach komercyjnych dla małych i średnich
              firm, aplikacjach Next.js z customową logiką oraz wdrożeniach AI
              które mają zwrócić się w ciągu roku. Po godzinach prowadzę{" "}
              <Link
                href="https://seomantyczny.pl"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
              >
                seomantyczny.pl
              </Link>
              , blog o AI i SEO.
            </p>
            <p>
              Wolę dwie długie rozmowy z klientem niż dziesięć briefów
              mailowych. Kiedy projekt jest gotowy, najczęściej zostaję na
              opiece, bo szkoda zostawiać kod komuś, kto go nie pisał.
            </p>
          </div>
        </div>
      </section>

      {/* STACK — categorized list with editorial treatment */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">02 — Stack</p>
            <p className="text-ink-faint text-sm font-mono leading-relaxed">
              Czym pracuję na co dzień.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Pięć <em>warstw</em>.
            </h2>
          </div>
        </div>

        <ul className="border-t border-line">
          {[
            {
              cat: "Frontend",
              items: "Next.js 16, React 19, TypeScript, Tailwind 4, GSAP, Three.js / R3F",
            },
            {
              cat: "Backend",
              items: "Node.js, NestJS, Express, Postgres, MongoDB, Prisma",
            },
            {
              cat: "CMS",
              items: "WordPress (gdy klient chce sam edytować), Sanity i Strapi (z Next.js)",
            },
            {
              cat: "AI",
              items: "OpenAI API, Anthropic Claude, Vercel AI SDK, RAG na pgvector",
            },
            {
              cat: "DevOps",
              items: "Vercel, Hostinger, cyber_folks, własne VPS na Hetznerze, Cloudflare, Sentry",
            },
          ].map((row, i) => (
            <li
              key={i}
              className="border-b border-line py-7 md:py-9 grid grid-cols-12 gap-4 md:gap-6 items-baseline group"
            >
              <span className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint group-hover:text-peach transition-colors">
                {row.cat}
              </span>
              <p className="col-span-12 md:col-span-9 text-ink leading-relaxed">
                {row.items}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line text-center">
        <p className="eyebrow mb-6">Pogadajmy</p>
        <h2 className="display text-h1 text-ink mb-10">
          Masz pomysł, <em>napisz</em>.
        </h2>
        <Link
          href="/kontakt"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-8 py-4"
          data-cursor="START"
        >
          <span>Kontakt</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </section>
    </article>
  );
}
