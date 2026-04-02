import type { MetadataRoute } from "next";
import { config } from "@/config";
import { articles } from "@/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${config.domain}`;
  const latestDate = articles.reduce(
    (max, a) => {
      const d = new Date(a.publishedDate);
      return d > max ? d : max;
    },
    new Date("2026-03-01"),
  );

  return [
    {
      url: base,
      lastModified: latestDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/articulos`,
      lastModified: latestDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/rpa-vs-integracion`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${base}/articulos/${article.slug}`,
      lastModified: new Date(article.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
