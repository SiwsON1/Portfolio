import { Composition } from "remotion";
import { HeroFilm, HERO_FPS, HERO_WIDTH, HERO_HEIGHT, HERO_DURATION_FRAMES } from "./HeroFilm";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroFilm"
        component={HeroFilm}
        durationInFrames={HERO_DURATION_FRAMES}
        fps={HERO_FPS}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
      />
    </>
  );
};
