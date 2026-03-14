import { config as fel2sap } from "./fel2sap";
import { config as fel2odoo } from "./fel2odoo";
import { config as fel2gp } from "./fel2gp";
import type { ProductConfig } from "./types";

const configs: Record<string, ProductConfig> = {
  fel2sap,
  fel2odoo,
  fel2gp,
};

const product = process.env.NEXT_PUBLIC_PRODUCT || "fel2sap";

export const config = configs[product] || fel2sap;
