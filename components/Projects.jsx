"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

/* 🌌 PROJECT DATA */
const projects = [
  {
    title: "Optiviz",
    desc: "An intelligent visualization platform that transforms complex data into meaningful insights.",
    tech: ["Next.js", "Tailwind", "JavaScript", "Spring Boot", "PostgreSQL", "charts.js"],
    github: "https://github.com/Sneha17-ops/Optiviz",
    live: "https://optiviz-frontend-8l7hjh17d-sneha17-ops-projects.vercel.app/",
    image: "/image.png"
  },
  {
    title: "PG-Wale Bhaiya",
    desc: "A smart platform for exploring and managing PG accommodations with ease.",
    tech: ["Next.js", "Tailwind", "JavaScript", "MongoDB", "MySQL", "Node.js", "Express.js"],
    github: "https://github.com/NikhilNayak12/PGwaleBhaiya",
    live: "https://pg-walebhaiya.web.app/",
    image: "/pg.png"
  },
  {
    title: "WishGrid",
    desc: "A creative platform to manage and organize wishlist ideas beautifully.",
    tech: ["Next.js", "Tailwind", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/BhriguKumarDeka/WishGrid",
    live: "#",
    image: "/wish.png"
  }
];

/* 🌌 PARTICLE BACKGROUND (FIXED) */
function Particles() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }));
    setPoints(generated);
  }, []);

  // Prevent hydration mismatch
  if (!points.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {points.map((point, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-50 animate-pulse"
          style={{ top: point.top, left: point.left }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white overflow-hidden">

      {/* 🌌 GLOBAL BACKGROUND */}
      <div className="absolute inset-0 
      bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 blur-3xl"></div>

      <Particles />

      {/* 🔥 TITLE */}
      <div className="text-center pt-24 mb-24 relative z-10">
        <h2 className="text-6xl font-bold 
        bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 
        text-transparent bg-clip-text">
          Project Universe
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Where ideas turn into impactful digital experiences
        </p>
      </div>

      {/* 🚀 PROJECT SECTIONS */}
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}

    </section>
  );
}

function ProjectCard({ project }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20 relative"
    >

      {/* 🌌 GLOW */}
      <div className="absolute inset-0 
      bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 
      blur-3xl"></div>

      {/* 💻 TEXT */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 z-10"
      >
        <h3 className="text-5xl font-bold mb-6 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
          {project.title}
        </h3>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          {project.desc}
        </p>

        {/* ⚙️ TECH */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm 
              bg-white/10 border border-white/10 
              hover:bg-purple-500/30 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 🔗 BUTTONS */}
        <div className="flex gap-4">
          <a href={project.github} target="_blank">
            <button className="px-6 py-2 rounded-full 
            bg-gradient-to-r from-purple-500 to-pink-500 
            hover:scale-110 transition">
              GitHub
            </button>
          </a>

          {project.live !== "#" && (
            <a href={project.live} target="_blank">
              <button className="px-6 py-2 rounded-full 
              border border-white/20 hover:bg-white/10 transition">
                Live 
              </button>
            </a>
          )}
        </div>
      </motion.div>

      {/* 🖼️ IMAGE */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{
          rotateY: 12,
          rotateX: 6,
          scale: 1.05
        }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10 perspective-1000"
      >
        <div className="relative group">

          {/* 🌌 GLOW */}
          <div className="absolute inset-0 
          bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
          blur-2xl opacity-30 group-hover:opacity-70 transition"></div>

          <Image
            src={project.image}
            alt={project.title}
            width={550}
            height={320}
            className="rounded-2xl border border-white/10 shadow-2xl relative"
          />

        </div>
      </motion.div>

    </motion.div>
  );
}