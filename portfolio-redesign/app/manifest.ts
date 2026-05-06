import type { MetadataRoute } from "next";

/**
 * PWA manifest — Lighthouse PWA score, "Add to Home Screen" prompt, search engines
 * traktują strony z manifest jako bardziej ustrukturyzowane.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marcin Siwonia — Web Developer Wrocław",
    short_name: "MS Web Dev",
    description:
      "Tworzenie stron www, aplikacji Next.js i React, wdrożenia AI. Wrocław.",
    start_url: "/",
    display: "standalone",
    background_color: "#14131F",
    theme_color: "#14131F",
    orientation: "portrait-primary",
    lang: "pl-PL",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
