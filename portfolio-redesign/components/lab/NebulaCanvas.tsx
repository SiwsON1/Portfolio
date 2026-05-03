"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * V1D — Particle nebula. ~3000 cząstek formuje abstrakcyjną mgławicę,
 * przyciąganych do mouse pozycji + naturalna rotacja. Cool blue + peach mix.
 */

const PARTICLE_COUNT = 3200;

function Nebula({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const seeds = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 6);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 0.7 + Math.pow(Math.random(), 2) * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 6] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 6 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 6 + 2] = r * Math.cos(phi) * 0.6;
      arr[i * 6 + 3] = (Math.random() - 0.5) * 0.4;
      arr[i * 6 + 4] = 0.4 + Math.random() * 1.2;
      arr[i * 6 + 5] = Math.random() * Math.PI * 2;
    }
    return arr;
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = seeds[i * 6];
      arr[i * 3 + 1] = seeds[i * 6 + 1];
      arr[i * 3 + 2] = seeds[i * 6 + 2];
    }
    return arr;
  }, [seeds]);

  const colors = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    const peach = new THREE.Color("#E8B286");
    const cyan = new THREE.Color("#A8DAFF");
    const blue = new THREE.Color("#3A8EC8");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = Math.random();
      const c = r < 0.15 ? peach : r < 0.45 ? cyan : blue;
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const mx = (mouse.current.x - 0.5) * 1.4;
    const my = (mouse.current.y - 0.5) * 1.0;

    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 6;
      const baseX = seeds[ix];
      const baseY = seeds[ix + 1];
      const baseZ = seeds[ix + 2];
      const speed = seeds[ix + 4];
      const phase = seeds[ix + 5];

      // Slow swirl around y-axis
      const angle = t * speed * 0.04 + phase;
      const cs = Math.cos(angle);
      const sn = Math.sin(angle);
      const swirledX = baseX * cs - baseZ * sn;
      const swirledZ = baseX * sn + baseZ * cs;

      // Slight pull toward mouse
      const targetX = swirledX + mx * 0.25;
      const targetY = baseY + my * 0.18 + Math.sin(t * 0.4 + phase) * 0.05;

      arr[i * 3] = targetX;
      arr[i * 3 + 1] = targetY;
      arr[i * 3 + 2] = swirledZ;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = t * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={PARTICLE_COUNT} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={PARTICLE_COUNT} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function NebulaCanvas() {
  const mouse = useRef({ x: 0.5, y: 0.5 });
  return (
    <div
      className="relative w-full h-full overflow-visible"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = (e.clientX - r.left) / r.width;
        mouse.current.y = 1 - (e.clientY - r.top) / r.height;
      }}
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Nebula mouse={mouse} />
        </Suspense>
      </Canvas>
      <div
        aria-hidden
        className="absolute -inset-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(168, 218, 255, 0.25) 0%, rgba(168, 218, 255, 0) 70%)",
          mixBlendMode: "screen",
          animation: "portraitGlow 6s ease-in-out infinite",
        }}
      />
    </div>
  );
}
