"use client";

import dynamic from "next/dynamic";

const GalaxySkills = dynamic(() => import("./GalaxySkills"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
});

const TechGalaxy = dynamic(() => import("./TechGalaxy"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
});

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white">

      {/* 🧠 SOFT SKILLS */}
      <div className="min-h-screen flex items-center justify-center">
        <GalaxySkills />
      </div>

      {/* ✨ DIVIDER (premium spacing) */}
      <div className="h-32 flex items-center justify-center">
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      </div>

      {/* 💻 TECH SKILLS */}
      <div className="min-h-screen flex items-center justify-center">
        <TechGalaxy />
      </div>

    </section>
  );
}