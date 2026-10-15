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
import { scene as wtyczki } from "./tworzenie-wtyczek-wordpress";
import { scene as integracje } from "./integracje-woocommerce";
import { scene as merchant } from "./google-merchant-center-woocommerce";
import { scene as migracja } from "./migracja-sklepu-do-woocommerce";
import { scene as konfigurator } from "./konfigurator-produktu";
import { scene as naprawa } from "./naprawa-sklepu-woocommerce";
import { scene as audyt } from "./audyt-sklepu-woocommerce";
import { scene as consent } from "./wdrozenie-consent-mode-v2";

/** Scenka per slug usługi (wszystkie 22). Usługa bez scenki dostałaby klasyczny hero (ServiceHeroVisual). */
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
  "tworzenie-wtyczek-wordpress": wtyczki,
  "integracje-woocommerce": integracje,
  "google-merchant-center-woocommerce": merchant,
  "migracja-sklepu-do-woocommerce": migracja,
  "konfigurator-produktu": konfigurator,
  "naprawa-sklepu-woocommerce": naprawa,
  "audyt-sklepu-woocommerce": audyt,
  "wdrozenie-consent-mode-v2": consent,
};
