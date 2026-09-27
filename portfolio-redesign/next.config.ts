import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Płynne przejścia między stronami (React <ViewTransition>): karta realizacji przechodzi w nagłówek jej strony.
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/tworzenie-stron-nextjs-wroclaw-2026",
        destination: "/uslugi/aplikacje-nextjs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
