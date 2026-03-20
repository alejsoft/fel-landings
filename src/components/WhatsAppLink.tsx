// src/components/WhatsAppLink.tsx
"use client";

import { useWhatsApp } from "./WhatsAppProvider";

export default function WhatsAppLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const openModal = useWhatsApp();

  return (
    <button onClick={openModal} className={`cursor-pointer ${className ?? ""}`}>
      {children}
    </button>
  );
}
