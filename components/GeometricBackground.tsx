"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Network = () => {
  const ref = useRef<THREE.Points>(null);

  // Generate random points in a sphere
  const count = 300; // Lightweight count
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      pos[i * 3] = Math.random() * 10 - 5;
      pos[i * 3 + 1] = Math.random() * 10 - 5;
      pos[i * 3 + 2] = Math.random() * 10 - 5;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;

      // Gentle oscillation
      ref.current.position.y = Math.sin(state.clock.elapsedTime / 4) * 0.2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#888888" // Neutral corporate grey/white
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      {/* Lines would require a more complex BufferGeometry setup, sticking to structured points for performance and similar look */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D9F70D" // Subtle brand accent
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
};

// A simple grid connector effect
const Connections = () => {
  const ref = useRef<THREE.LineSegments>(null);
  const count = 40;

  // Create random connections
  const { positions, indices } = useMemo(() => {
    const pos = [];
    const ind = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 2, // Flattened z
      );
    }

    // Connect nearby points (simplified: just connect in sequence for visual abstraction)
    for (let i = 0; i < count - 1; i++) {
      for (let j = i + 1; j < count; j++) {
        if (Math.random() > 0.95) {
          // Random sparse connections
          ind.push(i, j);
        }
      }
    }

    return {
      positions: new Float32Array(pos),
      indices: new Uint16Array(ind),
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 30;
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
          itemSize={1}
          args={[indices, 1]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
    </lineSegments>
  );
};

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50" />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Network />
        <Connections />
      </Canvas>
    </div>
  );
}
