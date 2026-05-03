"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/*
 * PortraitCanvas — Twój portret z Magnifica wyświetlony na PlaneMesh w R3F
 * z fragment shaderem który robi animowaną dystorsję UV w górnej części
 * (gdzie są płomienie). Efekt: płomienie realnie się ruszają mimo że
 * podkład to statyczna fotka. Plus pulsujące cyan glow.
 *
 * Uwaga: ten komponent jest CONTAINED — renderuje tylko centralny portret,
 * NIE jest tłem hero.
 */

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTex;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAspect;

  // Simplex noise
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0))
                    + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.55;
    for(int i=0;i<5;i++){
      v += a * snoise(p);
      p = p * 2.13 + vec2(1.7, 9.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;

    // Mask: silna dystorsja na GÓRZE (płomienie), zero na dole (body)
    // uv.y=1 to top of plane (flames), uv.y=0 to bottom (body)
    float flameMask = smoothstep(0.35, 0.85, uv.y);

    // Mouse influence — gdzie kursor jest, dystorsja silniejsza
    vec2 mouseOffset = (uMouse - 0.5) * vec2(uAspect, 1.0);
    float mouseDist = distance(uv - vec2(0.5), mouseOffset * 0.5);
    float mouseBoost = exp(-mouseDist * mouseDist * 4.0) * 0.5;

    // Animated displacement field — mocniejszy ruch, szybszy
    float t = uTime * 0.85;
    vec2 noiseCoord = uv * vec2(2.6, 4.0) + vec2(0.0, -t * 0.9);
    float nx = fbm(noiseCoord + vec2(t * 0.5, 0.0));
    float ny = fbm(noiseCoord + vec2(0.0, t * 0.7) + 5.2);

    // Displacement vector (silne w górę + chaotic)
    float strength = (0.030 + mouseBoost * 0.025) * flameMask;
    vec2 displacement = vec2(nx, ny + 0.4) * strength;

    // Sample texture with displaced UV
    vec4 col = texture2D(uTex, uv + displacement);

    // Boost contrast — głębsze cienie, jaśniejsze highlighty
    col.rgb = pow(col.rgb, vec3(0.92));
    col.rgb = (col.rgb - 0.5) * 1.18 + 0.5;
    col.rgb = clamp(col.rgb, 0.0, 1.5);

    // Cyan pulse on flame areas — mocniejszy "puls"
    float pulse = 0.5 + 0.5 * sin(uTime * 2.2 + uv.y * 5.0);
    vec3 cyanBoost = vec3(0.6, 0.95, 1.15);
    col.rgb = mix(col.rgb, col.rgb * cyanBoost, flameMask * pulse * 0.32);

    // Strong ember sparkle (high freq noise highlights)
    float spark = fbm(uv * 42.0 + vec2(0.0, -t * 6.0));
    float sparkMask = smoothstep(0.5, 0.95, spark) * flameMask;
    col.rgb += vec3(0.7, 0.92, 1.1) * sparkMask * 0.6;

    // Extra glow boost on hot areas
    float hotMask = smoothstep(0.4, 1.0, dot(col.rgb, vec3(0.3))) * flameMask;
    col.rgb += vec3(0.15, 0.25, 0.35) * hotMask * pulse * 0.4;

    // PNG ma już alpha — używamy bezpośrednio + dodatkowo wycinamy dark resztki
    float pngAlpha = col.a;
    float luma = dot(col.rgb, vec3(0.299, 0.587, 0.114));
    float lumaAlpha = smoothstep(0.04, 0.30, luma);
    float alpha = pngAlpha * lumaAlpha;

    gl_FragColor = vec4(col.rgb, alpha);
  }
`;

function Plane({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  const tex = useLoader(THREE.TextureLoader, "/hero-portrait.png");

  // Texture quality
  useMemo(() => {
    if (!tex) return;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
  }, [tex]);

  const uniforms = useMemo(
    () => ({
      uTex: { value: tex },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: 1 },
    }),
    [tex]
  );

  useFrame((state) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    const cur = u.uMouse.value as THREE.Vector2;
    cur.x += (mouse.current.x - cur.x) * 0.06;
    cur.y += (mouse.current.y - cur.y) * 0.06;
    u.uAspect.value = viewport.width / viewport.height;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
      />
    </mesh>
  );
}

const EMBER_COUNT = 140;

function Embers({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const seeds = useMemo(() => {
    const arr = new Float32Array(EMBER_COUNT * 5);
    for (let i = 0; i < EMBER_COUNT; i++) {
      arr[i * 5] = Math.random();
      arr[i * 5 + 1] = Math.random();
      arr[i * 5 + 2] = 0.3 + Math.random() * 0.85;
      arr[i * 5 + 3] = Math.random() * Math.PI * 2;
      arr[i * 5 + 4] = 0.25 + Math.random() * 0.75;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    const w = viewport.width;
    const h = viewport.height;
    const mx = (mouse.current.x - 0.5) * w * 0.12;

    for (let i = 0; i < EMBER_COUNT; i++) {
      const ix = i * 5;
      const initX = seeds[ix];
      const initY = seeds[ix + 1];
      const speed = seeds[ix + 2];
      const swayPhase = seeds[ix + 3];
      const sizeFactor = seeds[ix + 4];

      const lifeTime = (t * speed * 0.32 + initY) % 1;
      const y = -h * 0.4 + lifeTime * h * 1.0;

      const baseX = (initX - 0.5) * w * 0.7 + mx * (0.3 + sizeFactor * 0.4);
      const sway = Math.sin(t * 0.8 + swayPhase + lifeTime * 4.5) * 0.18;
      const x = baseX + sway;

      const fade =
        Math.min(lifeTime / 0.12, 1) * Math.min((1 - lifeTime) / 0.25, 1);
      const scale = sizeFactor * 0.018 * fade;

      dummy.position.set(x, y, 0.1);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, EMBER_COUNT]}
      frustumCulled={false}
    >
      <circleGeometry args={[1, 8]} />
      <meshBasicMaterial
        color="#A8DAFF"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

export function PortraitCanvas() {
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
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <Plane mouse={mouse} />
          <Embers mouse={mouse} />
        </Suspense>
      </Canvas>

      {/* Strong outer cyan glow blooming — siedzi na zewnatrz mask w outer div */}
    </div>
  );
}

// Backward-compat alias — Hero.tsx imports `Atmosphere` symbol
export const Atmosphere = PortraitCanvas;
