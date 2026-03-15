import type { Article } from "../types";

export const article: Article = {
  slug: "automatizar-vendor-bills-odoo",
  product: "fel2odoo",
  title: "Cómo automatizar Vendor Bills en Odoo desde la SAT Guatemala",
  description:
    "Guía técnica de cómo funciona la automatización de Vendor Bills en Odoo conectando directamente con la SAT de Guatemala vía API.",
  keywords: [
    "automatizar Vendor Bills Odoo",
    "API Odoo facturas SAT Guatemala",
    "integración SAT Odoo",
    "registro automático compras Odoo",
  ],
  publishedDate: "2026-03-14",
  sections: [
    {
      heading: "El flujo actual: SAT → Excel → Odoo",
      body: `El flujo típico en empresas guatemaltecas con Odoo:

1. Entrar al portal SAT y descargar XML de facturas recibidas
2. Abrir cada XML, extraer datos relevantes
3. En Odoo: Contabilidad → Vendor Bills → Crear
4. Buscar proveedor, agregar líneas de producto, asignar impuestos
5. Confirmar y repetir

Con 10 facturas al mes es manejable. Con 100 o más, el equipo contable vive digitando en vez de analizando.`,
    },
    {
      heading: "El flujo automatizado: SAT → HaaB → Odoo",
      body: `Con Fel2Odoo:

1. Tu proveedor emite una factura electrónica a tu NIT
2. HaaB recibe el DTE directamente de la SAT en tiempo real
3. HaaB valida, extrae datos y mapea productos según tu configuración
4. Se crea el Vendor Bill en Odoo automáticamente vía API

Sin portal SAT. Sin Excel. Sin digitación.`,
    },
    {
      heading: "Qué se registra automáticamente",
      body: `Cada Vendor Bill creado incluye:

- Proveedor mapeado desde NIT (se crea automáticamente si es nuevo)
- Referencia con número de autorización SAT
- Fecha de factura y fecha contable
- Líneas de producto con mapeo configurable
- Impuestos (IVA) aplicados correctamente
- Cuenta analítica asignada según reglas
- Soporte multi-company si tienes varias empresas en Odoo

El bill queda en estado borrador para que tu equipo revise antes de confirmar.`,
    },
    {
      heading: "Conexión técnica: API de Odoo",
      body: `Fel2Odoo se conecta a tu instancia de Odoo mediante la API XML-RPC o JSON-RPC. No instalamos módulos, no modificamos tu Odoo.

La conexión es desde nuestra infraestructura en AWS. Compatible con Odoo v15, v16, v17 y v18, tanto Community como Enterprise.`,
    },
    {
      heading: "Resultado medible",
      body: `Empresas que implementan Fel2Odoo eliminan la digitación manual de facturas de compra por completo. Los cierres contables se adelantan, los errores de captura desaparecen.

El mapeo de productos se configura una vez y se aplica automáticamente a cada factura futura. Implementación en 4 a 8 semanas.`,
    },
  ],
};
