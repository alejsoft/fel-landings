import type { Article } from "./types";

import { articles as fel2gpArticles } from "./fel2gp";
import { articles as fel2odooArticles } from "./fel2odoo";
import { articles as fel2sapArticles } from "./fel2sap";

const allArticles: Record<string, Article[]> = {
  fel2gp: fel2gpArticles,
  fel2odoo: fel2odooArticles,
  fel2sap: fel2sapArticles,
};

const product = process.env.NEXT_PUBLIC_PRODUCT || "fel2sap";

export const articles = allArticles[product] || [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
