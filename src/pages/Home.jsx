import AnimatedBackground from "../components/layout/AnimatedBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <AnimatedBackground />

      <Navbar />

      <div className="relative z-10">

        <Hero />

        {/* ABOUT */}
        <About />
        <TechStack />

        {/* PROJECT */}
        <section
          id="project"
          className="min-h-screen"
        />

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen"
        />

      </div>

    </main>
  );
}