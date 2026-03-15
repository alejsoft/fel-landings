import type { Article } from "../types";

export const article: Article = {
  slug: "automatizar-facturas-proveedor-sap",
  product: "fel2sap",
  title: "Cómo automatizar facturas de proveedor en SAP desde la SAT Guatemala",
  description:
    "Guía técnica de cómo funciona la automatización de A/P Invoices en SAP Business One y S/4HANA conectando directamente con la SAT de Guatemala.",
  keywords: [
    "automatizar A/P Invoice SAP",
    "integración SAT SAP Business One Guatemala",
    "factura proveedor automática SAP",
    "DI API SAP facturas compra",
  ],
  publishedDate: "2026-03-14",
  sections: [
    {
      heading: "El flujo actual: SAT → Excel → SAP",
      body: `El flujo manual en empresas con SAP en Guatemala:

1. Descargar XML del portal SAT (uno por uno o en lote)
2. Abrir cada XML, extraer datos en Excel o a mano
3. En SAP: Gestión de compras → Factura de proveedores
4. Buscar Business Partner, agregar líneas, mapear artículos, asignar Tax Code
5. Verificar distribución contable y guardar

Con pocas facturas funciona. Cuando el volumen crece, el equipo contable se convierte en un equipo de digitación.`,
    },
    {
      heading: "El flujo automatizado: SAT → HaaB → SAP",
      body: `Con Fel2SAP:

1. Tu proveedor emite factura electrónica a tu NIT
2. HaaB recibe el DTE en tiempo real desde la SAT
3. HaaB valida el XML, extrae datos y mapea según tu configuración en SAP
4. Se crea la A/P Invoice automáticamente

Sin portal SAT. Sin Excel. Sin digitación. El registro ocurre en minutos, no en horas.`,
    },
    {
      heading: "Qué se registra automáticamente",
      body: `Cada A/P Invoice creada incluye:

- Business Partner mapeado desde NIT del proveedor (se crea si no existe)
- Document Number con referencia al DTE de la SAT
- Posting Date y Document Date
- Líneas con Item Code mapeado según tu Item Master
- Tax Code correcto para Guatemala (IVA)
- Distribución por centro de costo según reglas configuradas
- Retenciones aplicadas cuando corresponde

La factura queda lista para aprobación. Tu equipo revisa, no digita.`,
    },
    {
      heading: "Conexión técnica: DI API y Service Layer",
      body: `Fel2SAP se conecta a SAP mediante la DI API (SAP Business One) o Service Layer (S/4HANA). No modificamos tu base de datos, no instalamos add-ons.

La integración es desde nuestra infraestructura en AWS hacia tu instancia de SAP. Compatible con SAP Business One v9.3, v10, HANA y SAP S/4HANA.`,
    },
    {
      heading: "Resultado medible",
      body: `Empresas que implementan Fel2SAP eliminan el 100% de la digitación manual de facturas de compra. Los errores de captura desaparecen, los cierres se adelantan y el libro de compras siempre está al día.

El mapeo de artículos y la distribución contable se configuran una vez. Cada factura futura se procesa automáticamente. Implementación en 4 a 8 semanas.`,
    },
  ],
};
