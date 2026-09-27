"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Drag-to-rotate sphere. Bez hovera. Bez window-tracking.
 * Planeta stoi spokojnie z mikroskopijną autorotacją żeby było widać że żyje,
 * a użytkownik łapie ją myszką jak kostkę Rubika i obraca.
 * Na telefonie dochodzi przechył za żyroskopem.
 */

function Wireframe({
  drag,
}: {
  drag: React.MutableRefObject<{ x: number; y: number; isDragging: boolean }>;
}) {
  const ref = useRef<THREE.LineSegments>(null);
  const rot = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;

    if (drag.current.isDragging) {
      rot.current.x = drag.current.y * Math.PI;
      rot.current.y = drag.current.x * Math.PI * 2;
    } else {
      // Multi-axis idle rotation — planet drifts w Y + X + Z dla wrażenia żywego obiektu w przestrzeni
      rot.current.y += delta * 0.12;
      rot.current.x += delta * 0.045;
    }

    ref.current.rotation.x = rot.current.x + Math.sin(t * 0.32) * 0.18;
    ref.current.rotation.y = rot.current.y;
    ref.current.rotation.z = Math.sin(t * 0.24) * 0.22 + Math.cos(t * 0.15) * 0.12;
  });

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.6, 4), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo, 8), [geo]);

  return (
    <>
      <lineSegments ref={ref} geometry={edges}>
        <lineBasicMaterial color="#A8DAFF" transparent opacity={0.85} linewidth={2} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[1.55, 4]} />
        <meshBasicMaterial color="#1A1726" transparent opacity={0.85} />
      </mesh>
    </>
  );
}

function InnerCore() {
  const ref = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      const s = 0.95 + Math.sin(t * 1.4) * 0.08;
      ref.current.scale.set(s, s, s);
    }
    if (ref2.current) {
      const s = 0.78 + Math.sin(t * 2.1) * 0.06;
      ref2.current.scale.set(s, s, s);
    }
  });
  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshBasicMaterial color="#3A8EC8" transparent opacity={0.45} />
      </mesh>
      <mesh ref={ref2}>
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshBasicMaterial color="#A8DAFF" transparent opacity={0.55} />
      </mesh>
    </>
  );
}

type Tilt = React.MutableRefObject<{ x: number; y: number }>;

/** Cała scena przechyla się za telefonem (żyroskop). Wygładzenie, żeby ruch był miękki, a nie drgający. */
function TiltGroup({
  tilt,
  depthRef,
  children,
}: {
  tilt: Tilt;
  depthRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const smooth = useRef({ x: 0, y: 0 });
  useFrame(() => {
    if (!ref.current) return;
    smooth.current.x += (tilt.current.x - smooth.current.x) * 0.08;
    smooth.current.y += (tilt.current.y - smooth.current.y) * 0.08;
    // Subtelnie, jak paralaksa w iOS (ok. 15°); większe wychylenie wyglądało jak zabawka.
    ref.current.rotation.x = smooth.current.x * 0.28;
    ref.current.rotation.y = smooth.current.y * 0.32;
    ref.current.position.x = smooth.current.y * 0.12;
    ref.current.position.y = -smooth.current.x * 0.1;
    // Druga warstwa głębi: poświata w DOM jedzie w przeciwną stronę niż kula.
    depthRef.current?.style.setProperty("--tx", smooth.current.y.toFixed(3));
    depthRef.current?.style.setProperty("--ty", smooth.current.x.toFixed(3));
  });
  return <group ref={ref}>{children}</group>;
}

const ORBIT_COUNT = 220;
function OrbitalParticles() {
  const ref = useRef<THREE.Points>(null);
  const seeds = useMemo(() => {
    const arr = new Float32Array(ORBIT_COUNT * 4);
    for (let i = 0; i < ORBIT_COUNT; i++) {
      arr[i * 4] = Math.random() * Math.PI * 2;
      arr[i * 4 + 1] = (Math.random() - 0.5) * 0.6;
      arr[i * 4 + 2] = 1.85 + Math.random() * 0.4;
      arr[i * 4 + 3] = 0.4 + Math.random() * 0.8;
    }
    return arr;
  }, []);

  const positions = useMemo(() => new Float32Array(ORBIT_COUNT * 3), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < ORBIT_COUNT; i++) {
      const angle = seeds[i * 4] + t * seeds[i * 4 + 3] * 0.18;
      const yOffset = seeds[i * 4 + 1];
      const radius = seeds[i * 4 + 2];
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = yOffset + Math.sin(angle * 1.3) * 0.18;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={ORBIT_COUNT} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#E8B286"
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

type Hint = "none" | "ask" | "hint" | "off";

export function WireframeCanvas() {
  const drag = useRef({ x: 0, y: 0, isDragging: false });
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0, touch: false });
  const [isDragging, setIsDragging] = useState(false);
  const [coarse, setCoarse] = useState(false);
  const tilt = useRef({ x: 0, y: 0 });
  const depthRef = useRef<HTMLDivElement>(null);
  const [hint, setHint] = useState<Hint>("none");
  const stopTilt = useRef<() => void>(() => {});

  const startTilt = () => {
    stopTilt.current();
    let base: { b: number; g: number } | null = null;
    let shown = false;
    let hideId = 0;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      // Oś zależy od orientacji ekranu; w poziomie beta i gamma zamieniają się rolami.
      const angle = screen.orientation?.angle ?? 0;
      let b = e.beta;
      let g = e.gamma;
      if (angle === 90) [b, g] = [-e.gamma, e.beta];
      else if (angle === 270 || angle === -90) [b, g] = [e.gamma, -e.beta];
      // Zerem jest sposób, w jaki ktoś trzyma telefon; powoli dryfuje, więc leżąc albo przy biurku kula nie stoi przekrzywiona.
      if (!base) base = { b, g };
      base.b += (b - base.b) * 0.01;
      base.g += (g - base.g) * 0.01;
      tilt.current.x = Math.max(-1, Math.min(1, (b - base.b) / 25));
      tilt.current.y = Math.max(-1, Math.min(1, (g - base.g) / 25));
      // Podpowiedź dopiero, gdy czujnik naprawdę coś wysyła: tablety i laptopy dotykowe mają API, ale bez danych.
      if (!shown) {
        shown = true;
        setHint("hint");
        hideId = window.setTimeout(() => setHint("off"), 3200);
      }
    };
    window.addEventListener("deviceorientation", onOrient, { passive: true });
    stopTilt.current = () => {
      window.removeEventListener("deviceorientation", onOrient);
      window.clearTimeout(hideId);
    };
  };

  // Żyroskop tylko na dotyku. iOS wymaga zgody wywołanej kliknięciem (nie pointerdown), więc tam czekamy na tap.
  useEffect(() => {
    const isCoarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    setCoarse(isCoarse);
    if (!isCoarse || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> } | undefined;
    if (!DOE) return;
    if (typeof DOE.requestPermission === "function") {
      const saved = sessionStorage.getItem("tilt-permission");
      if (saved === "granted") startTilt();
      else if (saved !== "denied") setHint("ask");
    } else startTilt();
    return () => stopTilt.current();
  }, []);

  const askPermission = () => {
    if (hint !== "ask") return;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> };
    DOE.requestPermission()
      .then((r) => {
        sessionStorage.setItem("tilt-permission", r);
        if (r === "granted") startTilt();
        else setHint("none");
      })
      .catch(() => setHint("none"));
  };

  // Śledzenie ruchu włącza się dopiero po chwycie kuli. Na dotyku tylko poziomo: pion zostaje dla przewijania strony.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!drag.current.isDragging) return;
      const dx = (e.clientX - dragStart.current.x) / window.innerWidth;
      const dy = dragStart.current.touch ? 0 : (e.clientY - dragStart.current.y) / window.innerHeight;
      drag.current.x = dragStart.current.rotY + dx * 2;
      drag.current.y = dragStart.current.rotX + dy * 2;
    };
    const onUp = () => {
      if (!drag.current.isDragging) return;
      drag.current.isDragging = false;
      setIsDragging(false);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.isDragging = true;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: drag.current.y,
      rotY: drag.current.x,
      touch: e.pointerType === "touch",
    };
  };

  return (
    <div
      ref={depthRef}
      className="relative w-full h-full overflow-visible select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: coarse ? "pan-y" : "none" }}
      onPointerDown={onPointerDown}
      onClick={askPermission}
      data-cursor="CHWYĆ"
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <TiltGroup tilt={tilt} depthRef={depthRef}>
            <Wireframe drag={drag} />
            <InnerCore />
            <OrbitalParticles />
          </TiltGroup>
        </Suspense>
      </Canvas>
      <div
        aria-hidden
        className="absolute -inset-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(58, 142, 200, 0.30) 0%, rgba(58, 142, 200, 0) 70%)",
          mixBlendMode: "screen",
          animation: "portraitGlow 5.5s ease-in-out infinite",
          translate: "calc(var(--tx, 0) * -18px) calc(var(--ty, 0) * 14px)",
        }}
      />
      {hint !== "none" && (
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-1 flex justify-center items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: hint === "off" ? 0 : 1, translate: hint === "off" ? "0 6px" : "0 0" }}
        >
          <span className="tilt-glyph inline-block h-3 w-2 rounded-[3px] border border-peach/70" />
          {hint === "ask" ? "Dotknij kuli, by włączyć ruch" : "Przechyl telefon"}
        </span>
      )}
    </div>
  );
}
