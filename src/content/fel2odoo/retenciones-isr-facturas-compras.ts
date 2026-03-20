import type { Article } from "../types";

export const article: Article = {
  slug: "retenciones-isr-facturas-compras-guatemala",
  product: "fel2odoo",
  title:
    "Retenciones de ISR en facturas de compras en Guatemala: guía práctica",
  description:
    "Guía práctica sobre retenciones de ISR en facturas de compras en Guatemala: cuándo retener, montos mínimos, tasas para proveedores nacionales y del extranjero, y ejemplos de cálculo.",
  keywords: [
    "retenciones ISR Guatemala",
    "retención ISR facturas de compras",
    "retención ISR proveedores Guatemala",
    "ISR no domiciliados Guatemala",
    "agente de retención Guatemala",
    "cálculo retención ISR",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué son las retenciones de ISR en facturas de compras?",
      body: `Cuando tu empresa compra bienes o servicios, en ciertos casos está obligada a retener una parte del pago como anticipo del Impuesto Sobre la Renta (ISR) del proveedor. Tu empresa actúa como agente de retención: descuenta el impuesto del pago y lo traslada directamente a la SAT.

Las retenciones aplican tanto para proveedores nacionales como del extranjero, pero con reglas y tasas diferentes. El objetivo es asegurar que el ISR se recaude en el momento de la transacción, sin depender de que el proveedor lo declare después.

Las constancias de retención de ISR se ponen a disposición del proveedor a través de la Agencia Virtual de la SAT. El plazo de pago de las retenciones es dentro de los días hábiles 10 al 15 del mes siguiente.`,
    },
    {
      heading: "Retenciones a proveedores nacionales",
      body: `Para proveedores nacionales sujetos a retención definitiva, los umbrales mínimos son:

IVA: se retiene cuando el monto de la factura es igual o mayor a Q2,500. La retención aplica si tu empresa es agente retenedor designado por la SAT.

ISR: se retiene cuando el monto es igual o mayor a Q2,800. Aplica en pagos directos según resolución del ISR.

Estas retenciones se calculan sobre el valor de la factura sin IVA. Es importante verificar si tu empresa es agente retenedor y si el proveedor está sujeto a retención definitiva o a pago trimestral, ya que las reglas cambian.

Para proveedores bajo el régimen de pequeño contribuyente, el tratamiento es distinto y generalmente no aplican las mismas retenciones.`,
    },
    {
      heading: "Retenciones a proveedores del extranjero",
      body: `Los proveedores del extranjero que prestan servicios a tu empresa en Guatemala están sujetos a retención de ISR de no domiciliados, según los artículos 97, 98, 101, 103, 104 y 105 del Decreto 10-2012 (Ley de Actualización Tributaria).

Las tasas varían según el tipo de servicio:

- 5%: transporte, dividendos, primas de seguro, telefonía, licencias de software
- 10%: intereses
- 15%: honorarios, consultorías, capacitaciones, asesoramientos, comisiones, sueldos
- 25%: otros servicios no especificados

La factura del proveedor extranjero debe ser emitida dentro del mismo mes en que se realiza el registro para poder proceder con el pago.`,
    },
    {
      heading: "Ejemplo práctico: retención a proveedor del extranjero",
      body: `Para calcular la retención a un proveedor extranjero se usa una regla de tres simple directa. El valor del servicio más el ISR no domiciliado representa el 100%.

Ejemplo: servicio de consultoría por $15,000.

1. La tasa de retención para consultorías es 15%
2. Si $15,000 representa el 85% (100% menos 15%), el 100% se calcula: $15,000 / 0.85 = $17,647.06
3. La retención de ISR es el 15% de $17,647.06 = $2,647.06
4. El proveedor recibe $15,000 (el monto neto del servicio)
5. Tu empresa paga $2,647.06 a la SAT como retención de ISR

Este cálculo debe registrarse correctamente en el sistema contable para que la retención se declare y pague en el plazo establecido.`,
    },
    {
      heading: "El reto de gestionar retenciones manualmente",
      body: `Cada factura de compra que genera retención implica: identificar si aplica retención, determinar la tasa correcta, calcular el monto, registrarlo en el sistema contable, emitir la constancia y pagar a la SAT en plazo.

Cuando el volumen de facturas crece, este proceso se vuelve propenso a errores. Una tasa mal aplicada o una retención no registrada puede generar multas y sanciones.

Fel2Odoo automatiza este proceso: al registrar la factura de compra en Odoo, las retenciones se calculan y aplican automáticamente según las reglas configuradas. El Vendor Bill queda listo con el ISR retenido correctamente desglosado, sin cálculos manuales.`,
    },
  ],
};
