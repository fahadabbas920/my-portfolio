import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#08090a",
        backgroundImage:
          "linear-gradient(to right, #1e2126 1px, transparent 1px), linear-gradient(to bottom, #1e2126 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#6e7bff",
          fontFamily: "monospace",
          marginBottom: 24,
        }}
      >
        {siteConfig.location}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 600,
          color: "#f2f3f5",
          letterSpacing: "-0.02em",
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 36,
          color: "#9aa0a8",
          marginTop: 20,
        }}
      >
        {siteConfig.role}
      </div>
    </div>,
    { ...size }
  );
}
