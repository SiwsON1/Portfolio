import type { Scene } from "../types";
import { scene as wordpress } from "./tworzenie-stron-wordpress";
import { scene as woocommerce } from "./sklepy-internetowe-woocommerce";
import { scene as baselinker } from "./integracja-woocommerce-z-baselinker";
import { scene as headless } from "./headless-wordpress";
import { scene as nextjs } from "./aplikacje-nextjs";
import { scene as softwareHouse } from "./next-js-software-house";
import { scene as jamstack } from "./strony-jamstack";
import { scene as www } from "./tworzenie-stron-www";
import { scene as react } from "./aplikacje-react";
import { scene as ai } from "./wdrozenia-ai";
import { scene as modern } from "./nowoczesne-strony-internetowe";
import { scene as firmowa } from "./nowoczesna-strona-firmowa-2026";
import { scene as opieka } from "./opieka-wordpress";
import { scene as speed } from "./przyspieszanie-stron-wordpress";

/** Scenka per slug usługi (wszystkie 14). Usługa bez scenki dostałaby klasyczny hero (ServiceHeroVisual). */
export const SCENES: Record<string, Scene> = {
  "tworzenie-stron-wordpress": wordpress,
  "sklepy-internetowe-woocommerce": woocommerce,
  "integracja-woocommerce-z-baselinker": baselinker,
  "headless-wordpress": headless,
  "aplikacje-nextjs": nextjs,
  "next-js-software-house": softwareHouse,
  "strony-jamstack": jamstack,
  "tworzenie-stron-www": www,
  "aplikacje-react": react,
  "wdrozenia-ai": ai,
  "nowoczesne-strony-internetowe": modern,
  "nowoczesna-strona-firmowa-2026": firmowa,
  "opieka-wordpress": opieka,
  "przyspieszanie-stron-wordpress": speed,
};
