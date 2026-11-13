import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Darmowy test dostępności strony WCAG";

export default function OG() {
  return new ImageResponse(
    <div style={{ background: "#14131F", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "80px", color: "#EFE9E0", fontFamily: "serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(58,142,200,0.32) 0%, rgba(20,19,31,0) 70%)" }} />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6e6678", fontFamily: "monospace" }}>
        <span>DARMOWY TEST WCAG · MARCIN SIWONIA</span><span>marcinsiwonia.pl/sprawdz-dostepnosc</span>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: "-0.035em", fontStyle: "italic", fontWeight: 400, maxWidth: 1000 }}>Sprawdź dostępność strony</div>
      </div>
    </div>,
    { ...size }
  );
}
