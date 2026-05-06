"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * V1B — Rotujący wireframe icosahedron + orbital particles + cyan glow.
 * Subtle data-visualization vibe. Kursor wpływa na rotację.
 */

function Wireframe({
  mouse,
  drag,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  drag: React.MutableRefObject<{ x: number; y: number; isDragging: boolean }>;
}) {
  const ref = useRef<THREE.LineSegments>(null);
  const rot = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Drag rotation: kursor naciskany przeciąga sferę bezpośrednio
    if (drag.current.isDragging) {
      rot.current.x = drag.current.y * Math.PI;
      rot.current.y = drag.current.x * Math.PI * 2;
    } else {
      // Idle: hover-driven tilt + powolna autorotacja
      const targetX = (mouse.current.y - 0.5) * 1.4;
      const targetY = rot.current.y + delta * 0.12 + (mouse.current.x - 0.5) * 0.012;
      rot.current.x += (targetX - rot.current.x) * 0.07;
      rot.current.y = targetY;
    }

    ref.current.rotation.x = rot.current.x;
    ref.current.rotation.y = rot.current.y;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.6, 4), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo, 8), [geo]);

  return (
    <>
      <lineSegments ref={ref} geometry={edges}>
        <lineBasicMaterial color="#A8DAFF" transparent opacity={0.85} linewidth={2} />
      </lineSegments>
      {/* Inner solid for depth */}
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

const ORBIT_COUNT = 220;
function OrbitalParticles({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
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
    const mouseTilt = (mouse.current.x - 0.5) * 0.5;
    for (let i = 0; i < ORBIT_COUNT; i++) {
      const angle = seeds[i * 4] + t * seeds[i * 4 + 3] * 0.18;
      const yOffset = seeds[i * 4 + 1];
      const radius = seeds[i * 4 + 2];
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = yOffset + Math.sin(angle * 1.3) * 0.18;
      positions[i * 3 + 2] = Math.sin(angle) * radius * Math.cos(mouseTilt);
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
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const drag = useRef({ x: 0, y: 0, isDragging: false });
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.isDragging = true;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: drag.current.y,
      rotY: drag.current.x,
    };
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouse.current.x = (e.clientX - r.left) / r.width;
    mouse.current.y = 1 - (e.clientY - r.top) / r.height;
    if (drag.current.isDragging) {
      const dx = (e.clientX - dragStart.current.x) / r.width;
      const dy = (e.clientY - dragStart.current.y) / r.height;
      drag.current.x = dragStart.current.rotY + dx;
      drag.current.y = dragStart.current.rotX + dy;
    }
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.isDragging = false;
    try { (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId); } catch {}
  };

  return (
    <div
      className="relative w-full h-full overflow-visible select-none"
      style={{ cursor: "grab", touchAction: "none" }}
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLDivElement).style.cursor = "grab";
      }}
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <Wireframe mouse={mouse} drag={drag} />
          <InnerCore />
          <OrbitalParticles mouse={mouse} />
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
    </div>
  );
}
