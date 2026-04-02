import type { Article } from "../types";

export const article: Article = {
  slug: "software-recepcion-facturas-compras",
  product: "fel2sap",
  title: "Software de recepción de facturas de compras",
  description:
    "Software de recepción de facturas de compras con facturación electrónica FEL. Sin OCR, sin escaneo — directo del XML de la SAT a tu ERP. Registro automático en SAP, Dynamics GP, Odoo o Exactus.",
  keywords: [
    "software recepción facturas de compras",
    "recepción automática facturas compras FEL",
    "software facturas compras SAT",
    "automatizar recepción facturas compras",
    "recepción facturas proveedores ERP",
    "software cuentas por pagar facturas compras",
    "recepción DTE automática",
  ],
  publishedDate: "2026-04-01",
  sections: [
    {
      heading: "Por qué no necesitás OCR ni IA para recibir facturas de compras",
      body: `La mayoría de software de recepción de facturas fue diseñado para un mundo de papel: escanear, aplicar OCR, extraer datos con inteligencia artificial. Pero en un sistema de facturación electrónica como FEL, las facturas de compras ya nacen como XML estructurado. El problema real no es leer la factura — es llevarla de la SAT a tu ERP sin intervención manual.`,
    },
    {
      heading: "Software diseñado para papel, aplicado a lo digital",
      body: `Los software de recepción de facturas más conocidos fueron construidos para mercados donde las facturas llegan en papel, por correo electrónico como PDF, o desde portales de proveedores. Su flujo es:

1. Recibir el documento — desde múltiples canales: email, papel escaneado, portales web, servicios en la nube.
2. Digitalizar con OCR — convertir la imagen o PDF a texto legible mediante reconocimiento óptico de caracteres.
3. Extraer datos con IA — modelos de machine learning identifican campos: fecha, monto, IVA, proveedor, número de factura.
4. Validar y corregir — un humano revisa lo que la IA extrajo, corrige errores y aprueba.
5. Enviar al ERP — los datos validados se transfieren al sistema contable.`,
    },
    {
      heading: "Ese flujo no aplica a facturas de compras FEL",
      body: `Con facturación electrónica FEL, cada factura de compra que emite un proveedor es certificada por la SAT y existe como un DTE (Documento Tributario Electrónico) en formato XML. Ese XML ya contiene todos los datos estructurados:

- NIT del emisor y receptor, nombre, dirección — ya están en el XML.
- Cada línea de detalle con descripción, cantidad, precio unitario y descuentos — ya están en el XML.
- IVA desglosado, totales, moneda y tipo de cambio — ya están en el XML.
- Número de autorización, serie, fecha de emisión y certificación — ya están en el XML.`,
    },
    {
      heading: "¿Para qué OCR si ya tenés XML?",
      body: `Aplicar OCR o inteligencia artificial a una factura de compras FEL es como escanear un Excel impreso para volver a pasarlo a Excel. Los datos ya están ahí, estructurados, validados por la SAT y firmados digitalmente.

El cuello de botella no es extraer datos de la factura. El cuello de botella es que alguien tiene que descargar ese XML del portal SAT, abrirlo, interpretar las líneas, abrir el ERP, buscar al proveedor, crear el documento de compra, transcribir cada línea y verificar que los totales cuadren. Ese proceso manual toma 12-20 minutos por factura.

- Tiempo manual por factura: 12-20 min
- Tasa de error por digitación: 3-8%
- Datos ya disponibles en el XML: 100%
- OCR necesario: 0%`,
    },
    {
      heading: "Recepción directa: de la SAT a tu ERP",
      body: `HaaB no escanea, no aplica OCR y no usa IA para adivinar qué dice una factura de compras. En su lugar, recibe el DTE directamente desde la SAT como XML estructurado y lo registra en tu ERP en segundos.

1. El proveedor emite la factura — el certificador (INFILE, DIGIFACT, etc.) certifica el DTE ante la SAT. El XML queda disponible.
2. HaaB recibe el DTE — en tiempo real, sin entrar al portal, sin descargar archivos, sin polling.
3. Procesamiento del XML — se extraen líneas de detalle, impuestos, datos del proveedor y referencias fiscales directamente del XML — sin interpretación, sin IA.
4. Registro automático en el ERP — el documento de compra se crea en tu ERP con todas sus líneas, impuestos, cuenta contable y referencia al DTE original.
5. Archivo en la nube — XML y PDF quedan almacenados en AWS, indexados por NIT, fecha, monto y número de autorización.`,
    },
    {
      heading: "Software genérico vs. recepción directa",
      body: `- Software genérico: recibe facturas por email, papel y portales. HaaB: recibe el DTE directo de la SAT como XML.
- Software genérico: usa OCR + IA para extraer datos. HaaB: lee el XML que ya tiene todos los datos estructurados.
- Software genérico: requiere revisión humana de lo extraído. HaaB: los datos vienen validados por la SAT — no hay que adivinar.
- Software genérico: compatible con "250+ ERPs" sin profundidad. HaaB: integración específica con SAP, Dynamics GP, Odoo y Exactus vía API nativa.
- Software genérico: licencia mensual por usuario. HaaB: precio por volumen de documentos procesados.`,
    },
    {
      heading: "ERPs con recepción automática de facturas de compras",
      body: `HaaB se conecta con tu ERP vía API nativa. La factura de compras se registra como documento contable completo, no como datos sueltos que alguien tiene que armar.

- SAP — Business One y S/4HANA. Factura de proveedor automática vía Service Layer y DI API.
- Dynamics GP — GP 2016 y 2018. Payables Transaction Entry vía eConnect y Web Services.
- Odoo — v15 a v18. Vendor Bill completo vía XML-RPC con líneas, impuestos y diario contable.
- Exactus — Softland ERP. Documentos de compra y distribución contable.
- Cualquier ERP — Si tiene API o Web Services, HaaB se conecta.`,
    },
  ],
};
