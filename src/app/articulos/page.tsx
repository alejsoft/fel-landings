import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Artículos | ${config.product}`,
  description: `Guías y artículos sobre automatización de registro de compras en ${config.erp} desde la SAT Guatemala.`,
  alternates: {
    canonical: `https://${config.domain}/articulos`,
  },
};

export default function ArticulosPage() {
  return (
    <main className="pt-24 pb-20 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-muted mb-4">
          {config.product}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          Artículos
        </h1>

        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articulos/${article.slug}`}
              className="block group"
            >
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
