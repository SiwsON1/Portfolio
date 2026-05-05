import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon generowany dynamicznie przez next/og — MS mark italic na peach gradient
 * tle. Brand-spójny, automatycznie skaluje się dla browsera, search results,
 * tab icons.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at center, #E8B286 0%, #D87B4E 60%, #1A1726 100%)",
          color: "#14131F",
          fontFamily: "serif",
          fontSize: 36,
          fontWeight: 600,
          fontStyle: "italic",
          letterSpacing: "-0.06em",
          lineHeight: 1,
        }}
      >
        MS
      </div>
    ),
    { ...size }
  );
}
