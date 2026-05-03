import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

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
    title: p.title,
    description: p.excerpt,
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    author: {
      "@type": "Person",
      name: "Marcin Siwonia",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Marcin Siwonia",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
    keywords: p.tags.join(", "),
  };

  return (
    <article className="relative">
      <header className="relative px-6 pt-40 pb-16 md:px-10 md:pt-56 md:pb-24 overflow-hidden">
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
            <p
              className="mt-10 max-w-3xl text-ink-mute"
              style={{ fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.4rem)", lineHeight: 1.55 }}
            >
              {p.excerpt}
            </p>
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
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

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
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}
