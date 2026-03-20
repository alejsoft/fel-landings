import { article as costoDigitacion } from "./costo-digitacion-manual-odoo";
import { article as automatizarVendorBills } from "./automatizar-vendor-bills-odoo";
import { article as facturasDeCompras } from "./facturas-de-compras";
import { article as registroAutorizacion } from "./registro-autorizacion-facturas-compras";
import { article as retencionesIsr } from "./retenciones-isr-facturas-compras";
import { article as omisosSat } from "./omisos-sat-verificar-proveedores";
import { article as libroDeCompras } from "./libro-de-compras";
import { article as facturaDocumentoContable } from "./factura-compra-documento-contable";
import { article as facturaElectronicaFel } from "./factura-electronica-fel-guatemala";
import { article as facturaEspecial } from "./factura-especial-guatemala";
import { article as informeComprasVentas } from "./informe-electronico-compras-ventas";

export const articles = [
  costoDigitacion,
  automatizarVendorBills,
  facturasDeCompras,
  registroAutorizacion,
  retencionesIsr,
  omisosSat,
  libroDeCompras,
  facturaDocumentoContable,
  facturaElectronicaFel,
  facturaEspecial,
  informeComprasVentas,
];
