"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
    >
      {/* 🧠 LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Animated lines */}
        {[
          "A passionate Computer Science student specializing in Artificial Intelligence and Full Stack Development, dedicated to building innovative, scalable, and user-centric digital solutions.",
          "With a strong foundation in modern technologies like React, Next.js, Node.js, and databases, I enjoy transforming ideas into impactful real-world applications.",
          "I am constantly learning, experimenting, and pushing boundaries to create meaningful digital experiences that combine creativity with performance.",
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="text-gray-400 leading-relaxed"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      {/* 📸 RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <div className="relative group">

          {/* 🌌 Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

          {/* 💎 Glass Card */}
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10">

            {/* Image */}
            <img
              src="/profile pic.jpeg"
              alt="Sneha"
              className="w-80 h-96 object-cover 
              transform group-hover:scale-110 group-hover:rotate-1 
              transition duration-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}