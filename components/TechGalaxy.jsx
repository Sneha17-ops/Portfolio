"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

/* 🌌 GALAXY BACKGROUND */
function Galaxy() {
  const ref = useRef();
  const [particles, setParticles] = useState(null);

  useEffect(() => {
    const count = 7000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 18;
      const spin = radius * 1.5;
      const angle = Math.random() * Math.PI * 2;

      positions[i3] = Math.cos(angle + spin) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * 2.5;
      positions[i3 + 2] = Math.sin(angle + spin) * radius;
    }

    setParticles(positions);
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005;
  });

  if (!particles) return null;

  return (
    <points ref={ref} rotation={[0.5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#ec4899" depthWrite={false} />
    </points>
  );
}

/* 🔄 PERFECT ORBIT SYSTEM */
function OrbitSkills({ skills }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0015;
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const total = skills.length;

        // 🔥 MULTI-LAYER ORBIT (NO OVERLAP)
        const layer = Math.floor(i / 10); // 10 items per ring
        const layerIndex = i % 10;

        const radius = 7 + layer * 2.5; // expanding rings
        const angle = (layerIndex / 10) * Math.PI * 2;

        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = layer * 0.6; // slight vertical separation

        return (
          <Billboard key={i} position={[x, y, z]}>
            <Text
              fontSize={0.6}
              color="#ffffff"
              outlineWidth={0.015}
              outlineColor="#000000"
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
}

/* 💻 MAIN COMPONENT */
export default function TechGalaxy() {
  const skills = [
    // Frontend
    "HTML5","CSS3","Tailwind","Bootstrap","JavaScript","TypeScript",
    "React","Next.js","jQuery",

    // Backend
    "Node.js","Express","PHP","Laravel","Spring Boot",

    // Database
    "MySQL","PostgreSQL","MongoDB",

    // Tools
    "Docker","Git","GitHub",

    // Languages
    "C","C++","Java","Python","JSON"
  ];

  return (
    <section className="h-screen w-full relative overflow-hidden">

      {/* 🌟 TITLE */}
      <div className="absolute top-16 w-full text-center z-10">
        <h2 className="text-5xl font-bold 
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 
        text-transparent bg-clip-text">
          Tech Galaxy
        </h2>

        <p className="text-gray-400 mt-3">
          My evolving ecosystem of technologies & tools
        </p>
      </div>

      {/* 🌌 CANVAS */}
      <Canvas camera={{ position: [0, 5, 22], fov: 60 }}>
        <ambientLight intensity={1.2} />

        <Galaxy />

        {/* 🔥 CORE */}
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={2}
          />
        </mesh>

        {/* 🚀 ORBIT */}
        <OrbitSkills skills={skills} />
      </Canvas>
    </section>
  );
}