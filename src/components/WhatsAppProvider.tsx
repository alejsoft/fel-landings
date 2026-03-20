// src/components/WhatsAppProvider.tsx
"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import WhatsAppModal from "./WhatsAppModal";

const Ctx = createContext<() => void>(() => {});

export const useWhatsApp = () => useContext(Ctx);

export default function WhatsAppProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      <WhatsAppModal open={open} onClose={() => setOpen(false)} />
    </Ctx.Provider>
  );
}
