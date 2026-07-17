import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${p.client} — ${p.title}`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/projekty/${p.slug}` },
    openGraph: {
      title,
      description: p.description,
      url: `${SITE_URL}/projekty/${p.slug}`,
      type: "article",
      images: [{ url: p.image }],
    },
  };
}

export default async function ProjektPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const live = p.url;
  const repo = p.repo;
  const sameCategory = projects
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 3);

  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Projekty", path: "/projekty" },
    { name: `${p.client} — ${p.title}`, path: `/projekty/${p.slug}` },
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    creator: {
      "@type": "Person",
      name: "Marcin Siwonia",
      url: SITE_URL,
    },
    datePublished: `${p.year}-01-01`,
    description: p.description,
    image: `${SITE_URL}${p.image}`,
    url: `${SITE_URL}/projekty/${p.slug}`,
    keywords: p.stack.join(", "),
    about: { "@type": "Organization", name: p.client },
  };

  return (
    <article className="relative">
      {/* HERO */}
      <header className="relative px-6 pt-40 pb-16 md:px-10 md:pt-56 md:pb-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-between mb-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <Link
            href="/projekty"
            className="hover:text-peach transition-colors"
            data-cursor="WSTECZ"
          >
            ← Wszystkie projekty
          </Link>
          <span>
            {String(idx + 1).padStart(3, "0")} / {String(projects.length).padStart(3, "0")}
          </span>
          <span className="hidden md:inline">{p.year}</span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="eyebrow">{p.category === "commercial" ? "Komercyjny" : p.category === "fullstack" ? "Full-stack" : "Lab"}</p>
          </div>
          <div className="md:col-span-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-4">
              {p.client} · {p.year}
            </p>
            <h1 className="display text-display text-ink">{p.title}</h1>
          </div>
        </div>
      </header>

      {/* MEDIA — full bleed */}
      <section className="relative px-6 md:px-10 mb-24 md:mb-32">
        <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-bg-elev">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,19,31,0) 0%, rgba(20,19,31,0.6) 100%)",
            }}
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink/85 mix-blend-difference">
            <span>{p.client}</span>
            <span>FRAME 0001 · {p.year}</span>
          </div>
        </div>
      </section>

      {/* DETAILS — meta + description */}
      <section className="relative px-6 py-24 md:px-10 md:py-32 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <aside className="md:col-span-3 space-y-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                Klient
              </p>
              <p className="text-ink">{p.client}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                Rok
              </p>
              <p className="text-ink">{p.year}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                Kategoria
              </p>
              <p className="text-ink capitalize">
                {p.category === "commercial"
                  ? "Komercyjny"
                  : p.category === "fullstack"
                    ? "Full-stack"
                    : "Lab"}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
                Stack
              </p>
              <ul className="flex flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="border border-line px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {(live || repo) && (
              <div className="space-y-3">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-peach hover:underline underline-offset-4"
                    data-cursor="WEJDŹ"
                  >
                    <span>Live →</span>
                  </a>
                )}
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:text-peach transition-colors"
                    data-cursor="REPO"
                  >
                    <span>GitHub →</span>
                  </a>
                )}
              </div>
            )}
          </aside>

          <div className="md:col-span-7 prose-bound space-y-8 text-ink text-lg leading-relaxed">
            <p className="text-2xl md:text-3xl font-display italic text-ink leading-tight">
              {p.description}
            </p>
            <hr className="hairline" />
            {p.body ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                  O projekcie
                </p>
                <div className="space-y-6 text-ink-mute">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                    Zakres prac
                  </p>
                  <p className="text-ink-mute">
                    {p.category === "commercial"
                      ? `Pełen cykl: discovery → projekt graficzny → kodowanie → wdrożenie → opieka. Stack: ${p.stack.join(", ")}.`
                      : p.category === "fullstack"
                        ? `Aplikacja full-stack od architektury po deploy. Frontend, backend, baza danych, integracje, hosting. Stack: ${p.stack.join(", ")}.`
                        : `Projekt edukacyjny / proof-of-concept. Eksperyment z technologią ${p.stack.join(", ")} w izolowanym środowisku.`}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                    Kontekst
                  </p>
                  <p className="text-ink-mute">
                    {p.category === "commercial"
                      ? "Klient z konkretnym celem biznesowym, ograniczonym budżetem i terminem. Wybór technologii podyktowany dalszą edytowalnością i kosztami utrzymania."
                      : p.category === "fullstack"
                        ? "Aplikacja zaprojektowana z myślą o skalowaniu i łatwym dodawaniu nowych modułów. Pełna kontrola nad każdą warstwą stosu."
                        : "Praca własna w okresie nauki — testowanie konkretnych rozwiązań technologicznych w bezpiecznym środowisku."}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* RELATED projects */}
      {sameCategory.length > 0 && (
        <section className="relative px-6 py-24 md:px-10 md:py-32 border-t border-line">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <aside className="md:col-span-3">
              <p className="eyebrow mb-2">Podobne realizacje</p>
            </aside>
            <div className="md:col-span-9">
              <h2 className="display text-h2 text-ink">
                Z tej samej <em>półki</em>.
              </h2>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sameCategory.map((rp) => (
              <li key={rp.slug}>
                <Link
                  href={`/projekty/${rp.slug}`}
                  className="group block"
                  data-cursor="OTWÓRZ"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-bg-elev mb-4">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                    {rp.client} · {rp.year}
                  </p>
                  <h3 className="font-display italic text-xl text-ink group-hover:text-peach transition-colors">
                    {rp.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      <section className="relative px-6 py-32 md:px-10 md:py-44 border-t border-line text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(232,178,134,0.10) 0%, rgba(20,19,31,0) 70%)",
          }}
        />
        <p className="eyebrow mb-6 relative">Następny krok</p>
        <h2 className="display text-display text-ink mb-12 relative">
          Chcesz <em>podobnie</em>?
        </h2>
        <Link
          href="/kontakt"
          className="group relative inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-bg bg-peach hover:bg-peach-deep transition-colors px-8 py-4"
          data-cursor="START"
        >
          <span>Napisz mail</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </section>

      {/* PREV / NEXT */}
      <nav className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        <Link
          href={`/projekty/${prev.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 border-b md:border-b-0 md:border-r border-line"
          data-cursor="POPRZEDNI"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            ← Poprzedni
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{
              fontSize: "clamp(1.25rem, 1rem + 1vw, 2rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {prev.client} · <span className="text-ink-mute font-sans not-italic text-[0.7em]">{prev.title}</span>
          </p>
        </Link>
        <Link
          href={`/projekty/${next.slug}`}
          className="group relative px-6 py-12 md:px-10 md:py-16 hover:bg-bg-elev transition-colors duration-500 text-right"
          data-cursor="NASTĘPNY"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
            Następny →
          </p>
          <p
            className="font-display italic text-ink group-hover:text-peach transition-colors duration-500"
            style={{
              fontSize: "clamp(1.25rem, 1rem + 1vw, 2rem)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {next.client} · <span className="text-ink-mute font-sans not-italic text-[0.7em]">{next.title}</span>
          </p>
        </Link>
      </nav>

      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Script
        id="ld-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}
