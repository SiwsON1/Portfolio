import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — kiedy ktoś dodaje stronę do home screen na iOS.
 * Większy MS mark + frame + status indicator.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #14131F 0%, #1A1726 50%, #2A1F3A 100%)",
          position: "relative",
        }}
      >
        {/* Inner peach circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 35%, #FBC58E 0%, #E8B286 50%, #C97A4A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(232,178,134,0.4)",
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              fontStyle: "italic",
              fontSize: 70,
              fontWeight: 600,
              color: "#14131F",
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            MS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
