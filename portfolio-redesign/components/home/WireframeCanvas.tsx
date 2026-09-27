"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Drag-to-rotate sphere. Bez hovera. Bez window-tracking.
 * Planeta stoi spokojnie z mikroskopijną autorotacją żeby było widać że żyje,
 * a użytkownik łapie ją myszką jak kostkę Rubika i obraca.
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
function TiltGroup({ tilt, children }: { tilt: Tilt; children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const smooth = useRef({ x: 0, y: 0 });
  useFrame(() => {
    if (!ref.current) return;
    smooth.current.x += (tilt.current.x - smooth.current.x) * 0.08;
    smooth.current.y += (tilt.current.y - smooth.current.y) * 0.08;
    ref.current.rotation.x = smooth.current.x * 0.7;
    ref.current.rotation.y = smooth.current.y * 0.9;
    ref.current.position.x = smooth.current.y * 0.35;
    ref.current.position.y = -smooth.current.x * 0.25;
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

export function WireframeCanvas() {
  const drag = useRef({ x: 0, y: 0, isDragging: false });
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const tilt = useRef({ x: 0, y: 0 });
  const [tiltHint, setTiltHint] = useState<"none" | "ask" | "hint" | "off">("none");
  const tiltListening = useRef(false);

  const startTilt = () => {
    if (tiltListening.current) return;
    tiltListening.current = true;
    window.addEventListener(
      "deviceorientation",
      (e: DeviceOrientationEvent) => {
        if (e.beta == null || e.gamma == null) return;
        // Telefon trzymany zwykle pod kątem ok. 45°; to punkt zerowy przechyłu.
        tilt.current.x = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
        tilt.current.y = Math.max(-1, Math.min(1, e.gamma / 45));
      },
      { passive: true },
    );
    setTiltHint("hint");
    window.setTimeout(() => setTiltHint("off"), 3500);
  };

  // Żyroskop tylko na ekranach dotykowych. iOS wymaga zgody wywołanej dotknięciem, więc tam czekamy na tap.
  useEffect(() => {
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> } | undefined;
    if (!DOE) return;
    if (typeof DOE.requestPermission === "function") setTiltHint("ask");
    else startTilt();
  }, []);

  // Mouse tracking AKTYWUJE SIĘ DOPIERO PO CHWYCIE planety (pointerdown).
  // Po puszczeniu nasłuchiwacz odpina się — bez ruchu globalnego.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: PointerEvent) => {
      if (!drag.current.isDragging) return;
      const dx = (e.clientX - dragStart.current.x) / window.innerWidth;
      const dy = (e.clientY - dragStart.current.y) / window.innerHeight;
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
    if (tiltHint === "ask") {
      const DOE = window.DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> };
      DOE.requestPermission().then((r) => r === "granted" && startTilt()).catch(() => setTiltHint("none"));
    }
    drag.current.isDragging = true;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: drag.current.y,
      rotY: drag.current.x,
    };
  };

  return (
    <div
      className="relative w-full h-full overflow-visible select-none"
      style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }}
      onPointerDown={onPointerDown}
      data-cursor="CHWYĆ"
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <TiltGroup tilt={tilt}>
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
        }}
      />
      {tiltHint !== "none" && (
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint transition-opacity duration-700"
          style={{ opacity: tiltHint === "off" ? 0 : 0.9 }}
        >
          {tiltHint === "ask" ? "Dotknij kuli i przechyl telefon" : "Przechyl telefon"}
        </span>
      )}
    </div>
  );
}
