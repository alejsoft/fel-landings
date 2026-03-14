import { ImageResponse } from "next/og";
import { config } from "@/config";

export const dynamic = "force-static";
export const alt = config.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#000000",
          color: "#f5f5f7",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#86868b",
              marginBottom: "24px",
            }}
          >
            {config.product}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {config.hero.headline}{" "}
            <span style={{ color: config.accentColor }}>
              {config.hero.highlight}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", fontSize: "20px", color: "#86868b" }}>
            HaaB Technologies, S.A.
          </div>
          <div style={{ display: "flex", fontSize: "20px", color: "#86868b" }}>
            {config.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
