import type { Article } from "../types";

export const article: Article = {
  slug: "informe-electronico-compras-ventas-sat-guatemala",
  product: "fel2sap",
  title:
    "Informe Electrónico de Compras y Ventas SAT: qué es, quiénes lo presentan y multas",
  description:
    "Qué es el Informe Electrónico de Compras y Ventas de la SAT de Guatemala, quiénes están obligados a presentarlo, plazos, proceso y multas por no presentarlo.",
  keywords: [
    "informe electrónico compras y ventas SAT",
    "informe compras y ventas Guatemala",
    "contribuyente especial SAT Guatemala",
    "multa informe compras y ventas",
    "agencia virtual SAT compras y ventas",
    "artículo 57 D ley del IVA Guatemala",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué es el Informe Electrónico de Compras y Ventas?",
      body: `El Informe Electrónico de Compras y Ventas es una obligación tributaria que se presenta a través de la Agencia Virtual de la SAT. Consiste en un reporte detallado de todas las compras y ventas que tu empresa realizó durante un período determinado.

Está establecido en el artículo 57 "D" del Decreto Número 27-92, Ley del Impuesto al Valor Agregado. A diferencia del libro de compras (que es un registro contable interno), este informe se presenta directamente a la SAT y debe coincidir con los DTE emitidos y recibidos en el sistema FEL.

El informe se presenta como máximo cada seis meses. Es una herramienta de fiscalización que permite a la SAT cruzar información entre compradores y vendedores para detectar inconsistencias.`,
    },
    {
      heading: "¿Quiénes están obligados a presentarlo?",
      body: `No todos los contribuyentes deben presentar este informe. Solo están obligados los contribuyentes calificados por la SAT como "Especiales":

Contribuyentes Especiales Grandes: incorporados al sistema desde el 1 de enero de 2023.

Contribuyentes Especiales Medianos: incorporados desde el 1 de enero de 2023.

Contribuyentes Especiales Regionales: incorporados desde el 1 de abril de 2023.

Si tu empresa está calificada como contribuyente especial por la SAT, estás obligado a presentar este informe. La calificación la determina la SAT en función del volumen de operaciones y otros criterios de fiscalización.`,
    },
    {
      heading: "Requisitos y proceso de presentación",
      body: `Para presentar el informe necesitás:

- Usuario activo en la Agencia Virtual de la SAT
- Datos actualizados en el RTU Digital
- Acceso al sistema de Informe Electrónico de Compras y Ventas (la SAT lo habilita automáticamente a contribuyentes especiales)

El proceso paso a paso:

1. Ingresá a la Agencia Virtual de la SAT
2. Seleccioná el menú "Aplicaciones"
3. Hacé clic en "Compras y Ventas Electrónicos"
4. Seleccioná "Informe Electrónico de Compras y Ventas"
5. Ingresá los datos del período a presentar
6. Confirmá la presentación
7. Generá y descargá la constancia de recepción en PDF

El informe debe incluir el detalle de cada factura de compra y venta del período: NIT del proveedor o cliente, número de autorización del DTE, montos, IVA y tipo de documento.`,
    },
    {
      heading: "Multas por no presentar el informe",
      body: `Las multas por no presentar el Informe de Compras y Ventas están establecidas en el artículo 94, numeral 13 del Código Tributario (Decreto 6-91):

Primera vez: Q5,000.00

Segunda vez: Q10,000.00

Más de dos veces: Q10,000.00 más el 1% de los ingresos brutos del último mes declarado.

La sanción se aplica por cada vez que se incumpla con la obligación. Estas multas son acumulativas y pueden representar un monto significativo para empresas con ingresos altos. La presentación fuera de plazo también puede generar sanciones.`,
    },
    {
      heading: "La clave: tener las compras registradas correctamente",
      body: `El Informe Electrónico de Compras y Ventas requiere que cada factura de compra esté registrada con sus datos exactos: NIT del proveedor, número de autorización, montos, IVA, tipo de DTE. Si tu registro de compras tiene errores o está incompleto, el informe no va a cuadrar con lo que la SAT tiene en su sistema FEL.

El problema más común: facturas pendientes de registrar, datos digitados incorrectamente o facturas registradas en el período equivocado. Cuando el informe no coincide con los datos de la SAT, se generan discrepancias que pueden derivar en auditorías.

Fel2SAP elimina este riesgo. Al registrar las facturas de compra automáticamente desde el XML de la SAT, los datos en SAP Business One o S/4HANA son exactamente los mismos que la SAT tiene en su sistema. El informe cuadra porque los datos vienen de la misma fuente. Sin errores de digitación, sin facturas pendientes, sin discrepancias.`,
    },
  ],
};
