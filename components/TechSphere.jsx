"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";

export default function TechSphere() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <ambientLight intensity={1} />

        <Float speed={2}>
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial wireframe color="#8b5cf6" />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}