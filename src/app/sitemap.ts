import type { MetadataRoute } from "next";
import { config } from "@/config";
import { articles } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${config.domain}`;

  return [
    {
      url: base,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/articulos`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...articles.map((article) => ({
      url: `${base}/articulos/${article.slug}`,
      lastModified: new Date(article.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
