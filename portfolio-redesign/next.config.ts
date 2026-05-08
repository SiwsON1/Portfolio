import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
