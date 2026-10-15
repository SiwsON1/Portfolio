import type { NextConfig } from "next";

// Wpisy wycofane z bloga: ta sama lista jest w REDIRECTED_POSTS w lib/posts.ts.
const redirectedPosts: Record<string, string> = {
  "pozycjonowanie-strony-uslugowej": "strona-firmowa-2026-jaka-technologia",
  "tailwind-css-co-to": "next-js-co-to-jest",
  "vercel-hosting-co-to": "hosting-strony-co-to-jest",
};

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["three", "@react-three/drei", "@react-three/fiber", "gsap"],
  },
  async redirects() {
    return [
      {
        source: "/blog/tworzenie-stron-nextjs-wroclaw-2026",
        destination: "/uslugi/aplikacje-nextjs",
        permanent: true,
      },
      ...Object.entries(redirectedPosts).map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
