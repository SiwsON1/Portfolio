import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marcinsiwonia.pl";

export default function robots(): MetadataRoute.Robots {
  return {
    // /lab to warianty projektowe, nie treść dla odwiedzających.
    rules: { userAgent: "*", allow: "/", disallow: "/lab" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
