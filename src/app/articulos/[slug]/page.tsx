// src/app/articulos/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticleBySlug } from "@/content";
import { config } from "@/config";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | ${config.product}`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `https://${config.domain}/articulos/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedDate,
      url: `https://${config.domain}/articulos/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "HaaB Technologies, S.A.",
      url: `https://${config.domain}`,
    },
  };

  return (
    <main className="pt-24 pb-20 px-6 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-3xl mx-auto">
        <p className="text-sm tracking-widest uppercase text-muted mb-4">
          {config.product}
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8 leading-tight">
          {article.title}
        </h1>
        <time className="text-sm text-muted" dateTime={article.publishedDate}>
          {new Date(article.publishedDate).toLocaleDateString("es-GT", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
              {section.body.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted leading-relaxed mb-4 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle">
          <a
            href={`https://wa.me/50259819812?text=${encodeURIComponent(config.cta.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-3 text-accent hover:opacity-70 transition-opacity text-lg font-medium"
          >
            Solicitar demo
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </article>
    </main>
  );
}
