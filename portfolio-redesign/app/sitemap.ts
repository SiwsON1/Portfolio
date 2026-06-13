import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { url: SITE_URL, priority: 1.0 },
    { url: `${SITE_URL}/projekty`, priority: 0.9 },
    { url: `${SITE_URL}/uslugi`, priority: 0.9 },
    { url: `${SITE_URL}/blog`, priority: 0.85 },
    { url: `${SITE_URL}/o-mnie`, priority: 0.7 },
    { url: `${SITE_URL}/kontakt`, priority: 0.7 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/uslugi/${s.slug}`,
    priority: 0.85,
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projekty/${p.slug}`,
    priority: 0.7,
  }));
  const postRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes].map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
