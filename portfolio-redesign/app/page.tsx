import { Hero } from "@/components/home/Hero";
import { ProjectsCabinet } from "@/components/home/ProjectsCabinet";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TechStack } from "@/components/home/TechStack";
import { AboutTease } from "@/components/home/AboutTease";
import { jsonLd, PERSON_ID, personSchema, SITE_URL, WEBSITE_ID } from "@/lib/schema";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Marcin Siwonia",
    alternateName: "Marcin Siwonia — Web Developer Wrocław",
    url: SITE_URL,
    inLanguage: "pl-PL",
    publisher: { "@id": PERSON_ID },
  };

  return (
    <>
      <Hero />
      <ProjectsCabinet />
      <ServicesPreview />
      <TechStack />
      <AboutTease />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", ...personSchema }) }}
      />
    </>
  );
}
