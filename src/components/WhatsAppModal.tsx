// src/components/WhatsAppModal.tsx
"use client";

import { useState } from "react";
import { config } from "@/config";

const WHATSAPP_NUMBER = "50259819812";

const VERSIONS: Record<string, string[]> = {
  fel2sap: [
    "SAP Business One 9.3",
    "SAP Business One 10.0",
    "SAP Business One HANA",
    "SAP S/4HANA",
    "SAP ECC",
  ],
  fel2odoo: ["Odoo v15", "Odoo v16", "Odoo v17", "Odoo v18"],
  fel2gp: ["Dynamics GP 2016", "Dynamics GP 2018", "Dynamics GP 18.x"],
};

const product = process.env.NEXT_PUBLIC_PRODUCT || "fel2sap";
const versions = VERSIONS[product] || [];

function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  window.open(url, isMobile ? "_self" : "_blank");
}

export function useWhatsAppModal() {
  const [open, setOpen] = useState(false);
  return { open, show: () => setOpen(true), hide: () => setOpen(false) };
}

export default function WhatsAppModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [version, setVersion] = useState("");

  if (!open) return null;

  const isValidEmail =
    email.includes("@") &&
    !/(gmail|hotmail|yahoo|outlook|live|aol)\./i.test(email);
  const canSubmit = name.trim() && isValidEmail && version;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const message = `Hola, soy ${name.trim()} (${email.trim()}). Uso ${version} y me interesa una demo de ${config.product}.`;
    openWhatsApp(message);
    onClose();
    setName("");
    setEmail("");
    setVersion("");
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-surface border border-border-subtle p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-1">Solicitar demo</h3>
        <p className="text-sm text-muted mb-6">
          Completá tus datos y te contactamos por WhatsApp.
        </p>

        <label className="block mb-4">
          <span className="text-sm font-medium mb-1.5 block">Nombre</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium mb-1.5 block">
            Correo empresarial
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@empresa.com"
            className="w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
          />
          {email && !isValidEmail && (
            <p className="text-xs text-red-400 mt-1">
              Ingresá un correo empresarial
            </p>
          )}
        </label>

        <label className="block mb-6">
          <span className="text-sm font-medium mb-1.5 block">
            Versión de {config.erp}
          </span>
          <select
            required
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors appearance-none"
          >
            <option value="">Seleccioná una versión</option>
            {versions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
            <option value="No estoy seguro">No estoy seguro</option>
          </select>
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-border-subtle px-4 py-2.5 text-sm font-medium hover:bg-background transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
          >
            Abrir WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
