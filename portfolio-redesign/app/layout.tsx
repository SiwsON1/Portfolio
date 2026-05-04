import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { LoadingIntro } from "@/components/providers/LoadingIntro";
import { ScrollProgress } from "@/components/providers/ScrollProgress";
import { PageTransition } from "@/components/providers/PageTransition";
import { CookieBanner } from "@/components/providers/CookieBanner";
import { Analytics } from "@/components/providers/Analytics";
import { Cursor } from "@/components/ui/Cursor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcinsiwonia.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Tworzenie stron www Wrocław — Marcin Siwonia, freelancer Next.js, React, WordPress",
    template: "%s — Marcin Siwonia",
  },
  description:
    "Niezależny web developer z Wrocławia. Tworzenie stron www, sklepów WooCommerce, aplikacji Next.js i React, wdrożenia AI, pozycjonowanie SEO. Ponad 30 wdrożeń komercyjnych dla klientów w Polsce i Niemczech od 2020 roku.",
  keywords: [
    "tworzenie stron www",
    "tworzenie stron WordPress",
    "sklepy internetowe WooCommerce",
    "programista Next.js",
    "programista React",
    "wdrożenia AI",
    "pozycjonowanie SEO Wrocław",
    "Marcin Siwonia",
    "freelancer Wrocław",
    "web developer Wrocław",
  ],
  authors: [{ name: "Marcin Siwonia" }],
  creator: "Marcin Siwonia",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Marcin Siwonia",
    title: "Marcin Siwonia. Strony www, Next.js, React, AI",
    description:
      "Niezależny web developer. Strony, aplikacje, AI, SEO. 30+ wdrożeń.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcin Siwonia",
    description:
      "Strony www, aplikacje Next.js i React, wdrożenia AI, pozycjonowanie SEO.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body>
        <SmoothScroll>
          <LoadingIntro />
          <ScrollProgress />
          <Cursor />
          <Nav />
          <main id="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CookieBanner />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
