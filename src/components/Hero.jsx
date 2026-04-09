import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { profile, projects } from "../data/portfolioData";

const words = ["Creative Coder", "Aspiring Software Engineer", "Problem Solver"];

function Hero() {
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const featured = useMemo(() => projects.find((project) => project.featured), []);

  useEffect(() => {
    const target = words[wordIndex];
    const timer = setTimeout(() => {
      if (letterIndex <= target.length) {
        setTyped(target.slice(0, letterIndex));
        setLetterIndex((v) => v + 1);
      } else {
        setTimeout(() => {
          setLetterIndex(0);
          setWordIndex((v) => (v + 1) % words.length);
        }, 1400);
      }
    }, 90);
    return () => clearTimeout(timer);
  }, [letterIndex, wordIndex]);

  useEffect(() => {
    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-24 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div className="hero-slide-card glass-card max-w-3xl p-8 md:p-12">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-pink-500/80">Hello Universe</p>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Hi, I&apos;m <span className="accent-text">Pavithra</span>
            </h1>
            <p className="mt-4 text-lg text-[#6B7280] md:text-2xl">
              I build intelligent &amp; beautiful digital experiences
            </p>
            <p className="mt-2 text-rose-500">
              {typed}
              <span className="ml-1 animate-pulse">|</span>
            </p>
            <a href="#projects" className="cta-btn mt-8 inline-flex">
              Explore My Work
            </a>
          </div>
          <motion.div
            className="featured-mini glass-card hidden p-4 lg:block"
            animate={{ x: mouse.x, y: mouse.y }}
            transition={{ type: "spring", stiffness: 30, damping: 16 }}
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-pink-500/75">Spotlight</p>
            <p className="text-xl font-semibold">{featured?.name}</p>
            <p className="mt-1 text-sm text-[#6B7280]">{profile.title}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
