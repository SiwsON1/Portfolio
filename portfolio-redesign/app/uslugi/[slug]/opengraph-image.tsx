import { ImageResponse } from "next/og";
import { services } from "@/lib/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Usługa Marcin Siwonia";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return new Response("Not found", { status: 404 });

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
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(58,142,200,0.32) 0%, rgba(20,19,31,0) 70%)",
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
          <span>USŁUGA · MARCIN SIWONIA</span>
          <span>marcinsiwonia.pl/uslugi/{s.slug}</span>
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              fontStyle: "italic",
              fontWeight: 400,
              maxWidth: 1000,
            }}
          >
            {s.h1}
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              color: "#E8B286",
              fontFamily: "monospace",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>{s.cta}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
