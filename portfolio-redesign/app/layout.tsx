import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

// Fraunces przycięty lokalnie: waga 400 (jedyna renderowana w serwisie), WONK 0,
// zmienne osie opsz i SOFT zostają. Glify: Latin-1, Latin Extended-A, interpunkcja.
// 494 KB w 4 plikach z Google → 156 KB w 2. Szczegóły: plans/wydajnosc-2026-09-13.md
const display = localFont({
  variable: "--font-fraunces",
  src: [
    { path: "./fonts/fraunces-pl.woff2", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-italic-pl.woff2", weight: "400", style: "italic" },
  ],
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Freelancer Next.js Wrocław — Marcin Siwonia | aplikacje, AI",
    template: "%s — Marcin Siwonia",
  },
  description:
    "Niezależny freelancer Next.js i React z Wrocławia. Aplikacje, sklepy, wdrożenia AI, headless WordPress. Sześć lat, 30+ wdrożeń dla klientów PL i DE.",
  keywords: [
    "freelancer Next.js",
    "programista Next.js Wrocław",
    "freelancer React",
    "web developer Wrocław",
    "freelancer AI wdrożenia",
    "freelancer WordPress",
    "Marcin Siwonia",
  ],
  authors: [{ name: "Marcin Siwonia" }],
  creator: "Marcin Siwonia",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "Marcin Siwonia",
    title: "Freelancer Next.js Wrocław — Marcin Siwonia",
    description:
      "Aplikacje Next.js, sklepy, wdrożenia AI. 30+ wdrożeń dla PL i DE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Next.js Wrocław — Marcin Siwonia",
    description:
      "Aplikacje Next.js i React, wdrożenia AI, headless WordPress.",
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
  verification: {
    google: "yxSEQtN6nxaP86I2El8w4mYXyB3z55vUGUowZI9l6Dc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
      suppressHydrationWarning
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
