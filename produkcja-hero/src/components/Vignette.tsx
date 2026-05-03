import { AbsoluteFill } from "remotion";

export const Vignette: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
        pointerEvents: "none",
      }}
    />
  );
};
