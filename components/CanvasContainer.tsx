/**
 * CanvasContainer: A 3D Background Component
 *
 * This file creates an animated starfield background using:
 * - Three.js (via React Three Fiber) for the 3D rendering.
 * - maath for generating random points in space.
 * - Framer-motion/Drei for simplified 3D components.
 */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";

// Component that generates and animates the star points
const Stars = (props: any) => {
  const ref = useRef<any>(null);

  // Create 5001 random points inside a 1.5 radius sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.5 }),
  );

  // Rotate the stars slightly every frame for a floating effect
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Main container that sets up the 3D Canvas
const CanvasContainer = () => {
  return (
    // Positioned as a fixed background layer (-z-10)
    <div className="w-full h-auto absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
