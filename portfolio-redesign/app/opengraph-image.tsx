import { ImageResponse } from "next/og";

export const alt = "Marcin Siwonia — web developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#14131F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "#EFE9E0",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(58,142,200,0.45) 0%, rgba(20,19,31,0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6e6678",
            fontFamily: "monospace",
          }}
        >
          <span>EST. MMXX</span>
          <span>WROCŁAW · PL</span>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Marcin Siwonia
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              color: "#B5A998",
              fontFamily: "sans-serif",
              maxWidth: 800,
            }}
          >
            Web developer · Next.js, React, AI, SEO
          </div>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#E8B286",
              fontFamily: "monospace",
            }}
          >
            <span>●</span>
            <span>marcinsiwonia.pl</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
