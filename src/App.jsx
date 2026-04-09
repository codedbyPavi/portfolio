import { Suspense, lazy, useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundScene from "./components/BackgroundScene";
import CursorGlow from "./components/CursorGlow";
import FloatingNav from "./components/FloatingNav";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.from(".section-wrap", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#FFF7F5] text-[#1F2937]">
      <BackgroundScene />
      <CursorGlow />
      <div className="noise-overlay" />
      <FloatingNav />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Suspense fallback={<div className="section-wrap text-[#6B7280]">Loading immersive experience...</div>}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
