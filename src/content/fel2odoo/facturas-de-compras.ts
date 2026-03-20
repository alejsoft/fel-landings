import type { Article } from "../types";

export const article: Article = {
  slug: "facturas-de-compras-que-son-tipos",
  product: "fel2odoo",
  title:
    "Facturas de compras: qué son, qué tipos existen y cómo gestionarlas",
  description:
    "Conoce qué es una factura de compra, los tipos que existen, qué información contienen y cómo gestionar su registro en tu empresa de forma eficiente.",
  keywords: [
    "facturas de compras",
    "tipos de facturas de compras",
    "qué es una factura de compra",
    "gestión de facturas de compra Guatemala",
    "factura electrónica de compras",
    "registro de facturas de compra",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué es una factura de compra?",
      body: `Una factura de compra es el documento comercial que respalda la adquisición de bienes o servicios por parte de tu empresa. Es emitida por el proveedor y registra oficialmente la transacción: qué se compró, cuánto costó, qué impuestos aplican y cuándo se debe pagar.

En Guatemala, las facturas de compra son Documentos Tributarios Electrónicos (DTE) emitidos a través del sistema de Factura Electrónica en Línea (FEL) de la SAT. Esto significa que cada factura que recibís de un proveedor tiene un XML certificado por la SAT que contiene todos los datos de la transacción.

Para tu empresa, las facturas de compra son la base del libro de compras, del crédito fiscal por IVA y del respaldo contable de cada gasto o adquisición.`,
    },
    {
      heading: "Tipos de facturas de compra",
      body: `No todas las facturas de compra son iguales. Dependiendo de la operación, podés recibir distintos tipos:

Facturas de proveedores: Son las más comunes. Documentan la compra de bienes o servicios a un proveedor local. Incluyen detalle de productos, precios unitarios, IVA y condiciones de pago.

Facturas de importación: Aplican cuando adquirís productos del extranjero. Además del valor de la mercancía, incluyen aranceles, impuestos aduaneros, fletes y seguros. En Guatemala se complementan con la póliza de importación y la declaración aduanera.

Notas de crédito: Documentan devoluciones, descuentos o correcciones sobre una factura emitida previamente. Son fundamentales para mantener tu libro de compras correcto.

Notas de débito: Registran cargos adicionales sobre una transacción ya facturada, como intereses por mora o ajustes de precio.

Facturas de pequeño contribuyente: Emitidas por proveedores bajo el régimen de pequeño contribuyente. Tienen un tratamiento fiscal distinto ya que no generan crédito fiscal de IVA.`,
    },
    {
      heading: "¿Qué información contiene una factura de compra?",
      body: `En Guatemala, una factura de compra electrónica (DTE) contiene como mínimo:

- NIT y nombre del emisor (tu proveedor)
- NIT y nombre del receptor (tu empresa)
- Número de autorización de la SAT
- Fecha y hora de emisión
- Detalle de bienes o servicios: descripción, cantidad, precio unitario
- Desglose de impuestos (IVA, retenciones si aplican)
- Total de la factura
- Tipo de DTE (factura, nota de crédito, nota de débito)

Toda esta información está contenida en el XML certificado por la SAT. Es la misma información que tu equipo contable necesita para registrar la factura en tu sistema ERP o contable.`,
    },
    {
      heading: "El reto: gestionar facturas de compra cuando el volumen crece",
      body: `Cuando tu empresa recibe pocas facturas de compra al mes, el proceso manual funciona: descargar el XML del portal de la SAT, extraer los datos y registrarlos en Odoo.

Pero cuando el volumen crece a decenas o cientos de facturas mensuales, ese flujo se convierte en un cuello de botella. El equipo contable pasa horas digitando datos que ya existen en formato electrónico. Los errores de captura se multiplican. El cierre contable se retrasa. Y el libro de compras siempre va un paso atrás.

El problema no es la factura en sí. El problema es el proceso manual de trasladar datos del XML de la SAT a tu sistema contable. Es un trabajo repetitivo que no agrega valor pero consume recursos importantes.`,
    },
    {
      heading: "Cómo automatizar el registro de facturas de compra",
      body: `Hoy existen soluciones que conectan directamente con la SAT de Guatemala y registran las facturas de compra en tu ERP de forma automática. En lugar de descargar, extraer y digitar, el flujo se reduce a: tu proveedor emite la factura, el sistema la recibe y la registra.

Fel2Odoo es una de estas soluciones. Recibe los DTE directamente de la SAT en tiempo real, valida la información del XML y crea el Vendor Bill en Odoo automáticamente vía API. El mapeo de proveedores, productos y cuentas analíticas se configura una sola vez.

El resultado es que tu equipo contable deja de digitar y se enfoca en revisar y analizar. Las facturas de compra se registran en minutos, no en horas. El libro de compras siempre está actualizado y el cierre contable se adelanta.`,
    },
  ],
};
