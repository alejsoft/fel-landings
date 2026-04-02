import type { Metadata } from "next";
import { config } from "@/config";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: `RPA vs Integración Directa | ${config.product}`,
  description:
    "¿RPA o integración directa para automatizar facturas de compras? HaaB ofrece integración API Gateway y conexión peer-to-peer. Más rápido, confiable y económico que RPA.",
  keywords: [
    "RPA Guatemala",
    "automatización facturas Guatemala",
    "RPA vs API",
    "alternativa RPA",
    "integración directa SAT GT",
    "automatización sin RPA",
    "RPA vs integración API",
  ],
  alternates: {
    canonical: `https://${config.domain}/rpa-vs-integracion`,
  },
  openGraph: {
    type: "article",
    locale: "es_GT",
    url: `https://${config.domain}/rpa-vs-integracion`,
    siteName: "HaaB Technologies, S.A.",
    title: `RPA vs Integración Directa | ${config.product}`,
    description:
      "¿RPA o integración directa? HaaB ofrece integración API Gateway y conexión peer-to-peer. Más rápido, confiable y económico que RPA.",
  },
};

const comparisonRows = [
  {
    feature: "Velocidad",
    rpa: "Lento (simula clics)",
    api: "Instantáneo vía API",
  },
  {
    feature: "Mantenimiento",
    rpa: "Alto (cada cambio UI)",
    api: "Mínimo (APIs estables)",
  },
  {
    feature: "Confiabilidad",
    rpa: "Media (se rompe fácil)",
    api: "99.9% uptime AWS",
  },
  {
    feature: "Costo licencias",
    rpa: "$500–2,000/mes por bot",
    api: "Incluido en solución",
  },
  {
    feature: "Tiempo implementación",
    rpa: "3–6 meses",
    api: "2–4 semanas",
  },
  {
    feature: "Escalabilidad",
    rpa: "Limitada (más bots = más costo)",
    api: "Ilimitada (cloud AWS)",
  },
  {
    feature: "Errores",
    rpa: "5–15% tasa de error",
    api: "0% (validación automática)",
  },
  {
    feature: "Conexión SAT",
    rpa: "Indirecta (scraping web)",
    api: "Push directo desde SAT",
  },
  {
    feature: "Conexión ERP",
    rpa: "Simula interfaz gráfica",
    api: "API nativa del ERP",
  },
];

export default function RPAvsIntegracion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `RPA vs Integración Directa para Automatización de Facturas | ${config.product}`,
    description: metadata.description,
    datePublished: "2025-01-15T08:00:00-06:00",
    dateModified: "2026-04-01T08:00:00-06:00",
    author: {
      "@type": "Organization",
      name: "HaaB Technologies, S.A.",
      url: `https://${config.domain}`,
    },
    publisher: {
      "@type": "Organization",
      name: "HaaB Technologies, S.A.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${config.domain}/rpa-vs-integracion`,
    },
    inLanguage: "es-GT",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-surface pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              Comparativa
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight max-w-4xl mb-6 leading-[0.95]">
            RPA vs Integración{" "}
            <span className="text-accent">Directa</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            ¿Buscas automatizar el registro de facturas de compras?
            HaaB ofrece integración API Gateway y conexión peer-to-peer —
            sin bots, sin RPA, sin simulación de clics.
          </p>
        </div>
      </section>

      <div className="border-t border-border-subtle" />

      {/* El problema con RPA */}
      <section className="py-16 sm:py-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              El problema
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight max-w-3xl mb-10 sm:mb-16">
            El problema con RPA tradicional
          </h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              <strong className="text-foreground">
                RPA (Robotic Process Automation)
              </strong>{" "}
              simula acciones humanas: hacer clic, copiar, pegar, llenar
              formularios. Suena conveniente, pero tiene limitaciones
              importantes para la automatización de facturas de compras:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Se rompe cuando cambia la interfaz del sistema",
                "Requiere mantenimiento constante",
                "Lento comparado con integración directa",
                "Costos de licencias elevados",
                "No funciona si el sistema está caído",
                "Difícil de escalar",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border-subtle bg-surface p-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-16 sm:py-24 border-t border-border-subtle bg-surface">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              Comparativa
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight max-w-3xl mb-10 sm:mb-16">
            RPA vs Integración Directa
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border-subtle">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b border-border-subtle bg-surface-alt">
                  <th className="p-4 text-left text-xs tracking-widest uppercase text-muted">
                    Característica
                  </th>
                  <th className="p-4 text-left text-xs tracking-widest uppercase text-red-500">
                    RPA Tradicional
                  </th>
                  <th className="p-4 text-left text-xs tracking-widest uppercase text-accent">
                    HaaB Integración
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border-subtle ${i % 2 === 0 ? "bg-surface" : ""}`}
                  >
                    <td className="p-4 font-medium text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 text-muted text-sm">{row.rpa}</td>
                    <td className="p-4 text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {row.api}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nuestra solución */}
      <section className="py-16 sm:py-24 border-t border-border-subtle px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              Solución
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight max-w-3xl mb-10 sm:mb-16">
            Integración directa, no RPA
          </h2>
          <div className="max-w-4xl space-y-8">
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
              En HaaB Technologies{" "}
              <strong className="text-foreground">no usamos RPA</strong>.
              Nuestra solución se conecta directamente con la SAT de Guatemala
              y con tu ERP — {config.erp} — mediante API nativa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-accent/20 bg-surface p-6 sm:p-8">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs text-accent font-medium">
                    Modalidad 1
                  </span>
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  API Gateway
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Tu ERP se conecta a nuestra API Gateway en AWS. Los DTEs
                  recibidos de la SAT se procesan en la nube y se envían a tu
                  sistema vía REST API.
                </p>
                <ul className="space-y-2">
                  {[
                    "ERP en la nube o con acceso a internet",
                    "Sin exponer puertos de tu servidor",
                    "Tu ERP consume la API de HaaB",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-green-500/20 bg-surface p-6 sm:p-8">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-green-500 font-medium">
                    Modalidad 2
                  </span>
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  Conexión peer-to-peer
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Nuestra webapp se conecta directamente a los servidores de tu
                  tenant. Los DTEs se registran peer-to-peer sin intermediarios.
                </p>
                <ul className="space-y-2">
                  {[
                    "Conexión directa webapp → servidor del tenant",
                    "Sin pasar por API Gateway intermedia",
                    "Ideal para ERPs on-premise o redes privadas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Conexión directa con SAT",
                  desc: "No simulamos navegación, nos comunicamos directamente con los sistemas oficiales.",
                },
                {
                  title: "Sincronización en tiempo real",
                  desc: "Procesamiento instantáneo de facturas, sin esperas ni colas.",
                },
                {
                  title: "Cero mantenimiento por cambios UI",
                  desc: "Las APIs no cambian como las interfaces gráficas.",
                },
                {
                  title: "Validación automática",
                  desc: "Cada factura se valida contra SAT antes de procesar.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border-subtle bg-surface p-5 sm:p-8"
                >
                  <h3 className="text-sm font-semibold mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Caso de uso */}
      <section className="py-16 sm:py-24 border-t border-border-subtle bg-surface px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-xs tracking-widest uppercase text-muted">
              Caso de uso
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight max-w-3xl mb-10 sm:mb-16">
            500 facturas al mes: RPA vs HaaB
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="rounded-lg border border-red-500/20 bg-background p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-xs text-red-500 font-medium">RPA</span>
              </span>
              <ul className="space-y-3">
                {[
                  "Bot abre navegador",
                  "Bot hace login (puede fallar)",
                  "Bot busca factura (puede no encontrarla)",
                  "Bot copia datos campo por campo",
                  "Bot pega en ERP (puede pegar mal)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border-subtle space-y-1">
                <p className="text-sm">
                  Tiempo: <span className="text-red-500">2–3 min/factura</span>
                </p>
                <p className="text-sm">
                  Errores: <span className="text-red-500">5–10%</span>
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-green-500/20 bg-background p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs text-green-500 font-medium">
                  HaaB Integración API
                </span>
              </span>
              <ul className="space-y-3">
                {[
                  "API recibe DTE desde SAT automáticamente",
                  "Extrae XML directamente",
                  "Valida información contra SAT",
                  "Sincroniza con ERP vía API",
                  "Registro completo en tu ERP",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border-subtle space-y-1">
                <p className="text-sm">
                  Tiempo: <span className="text-green-500">2–3 seg/factura</span>
                </p>
                <p className="text-sm">
                  Errores: <span className="text-green-500">0%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-border-subtle px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">
            Automatiza sin RPA
          </h2>
          <p className="text-muted text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
            Elimina 100% la digitación manual con integración directa API.
            Implementación en 2–4 semanas, sin cambiar tu {config.erp} actual.
          </p>
          <WhatsAppLink className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity">
            Solicitar Demo
            <svg
              width="16"
              height="16"
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
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
