import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { breadcrumbsSchema } from "@/lib/breadcrumbs";
import { renderInlineLinks } from "@/lib/renderInlineLinks";
import { PostHero } from "@/components/blog/PostHero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcinsiwonia.pl";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.metaTitle ?? p.title,
    description: p.metaDescription ?? p.excerpt,
    keywords: p.keyword ? [p.keyword, ...p.tags] : p.tags,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      url: `${SITE_URL}/blog/${p.slug}`,
      type: "article",
      publishedTime: p.date,
      authors: ["Marcin Siwonia"],
      tags: p.tags,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = posts.findIndex((x) => x.slug === slug);
  const next = posts[(idx + 1) % posts.length];
  const prev = posts[(idx - 1 + posts.length) % posts.length];

  const hasNewSchema = Array.isArray(p.sections) && p.sections.length > 0;

  const breadcrumbs = breadcrumbsSchema([
    { name: "Strona główna", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: p.title, path: `/blog/${p.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.metaDescription ?? p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    author: { "@type": "Person", name: "Marcin Siwonia", url: SITE_URL },
    publisher: { "@type": "Person", name: "Marcin Siwonia" },
    mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
    keywords: p.keyword ? [p.keyword, ...p.tags].join(", ") : p.tags.join(", "),
    inLanguage: "pl-PL",
  };

  const faqSchema = p.faq && p.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const relatedServices =
    p.relatedServices?.map((s) => services.find((x) => x.slug === s)).filter(Boolean) ?? [];

  return (
    <article className="relative">
      {p.hero && <PostHero kind={p.hero.kind} />}

      <header className="relative px-6 pt-20 pb-16 md:px-10 md:pt-32 md:pb-24 overflow-hidden">
        {!p.hero && (
          <div
            aria-hidden
            className="absolute -top-32 right-1/4 w-[700px] h-[700px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(232,178,134,0.10) 0%, rgba(20,19,31,0) 70%)",
            }}
          />
        )}
        <div className="relative flex items-center justify-between mb-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          <Link
            href="/blog"
            className="hover:text-peach transition-colors"
            data-cursor="WSTECZ"
          >
            ← Wszystkie posty
          </Link>
          <span>{p.readingMinutes} min czytania</span>
          <span className="hidden md:inline">
            {new Date(p.date).toLocaleDateString("pl-PL", { dateStyle: "long" })}
          </span>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <p className="eyebrow">Post · {String(idx + 1).padStart(2, "0")}</p>
          </div>
          <div className="md:col-span-9">
            <h1
              className="display text-ink"
              style={{ fontSize: "clamp(2.25rem, 1rem + 5vw, 5.5rem)", lineHeight: 1.05 }}
            >
              {p.title}
            </h1>
            {p.lead ? (
              <p
                className="mt-10 max-w-3xl text-ink"
                style={{ fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.5rem)", lineHeight: 1.55 }}
              >
                {renderInlineLinks(p.lead)}
              </p>
            ) : (
              <p
                className="mt-10 max-w-3xl text-ink-mute"
                style={{ fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.4rem)", lineHeight: 1.55 }}
              >
                {p.excerpt}
              </p>
            )}
            <ul className="mt-8 flex flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-faint">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="border border-line px-2 py-0.5 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {hasNewSchema ? (
        <section className="px-6 py-16 md:px-10 md:py-24 border-t border-line">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="md:col-span-3 md:sticky md:top-32 md:self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
                Spis treści
              </p>
              <ol className="space-y-3 text-sm text-ink-mute">
                {p.sections!.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="hover:text-peach transition-colors block leading-snug"
                    >
                      <span className="font-mono text-[10px] text-ink-faint mr-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </a>
                  </li>
                ))}
                {p.faq && p.faq.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-peach transition-colors block leading-snug"
                    >
                      <span className="font-mono text-[10px] text-ink-faint mr-2">
                        {String(p.sections!.length + 1).padStart(2, "0")}
                      </span>
                      Najczęstsze pytania (FAQ)
                    </a>
                  </li>
                )}
              </ol>
            </aside>
            <div className="md:col-span-8 md:col-start-5 prose-bound space-y-16 text-ink leading-relaxed">
              {p.sections!.map((s, i) => (
                <section
                  key={i}
                  id={`section-${i}`}
                  className="scroll-mt-32"
                >
                  <h2
                    className="font-display italic text-ink mb-6"
                    style={{
                      fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.25rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {s.heading}
                  </h2>
                  <div className="space-y-5 text-lg">
                    {s.body.map((para, j) => (
                      <p key={j}>{renderInlineLinks(para)}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 py-16 md:px-10 md:py-24 border-t border-line">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">
                Spis
              </p>
              <ol className="space-y-2 text-sm text-ink-mute">
                {p.body.map((_, i) => (
                  <li key={i}>{String(i + 1).padStart(2, "0")} —</li>
                ))}
              </ol>
            </aside>
            <div className="md:col-span-8 md:col-start-4 prose-bound space-y-6 text-ink leading-relaxed text-lg">
              {p.body.map((para, i) => (
                <p key={i}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {renderInlineLinks(para)}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.faq && p.faq.length > 0 && (
        <section
          id="faq"
          className="px-6 py-20 md:px-10 md:py-28 border-t border-line scroll-mt-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="eyebrow mb-4">FAQ</p>
              <h2
                className="font-display italic text-ink"
                style={{
                  fontSize: "clamp(1.75rem, 1rem + 2vw, 3rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Najczęstsze <em>pytania</em>.
              </h2>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <dl className="divide-y divide-line border-y border-line">
                {p.faq.map((f, i) => (
                  <div key={i} className="py-6 group">
                    <dt
                      className="font-display text-ink mb-2"
                      style={{
                        fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.4rem)",
                        lineHeight: 1.3,
                      }}
                    >
                      {f.q}
                    </dt>
                    <dd className="text-ink-mute leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="px-6 py-20 md:px-10 md:py-28 border-t border-line">
          <p className="eyebrow mb-8">Powiązane usługi</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map(
              (s) =>
                s && (
                  <li key={s.slug}>
                    <Link
                      href={`/uslugi/${s.slug}`}
                      className="group block border border-line p-6 hover:border-peach transition-colors h-full"
                      data-cursor="ZOBACZ"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-3">
                        Usługa
                      </p>
                      <p
                        className="font-display italic text-ink group-hover:text-peach transition-colors"
                        style={{
                          fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.5rem)",
                          lineHeight: 1.2,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {s.title}
                      </p>
                      <p className="mt-4 text-sm text-ink-mute leading-relaxed line-clamp-3">
                        {s.lead}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink group-hover:text-peach transition-colors">
                        Zobacz
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </section>
      )}

      <section className="px-6 py-24 md:px-10 md:py-32 border-t border-line text-center">
        <p className="eyebrow mb-6">Pogadajmy</p>
        <h2 className="display text-h1 text-ink mb-10">
          Masz pytanie? <em>Napisz</em>.
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

      <nav className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        <Link
          href={`/blog/${prev.slug}`}
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
            {prev.title}
          </p>
        </Link>
        <Link
          href={`/blog/${next.slug}`}
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
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <Script
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </article>
  );
}
