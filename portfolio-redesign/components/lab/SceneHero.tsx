"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import dynamic from "next/dynamic";
import Link from "next/link";

const SceneCanvas = dynamic(() => Promise.resolve(SceneCanvasInner), {
  ssr: false,
  loading: () => null,
});

/**
 * V3 — Scene. Abstrakcyjna scena 3D z pływającymi sferami + glow core.
 * Camera slow orbit. Cursor sterują światłem (point light follows pointer).
 * Title overlay editorial top-left + bottom-right.
 */
export function SceneHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-bg">
      <SceneCanvas />

      {/* Top-left manifest */}
      <div className="absolute top-24 left-6 md:top-28 md:left-10 z-10 max-w-md">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
          Scene · 03 / 05 · Lab
        </p>
        <h1
          className="display text-ink"
          style={{ fontSize: "clamp(2.5rem, 1.2rem + 5vw, 6rem)", lineHeight: 0.95 }}
        >
          <em>Marcin</em>
          <br />
          Siwonia.
        </h1>
      </div>

      {/* Bottom-right manifest */}
      <div className="absolute bottom-24 right-6 md:right-10 z-10 max-w-sm text-right">
        <p className="text-ink text-lg md:text-xl font-display italic mb-4 leading-tight">
          Web developer, gdzieś między
          <br />
          kodem a kontemplacją.
        </p>
        <p className="text-ink-mute text-sm mb-6">
          Wrocław, jeden monitor, dużo kawy.
        </p>
        <Link
          href="/projekty"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-peach hover:underline underline-offset-4"
          data-cursor="OTWÓRZ"
        >
          Realizacje →
        </Link>
      </div>

      {/* Center mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/60 mix-blend-difference">
          drag · scroll · hover
        </p>
      </div>

      {/* Bottom frame ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-ink/10 backdrop-blur-[1px] flex items-center px-6 md:px-10 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/70 z-10">
        <span>FRAME 0001 · WROCŁAW · MMXX–MMXXVI</span>
      </div>
    </section>
  );
}

function SceneCanvasInner() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.5], fov: 50 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#14131F");
      }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * (viewport.width / 2);
      lightRef.current.position.y = mouse.y * (viewport.height / 2);
    }
  });

  return (
    <>
      <ambientLight intensity={0.18} color="#4a6f94" />
      <pointLight
        ref={lightRef}
        intensity={3.2}
        color="#a8daff"
        distance={6}
        decay={1.5}
        position={[0, 0, 2.5]}
      />
      <pointLight
        position={[3, 2, 2]}
        intensity={1.4}
        color="#e8b286"
        distance={6}
      />

      <group ref={groupRef}>
        <Sphere position={[0, 0, 0]} radius={1.0} color="#3A8EC8" coreEmissive="#a8daff" />
        <Sphere position={[1.8, 0.5, -0.5]} radius={0.45} color="#1A1726" />
        <Sphere position={[-1.6, -0.3, 0.4]} radius={0.55} color="#1A1726" />
        <Sphere position={[0.5, 1.5, -0.8]} radius={0.35} color="#E8B286" emissive="#E8B286" />
        <Sphere position={[-0.7, -1.4, 0.7]} radius={0.4} color="#1A1726" />
        <Sphere position={[2.2, -1.0, 0.3]} radius={0.3} color="#4A6F94" />
        <Sphere position={[-2.0, 1.3, -0.4]} radius={0.25} color="#1A1726" />
      </group>

      <Particles count={400} />
    </>
  );
}

function Sphere({
  position,
  radius,
  color,
  emissive,
  coreEmissive,
}: {
  position: [number, number, number];
  radius: number;
  color: string;
  emissive?: string;
  coreEmissive?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  const speed = useMemo(() => 0.5 + Math.random() * 0.6, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.18;
    ref.current.position.x = position[0] + Math.cos(t * speed * 0.7 + offset) * 0.12;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive ?? coreEmissive ?? "#000000"}
        emissiveIntensity={coreEmissive ? 0.35 : emissive ? 0.6 : 0}
        roughness={0.18}
        metalness={0.4}
      />
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#a8daff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
