import type { Article } from "../types";

export const article: Article = {
  slug: "automatizar-payables-transactions-dynamics-gp",
  product: "fel2gp",
  title: "Cómo automatizar Payables Transactions en Dynamics GP desde la SAT Guatemala",
  description:
    "Guía técnica de cómo funciona la automatización de Payables Transactions en Microsoft Dynamics GP conectando directamente con la SAT de Guatemala vía eConnect.",
  keywords: [
    "automatizar Payables Transaction Dynamics GP",
    "eConnect facturas SAT Guatemala",
    "integración SAT Dynamics GP",
    "registro automático compras GP",
  ],
  publishedDate: "2026-03-14",
  sections: [
    {
      heading: "El flujo actual: SAT → Excel → GP",
      body: `Hoy, la mayoría de empresas en Guatemala que usan Dynamics GP siguen un flujo manual para registrar facturas de compra:

1. Entrar al portal de la SAT y descargar los XML de facturas recibidas
2. Abrir cada XML y extraer los datos en un Excel
3. Abrir Dynamics GP → Payables Transaction Entry
4. Digitar proveedor, monto, IVA, distribución contable
5. Guardar y pasar al siguiente

Este flujo tiene sentido cuando recibes 10 facturas al mes. Deja de tener sentido cuando recibes 100 o más.`,
    },
    {
      heading: "El flujo automatizado: SAT → HaaB → GP",
      body: `Con Fel2GP el flujo se reduce a:

1. Tu proveedor emite una factura electrónica a tu NIT
2. HaaB recibe el DTE en tiempo real directamente de la SAT
3. HaaB valida el XML, extrae los datos contables y mapea al catálogo de GP
4. Se crea la Payables Transaction automáticamente vía eConnect

No hay descarga manual. No hay digitación. No hay Excel intermedio.`,
    },
    {
      heading: "Qué se registra automáticamente",
      body: `Cada Payables Transaction creada incluye:

- Vendor ID mapeado desde el NIT del proveedor
- Document Number con el número de autorización SAT
- Document Date y GL Posting Date
- Líneas de detalle con montos, IVA desglosado
- GL Distribution completa según tu configuración contable
- Batch asignado para revisión antes del posting

Tu equipo contable revisa el batch y hace post. El registro ya está hecho.`,
    },
    {
      heading: "Conexión técnica: eConnect",
      body: `Fel2GP se conecta a Dynamics GP mediante eConnect, la API oficial de Microsoft para integración con GP. No modificamos tu base de datos SQL directamente, no instalamos software en tu servidor.

La conexión es desde nuestra infraestructura en AWS hacia tu instancia de GP. Compatible con Dynamics GP 2016, 2018 y 18.x.`,
    },
    {
      heading: "Resultado medible",
      body: `Empresas que implementan Fel2GP eliminan el 100% de la digitación manual de facturas de compra. El cierre mensual se adelanta entre 2 y 5 días. Los errores de digitación bajan a cero.

El tiempo de implementación es de 4 a 8 semanas dependiendo de la complejidad de tu configuración en GP.`,
    },
  ],
};
