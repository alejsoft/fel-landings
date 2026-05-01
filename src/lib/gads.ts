const KEY = "haab_gclid";
const TTL_MS = 90 * 24 * 60 * 60 * 1000;

const CONVERSION_SEND_TO = "AW-664214993/fiujCLzNm-8ZENG73LwC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function captureGclidFromUrl() {
  if (typeof window === "undefined") return;
  try {
    const gclid = new URLSearchParams(window.location.search).get("gclid");
    if (gclid) {
      localStorage.setItem(
        KEY,
        JSON.stringify({ value: gclid, ts: Date.now() }),
      );
    }
  } catch {}
}

export function getStoredGclid(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as { value: string; ts: number };
    if (Date.now() - data.ts > TTL_MS) return null;
    return data.value;
  } catch {
    return null;
  }
}

type ConversionPayload = {
  email: string;
  firstName: string;
  onComplete: () => void;
};

export function fireConversion({
  email,
  firstName,
  onComplete,
}: ConversionPayload) {
  let fired = false;
  const fireOnce = () => {
    if (fired) return;
    fired = true;
    onComplete();
  };

  const gtag = typeof window !== "undefined" ? window.gtag : undefined;
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: CONVERSION_SEND_TO,
      event_callback: fireOnce,
      user_data: {
        email: email.toLowerCase().trim(),
        address: { first_name: firstName },
      },
    });
  }
  setTimeout(fireOnce, 1500);
}
