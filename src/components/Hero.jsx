import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const roles = ["FULL STACK DEVELOPER", "REACT DEVELOPER", "AI ENTHUSIAST", "PROBLEM SOLVER"];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), 1300);
      return () => clearTimeout(id);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((v) => (v + 1) % words.length);
      return undefined;
    }

    const timeout = deleting ? 45 : 85;
    const id = setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
    }, timeout);

    return () => clearTimeout(id);
  }, [deleting, text, wordIndex, words]);

  return text;
}

const floaters = [
  { Icon: Star, className: "left-[8%] top-[24%] text-amber-200/45", delay: 0 },
  { Icon: Sparkles, className: "right-[8%] top-[28%] text-neon-cyan/40", delay: 0.35 },
  { Icon: Star, className: "left-1/2 top-[14%] -translate-x-1/2 text-neon-pink/35", delay: 0.7 },
];

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const typed = useTypewriter(useMemo(() => roles, []));

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * -6;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-mesh-hero pb-20 pt-28 md:pb-28 md:pt-32"
      style={{ backgroundColor: "#fdf8f5" }}
    >
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="wave wave5"></div>
      </div>

      {floaters.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: 0.15 + delay, duration: 0.7 },
            y: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.2} />
        </motion.div>
      ))}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-pink/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-[90px]" />

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 md:px-10" style={{ perspective: "1200px" }}>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: tilt.y * 0.2, rotateY: tilt.x * 0.2 }}
          transition={{ type: "spring", stiffness: 55, damping: 20 }}
        >
          <motion.p
            className="font-accent text-lg font-bold uppercase tracking-[0.14em] text-neon-pink md:text-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
          >
            Hello
          </motion.p>

          <motion.h1
            className="hero-slide-card font-display mt-3 text-[clamp(2.5rem,7vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.75 }}
          >
            <span className="block shimmer-name">Pavithra Devi</span>
            <span className="font-script mt-2 block text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-none text-neon-magenta">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="font-accent mx-auto mt-8 max-w-xl text-sm font-semibold uppercase leading-relaxed tracking-[0.18em] text-inkMuted md:text-base md:tracking-[0.24em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65 }}
          >
            {typed}
            <span className="ml-1 inline-block animate-pulse align-middle text-neon-pink">|</span>
          </motion.p>

          <motion.div
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
          >
            <a href="#projects" className="cta-btn">
              <Sparkles className="h-4 w-4 text-neon-pink" />
              View work
            </a>
            <a href="#about" className="cta-btn-ghost">
              About
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
