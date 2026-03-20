import type { Article } from "../types";

export const article: Article = {
  slug: "factura-electronica-fel-guatemala-que-es",
  product: "fel2gp",
  title:
    "Factura electrónica en Guatemala (FEL): qué es, cómo funciona y qué es un DTE",
  description:
    "Guía completa sobre la factura electrónica en Guatemala: qué es el sistema FEL, qué son los DTE, quiénes están obligados, tipos de documentos y cómo se integran con tu ERP.",
  keywords: [
    "factura electrónica Guatemala",
    "FEL Guatemala",
    "DTE Guatemala",
    "qué es FEL",
    "qué es un DTE",
    "factura electrónica en línea Guatemala",
    "sistema FEL SAT Guatemala",
    "certificador FEL",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué es la Factura Electrónica en Línea (FEL)?",
      body: `La Factura Electrónica en Línea (FEL) es el sistema oficial de facturación electrónica de Guatemala, administrado por la Superintendencia de Administración Tributaria (SAT). Desde su implementación, reemplazó progresivamente a las facturas en papel y a los sistemas anteriores de facturación.

Con FEL, cada factura que se emite en Guatemala se genera como un archivo XML, se transmite a un certificador autorizado por la SAT, se certifica y se devuelve al emisor con un número de autorización único. Todo el proceso ocurre en segundos y de forma digital.

El objetivo del sistema es darle a la SAT visibilidad en tiempo real sobre todas las transacciones comerciales del país, reducir la evasión fiscal y eliminar las facturas falsas. Para las empresas, significa que cada factura emitida o recibida tiene un respaldo electrónico verificable.`,
    },
    {
      heading: "¿Qué es un DTE?",
      body: `DTE significa Documento Tributario Electrónico. Es el nombre técnico que recibe cualquier documento emitido a través del sistema FEL. No solo las facturas son DTE — el sistema incluye varios tipos de documentos:

FACT (Factura): el documento más común. Registra la venta de bienes o servicios.

FCAM (Factura Cambiaria): factura que funciona como título de crédito, usada en ventas al crédito.

FPEQ (Factura de Pequeño Contribuyente): emitida por contribuyentes bajo el régimen de pequeño contribuyente. No genera crédito fiscal de IVA para quien la recibe.

FCAP (Factura Cambiaria de Pequeño Contribuyente): combinación de factura cambiaria y pequeño contribuyente.

FESP (Factura Especial): emitida por el comprador cuando el vendedor no puede emitir factura.

NABN (Nota de Abono): documento que registra una devolución o descuento sobre una factura emitida previamente.

RDON (Recibo por Donación): para donaciones deducibles de ISR.

RECI (Recibo): comprobante de pago sin efecto fiscal de IVA.

NDEB (Nota de Débito): registra cargos adicionales sobre una transacción ya facturada.

NCRE (Nota de Crédito): anula parcial o totalmente una factura emitida.

Cada DTE tiene un número de autorización único de la SAT, una fecha de certificación y un XML que contiene todos los datos de la transacción.`,
    },
    {
      heading: "¿Cómo funciona el proceso de emisión?",
      body: `El flujo de emisión de un DTE en Guatemala funciona así:

1. El emisor (tu proveedor o tu empresa) genera el documento desde su sistema de facturación
2. El sistema envía el XML al certificador autorizado por la SAT
3. El certificador valida la estructura del XML, verifica los datos fiscales y certifica el documento
4. La SAT recibe el DTE certificado y le asigna un número de autorización
5. El certificador devuelve el DTE firmado al emisor
6. El emisor entrega la factura al receptor (tu empresa)

Todo este proceso ocurre en segundos. El resultado es un archivo XML certificado que contiene todos los datos de la transacción y que es verificable en el portal de la SAT.

Los certificadores autorizados incluyen empresas como Infile, Digifact, G4S, Megaprint y otros aprobados por la SAT.`,
    },
    {
      heading: "¿Quiénes están obligados a usar FEL?",
      body: `Desde 2022, todos los contribuyentes en Guatemala están obligados a emitir sus documentos tributarios a través del sistema FEL. Esto incluye:

- Personas individuales y jurídicas en el régimen general del IVA
- Pequeños contribuyentes
- Contribuyentes que realizan exportaciones
- Entidades exentas que emiten recibos por donación

No hay excepciones. Si emitís o recibís facturas en Guatemala, estás dentro del sistema FEL.

Para tu empresa como receptora de facturas de compra, esto significa que cada factura que recibís de un proveedor guatemalteco tiene un XML certificado por la SAT con todos los datos de la transacción en formato electrónico y estructurado.`,
    },
    {
      heading: "El XML de la SAT tiene todo lo que tu ERP necesita",
      body: `Cada DTE que recibís como factura de compra contiene en su XML:

- NIT y nombre del emisor (tu proveedor)
- NIT y nombre del receptor (tu empresa)
- Número de autorización SAT
- Fecha y hora de emisión y certificación
- Detalle de bienes o servicios con descripción, cantidad y precio
- Desglose de IVA y otros impuestos
- Total de la factura
- Tipo de DTE

Esta es exactamente la misma información que tu equipo contable necesita para registrar la factura en Dynamics GP. La diferencia es que hoy esa información se extrae manualmente del XML o del PDF y se digita en el sistema.

Fel2GP elimina ese paso. Recibe los DTE directamente de la SAT en tiempo real, extrae los datos del XML y crea la Payables Transaction en Dynamics GP automáticamente vía eConnect. No hay descarga manual del portal SAT, no hay Excel intermedio, no hay digitación. El XML de la SAT alimenta directamente tu ERP.`,
    },
  ],
};
