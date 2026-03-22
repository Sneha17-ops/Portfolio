"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      {/* 🔥 MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 backdrop-blur-xl bg-white/5 
        border border-white/10 rounded-3xl p-12 w-[90%] max-w-3xl text-center shadow-2xl"
      >
        {/* TITLE */}
        <h2 className="text-5xl font-bold 
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
        text-transparent bg-clip-text">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mt-4 mb-10">
          I’m always open to collaborations, opportunities, and tech discussions 🚀
        </p>

        {/* CONTACT OPTIONS */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* 📧 EMAIL */}
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.08 }}
            className="flex-1 p-6 rounded-2xl 
            bg-gradient-to-r from-pink-500/20 to-purple-500/20 
            border border-white/10 
            hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]
            transition duration-300 cursor-pointer"
          >
            <p className="text-xl font-semibold">📧 Email</p>
            <p className="text-white font-medium mt-2">your.email@example.com</p>
            <p className="text-gray-400 text-sm mt-1">
              Send me a message
            </p>
          </motion.a>

          {/* 💼 LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/sneha-singh-01b053294/"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="flex-1 p-6 rounded-2xl 
            bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            border border-white/10 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
            transition duration-300 cursor-pointer"
          >
            <p className="text-xl font-semibold">💼 LinkedIn</p>
            <p className="text-white font-medium mt-2">sneha-singh-01b053294</p>
            <p className="text-gray-400 text-sm mt-1">
              Let’s connect professionally
            </p>
          </motion.a>

          {/* 📱 PHONE */}
          <motion.a
            href="tel:9149097768"
            whileHover={{ scale: 1.08 }}
            className="flex-1 p-6 rounded-2xl 
            bg-gradient-to-r from-purple-500/20 to-pink-500/20 
            border border-white/10 
            hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
            transition duration-300 cursor-pointer"
          >
            <p className="text-xl font-semibold">📱 Phone</p>
            <p className="text-white font-medium mt-2">+91 91490 97768</p>
            <p className="text-gray-400 text-sm mt-1">
              Call or WhatsApp
            </p>
          </motion.a>

        </div>

        {/* 🔥 CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 mt-10 text-sm"
        >
          Let’s build something amazing together ✨
        </motion.p>
      </motion.div>
    </section>
  );
}