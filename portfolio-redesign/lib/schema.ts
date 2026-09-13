export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Marcin Siwonia",
  url: SITE_URL,
};

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Marcin Siwonia",
  url: SITE_URL,
  image: `${SITE_URL}/avatar.png`,
  email: "mailto:marcin.siwonia.firma@gmail.com",
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
    occupationLocation: { "@type": "City", name: "Wrocław" },
    skills: "Next.js, React, TypeScript, Tailwind, Node.js, AI integration, WordPress",
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
    "https://www.linkedin.com/in/marcinsiwonia",
    "https://seomantyczny.pl",
  ],
};

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
