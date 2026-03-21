"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "Bachelor of Technology (CSE)",
      place: "Lovely Professional University",
      duration: "2023 – Present",
      desc: "Focused on Artificial Intelligence, Full Stack Development, and building real-world innovative projects.",
    },
    {
      title: "Senior Secondary (12th)",
      place: "Sophia Girls' Senior Secondary School",
      duration: "2022 – 2023",
      desc: "Studied Physics, Chemistry, and Mathematics with strong analytical and problem-solving focus.",
    },
    {
      title: "Secondary (10th)",
      place: "Sophia Girls' Senior Secondary School",
      duration: "2020 – 2021",
      desc: "Built a strong academic foundation and developed curiosity towards technology and innovation.",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      {/* 🔥 TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
          Education Journey
        </h2>

        <p className="text-gray-400 mt-4">
          My academic path shaping my technical foundation
        </p>
      </div>

      {/* 🎯 TIMELINE */}
      <div className="relative max-w-4xl mx-auto">

        {/* LINE */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-30"></div>

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-16 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* CONTENT BOX */}
            <div className="w-[45%] p-6 rounded-2xl 
            bg-white/5 backdrop-blur-xl border border-white/10 
            shadow-xl hover:scale-105 transition duration-300">

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-purple-400 text-sm mt-1">
                {item.place}
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {item.duration}
              </p>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* 🎯 DOT */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 
            bg-gradient-to-r from-purple-500 to-pink-500 
            rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}