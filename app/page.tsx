import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}