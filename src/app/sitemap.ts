import type { MetadataRoute } from "next";
import { config } from "@/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${config.domain}`,
      lastModified: new Date("2026-03-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
