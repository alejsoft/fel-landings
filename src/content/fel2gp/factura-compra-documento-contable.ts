import type { Article } from "../types";

export const article: Article = {
  slug: "factura-de-compra-como-documento-contable",
  product: "fel2gp",
  title:
    "La factura de compra como documento contable: clasificación, registro y cuentas",
  description:
    "Entendé la factura de compra como documento contable: cómo se clasifica según el tipo de adquisición, en qué cuentas se registra y qué variantes existen según la estructura de precio.",
  keywords: [
    "factura de compra documento contable",
    "registro contable factura de compra",
    "contabilización facturas de compras",
    "cuentas contables factura de compra",
    "asiento contable factura de compra Guatemala",
    "clasificación contable compras",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "La factura de compra no es solo un comprobante",
      body: `Muchas empresas tratan la factura de compra como un simple comprobante de pago. Pero en realidad es un documento contable: define cómo se registra la transacción en tu contabilidad, en qué cuenta se carga el gasto o el activo, y qué impuestos se reconocen.

Una factura de compra certifica que tu empresa adquirió un bien o servicio a cambio de un monto determinado. Pero su función contable va más allá: dependiendo de la naturaleza de lo que compraste, esa factura se registra en cuentas diferentes y tiene un tratamiento fiscal distinto.

Entender esta clasificación es clave para que tu contabilidad refleje la realidad financiera de tu empresa y para que el crédito fiscal de IVA se aplique correctamente.`,
    },
    {
      heading: "Clasificación contable según el tipo de compra",
      body: `No todas las compras se registran igual. La naturaleza de la adquisición determina la cuenta contable:

Bienes consumibles: materiales, insumos, suministros de oficina, combustible. Se registran como gasto del período porque se consumen en el corto plazo. Van a cuentas de gastos operativos.

Bienes duraderos o activos fijos: maquinaria, equipo de cómputo, vehículos, mobiliario. No se registran como gasto inmediato sino como activo fijo, y se deprecian a lo largo de su vida útil. Van a cuentas de activo.

Servicios: asesorías, consultorías, arrendamientos, telefonía, transporte, publicidad. Se registran como gasto del período en la cuenta correspondiente al tipo de servicio.

Importaciones: además del valor de la mercancía, incluyen aranceles, fletes y seguros que pueden formar parte del costo del bien o registrarse como gastos separados, según la política contable de tu empresa.

Esta clasificación define el impacto financiero de cada factura: un gasto reduce tu utilidad del período, un activo fijo no.`,
    },
    {
      heading: "Variantes de factura según su estructura de precio",
      body: `Las facturas de compra no siempre tienen una estructura simple de precio unitario por cantidad. Existen variantes que afectan el registro contable:

Factura simple: precio unitario multiplicado por cantidad, más IVA. Es la más común y la más directa de registrar.

Factura con descuento comercial: el proveedor aplica un descuento sobre el precio antes de impuestos. El descuento reduce la base imponible del IVA y el monto a registrar en la cuenta de gasto o activo.

Factura con descuento financiero: descuento por pronto pago o por volumen. Se calcula sobre el monto sin IVA y puede registrarse como ingreso financiero o como reducción del costo.

Factura con costos accesorios: incluye transporte, seguro, comisiones u otros cargos adicionales. Estos costos pueden formar parte del costo del bien adquirido o registrarse en cuentas separadas.

Factura con anticipos: cuando ya se realizó un pago parcial previo. El registro debe conciliar el anticipo con el saldo pendiente para evitar duplicidad.`,
    },
    {
      heading: "El registro contable en Guatemala",
      body: `En Guatemala, cada factura de compra electrónica (DTE) tiene implicaciones contables específicas:

IVA como crédito fiscal: el IVA pagado en compras se registra como crédito fiscal en una cuenta de activo (IVA por cobrar). Este crédito se compensa contra el IVA cobrado en ventas (débito fiscal) al presentar la declaración mensual.

Retenciones: si tu empresa es agente de retención, al registrar la factura debés calcular y registrar la retención de IVA o ISR correspondiente. Esto genera un pasivo (retención por pagar a la SAT) y reduce el monto a pagar al proveedor.

Cuentas por pagar: el total de la factura menos retenciones se registra como cuenta por pagar al proveedor, hasta que se realice el desembolso.

Distribución por centro de costo: en empresas con múltiples áreas o proyectos, cada factura debe distribuirse al centro de costo correcto para que los reportes de presupuesto reflejen el gasto real por área.`,
    },
    {
      heading: "Automatizar la clasificación contable",
      body: `El reto no es saber en qué cuenta va cada factura. El reto es hacerlo correctamente cientos de veces al mes sin errores.

Cada factura de compra requiere: identificar el tipo de adquisición, asignar la cuenta contable correcta, calcular el IVA como crédito fiscal, aplicar retenciones si corresponde, distribuir por centro de costo y registrar la cuenta por pagar.

Fel2GP automatiza este proceso completo. Al recibir el DTE de la SAT, el sistema clasifica la factura según reglas configuradas, asigna la cuenta contable, calcula retenciones, distribuye por GL Distribution y crea la Payables Transaction en Dynamics GP con toda la información contable lista vía eConnect.

Tu equipo contable define las reglas una vez. Cada factura futura se clasifica y registra automáticamente.`,
    },
  ],
};
