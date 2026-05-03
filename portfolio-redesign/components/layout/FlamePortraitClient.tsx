"use client";

import dynamic from "next/dynamic";

const PortraitCanvas = dynamic(
  () => import("@/components/home/Atmosphere").then((m) => m.PortraitCanvas),
  { ssr: false, loading: () => null }
);

export function FlamePortraitClient() {
  return <PortraitCanvas />;
}
