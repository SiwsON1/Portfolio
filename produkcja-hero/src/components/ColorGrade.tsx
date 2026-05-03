import { AbsoluteFill } from "remotion";

/**
 * COOL BLUE & PEACH cinema look.
 * Cyan-blue dominant w shadowach, peach delikatnie tylko w highlightach (rim).
 * Pasuje do palety strony Atmosfera (midnight + overcast blue + peach).
 */
export const ColorGrade: React.FC = () => {
  return (
    <>
      {/* Cool cyan/blue shadows tint */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74, 143, 184, 0.0) 25%, rgba(45, 75, 110, 0.45) 100%)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
      {/* Subtle peach highlight (only on bright rim areas) */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(232, 178, 134, 0.12) 0%, rgba(232, 178, 134, 0) 40%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />
      {/* Cyan core glow center */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(120, 180, 220, 0.10) 0%, rgba(74, 143, 184, 0) 60%)",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />
      {/* Top-bottom mood gradient (deeper bottom) */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 19, 31, 0.0) 0%, rgba(20, 19, 31, 0.0) 60%, rgba(20, 19, 31, 0.35) 100%)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};
