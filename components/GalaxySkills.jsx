"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};


function Galaxy() {
  const ref = useRef();

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = seededRandom(i * 9.42) * 4;
      const spin = radius * 2;

      const angle = seededRandom(i * 14.58) * Math.PI * 2;

      positions[i3] = Math.cos(angle + spin) * radius;
      positions[i3 + 1] = (seededRandom(i * 27.14) - 0.5) * 1.2; // 🔥 thickness added
      positions[i3 + 2] = Math.sin(angle + spin) * radius;
    }

    return positions;
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  return (
    <points ref={ref} rotation={[0.6, 0, 0]}> {/* 🔥 TILT */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.03} color="#a855f7" depthWrite={false} />
    </points>
  );
}


export default function GalaxySkills() {

  const skills = [
    "Problem Solving",
    "Critical Thinking",
    "Creativity",
    "Communication",
    "Adaptability",
    "Self Learning",
    "Persistence",
    "Goal Driven",
  ];

  return (
    <section className="h-screen relative flex items-center justify-center">

      {/* TITLE */}
      <div className="absolute top-16 text-center z-10">
        <h2 className="text-5xl font-bold 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
          Core Intelligence
        </h2>

        <p className="text-gray-400 mt-3">
          A dynamic system of thinking & innovation
        </p>
      </div>

      <Canvas camera={{ position: [0, 2, 8] }}> {/* 🔥 camera tilt */}

        <ambientLight intensity={0.6} />

        {/* 🌌 GALAXY */}
        <Galaxy />

        {/* 🔥 CORE */}
        <mesh>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial
            color="#9333ea"
            emissive="#9333ea"
            emissiveIntensity={2}
          />
        </mesh>

        {/* ✨ SKILLS IN 3D SPACE */}
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2;
          const radius = 3;

          const x = radius * Math.cos(angle);
          const z = radius * Math.sin(angle);
          const y = Math.sin(angle * 2) * 1.2; // 🔥 vertical spread

          return (
            <Billboard key={i} position={[x, y, z]}>
              <Text fontSize={0.35} color="white">
                {skill}
              </Text>
            </Billboard>
          );
        })}

      </Canvas>
    </section>
  );
}