import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import {
  WCAG_META,
  WCAG_FACTBAR,
  WCAG_ZAKRES,
  WCAG_CENNIK,
  WCAG_KWALIFIKACJA,
  WCAG_PROCES,
  WCAG_KRYTERIA,
  WCAG_PRAWO,
  WCAG_POZA_ZAKRESEM,
  WCAG_ROZNICA,
  WCAG_FAQ,
} from "@/lib/wcag";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

/** Ostatnie dwa słowa nagłówka kursywą, tak jak na stronach branżowych. */
function editorialHeading(text: string) {
  const words = text.split(" ");
  if (words.length < 3) return <em>{text}</em>;
  const tail = words.slice(-2).join(" ");
  return (
    <>
      {words.slice(0, -2).join(" ")} <em>{tail}</em>
    </>
  );
}

export const metadata: Metadata = {
  title: { absolute: WCAG_META.metaTitle },
  description: WCAG_META.metaDescription,
  alternates: { canonical: `/${WCAG_META.slug}` },
  openGraph: {
    title: WCAG_META.metaTitle,
    description: WCAG_META.metaDescription,
    url: `${SITE_URL}/${WCAG_META.slug}`,
    type: "website",
  },
};

const LICZBA_KRYTERIOW = WCAG_KRYTERIA.reduce((n, g) => n + g.pozycje.length, 0);

export default function AudytWcagPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Audyt WCAG",
    serviceType: "Audyt dostępności cyfrowej WCAG 2.1 AA",
    description: WCAG_META.metaDescription,
    provider: {
      "@type": "Person",
      name: "Marcin Siwonia",
      url: SITE_URL,
      address: { "@type": "PostalAddress", addressLocality: "Wrocław", addressCountry: "PL" },
    },
    areaServed: { "@type": "Country", name: "Poland" },
    inLanguage: "pl-PL",
    image: `${SITE_URL}/opengraph-image`,
    offers: {
      "@type": "Offer",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "PLN",
        minPrice: 4000,
        maxPrice: 10000,
        valueAddedTaxIncluded: false,
      },
    },
    url: `${SITE_URL}/${WCAG_META.slug}`,
  };

  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Audyt WCAG", path: `/${WCAG_META.slug}` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WCAG_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="relative">
      {/* HERO */}
      <header className="relative px-6 pt-40 pb-24 md:px-10 md:pt-56 md:pb-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[760px] h-[760px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,178,134,0.09) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-between mb-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <Link href="/uslugi" className="hover:text-peach transition-colors" data-cursor="WSTECZ">
            ← Wszystkie usługi
          </Link>
          <span>Obowiązuje od 28.06.2025</span>
          <span className="hidden md:inline">WCAG 2.1 AA</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            {/* Wyrównanie do pierwszej linii H1, nie do środka bloku nagłówka. */}
            <p className="eyebrow md:pt-[0.9em]">Dostępność</p>
          </div>
          <div className="md:col-span-8">
            <h1
              className="display text-ink"
              style={{
                fontSize: "clamp(1.85rem, 0.9rem + 4vw, 5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
              }}
            >
              {editorialHeading(WCAG_META.h1)}
            </h1>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
          <div className="md:col-start-3 md:col-span-7 prose-bound">
            <p className="text-lead text-ink-mute leading-relaxed">{WCAG_META.lead}</p>
          </div>
        </div>

        <dl className="relative mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-line">
          {WCAG_FACTBAR.map((f, i) => (
            <div
              key={f.label}
              className={`py-7 ${i === 0 ? "sm:pr-8" : "sm:px-8"} ${
                i < WCAG_FACTBAR.length - 1 ? "border-b sm:border-b-0 sm:border-r border-line" : ""
              }`}
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
                {f.label}
              </dt>
              <dd
                className="font-display italic text-ink"
                style={{
                  fontSize: "clamp(1.35rem, 1rem + 1.1vw, 2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* 01 WSTĘP */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">01 — Wstęp</p>
            <p className="text-ink-faint text-sm font-mono">Co robię i czym się to różni.</p>
          </aside>
          <div className="md:col-span-7 prose-bound space-y-6 text-ink text-lg leading-relaxed">
            {WCAG_META.intro.map((p, i) => (
              <p key={i}>{renderInlineLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 ZAKRES */}
      <section id="zakres" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">02 — Zakres</p>
            <p className="text-ink-faint text-sm font-mono">Cztery rzeczy, których skaner nie zrobi.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">{editorialHeading("Co obejmuje audyt WCAG")}</h2>
          </div>
        </div>
        <ol className="border-t border-line">
          {WCAG_ZAKRES.map((b, i) => (
            <li
              key={b.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-ink-faint tabular-nums pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display italic text-ink text-h3 leading-tight">
                {b.title}
              </h3>
              <p className="md:col-span-7 text-ink-mute leading-relaxed">{b.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 CENNIK */}
      <section id="cennik" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">03 — Cennik</p>
            <p className="text-ink-faint text-sm font-mono">Kwoty wprost. Agencje ich nie podają.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">{editorialHeading("Ile kosztuje audyt WCAG")}</h2>
          </div>
        </div>
        <div className="border-t border-line">
          {WCAG_CENNIK.map((p) => (
            <div
              key={p.name}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line"
            >
              <h3 className="md:col-span-3 font-display italic text-ink text-h3 leading-tight">
                {p.name}
              </h3>
              <div className="md:col-span-3">
                <p
                  className="font-display italic text-peach"
                  style={{ fontSize: "clamp(1.35rem, 1rem + 1.1vw, 2rem)", lineHeight: 1.05 }}
                >
                  {p.price}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint mt-2">
                  {p.time}
                </p>
              </div>
              <p className="md:col-span-6 text-ink-mute leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-faint prose-bound">
          Kwoty netto. Wycenę potwierdzam po obejrzeniu strony, przed rozpoczęciem pracy, i nie
          zmieniam jej w trakcie.
        </p>
      </section>

      {/* 04 KWALIFIKACJA */}
      <section id="czy-mnie-dotyczy" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">04 — Kwalifikacja</p>
            <p className="text-ink-faint text-sm font-mono">Sprawdź, zanim za cokolwiek zapłacisz.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading("Czy Twoja firma musi spełniać WCAG")}
            </h2>
          </div>
        </div>
        <ol className="border-t border-line">
          {WCAG_KWALIFIKACJA.map((k, i) => (
            <li
              key={k.q}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-ink-faint tabular-nums pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 text-ink text-lg leading-snug font-medium">{k.q}</h3>
              <p className="md:col-span-5 text-ink-mute leading-relaxed">{k.a}</p>
              <span className="md:col-span-2 md:text-right">
                <span
                  className={`inline-block font-mono text-[10px] uppercase tracking-[0.18em] py-1.5 px-3 border ${
                    k.wynik === "dotyczy" ? "text-peach border-peach/40" : "text-ink-faint border-line"
                  }`}
                >
                  {k.wynik}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* 05 PROCES */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">05 — Proces</p>
            <p className="text-ink-faint text-sm font-mono">Pięć etapów, każdy z czasem.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading("Jak przebiega audyt WCAG")}
            </h2>
          </div>
        </div>
        <ol className="border-t border-line">
          {WCAG_PROCES.map((s) => (
            <li
              key={s.step}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-line"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-ink-faint tabular-nums pt-1">
                {s.step}
              </span>
              <h3 className="md:col-span-3 font-display italic text-ink text-h3 leading-tight">
                {s.title}
              </h3>
              <p className="md:col-span-6 text-ink-mute leading-relaxed">{s.body}</p>
              <span className="md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint pt-1">
                {s.time}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* 06 KRYTERIA */}
      <section id="kryteria" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">06 — Lista kontrolna</p>
            <p className="text-ink-faint text-sm font-mono">Pełna lista. Bez ogólników.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Co sprawdzam: {LICZBA_KRYTERIOW} kryteriów <em>WCAG 2.1 AA</em>
            </h2>
            <p className="mt-6 text-ink-mute leading-relaxed prose-bound">
              Norma EN 301 549, przywołana w przepisach, wskazuje WCAG 2.1 na poziomie AA. To są te{" "}
              {LICZBA_KRYTERIOW} kryteriów: 30 na poziomie A i 20 na AA. Poziom AAA nie jest wymagany.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          {WCAG_KRYTERIA.map((g) => (
            <div key={g.zasada}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border-strong pb-3 mb-6">
                <h3 className="font-display italic text-ink text-h3 leading-none">{g.zasada}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  {g.pozycje.length} kryteriów
                </p>
              </div>
              <p className="text-ink-mute mb-8 prose-bound">{g.opis}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10">
                {g.pozycje.map((k) => (
                  <li key={k.nr} className="flex items-baseline gap-3 py-2.5 border-b border-line">
                    <span className="font-mono text-[11px] text-ink-faint tabular-nums shrink-0 w-11">
                      {k.nr}
                    </span>
                    <span className="text-ink text-sm leading-snug flex-1">{k.nazwa}</span>
                    <span
                      className={`font-mono text-[10px] tracking-[0.14em] shrink-0 ${
                        k.poziom === "AA" ? "text-peach" : "text-ink-faint"
                      }`}
                    >
                      {k.poziom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 07 RÓŻNICA */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">07 — Różnica</p>
            <p className="text-ink-faint text-sm font-mono">Dlaczego to jedno zlecenie, nie dwa.</p>
          </aside>
          <div className="md:col-span-8">
            <h2 className="display text-h1 text-ink mb-10">{editorialHeading(WCAG_ROZNICA.h2)}</h2>
            <div className="prose-bound space-y-6 text-ink text-lg leading-relaxed">
              {WCAG_ROZNICA.akapity.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 PODSTAWA PRAWNA */}
      <section id="podstawa-prawna" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">08 — Stan prawny</p>
            <p className="text-ink-faint text-sm font-mono">Daty, progi, kwoty.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading("Podstawa prawna w jednej tabeli")}
            </h2>
          </div>
        </div>
        <dl className="border-t border-line">
          {WCAG_PRAWO.map((r) => (
            <div
              key={r.atrybut}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-line"
            >
              <dt className="md:col-span-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint pt-1">
                {r.atrybut}
              </dt>
              <dd className="md:col-span-8 text-ink leading-relaxed">{r.wartosc}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-ink-faint prose-bound">
          Kwota kary zmienia się co roku, razem z komunikatem GUS o przeciętnym wynagrodzeniu.
          Wartość powyżej dotyczy 2026 roku.
        </p>
      </section>

      {/* 09 POZA ZAKRESEM */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">09 — Odsiew</p>
            <p className="text-ink-faint text-sm font-mono">Żeby nie było nieporozumień.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading("Czego audyt WCAG nie obejmuje")}
            </h2>
          </div>
        </div>
        <ul className="border-t border-line">
          {WCAG_POZA_ZAKRESEM.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-line"
            >
              <span className="md:col-span-1 font-mono text-[11px] text-ink-faint tabular-nums pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="md:col-span-10 text-ink-mute leading-relaxed">{t}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 10 FAQ */}
      <section id="faq" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">10 — Pytania</p>
            <p className="text-ink-faint text-sm font-mono">
              {WCAG_FAQ.length} pytań, konkretne odpowiedzi.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">{editorialHeading("Pytania o audyt WCAG")}</h2>
          </div>
        </div>
        <div className="border-t border-line">
          {WCAG_FAQ.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex items-start justify-between gap-6 py-7 cursor-pointer list-none marker:content-none">
                <h3 className="text-ink text-lg leading-snug font-medium group-hover:text-peach transition-colors">
                  {f.q}
                </h3>
                <span
                  aria-hidden
                  className="shrink-0 font-mono text-ink-faint text-lg leading-none pt-1 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-8 pr-10 text-ink-mute leading-relaxed prose-bound">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32 md:px-10 md:py-48 border-t border-line overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-40 -right-32 w-[720px] h-[720px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,178,134,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <p className="eyebrow">Start</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-display text-ink mb-10">
              {editorialHeading("Sprawdźmy, na czym stoisz")}
            </h2>
            <p className="text-lead text-ink-mute prose-bound mb-12">{WCAG_META.cta}</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink border border-border-strong px-7 py-4 hover:border-peach hover:text-peach transition-colors"
              data-cursor="KONTAKT"
            >
              Napisz do mnie <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}
