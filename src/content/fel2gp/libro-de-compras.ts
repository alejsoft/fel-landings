import type { Article } from "../types";

export const article: Article = {
  slug: "libro-de-compras-guatemala-que-es",
  product: "fel2gp",
  title: "Libro de compras en Guatemala: qué es, para qué sirve y cómo mantenerlo al día",
  description:
    "Qué es el libro de compras en Guatemala, quiénes están obligados a llevarlo, qué información debe incluir y cómo mantenerlo actualizado para el crédito fiscal de IVA.",
  keywords: [
    "libro de compras Guatemala",
    "qué es el libro de compras",
    "libro de compras IVA Guatemala",
    "crédito fiscal IVA Guatemala",
    "obligaciones tributarias Guatemala",
    "libro de compras SAT",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué es el libro de compras?",
      body: `El libro de compras es un registro contable obligatorio para todos los contribuyentes afectos al Impuesto al Valor Agregado (IVA) en Guatemala. Su función es documentar en orden cronológico todas las compras e importaciones de bienes y servicios que realiza tu empresa.

Según la legislación guatemalteca, el libro de compras debe estar autorizado tanto por la SAT como por el Registro Mercantil. No tener este libro al día puede generar sanciones y, más importante, la pérdida del derecho al crédito fiscal de IVA.

En la práctica, el libro de compras es la base sobre la cual tu empresa reclama el IVA pagado en sus compras como crédito fiscal contra el IVA cobrado en sus ventas.`,
    },
    {
      heading: "¿Quiénes están obligados a llevarlo?",
      body: `Todo contribuyente inscrito en el régimen general del IVA en Guatemala está obligado a llevar el libro de compras. Esto incluye a personas individuales y jurídicas que realicen de forma habitual actos de compraventa de bienes o prestación de servicios.

Los contribuyentes bajo el régimen de pequeño contribuyente no están obligados a llevar libro de compras, ya que no tienen derecho a crédito fiscal.

El libro debe llevarse en forma separada y registrar las compras vinculadas a:

- Ventas locales
- Exportaciones
- Ventas a personas exentas
- Importaciones de bienes y servicios`,
    },
    {
      heading: "¿Qué información debe incluir?",
      body: `Cada registro en el libro de compras debe contener como mínimo:

- Fecha de la factura
- Número de autorización del DTE (Documento Tributario Electrónico)
- NIT del proveedor
- Nombre del proveedor
- Descripción de la compra
- Valor neto de la compra (sin IVA)
- IVA pagado (crédito fiscal)
- Total de la factura
- Tipo de documento (factura, nota de crédito, nota de débito)

Las notas de crédito y débito también deben registrarse, ya que afectan el monto del crédito fiscal del período. Un libro de compras incompleto o con errores puede resultar en ajustes fiscales durante una auditoría de la SAT.`,
    },
    {
      heading: "El problema: mantener el libro de compras al día",
      body: `En teoría, mantener el libro de compras es simple: registrar cada factura conforme llega. En la práctica, el reto es otro.

Las facturas llegan por diferentes canales (bodega, correo, portal SAT). Cada una requiere verificación antes de registrarse. Los plazos son estrictos: las facturas deben registrarse dentro del mes en que fueron emitidas para que el crédito fiscal aplique en el período correcto.

Cuando el equipo contable está ocupado digitando facturas manualmente, el libro de compras va siempre un paso atrás. Los cierres mensuales se retrasan esperando que se registren todas las facturas pendientes. Y si una factura se registra en el mes incorrecto, el crédito fiscal se pierde o se declara fuera de tiempo.`,
    },
    {
      heading: "Cómo mantener el libro de compras siempre actualizado",
      body: `La forma más efectiva de mantener el libro de compras al día es eliminar el cuello de botella: la digitación manual de facturas.

Fel2GP recibe las facturas de compra directamente de la SAT en tiempo real y las registra automáticamente en Dynamics GP. Cada Payables Transaction se crea con todos los datos que alimentan el libro de compras: fecha, NIT del proveedor, descripción, montos, IVA y tipo de documento.

El resultado: el libro de compras se actualiza en tiempo real conforme tus proveedores emiten facturas. No hay retrasos, no hay facturas pendientes de digitar al cierre, y el crédito fiscal de IVA siempre está correcto.`,
    },
  ],
};
