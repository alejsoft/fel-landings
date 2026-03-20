import type { Article } from "../types";

export const article: Article = {
  slug: "factura-especial-guatemala-que-es-cuando-emitirla",
  product: "fel2gp",
  title:
    "Factura Especial en Guatemala: qué es, cuándo emitirla y cómo funciona",
  description:
    "Qué es la factura especial (FESP) en Guatemala, cuándo debe emitirse, quién retiene los impuestos y qué la diferencia de una factura de compra normal.",
  keywords: [
    "factura especial Guatemala",
    "FESP Guatemala",
    "cuándo emitir factura especial",
    "retención factura especial Guatemala",
    "factura especial SAT",
    "factura especial FEL",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué es una factura especial?",
      body: `La factura especial (FESP) es un Documento Tributario Electrónico (DTE) que emite el comprador, no el vendedor. Se utiliza cuando tu empresa adquiere bienes o servicios de una persona que no puede emitir factura por su cuenta.

A diferencia de una factura de compra normal — donde el proveedor emite la factura a tu NIT —, en la factura especial es tu empresa la que genera el documento. Es un caso especial dentro del sistema FEL de la SAT donde los roles se invierten: el comprador documenta la transacción.

La factura especial tiene validez fiscal completa. Se registra en el sistema FEL con tipo de documento FESP y recibe un número de autorización de la SAT como cualquier otro DTE.`,
    },
    {
      heading: "¿Cuándo se debe emitir una factura especial?",
      body: `La factura especial se emite cuando comprás bienes o servicios a personas que no están inscritas como contribuyentes o que no pueden emitir facturas. Los casos más comunes:

- Compras a personas individuales que no tienen NIT de contribuyente
- Adquisición de productos agrícolas, artesanales o de producción informal
- Servicios prestados por personas que no emiten factura (trabajos ocasionales, servicios domésticos, etc.)
- Compras en mercados, ferias o a vendedores ambulantes

No se debe emitir factura especial cuando el vendedor es un contribuyente inscrito que puede emitir su propia factura. En ese caso, el proveedor debe emitir una factura normal (FACT o FPEQ).`,
    },
    {
      heading: "¿Quién retiene los impuestos?",
      body: `Cuando tu empresa emite una factura especial, actúa como agente de retención. Esto significa que debés retener y pagar a la SAT los impuestos correspondientes:

IVA: se retiene el 12% del valor de los bienes o servicios adquiridos. Tu empresa declara y paga este IVA a la SAT en la declaración mensual.

ISR: se retiene el porcentaje correspondiente según la naturaleza de la compra. La tasa varía según el tipo de bien o servicio.

El vendedor recibe el monto neto después de retenciones. Las constancias de retención se ponen a disposición en la Agencia Virtual de la SAT.

Es importante entender que la factura especial no genera crédito fiscal de IVA para tu empresa de la misma forma que una factura normal de proveedor. El tratamiento fiscal depende de la naturaleza de la operación.`,
    },
    {
      heading: "Diferencia entre factura especial y factura de compra",
      body: `Es común confundir estos dos conceptos:

Factura de compra (FACT recibida): la emite tu proveedor. Tu empresa es el receptor. El proveedor es un contribuyente inscrito que emite su DTE a tu NIT. Genera crédito fiscal de IVA.

Factura especial (FESP): la emite tu empresa como compradora. El vendedor no puede emitir factura. Tu empresa retiene IVA e ISR. El tratamiento del crédito fiscal es diferente.

En resumen: la factura de compra la recibís, la factura especial la emitís. Ambas documentan una adquisición, pero con roles invertidos y tratamiento fiscal distinto.`,
    },
    {
      heading: "El otro lado: las facturas de compra que sí recibís",
      body: `La factura especial es un caso puntual. La mayoría de las compras de tu empresa provienen de proveedores formales que emiten facturas electrónicas normales a tu NIT.

Esas facturas de compra — las que recibís de proveedores inscritos — son las que representan el mayor volumen de trabajo para tu equipo contable. Cada una requiere descargar el XML de la SAT, extraer los datos y digitarlos en Dynamics GP.

Fel2GP automatiza exactamente ese flujo. Recibe los DTE de tus proveedores directamente de la SAT y crea las Payables Transactions en Dynamics GP automáticamente vía eConnect. Sin descarga manual, sin digitación, sin Excel intermedio.

Las facturas especiales las seguís emitiendo desde tu sistema. Las facturas de compra de proveedores las registra HaaB.`,
    },
  ],
};
