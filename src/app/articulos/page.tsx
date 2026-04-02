import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Artículos | ${config.product}`,
  description: `Guías sobre costos de digitación manual, errores frecuentes, cuentas por pagar y cómo automatizar el registro de facturas de compra de la SAT en tu ERP.`,
  alternates: {
    canonical: `https://${config.domain}/articulos`,
  },
};

export default function ArticulosPage() {
  const base = `https://${config.domain}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artículos — Automatización de facturas en Guatemala",
    description: metadata.description,
    url: `${base}/articulos`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/articulos/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {/* Hero */}
      <section className="bg-surface pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              Artículos
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight max-w-4xl mb-6 leading-[0.95]">
            Automatización de facturas en Guatemala
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Guías sobre costos de digitación manual, errores frecuentes,
            cuentas por pagar y cómo automatizar el registro de facturas de
            compra de la SAT en tu ERP.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border-subtle" />

      {/* Cards */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articulos/${article.slug}`}
                className="group rounded-lg border border-border-subtle bg-surface p-6 sm:p-8 hover:border-accent/30 transition-colors"
              >
                <span className="text-[0.65rem] sm:text-xs tracking-widest uppercase text-muted font-mono block mb-3">
                  {config.product}
                </span>
                <h2 className="text-lg font-semibold leading-snug group-hover:text-accent transition-colors mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
