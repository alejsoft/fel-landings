import type { ProductConfig } from "./types";

export const config: ProductConfig = {
  product: "Fel2GP",
  domain: "fel2gp.com",
  erp: "Dynamics GP",
  accentColor: "#38bdf8",
  ogImage: "/og-fel2gp.png",
  hero: {
    headline: "Tus facturas de proveedores SAT\u00a0GT,",
    highlight: "directo en Dynamics GP.",
    subhead:
      "Conexión directa SAT Guatemala → Microsoft Dynamics GP vía eConnect. Automático, en tiempo real.",
  },
  problems: [
    {
      title: "Descarga manual de XML",
      desc: "Tu equipo descarga uno por uno los XML del portal SAT y crea Payables Transactions manualmente en GP.",
    },
    {
      title: "GL Distribution a mano",
      desc: "Configurar distribución contable, retenciones y batch processing factura por factura. Lento y con errores.",
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
      title: "Registra en GP",
      desc: "Payables Transaction creada automáticamente en Dynamics GP con líneas, IVA y GL Distribution.",
    },
  ],
  compatibility: [
    { version: "Dynamics GP 2016", detail: "eConnect · Web Services" },
    { version: "Dynamics GP 2018", detail: "eConnect · Web Services" },
    { version: "Dynamics GP 18.x", detail: "eConnect · Web Services" },
  ],
  bigNumbers: [
    { number: "0", label: "facturas de comprasdigitadas manualmente" },
    { number: "4–8", label: "semanas de implementación" },
  ],
  cta: {
    headline: "¿Usas Dynamics GP en Guatemala?",
    subhead:
      "Eliminamos la digitación manual de facturas de proveedores. Payables automáticos desde la SAT.",
    whatsappMessage:
      "Hola, uso Dynamics GP y me interesa automatizar las facturas de compra de la SAT.",
  },
  seo: {
    title: "Facturas SAT → Dynamics GP Automático | Fel2GP",
    description:
      "Automatiza el registro de facturas de compra de la SAT Guatemala en Microsoft Dynamics GP vía eConnect. Compatible con GP 2016 y 2018. Cero digitación.",
    keywords: [
      "integración SAT Dynamics GP Guatemala",
      "automatizar facturas de compras Dynamics GP",
      "FEL2GP",
      "Payables Transaction automático",
      "factura electrónica Dynamics GP Guatemala",
      "SAT Guatemala Dynamics GP",
      "automatización contable Dynamics GP",
    ],
  },
  schema: {
    featureList: [
      "Recepción automática de DTEs desde SAT Guatemala",
      "Compatible con Dynamics GP 2016, 2018 y 18.x",
      "Payables Transaction automático",
      "Vendor Maintenance sincronizado",
      "GL Distribution automática",
      "Batch Processing",
      "Infraestructura AWS",
    ],
  },
  faq: [
    {
      q: "¿Necesito modificar mi Dynamics GP?",
      a: "No. Nos conectamos a GP mediante eConnect desde nuestra infraestructura AWS, sin modificar tu servidor SQL ni tu instalación.",
    },
    {
      q: "¿Qué versiones de GP soportan?",
      a: "Dynamics GP 2016, 2018 y 18.x.",
    },
    {
      q: "¿Cuánto tiempo toma implementarlo?",
      a: "Entre 4 y 8 semanas dependiendo de la configuración de eConnect en tu ambiente.",
    },
  ],
};
