import type { Article } from "../types";

export const article: Article = {
  slug: "registro-autorizacion-facturas-compras",
  product: "fel2sap",
  title:
    "Registro y autorización de facturas de compras en Guatemala: el proceso completo",
  description:
    "Conoce el proceso completo de registro y autorización de facturas de compras en Guatemala: requisitos legales, documentación, plazos y causas de rechazo.",
  keywords: [
    "registro de facturas de compras Guatemala",
    "autorización de facturas de compras",
    "requisitos factura de compra Guatemala",
    "plazos registro facturas de compras",
    "rechazo de facturas de compras",
    "documentación factura de compra",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Cómo funciona el registro de una factura de compra?",
      body: `El registro de una factura de compra no es simplemente ingresarla al sistema contable. En Guatemala, el proceso involucra una serie de verificaciones previas que aseguran que la factura cumple con los requisitos legales y fiscales antes de ser registrada.

El flujo típico es: recibir la factura electrónica (FEL) del proveedor → verificar que cumple con los requisitos legales → verificar que el proveedor no tiene omisos ante la SAT → validar que existe presupuesto disponible → registrar en el sistema contable → autorizar el registro.

Cada uno de estos pasos tiene reglas específicas que, si no se cumplen, pueden resultar en el rechazo de la factura.`,
    },
    {
      heading: "Requisitos legales que debe cumplir la factura",
      body: `Para que una factura de compra sea válida y registrable, la Factura Electrónica en Línea (FEL) debe incluir:

- Nombre y NIT correctos de tu empresa como receptor
- NIT del certificador
- Dirección fiscal vigente
- Descripción detallada de los bienes o servicios adquiridos
- Desglose de impuestos (IVA)

Si la factura no cumple con estos requisitos, se rechaza y se notifica al proveedor para que emita una corrección o anulación. Esto es especialmente importante en facturas por servicios profesionales o técnicos, donde el artículo 21, numeral 23 de la Ley de Actualización Tributaria exige adjuntar un dictamen o informe detallado cuando el monto supera los Q10,000.`,
    },
    {
      heading: "Documentación de soporte requerida",
      body: `Además de la FEL, el registro de una factura de compra requiere documentación de soporte según el tipo de adquisición:

Para compras de bienes o materiales: la factura se recibe junto con los materiales en bodega. El proveedor debe presentar la factura electrónica con código QR.

Para compras de servicios: la factura se recibe por correo electrónico y debe incluir en un solo PDF la Factura Electrónica en Línea, la orden de compra, la recepción de servicios firmada y, cuando aplique, el dictamen técnico o bitácora de los servicios prestados.

La recepción de servicios es un documento clave: es la constancia de que el servicio fue recibido satisfactoriamente y autoriza el registro de la factura en el sistema contable.`,
    },
    {
      heading: "Plazos para recepción y registro",
      body: `En Guatemala, los plazos para el registro de facturas de compras son estrictos:

Recepción: las facturas deben recibirse dentro del mes en que fueron emitidas, específicamente en los primeros 25 días del mes calendario. Para registrar facturas después del día 25 se requiere una autorización especial de la dirección general.

Registro: una vez recibida y verificada, la factura debe registrarse en el sistema contable en un máximo de 3 días hábiles.

Estos plazos existen para garantizar que el libro de compras esté completo al cierre de cada mes y que el crédito fiscal de IVA se aplique en el período correcto.`,
    },
    {
      heading: "Causas comunes de rechazo de facturas",
      body: `Una factura de compra puede ser rechazada por varias razones:

- Datos fiscales incorrectos (NIT, nombre, dirección)
- Falta de documentación de soporte (orden de compra, recepción de servicios)
- Proveedor con omisos ante la SAT (omiso de IVA, ISR, ISO, domicilio no localizado)
- Excede el presupuesto aprobado para la cuenta contable o centro de costo
- Fuera del plazo de recepción (después del día 25 sin autorización)
- Desacuerdo en condiciones comerciales (precios, incumplimiento de servicio)

Cuando una factura se rechaza, se notifica al proveedor y al responsable interno para que se corrija o se emita una nueva.`,
    },
    {
      heading: "Cómo simplificar el proceso de registro",
      body: `El proceso de registro y autorización de facturas de compras es necesario, pero la parte más pesada — extraer datos del XML de la SAT y digitarlos en el sistema contable — es un trabajo repetitivo que se puede automatizar.

Fel2SAP conecta directamente con la SAT de Guatemala y registra las facturas de compra en SAP Business One o S/4HANA de forma automática. Los datos se extraen del XML certificado y se crean las A/P Invoices con el mapeo de Business Partners, artículos y distribución contable ya configurado.

Tu equipo contable se enfoca en las verificaciones que realmente requieren criterio humano: validar documentación de soporte, revisar presupuesto y autorizar. La digitación la hace el sistema.`,
    },
  ],
};
