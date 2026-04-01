import type { ProductConfig } from "./types";

export const config: ProductConfig = {
  product: "Fel2Odoo",
  domain: "fel2odoo.com",
  erp: "Odoo",
  accentColor: "#9333ea",
  ogImage: "/og-fel2odoo.png",
  hero: {
    headline: "Tus facturas  de compras de proveedores SAT\u00a0GT,",
    highlight: "directo en Odoo.",
    subhead:
      "Conexión directa SAT Guatemala → Odoo v15, v16, v17 y v18. Vendor Bills automáticos, en tiempo real.",
  },
  problems: [
    {
      title: "Descarga manual de XML",
      desc: "Tu equipo descarga uno por uno los XML del portal SAT y crea Vendor Bills manualmente en Odoo.",
    },
    {
      title: "Mapeo manual de productos",
      desc: "Asignar productos, cuentas analíticas y retenciones a mano en cada factura. Lento y propenso a errores.",
    },
    {
      title: "Cierre mensual atrasado",
      desc: "Cientos de facturas de compras pendientes de registro al final del mes. El cierre contable se retrasa.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "SAT emite DTE",
      desc: "Tu proveedor emite una factura electrónica a tu NIT. La SAT genera el DTE.",
    },
    {
      n: "02",
      title: "HaaB recibe",
      desc: "Recibimos el DTE en tiempo real vía push directo desde la SAT. Sin descargas.",
    },
    {
      n: "03",
      title: "Valida y extrae",
      desc: "Validamos el XML contra SAT, verificamos NIT y extraemos todos los datos contables.",
    },
    {
      n: "04",
      title: "Crea Vendor Bill",
      desc: "Vendor Bill creado automáticamente en Odoo con líneas de producto, IVA y cuentas analíticas.",
    },
  ],
  compatibility: [
    { version: "Odoo v15", detail: "XML-RPC · Community & Enterprise" },
    { version: "Odoo v16", detail: "XML-RPC · Community & Enterprise" },
    { version: "Odoo v17", detail: "JSON-RPC · Community & Enterprise" },
    { version: "Odoo v18", detail: "JSON-RPC · Community & Enterprise" },
  ],
  bigNumbers: [
    { number: "0", label: "facturas de compras digitadas manualmente" },
    { number: "4–8", label: "semanas de implementación" },
  ],
  cta: {
    headline: "¿Usas Odoo en Guatemala?",
    subhead:
      "Eliminamos la digitación manual de facturas de compras de proveedores. Vendor Bills automáticos desde la SAT.",
    whatsappMessage:
      "Hola, uso Odoo y me interesa automatizar las facturas de compra de la SAT.",
  },
  seo: {
    title: "Facturas de Compras SAT → Odoo Automático | Fel2Odoo",
    description:
      "Automatiza el registro de facturas de compras de la SAT Guatemala en Odoo. Compatible con v15, v16, v17 y v18. Vendor Bills automáticos, cero digitación.",
    keywords: [
      "integración SAT Odoo Guatemala",
      "automatizar facturas de compras Odoo",
      "FEL2ODOO",
      "Vendor Bill automático Odoo",
      "factura electrónica Odoo Guatemala",
      "SAT Guatemala Odoo",
      "automatización contable Odoo",
    ],
  },
  schema: {
    featureList: [
      "Recepción automática de DTEs desde SAT Guatemala",
      "Compatible con Odoo v15, v16, v17 y v18",
      "Vendor Bills con líneas de producto",
      "Product Mapping automático",
      "Analytic Accounts",
      "Soporte multi-company",
      "Infraestructura AWS",
    ],
  },
  faq: [
    {
      q: "¿Necesito instalar un módulo en Odoo?",
      a: "No. Nos conectamos a Odoo vía API desde nuestra infraestructura AWS, sin modificar tu instancia.",
    },
    {
      q: "¿Qué versiones de Odoo soportan?",
      a: "Odoo v15, v16, v17 y v18. Community y Enterprise.",
    },
    {
      q: "¿Cuánto tiempo toma implementarlo?",
      a: "Entre 4 y 8 semanas dependiendo de la versión y la complejidad del mapeo de productos.",
    },
  ],
};
