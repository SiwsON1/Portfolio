import { AbsoluteFill, useCurrentFrame } from "remotion";

/**
 * Animated film grain. SVG fractalNoise that shifts seed per frame.
 */
export const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const seed = (frame % 30) + 1;
  return (
    <AbsoluteFill
      style={{
        opacity: 0.07,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed={seed}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </AbsoluteFill>
  );
};
