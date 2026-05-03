import {
  AbsoluteFill,
  Sequence,
  Video,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { ColorGrade } from "./components/ColorGrade";
import { Grain } from "./components/Grain";
import { Vignette } from "./components/Vignette";

export const HERO_FPS = 30;
export const HERO_WIDTH = 1920;
export const HERO_HEIGHT = 1080;

/*
 * Timeline — JEDEN klip, single shot, 12s loop @ 30fps = 360 frames.
 * "Blue Burn" — twarz objęta cool blue ogniem, bokiem, jeden render.
 */

export const HERO_DURATION_FRAMES = 360; // 12s @ 30fps

const TRACKS = [
  { src: "02-twarz.mp4", from: 0, durationInFrames: 360, fadeIn: 30, fadeOut: 45 },
];

export const HeroFilm: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#14131F" }}>
      {/* Tracks */}
      {TRACKS.map((t, i) => (
        <Sequence
          key={i}
          from={t.from}
          durationInFrames={t.durationInFrames}
          name={t.src}
        >
          <Track
            src={t.src}
            durationInFrames={t.durationInFrames}
            fadeIn={t.fadeIn}
            fadeOut={t.fadeOut}
          />
        </Sequence>
      ))}

      {/* Color grade overlay (teal shadows + orange highlights) */}
      <ColorGrade />

      {/* Vignette (cinematic fall-off) */}
      <Vignette />

      {/* Film grain (animated noise SVG) */}
      <Grain />

      {/* Master fade in/out for loop */}
      <MasterFade />
    </AbsoluteFill>
  );
};

const Track: React.FC<{
  src: string;
  durationInFrames: number;
  fadeIn: number;
  fadeOut: number;
}> = ({ src, durationInFrames, fadeIn, fadeOut }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, fadeIn, durationInFrames - fadeOut, durationInFrames],
    [0, 1, 1, 0],
    {
      easing: Easing.out(Easing.quad),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Subtle Ken Burns push-in for static cinema feel
  const scale = interpolate(frame, [0, durationInFrames], [1.0, 1.04], {
    easing: Easing.linear,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  let videoSrc: string | null = null;
  try {
    videoSrc = staticFile(`clips/${src}`);
  } catch {
    videoSrc = null;
  }

  if (!videoSrc) {
    return <ClipMissing name={src} />;
  }

  return (
    <AbsoluteFill style={{ opacity }}>
      <Video
        src={videoSrc}
        muted
        playbackRate={1}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        onError={() => null}
      />
    </AbsoluteFill>
  );
};

const ClipMissing: React.FC<{ name: string }> = ({ name }) => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #1A1726 0%, #14131F 60%, #1A2B3D 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 14,
          letterSpacing: "0.3em",
          color: "#4A8FB8",
          textTransform: "uppercase",
        }}
      >
        Missing clip
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 22,
          color: "#E8B286",
        }}
      >
        public/clips/{name}
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 12,
          color: "#6e6678",
          marginTop: 12,
        }}
      >
        Drop file to public/clips/ and refresh
      </div>
    </AbsoluteFill>
  );
};

const MasterFade: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, 18, HERO_DURATION_FRAMES - 24, HERO_DURATION_FRAMES],
    [1, 0, 0, 1],
    {
      easing: Easing.inOut(Easing.quad),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  return (
    <AbsoluteFill
      style={{ backgroundColor: "#14131F", opacity, pointerEvents: "none" }}
    />
  );
};
