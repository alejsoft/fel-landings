import type { Article } from "../types";

export const article: Article = {
  slug: "omisos-sat-como-verificar-proveedores-guatemala",
  product: "fel2odoo",
  title:
    "Omisos ante la SAT: qué son y cómo verificar proveedores en Guatemala",
  description:
    "Qué son los omisos ante la SAT de Guatemala, qué tipos existen, cuáles bloquean el registro de facturas y cómo verificar el estado fiscal de tus proveedores.",
  keywords: [
    "omisos SAT Guatemala",
    "verificar proveedores SAT",
    "verificador integrado SAT",
    "omiso de IVA Guatemala",
    "omiso ISR Guatemala",
    "solvencia fiscal proveedor",
  ],
  publishedDate: "2026-03-19",
  sections: [
    {
      heading: "¿Qué son los omisos ante la SAT?",
      body: `Un omiso es un incumplimiento tributario de un contribuyente ante la Superintendencia de Administración Tributaria (SAT). Existen dos tipos:

Omisos formales: obligaciones que no están vinculadas a un pago. Por ejemplo, no presentar una declaración informativa o tener el RTU desactualizado.

Omisos sustantivos: obligaciones vinculadas a un pago de impuesto. Por ejemplo, no pagar el IVA, ISR o ISO en el plazo establecido.

Para tu empresa, los omisos de tus proveedores son un problema directo: si registrás una factura de un proveedor con omisos graves, podés enfrentar riesgos fiscales. Por eso, verificar el estado fiscal del proveedor antes de registrar su factura es una práctica obligatoria en muchas empresas.`,
    },
    {
      heading: "Omisos que bloquean el registro inmediatamente",
      body: `Los siguientes omisos del proveedor son motivo para rechazar la factura y bloquear al proveedor en el sistema contable de forma inmediata:

- Omiso de IVA
- Omiso de ISR trimestral
- Omiso de ISO trimestral
- Omiso de ISR anual
- Cuotas de convenios de pago pendientes
- Domicilio fiscal no localizado

Si un proveedor tiene cualquiera de estos omisos, no se debe registrar su factura hasta que resuelva su situación ante la SAT. Se notifica al proveedor por correo electrónico para que presente la solvencia fiscal correspondiente.`,
    },
    {
      heading: "Omisos que bloquean para meses subsiguientes",
      body: `Otros omisos permiten recibir la factura del mes en curso, pero bloquean al proveedor para los meses siguientes:

- Omiso de ISR mensual
- Omiso de ISCV (Impuesto de Solidaridad)
- RTU desactualizado
- Informe semestral de inventario no presentado

La única excepción es para facturas de liquidación de anticipos: estas se registran independientemente de los omisos del proveedor.

Al detectar omisos, se notifica al dueño del proceso interno para que contacte al proveedor y este resuelva su situación ante la SAT.`,
    },
    {
      heading: "Cómo verificar proveedores en el portal SAT",
      body: `La SAT de Guatemala pone a disposición el Verificador Integrado en su portal, donde podés consultar el estado fiscal de cualquier contribuyente con su NIT.

El proceso manual es:

1. Ingresar al portal de la SAT, sección Verificador Integrado
2. Digitar el NIT del proveedor
3. Revisar si tiene omisos vigentes
4. Determinar si los omisos son de bloqueo inmediato o futuro
5. Registrar el resultado y proceder o rechazar la factura

Este proceso debe hacerse por cada proveedor, antes de registrar cada factura. Cuando tu empresa trabaja con decenas o cientos de proveedores, la verificación manual consume horas del equipo contable cada mes.`,
    },
    {
      heading: "Cómo automatizar la verificación de proveedores",
      body: `La verificación de omisos es crítica pero repetitiva: el mismo NIT se consulta cada vez que llega una factura del mismo proveedor. Es un proceso que se puede automatizar.

Fel2Odoo verifica automáticamente el estado fiscal del proveedor en la SAT antes de registrar cada factura en Odoo. Si el proveedor tiene omisos de bloqueo, la factura se marca para revisión en lugar de registrarse. Si está solvente, el Vendor Bill se crea automáticamente vía API.

El resultado: tu equipo no necesita entrar manualmente al portal de la SAT por cada factura. La verificación ocurre en tiempo real como parte del flujo automatizado de registro.`,
    },
  ],
};
