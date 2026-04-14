import { Suspense, lazy, useEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
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
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-cream font-sans text-ink">
      <div className="noise-overlay" />
      <FloatingNav />
      <AnimatePresence mode="wait">
        <motion.main className="relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <Suspense
            fallback={
              <div className="font-accent mx-auto flex min-h-[40vh] max-w-7xl items-center justify-center px-6 text-sm font-medium tracking-wide text-inkMuted md:px-10">
                loading…
              </div>
            }
          >
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Achievements />
            <div className="section-divider" />
            <Contact />
          </Suspense>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
