import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { industries } from "@/lib/industries";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/projekty`, priority: 0.9 },
    { url: `${SITE_URL}/uslugi`, priority: 0.9 },
    { url: `${SITE_URL}/branze`, priority: 0.85 },
    // Money page z routemapy. Wysoki priorytet, bo to strona transakcyjna z własną frazą.
    { url: `${SITE_URL}/audyt-wcag`, priority: 0.9 },
    { url: `${SITE_URL}/blog`, priority: 0.85 },
    { url: `${SITE_URL}/o-mnie`, priority: 0.7 },
    { url: `${SITE_URL}/kontakt`, priority: 0.7 },
    { url: `${SITE_URL}/polityka-prywatnosci`, priority: 0.2 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/uslugi/${s.slug}`,
    priority: 0.85,
  }));
  const industryRoutes = industries.map((i) => ({
    url: `${SITE_URL}/${i.slug}`,
    priority: 0.8,
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projekty/${p.slug}`,
    priority: 0.7,
  }));
  const postRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.date),
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...projectRoutes, ...postRoutes];
}
