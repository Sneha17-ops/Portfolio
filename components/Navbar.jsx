"use client";

export default function Navbar() {
  return (
    <div className="fixed top-6 w-full flex justify-center z-50">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full flex gap-6 text-sm text-gray-300">

        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#certificates" className="hover:text-white transition">Certificates</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#education" className="hover:text-white transition">Education</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
        

      </div>
    </div>
  );
}