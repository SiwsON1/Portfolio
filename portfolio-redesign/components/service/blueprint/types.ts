import type { CSSProperties, ReactNode } from "react";

/** Punkt drogi kursora w jednostkach planszy (320 × 236). `at` = moment dotarcia, `travel` = czas lotu z poprzedniego punktu. */
export type Waypoint = { at: number; x: number; y: number; click?: boolean; travel?: number };

/** Chip przeciągany przez kursor (np. nazwa bloku), lot od `from` do `to` między `start` a `end`. */
export type Chip = { text: string; from: [number, number]; to: [number, number]; start: number; end: number };

export type Scene = {
  /** Podpis pod planszą (mono, jedna linia). */
  caption: string;
  /** Długość sekwencji w ms; po niej pojawia się „Odtwórz”. */
  duration: number;
  badge: { title: string; sub: string; icon: ReactNode };
  /** Kontur rysowany za planszą (ścieżka 24 × 24). */
  watermark: ReactNode;
  cursor?: Waypoint[];
  chips?: Chip[];
  toast?: { at: number; text: string; short?: string; style?: CSSProperties };
  /** Wnętrze planszy: pozycje w % planszy. */
  panel: ReactNode;
  /** Dodatkowe elementy na warstwie nad planszą (translateZ 34px). */
  over?: ReactNode;
};
