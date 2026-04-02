import type { ProductConfig } from "./types";

export const config: ProductConfig = {
  product: "Fel2SAP",
  domain: "fel2sap.com",
  erp: "SAP",
  accentColor: "#2563eb",
  accentColorDark: "#60a5fa",
  ogImage: "/og-fel2sap.png",
  hero: {
    headline: "Tus facturas de compras de proveedores SAT\u00a0GT,",
    highlight: "directo en SAP.",
    subhead:
      "Conexión directa SAT Guatemala → SAP Business One, S/4HANA y ECC. Automático, en tiempo real, sin digitar.",
  },
  problems: [
    {
      title: "Descarga manual de XML",
      desc: "Tu equipo descarga uno por uno los XML del portal SAT, abre cada archivo y transcribe los datos a SAP.",
    },
    {
      title: "Errores en cada registro",
      desc: "NIT incorrecto, IVA mal calculado, retenciones omitidas. Cada factura digitada es una oportunidad de error.",
    },
    {
      title: "Cierre mensual atrasado",
      desc: "Cientos de facturas de compras pendientes de registro al final del mes. El cierre contable se retrasa semana tras semana.",
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
      title: "Registra en SAP",
      desc: "Factura de proveedor creada automáticamente en SAP con líneas, IVA, retenciones y refs.",
    },
  ],
  compatibility: [
    { version: "SAP Business One 9.3", detail: "DI API · Service Layer" },
    { version: "SAP Business One 10.0", detail: "DI API · Service Layer" },
    { version: "SAP Business One HANA", detail: "DI API · Service Layer" },
    { version: "SAP S/4HANA", detail: "OData APIs" },
    { version: "SAP ECC", detail: "RFC · BAPI" },
  ],
  bigNumbers: [
    { number: "0", label: "facturas digitadas manualmente" },
    { number: "4–8", label: "semanas de implementación" },
  ],
  cta: {
    headline: "¿Usas SAP en Guatemala?",
    subhead:
      "Eliminamos la digitación manual de facturas de compras de proveedores. Implementación en semanas, no meses.",
    whatsappMessage:
      "Hola, uso SAP y me interesa automatizar las facturas de compra de la SAT.",
  },
  seo: {
    title: "Facturas de Compras SAT → SAP Automático | Fel2SAP",
    description:
      "Automatiza el registro de facturas de compra de la SAT Guatemala en SAP Business One, S/4HANA y ECC. Cero digitación manual, cero errores. Implementación en 4-8 semanas.",
    keywords: [
      "integración SAT SAP Guatemala",
      "automatizar facturas de compras SAP",
      "FEL2SAP",
      "DTE SAP Business One",
      "factura electrónica SAP Guatemala",
      "SAT Guatemala SAP",
      "automatización contable SAP",
    ],
  },
  schema: {
    featureList: [
      "Recepción automática de DTEs desde SAT Guatemala",
      "Compatible con SAP Business One, S/4HANA y ECC",
      "Facturas de compras de proveedor con líneas de detalle e IVA",
      "Notas de crédito y débito automáticas",
      "Validación de NIT contra SAT",
      "Infraestructura AWS",
    ],
  },
  faq: [
    {
      q: "¿Necesito modificar mi SAP?",
      a: "No. Nos conectamos a SAP desde nuestra infraestructura AWS sin modificar tu instalación.",
    },
    {
      q: "¿Qué versiones de SAP soportan?",
      a: "SAP Business One (v9.3, v10, HANA), SAP S/4HANA y SAP ECC.",
    },
    {
      q: "¿Cuánto tiempo toma implementarlo?",
      a: "Entre 4 y 8 semanas dependiendo de la versión de SAP y la complejidad del mapeo contable.",
    },
  ],
};
