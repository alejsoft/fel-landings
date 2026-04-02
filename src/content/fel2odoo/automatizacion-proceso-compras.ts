import type { Article } from "../types";

export const article: Article = {
  slug: "automatizacion-proceso-compras",
  product: "fel2odoo",
  title: "Automatización del proceso de compras: qué se puede automatizar",
  description:
    "Guía completa sobre automatización del proceso de compras con facturación electrónica FEL: recepción de facturas, registro en ERP, retenciones de ISR, verificación de proveedores y libro de compras. Sin digitación manual.",
  keywords: [
    "automatización proceso de compras",
    "automatización software Guatemala",
    "software automatización facturas",
    "automatización procesos contables",
    "automatización procesos empresariales Guatemala",
    "software automatización Guatemala",
    "automatizar compras ERP",
    "automatización cuentas por pagar",
  ],
  publishedDate: "2026-04-01",
  sections: [
    {
      heading: "Las 5 áreas del ciclo de compras que se automatizan con FEL",
      body: `Cuando se habla de automatización en el proceso de compras, la pregunta no es si conviene — es qué exactamente se puede automatizar. Con facturación electrónica FEL, cada factura de compra ya es un XML estructurado con todos los datos fiscales. Eso abre la puerta a automatizar no solo la recepción, sino todo el ciclo: registro contable, retenciones, verificación de proveedores y conciliación del libro de compras.`,
    },
    {
      heading: "El proceso de compras sigue siendo manual",
      body: `Incluso con facturación electrónica, la mayoría de empresas procesan sus facturas de compras manualmente. Cada factura que emite un proveedor pasa por las mismas manos: alguien la descarga, alguien la digita, alguien la revisa, alguien la archiva. Multiplicá eso por cientos de facturas al mes y el cuello de botella es evidente.

El ciclo completo de compras involucra al menos 5 procesos distintos. Cada uno puede automatizarse de forma independiente, pero el mayor impacto se logra cuando se automatizan todos como un flujo continuo.`,
    },
    {
      heading: "Área 1: Recepción de facturas de compras",
      body: `El primer paso del ciclo: recibir la factura de compra del proveedor. En el modelo manual, alguien entra al portal de la SAT, busca los DTEs nuevos, descarga XML y PDF, y los guarda en una carpeta. Con 50 proveedores activos, esto puede tomar horas cada semana.

Con automatización, el DTE se recibe directamente desde la SAT en tiempo real. No hay que entrar a ningún portal, no hay que descargar archivos. La factura de compra llega como XML estructurado, lista para procesarse.

- Tiempo manual de descarga: 2-4 hrs/sem
- Con recepción automática: 0 min`,
    },
    {
      heading: "Área 2: Registro contable en el ERP",
      body: `El paso más costoso en tiempo y errores: abrir el ERP, buscar al proveedor, crear el documento de compra, transcribir cada línea de detalle, ingresar impuestos y verificar totales. Cada factura toma entre 12 y 20 minutos. Con 500 facturas mensuales, son más de 100 horas de digitación.

Con automatización, el XML se lee directamente y el documento de compra se crea en el ERP con todas sus líneas, impuestos, cuenta contable y referencia al DTE original. Sin intervención humana, sin errores de transcripción.

- SAP — Factura de proveedor automática vía Service Layer y DI API con mapeo de cuentas contables.
- Dynamics GP — Payables Transaction Entry automático vía eConnect y Web Services.
- Odoo — Vendor Bill completo vía XML-RPC con líneas, impuestos y diario contable.
- Exactus — Documentos de compra y distribución contable en Softland ERP.`,
    },
    {
      heading: "Área 3: Retenciones de ISR",
      body: `Cada factura de compra puede requerir retención de ISR dependiendo del régimen del proveedor. Verificar el régimen, calcular el porcentaje correcto y registrar la retención es un proceso manual propenso a errores — y las retenciones mal calculadas generan problemas con la SAT.

Con automatización, el sistema verifica el régimen del proveedor contra la SAT, calcula la retención correspondiente y la registra junto con la factura de compra en el ERP. Sin tablas manuales, sin cálculos a mano.`,
    },
    {
      heading: "Área 4: Verificación de proveedores",
      body: `Antes de registrar una factura de compra, hay que verificar que el proveedor no esté omiso ante la SAT. Un proveedor omiso invalida el crédito fiscal de esa factura. En el proceso manual, alguien entra al portal de la SAT y revisa el estado de cada NIT, uno por uno.

Con automatización, cada NIT se verifica automáticamente antes de registrar el documento. Si el proveedor está omiso, el sistema lo marca y evita que se registre un crédito fiscal inválido.

- Proveedor activo: la factura se registra automáticamente con crédito fiscal.
- Proveedor omiso: se alerta al equipo contable antes de registrar. Sin sorpresas al cierre.`,
    },
    {
      heading: "Área 5: Libro de compras y conciliación",
      body: `Al cierre mensual, el libro de compras del ERP debe coincidir con lo reportado ante la SAT. Cuando las facturas se registran manualmente, las discrepancias son inevitables: facturas faltantes, montos mal digitados, DTEs no registrados.

Cuando todo el ciclo está automatizado, cada factura de compra que certifica la SAT queda registrada en el ERP con los mismos datos del XML original. El libro de compras se concilia solo — porque los datos nunca fueron alterados por manos humanas.

- Discrepancias con proceso manual: 5-15%
- Discrepancias con automatización: 0%`,
    },
    {
      heading: "Integración directa, no RPA",
      body: `Hay dos formas de automatizar: RPA (robots que simulan clics en pantalla) e integración directa (API que conecta sistemas). RPA es frágil — si cambia un botón en el portal SAT o en tu ERP, el robot se rompe. La integración directa lee el XML y escribe en el ERP vía API: no depende de interfaces gráficas, no se rompe con actualizaciones.

HaaB usa integración directa: API Gateway para conexión cloud y peer-to-peer para ERPs on-premise. Sin bots, sin scripts frágiles, sin dependencia de la interfaz gráfica de ningún sistema.`,
    },
    {
      heading: "El ciclo completo, automatizado",
      body: `- Digitación manual: 0%
- Errores de transcripción: 0%
- Tiempo de registro por factura: segundos
- Conciliación libro de compras: automática`,
    },
  ],
};
