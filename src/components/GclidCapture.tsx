"use client";

import { useEffect } from "react";
import { captureGclidFromUrl } from "@/lib/gads";

export default function GclidCapture() {
  useEffect(() => {
    captureGclidFromUrl();
  }, []);
  return null;
}
