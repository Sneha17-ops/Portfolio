"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";

/* 🔒 CLIENT ONLY */
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return children;
}

/* 🌌 SEEDED RANDOM */
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

/* 🌌 GALAXY */
function Galaxy() {
  const ref = useRef();

  const particles = useMemo(() => {
    const count = 3500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = seededRandom(i * 5.1) * 10;
      const spin = radius * 1.5;
      const angle = seededRandom(i * 1.9) * Math.PI * 2;

      positions[i3] = Math.cos(angle + spin) * radius;
      positions[i3 + 1] = (seededRandom(i * 3.7) - 0.5) * 2;
      positions[i3 + 2] = Math.sin(angle + spin) * radius;
    }

    return positions;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0004;
    }
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
      <pointsMaterial size={0.025} color="#a855f7" depthWrite={false} />
    </points>
  );
}

/* 🎥 CINEMATIC CAMERA */
function CameraMotion() {
  const cameraRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();

    // 🎬 Smooth zoom (breathing)
    camera.position.z = 10 + Math.sin(t * 0.5) * 0.5;

    // 🌀 Parallax effect
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y * 1.5 - camera.position.y) * 0.05;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ✨ TYPEWRITER */
function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1
      className="text-5xl md:text-7xl font-bold text-white"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

/* 💎 HERO */
export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >

      {/* 🌌 CINEMATIC GALAXY */}
      <ClientOnly>
        <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
          <ambientLight intensity={1.2} />
          <CameraMotion />
          <Galaxy />
        </Canvas>
      </ClientOnly>

      {/* 🔥 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute text-center z-10 px-6"
      >

        <Typewriter text="Sneha Singh" />

        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          AI Enthusiast • Full Stack Developer • Innovator
        </p>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          A passionate Computer Science student specializing in Artificial Intelligence 
          and Full Stack Development, dedicated to building innovative, scalable, 
          and user-centric digital solutions.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="/Sneha Singh CV (2).pdf"
            target="_blank"
            className="px-8 py-3 rounded-full 
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white font-medium 
            hover:scale-105 transition 
            shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full 
            border border-white/20 text-white 
            hover:bg-white/10 transition"
          >
            Let’s Connect
          </a>

        </div>
      </motion.div>

      {/* 🌌 DEPTH GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full"></div>

    </motion.section>
  );
}