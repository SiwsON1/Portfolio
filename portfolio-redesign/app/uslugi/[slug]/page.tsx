import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { SERVICE_CASE_MAP } from "@/lib/service-project-map";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { ServiceHeroVisual } from "@/components/service/ServiceHeroVisual";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcinsiwonia.pl";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/uslugi/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE_URL}/uslugi/${s.slug}`,
      type: "website",
    },
  };
}

export default async function UslugaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const idx = services.findIndex((x) => x.slug === slug);
  const next = services[(idx + 1) % services.length];
  const prev = services[(idx - 1 + services.length) % services.length];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.metaDescription,
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
    url: `${SITE_URL}/uslugi/${s.slug}`,
  };

  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Usługi", path: "/uslugi" },
    { name: s.title, path: `/uslugi/${s.slug}` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="relative">
      {/* HERO — cinematic with massive italic display + frame mark */}
      <header className="relative px-6 pt-40 pb-32 md:px-10 md:pt-56 md:pb-48 overflow-hidden">
        {/* Ambient cool glow */}
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        {/* Top frame mark */}
        <div className="relative flex items-center justify-between mb-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <Link
            href="/uslugi"
            className="hover:text-peach transition-colors"
            data-cursor="WSTECZ"
          >
            ← Wszystkie usługi
          </Link>
          <span>
            Usługa {String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
          <span className="hidden md:inline">{s.title}</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="eyebrow">Usługa</p>
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
              {s.h1}
            </h1>
            <p className="mt-8 md:mt-12 max-w-3xl text-ink-mute" style={{ fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.375rem)", lineHeight: 1.5 }}>
              {s.lead}
            </p>
          </div>
          <div className="md:col-span-3 hidden md:block">
            <ServiceHeroVisual slug={s.slug} />
          </div>
        </div>

        {/* Mobile: visual ABOVE title — kompaktowo */}
        <div className="md:hidden mt-12 max-w-xs mx-auto h-64">
          <ServiceHeroVisual slug={s.slug} />
        </div>
      </header>

      {/* CASE STUDY — pokaż konkretną realizację w tej technologii */}
      {(() => {
        const hint = SERVICE_CASE_MAP[s.slug];
        const project = hint ? projects.find((p) => p.slug === hint.projectSlug) : null;
        if (!hint || !project) return null;
        return (
          <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
              <aside className="md:col-span-3">
                <p className="eyebrow mb-2">— Realizacja w tej technologii</p>
                <p className="text-ink-faint text-sm font-mono leading-relaxed">
                  Konkretny projekt który zrobiłem w tym setupie.
                </p>
              </aside>
              <div className="md:col-span-9">
                <h2 className="display text-h1 text-ink">
                  Tak to <em>wygląda</em> w&nbsp;praktyce.
                </h2>
              </div>
            </div>

            <Link
              href={`/projekty/${project.slug}`}
              className="group block"
              data-cursor="CASE"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-bg-elev mb-10">
                <Image
                  src={project.image}
                  alt={`${project.client} — ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none"
                />
                <div className="absolute top-5 left-5 right-5 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/90 mix-blend-difference">
                  <span>{project.year} · {project.client}</span>
                  <span>{hint.highlight}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-3">
                  <p className="eyebrow mb-3">Klient · {project.year}</p>
                  <h3
                    className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                    style={{
                      fontSize: "clamp(1.75rem, 1rem + 2vw, 2.75rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {project.client}
                  </h3>
                </div>
                <div className="md:col-span-7 prose-bound text-ink-mute text-lg leading-relaxed">
                  <p>{hint.context}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
                    {project.stack.map((t) => (
                      <li key={t} className="border border-line px-2.5 py-1 rounded-full">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-peach transition-colors">
                    <span>Case</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </section>
        );
      })()}

      {/* INTRO — long-form copy with marginalia */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">01 — Wstęp</p>
            <p className="text-ink-faint text-sm font-mono">
              Background, historia, dlaczego.
            </p>
          </aside>
          <div className="md:col-span-7 prose-bound space-y-6 text-ink text-lg leading-relaxed">
            {s.intro.map((p, i) => (
              <p key={i}>{renderInlineLinks(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CO DOSTAJESZ — 2x2 grid with hover treatment */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">02 — Co dostajesz</p>
            <p className="text-ink-faint text-sm font-mono">
              Konkretne kawałki pakietu.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Cztery <em>kawałki</em> tego samego.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {s.bullets.map((b, i) => (
            <div
              key={i}
              className="bg-bg p-10 md:p-14 group hover:bg-bg-elev transition-colors duration-700 relative overflow-hidden"
            >
              {/* Peach line that grows on hover */}
              <div
                aria-hidden
                className="absolute top-0 left-0 h-px bg-peach origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: "100%" }}
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-8">
                — {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="font-display italic text-ink mb-5 group-hover:text-peach transition-colors duration-700"
                style={{
                  fontSize: "clamp(1.75rem, 1rem + 2.4vw, 3rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
                }}
              >
                {b.title}
              </h3>
              <p className="text-ink-mute leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCES — vertical timeline */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">03 — Proces</p>
            <p className="text-ink-faint text-sm font-mono">
              Od briefu do wdrożenia.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Krok po <em>kroku</em>.
            </h2>
          </div>
        </div>
        <ol className="border-t border-line">
          {s.process.map((step, i) => (
            <li
              key={step.step}
              className="group border-b border-line py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-6 items-baseline relative overflow-hidden"
            >
              {/* Subtle gradient sweep on hover */}
              <div
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(232,178,134,0.04) 0%, rgba(232,178,134,0) 70%)",
                }}
              />
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-peach">
                {step.step}
              </span>
              <h3
                className="col-span-10 md:col-span-4 font-display italic text-ink group-hover:text-peach transition-colors duration-500"
                style={{
                  fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                }}
              >
                {step.title}
              </h3>
              <p className="col-span-12 md:col-span-7 text-ink-mute leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ — accordion editorial */}
      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <aside className="md:col-span-3">
            <p className="eyebrow mb-2">04 — FAQ</p>
            <p className="text-ink-faint text-sm font-mono">
              Najczęstsze pytania.
            </p>
          </aside>
          <div className="md:col-span-9">
            <h2 className="display text-h1 text-ink">
              Krótkie <em>odpowiedzi</em>.
            </h2>
          </div>
        </div>
        <div className="md:max-w-4xl mx-auto border-t border-line">
          {s.faq.map((f, i) => (
            <details
              key={i}
              className="group border-b border-line py-7 md:py-9"
            >
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
              <p className="mt-5 text-ink-mute prose-bound leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA — full-bleed editorial */}
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
            <em>{s.cta}</em>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-8 py-4"
              data-cursor="START"
            >
              <span>Napisz mail</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:mahinek12@gmail.com"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute hover:text-peach transition-colors px-8 py-4"
              data-cursor="KOPIUJ"
            >
              <span>mahinek12@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* PREV / NEXT navigation */}
      <nav className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        <Link
          href={`/uslugi/${prev.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 border-b md:border-b-0 md:border-r border-line"
          data-cursor="POPRZEDNIA"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            ← Poprzednia usługa
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{
              fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/uslugi/${next.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 text-right"
          data-cursor="NASTĘPNA"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            Następna usługa →
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{
              fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {next.title}
          </p>
        </Link>
      </nav>

      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}
