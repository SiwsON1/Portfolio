import { Hero } from "@/components/home/Hero";
import { ProjectsCabinet } from "@/components/home/ProjectsCabinet";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutTease } from "@/components/home/AboutTease";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcinsiwonia.pl";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Marcin Siwonia",
    alternateName: "Marcin Siwonia — Web Developer Wrocław",
    url: SITE_URL,
    inLanguage: "pl-PL",
    publisher: {
      "@type": "Person",
      name: "Marcin Siwonia",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcin Siwonia",
    url: SITE_URL,
    image: `${SITE_URL}/avatar.png`,
    email: "mailto:mahinek12@gmail.com",
    jobTitle: "Web Developer",
    description:
      "Freelancer i programista Next.js z Wrocławia. Tworzenie stron www, aplikacje React, wdrożenia AI. Sześć lat doświadczenia, ponad 30 wdrożeń komercyjnych dla klientów w Polsce i Niemczech.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wrocław",
      addressRegion: "Dolnośląskie",
      addressCountry: "PL",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer",
      occupationLocation: {
        "@type": "City",
        name: "Wrocław",
      },
      skills:
        "Next.js, React, TypeScript, Tailwind, Node.js, AI integration, WordPress",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "AI integration",
      "WordPress",
      "Wdrożenia AI",
      "Tworzenie stron www",
    ],
    sameAs: [
      "https://github.com/SiwsON1",
      "https://seomantyczny.pl",
    ],
  };

  return (
    <>
      <Hero />
      <ProjectsCabinet />
      <ServicesPreview />
      <AboutTease />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
