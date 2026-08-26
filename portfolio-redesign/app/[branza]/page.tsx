import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { industries, INDUSTRY_CASES, INDUSTRY_SERVICES } from "@/lib/industries";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { IndustryHeroVisual } from "@/components/industry/IndustryHeroVisual";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

/** Naglowek: czlon po "dla " (albo ostatnie dwa slowa) leci kursywa, zgodnie z jezykiem strony. */
function editorialHeading(text: string) {
  const idx = text.lastIndexOf(" dla ");
  if (idx > -1) {
    return (
      <>
        {text.slice(0, idx + 5)}
        <em>{text.slice(idx + 5)}</em>
      </>
    );
  }
  const words = text.split(" ");
  const tail = words.slice(-2).join(" ");
  return (
    <>
      {words.slice(0, -2).join(" ")}{" "}
      <em>{tail}</em>
    </>
  );
}

export function generateStaticParams() {
  return industries.map((i) => ({ branza: i.slug }));
}

/** Segment jest na roocie, więc wszystko spoza listy branż ma dawać 404, nie render na żądanie. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ branza: string }>;
}): Promise<Metadata> {
  const { branza } = await params;
  const ind = industries.find((x) => x.slug === branza);
  if (!ind) return {};
  return {
    title: { absolute: ind.metaTitle },
    description: ind.metaDescription,
    alternates: { canonical: `/${ind.slug}` },
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `${SITE_URL}/${ind.slug}`,
      type: "website",
    },
  };
}

export default async function BranzaPage({
  params,
}: {
  params: Promise<{ branza: string }>;
}) {
  const { branza } = await params;
  const ind = industries.find((x) => x.slug === branza);
  if (!ind) notFound();

  const idx = industries.findIndex((x) => x.slug === branza);
  const next = industries[(idx + 1) % industries.length];
  const prev = industries[(idx - 1 + industries.length) % industries.length];

  const cases = (INDUSTRY_CASES[ind.slug] ?? [])
    .map((c) => ({ ...c, project: projects.find((p) => p.slug === c.projectSlug) }))
    .filter((c) => c.project);

  const relatedServices = (INDUSTRY_SERVICES[ind.slug] ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  // "12-25 tys. zł netto" → { min: 12000, max: 25000 }
  const priceBounds = (() => {
    const m = ind.pricing.range.match(/(\d+)\s*-\s*(\d+)\s*tys/);
    if (!m) return { min: undefined, max: undefined };
    return { min: Number(m[1]) * 1000, max: Number(m[2]) * 1000 };
  })();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: ind.keyword,
    serviceType: ind.keyword,
    description: ind.metaDescription,
    provider: {
      "@type": "Person",
      name: "Marcin Siwonia",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wrocław",
        addressCountry: "PL",
      },
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
        // Widełki jako liczby, nie opis tekstowy: tylko takie dane są dla wyszukiwarki użyteczne.
        minPrice: priceBounds.min,
        maxPrice: priceBounds.max,
        valueAddedTaxIncluded: false,
      },
    },
    url: `${SITE_URL}/${ind.slug}`,
  };

  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Branże", path: "/branze" },
    { name: ind.title, path: `/${ind.slug}` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ind.faq.map((f) => ({
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
          <Link href="/branze" className="hover:text-peach transition-colors" data-cursor="WSTECZ">
            ← Wszystkie branże
          </Link>
          <span>
            Branża {String(idx + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
          </span>
          <span className="hidden md:inline">{ind.title}</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="eyebrow">Branża</p>
          </div>
          <div className="md:col-span-7">
            <h1
              className="display text-ink"
              style={{
                fontSize: "clamp(1.85rem, 0.9rem + 4vw, 5rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
              }}
            >
              {ind.h1}
            </h1>
            <p
              className="mt-8 md:mt-12 max-w-3xl text-ink-mute"
              style={{ fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.375rem)", lineHeight: 1.5 }}
            >
              {ind.lead}
            </p>
          </div>
          <div className="md:col-span-3 hidden md:block">
            <IndustryHeroVisual slug={ind.slug} />
          </div>
        </div>

        {/* Mobile: scena pod leadem, węższa, żeby nie spychała treści */}
        <div className="md:hidden mt-12 max-w-[15rem] mx-auto">
          <IndustryHeroVisual slug={ind.slug} />
        </div>

        {/* Pasek faktów: cena, czas, dowód */}
        <dl className="relative mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 border-t border-line">
          <div className="group py-7 sm:pr-8 border-b sm:border-b-0 sm:border-r border-line">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
              <a href="#wycena" className="hover:text-peach transition-colors" data-cursor="WYCENA">
                Widełki ↓
              </a>
            </dt>
            <dd
              className="font-display italic text-ink"
              style={{ fontSize: "clamp(1.35rem, 1rem + 1.1vw, 2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {ind.pricing.range}
            </dd>
          </div>
          <div className="py-7 sm:px-8 border-b sm:border-b-0 sm:border-r border-line">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
              Czas realizacji
            </dt>
            <dd
              className="font-display italic text-ink"
              style={{ fontSize: "clamp(1.35rem, 1rem + 1.1vw, 2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {ind.pricing.time}
            </dd>
          </div>
          <div className="py-7 sm:pl-8">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
              Realizacje w tej branży
            </dt>
            <dd
              className="font-display italic text-ink"
              style={{ fontSize: "clamp(1.35rem, 1rem + 1.1vw, 2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              {cases.length > 0 ? cases.map((c) => c.project!.client).join(", ") : "jeszcze żadnej"}
            </dd>
          </div>
        </dl>
      </header>

      {/* 01 WSTĘP */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">01 — Wstęp</p>
            <p className="text-ink-faint text-sm font-mono">Dla kogo i dlaczego tak.</p>
          </aside>
          <div className="md:col-span-7 prose-bound space-y-6 text-ink text-lg leading-relaxed">
            {ind.intro.map((p, i) => (
              <p key={i}>{renderInlineLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 CO ZWYKLE NIE DZIAŁA */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">02 — Diagnoza</p>
            <p className="text-ink-faint text-sm font-mono">Cztery rzeczy, które kosztują zapytania.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading(ind.headings.pains)}
            </h2>
          </div>
        </div>
        <ol className="border-t border-line">
          {ind.pains.map((p, i) => (
            <li
              key={p.title}
              className="group border-b border-line py-9 md:py-12 grid grid-cols-12 gap-4 md:gap-8 items-baseline relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(232,178,134,0.045) 0%, rgba(232,178,134,0) 65%)",
                }}
              />
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-peach">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="col-span-10 md:col-span-4 font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                style={{
                  fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                }}
              >
                {p.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-ink-mute leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 CZEGO WYMAGA */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">03 — Zakres</p>
            <p className="text-ink-faint text-sm font-mono">Sześć elementów, które muszą być.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading(ind.headings.mustHave)}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-14 gap-x-10 lg:gap-x-12">
          {ind.mustHave.map((m, i) => (
            <div key={m.title} className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                {String(i + 1).padStart(2, "0")} / 06
              </p>
              <h3
                className="font-display italic text-ink mb-4"
                style={{
                  fontSize: "clamp(1.35rem, 1rem + 1vw, 1.95rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                }}
              >
                {m.title}
              </h3>
              <p className="text-ink-mute leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 REALIZACJE */}
      <section id="dowod" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">04 — Dowód</p>
            <p className="text-ink-faint text-sm font-mono">Projekty, nie deklaracje.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {cases.length > 0 ? (
                editorialHeading(ind.headings.cases)
              ) : (
                <>
                  Tej branży <em>jeszcze</em> nie robiłem.
                </>
              )}
            </h2>
          </div>
        </div>

        {cases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            {cases.map((c) => (
              <Link
                key={c.projectSlug}
                href={`/projekty/${c.project!.slug}`}
                className="group block bg-bg p-6 md:p-8 hover:bg-bg-elev transition-colors duration-700"
                data-cursor="CASE"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-elev mb-7">
                  <Image
                    src={c.project!.image}
                    alt={`${c.project!.client}, ${c.project!.title}`}
                    fill
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <p className="eyebrow mb-3">
                  {c.project!.client} · {c.project!.year}
                </p>
                <h3
                  className="font-display italic text-ink mb-4 group-hover:text-peach transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  {c.project!.title}
                </h3>
                <p className="text-ink-mute leading-relaxed mb-5">{c.note}</p>
                <ul className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
                  {c.project!.stack.map((t) => (
                    <li key={t} className="border border-line px-2.5 py-1 rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 md:col-start-4 prose-bound text-ink-mute text-lg leading-relaxed space-y-5">
              <p>
                Nie mam jeszcze wdrożenia dla tej grupy, więc nie będę udawał, że mam. Dowodem jest
                warsztat: kilkadziesiąt komercyjnych stron i sklepów w innych branżach oraz ta strona,
                którą właśnie czytasz, zbudowana tymi samymi narzędziami.
              </p>
              <p>
                <Link
                  href="/projekty"
                  className="text-ink underline underline-offset-4 decoration-ink-faint hover:text-peach hover:decoration-peach transition-colors"
                >
                  Zobacz pełną listę realizacji
                </Link>{" "}
                i oceń sam, czy taki poziom wykonania Ci odpowiada.
              </p>
            </div>
          </div>
        )}
      </section>


      {/* PASEK ZAUFANIA + CTA w połowie strony */}
      <section className="px-6 py-14 md:px-10 md:py-16 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <dl className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              ["od 2020", "stawiam strony na WordPressie"],
              ["25+", "wdrożeń WordPress i WooCommerce"],
              ["90+", "Lighthouse na mobile przed oddaniem"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span
                    className="block font-display italic text-ink"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                  >
                    {value}
                  </span>
                  <span className="mt-2 block text-ink-mute text-sm leading-snug">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="md:col-span-5 md:text-right">
            <p className="text-ink-mute leading-relaxed mb-5">
              Masz pytanie zanim doczytasz do wyceny? Napisz, odpowiadam tego samego dnia roboczego.
            </p>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink border border-line hover:border-peach hover:text-peach transition-colors px-6 py-3"
              data-cursor="PISZ"
            >
              <span>Zadaj pytanie</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 05 PROCES — poziomy stepper, inny rytm niż pozostałe sekcje */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">05 — Proces</p>
            <p className="text-ink-faint text-sm font-mono">Od briefu do startu.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Jak to <em>przebiega</em>.
            </h2>
          </div>
        </div>
        <ol className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-line" />
          {ind.process.map((step) => (
            <li key={step.step} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden className="w-[15px] h-[15px] rounded-full border border-peach bg-bg shrink-0" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-peach">{step.step}</span>
              </div>
              <h3
                className="font-display italic text-ink mb-3"
                style={{ fontSize: "clamp(1.2rem, 1rem + 0.7vw, 1.6rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p className="text-ink-mute text-[0.95rem] leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ODSIEW — wąska kolumna, celowo inny rytm i inny ton */}
      <section className="px-6 py-20 md:px-10 md:py-24 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Uczciwie</p>
          <h2
            className="font-display italic text-ink mb-10"
            style={{ fontSize: "clamp(1.6rem, 1.1rem + 1.8vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            Kiedy powiem, że to nie u mnie
          </h2>
          <ul className="text-left border-t border-line">
            {ind.notFor.map((n) => (
              <li key={n} className="border-b border-line py-5 flex gap-4 items-baseline">
                <span aria-hidden className="font-mono text-[11px] text-peach shrink-0">
                  ×
                </span>
                <span className="text-ink-mute leading-relaxed">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 CZYM TO ROBIĘ */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">06 — Warsztat</p>
            <p className="text-ink-faint text-sm font-mono">Technologie i integracje.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading(ind.headings.stack)}
            </h2>
          </div>
        </div>
        <dl className="border-t border-line mb-14">
          {ind.stack.map((s) => (
            <div
              key={s.label}
              className="border-b border-line py-8 grid grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              <dt className="col-span-12 md:col-span-4 font-mono text-[11px] uppercase tracking-[0.22em] text-peach">
                {s.label}
              </dt>
              <dd className="col-span-12 md:col-span-8 text-ink-mute leading-relaxed">{s.body}</dd>
            </div>
          ))}
        </dl>
        {relatedServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <p className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
              Powiązane usługi
            </p>
            <ul className="md:col-span-9 flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/uslugi/${s.slug}`}
                    className="inline-block border border-line hover:border-peach hover:text-peach text-ink-mute transition-colors px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                    data-cursor="USŁUGA"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 07 CENA — blok na podniesionym tle, żeby był wizualną kotwicą strony */}
      <section
        id="wycena"
        className="relative px-6 py-24 md:px-10 md:py-32 border-t border-line bg-bg-elev scroll-mt-24"
      >
        {/* peach hairline: jedyna sekcja z takim akcentem, żeby wycena była kotwicą wzroku */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-peach/40" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">07 — Wycena</p>
            <p className="text-ink-faint text-sm font-mono">Widełki, nie „zapytaj o cenę".</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-ink mb-8" style={{ fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {editorialHeading(ind.headings.pricing)}
            </h2>
            <p
              className="font-display italic text-ink"
              style={{
                fontSize: "clamp(2.25rem, 1.2rem + 4vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
              }}
            >
              {ind.pricing.range}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-peach">
              Realizacja {ind.pricing.time}
            </p>
            <p className="mt-8 max-w-2xl text-ink-mute text-lg leading-relaxed">{ind.pricing.note}</p>

            {ind.deliverables && ind.deliverables.length > 0 && (
              <>
                <p className="mt-14 mb-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                  W tej cenie
                </p>
                <ul className="border-t border-line">
                  {ind.deliverables.map((d) => (
                    <li
                      key={d.label}
                      className="border-b border-line py-6 grid grid-cols-12 gap-4 md:gap-8 items-baseline"
                    >
                      <span className="col-span-12 md:col-span-4 font-display italic text-ink text-[1.15rem] leading-tight">
                        {d.label}
                      </span>
                      <span className="col-span-12 md:col-span-8 text-ink-mute leading-relaxed">
                        {d.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 08 FAQ */}
      <section id="faq" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">08 — FAQ</p>
            <p className="text-ink-faint text-sm font-mono">Pytania, które padają zawsze.</p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              {editorialHeading(ind.headings.faq)}
            </h2>
          </div>
        </div>
        <div className="md:max-w-4xl mx-auto border-t border-line">
          {ind.faq.map((f) => (
            <details key={f.q} className="group border-b border-line py-7 md:py-9">
              <summary
                className="cursor-pointer list-none flex items-baseline justify-between gap-6 hover:text-peach transition-colors"
                data-cursor="ROZWIŃ"
              >
                <span
                  className="font-display italic text-ink group-open:text-peach transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {f.q}
                </span>
                <span className="font-mono text-2xl text-ink-faint group-open:text-peach group-open:rotate-45 transition-all duration-500 shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-5 text-ink-mute prose-bound leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32 md:px-10 md:py-48 border-t border-line overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,178,134,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />
        <div className="relative text-center max-w-5xl mx-auto">
          <p className="eyebrow mb-8">Następny krok</p>
          <h2 className="display text-display text-ink mb-12">
            <em>{ind.cta}</em>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-8 py-4"
              data-cursor="START"
            >
              <span>Napisz brief</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:marcin.siwonia.firma@gmail.com"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors px-8 py-4"
              data-cursor="KOPIUJ"
            >
              <span>marcin.siwonia.firma@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        <Link
          href={`/${prev.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 border-b md:border-b-0 md:border-r border-line"
          data-cursor="POPRZEDNIA"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            ← Poprzednia branża
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{ fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/${next.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 text-right"
          data-cursor="NASTĘPNA"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            Następna branża →
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{ fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            {next.title}
          </p>
        </Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}
