"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";

/* ✅ SEEDED RANDOM */
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/* 🌌 GALAXY */
function Galaxy() {
  const ref = useRef();

  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = seededRandom(i * 5.3) * 12;
      const spin = radius * 2;
      const angle = seededRandom(i * 2.1) * Math.PI * 2;

      positions[i3] = Math.cos(angle + spin) * radius;
      positions[i3 + 1] = (seededRandom(i * 3.7) - 0.5) * 2;
      positions[i3 + 2] = Math.sin(angle + spin) * radius;
    }

    return positions;
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0007;
  });

  return (
    <points ref={ref} rotation={[0.6, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.025} color="#c084fc" depthWrite={false} />
    </points>
  );
}

/* 🌠 SHOOTING STARS */
function ShootingStars() {
  const starsRef = useRef([]);

  const stars = useMemo(() => {
    return new Array(8).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 10,
        (Math.random() - 0.5) * 20
      ],
      speed: 0.1 + Math.random() * 0.2,
    }));
  }, []);

  useFrame(() => {
    starsRef.current.forEach((star) => {
      star.position.x += 0.15;
      star.position.y -= 0.15;

      if (star.position.x > 12 || star.position.y < -6) {
        star.position.x = -12;
        star.position.y = Math.random() * 10;
      }
    });
  });

  return (
    <>
      {stars.map((star, i) => (
        <mesh
          key={i}
          ref={(el) => (starsRef.current[i] = el)}
          position={star.position}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </>
  );
}

/* 🔄 ORBIT */
function OrbitCertificates({ data, radius, speed, onHover, onLeave }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += speed;
  });

  return (
    <group ref={groupRef}>
      {data.map((item, i) => {
        const angle = (i / data.length) * Math.PI * 2;

        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <Billboard key={i} position={[x, 0, z]}>
            <Text
              fontSize={0.7}
              color="#ffffff"
              outlineWidth={0.02}
              outlineColor="#000"
              onPointerOver={() => item.file && onHover(item)}
              onPointerOut={onLeave}
              onClick={() => item.file && window.open(item.file, "_blank")}
            >
              {item.name}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
}

/* 💻 MAIN */
export default function CertificateGalaxy() {
  const [hovered, setHovered] = useState(null);

  const certificates = [
    {
      name: "Scalar Certification",
      file: "/scalar (1).pdf",
      desc: "Advanced DSA and problem-solving training."
    },
    {
      name: "Java Bootcamp",
      file: "/summer training.pdf",
      desc: "Industrial training with real-world development."
    },
    {
      name: "Udemy Certification",
      file: "/Udemy (1).pdf",
      desc: "Modern web development and technologies."
    },
    
    
  ];

  return (
    <section className="h-screen relative">

      {/* TITLE */}
      <div className="absolute top-10 w-full text-center z-10">
        <h2 className="text-5xl font-bold 
        bg-gradient-to-r from-purple-400 to-pink-500 
        text-transparent bg-clip-text">
          Certification Galaxy
        </h2>

        <p className="text-gray-400 mt-3">
          Verified achievements & learning journey
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 18] }}>
        <ambientLight intensity={1} />

        <Galaxy />
        <ShootingStars />

        {/* CORE */}
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#c084fc"
            emissiveIntensity={2}
          />
        </mesh>

        {/* 🪐 INNER ORBIT */}
        <OrbitCertificates
          data={certificates.slice(0, 3)}
          radius={5}
          speed={0.002}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
        />

        {/* 🪐 OUTER ORBIT */}
        <OrbitCertificates
          data={certificates.slice(3)}
          radius={9}
          speed={0.001}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
        />

      </Canvas>

      {/* DESCRIPTION BOX */}
      {hovered && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
        bg-white/10 backdrop-blur-xl border border-white/10 
        px-6 py-4 rounded-2xl text-center 
        shadow-[0_0_25px_rgba(192,132,252,0.4)]">

          <h3 className="text-purple-400 font-semibold text-lg">
            {hovered.name}
          </h3>

          <p className="text-gray-300 text-sm mt-2 max-w-md">
            {hovered.desc}
          </p>

          {hovered.file && (
            <button
              onClick={() => window.open(hovered.file, "_blank")}
              className="mt-3 text-xs text-purple-400 hover:text-purple-300 font-medium"
            >
              View Certificate →
            </button>
          )}
        </div>
      )}
    </section>
  );
}