import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const groups = [
  {
    name: "Languages",
    layout: "grid-2",
    padClass: "pad-languages",
    keys: [
      {
        name: "Python",
        src: "https://cdn.simpleicons.org/python/FFD43B",
        tone: "#3776AB",
      },
      { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/111111", tone: "#F7DF1E" },
      { name: "C", src: "https://cdn.simpleicons.org/c/ffffff", tone: "#A8B9CC" },
      { name: "SQL", src: "https://cdn.simpleicons.org/postgresql/ffffff", tone: "#336791" },
    ],
  },
  {
    name: "Frontend",
    layout: "grid-2",
    padClass: "pad-frontend",
    keys: [
      { name: "React", src: "https://cdn.simpleicons.org/react/20232A", tone: "#61DAFB" },
      { name: "HTML5", src: "https://cdn.simpleicons.org/html5/ffffff", tone: "#E34F26" },
      { name: "CSS3", src: "https://cdn.simpleicons.org/css/ffffff", tone: "#1572B6" },
      { name: "Tailwind", src: "https://cdn.simpleicons.org/tailwindcss/ffffff", tone: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    layout: "row-3",
    padClass: "pad-backend",
    keys: [
      { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs/ffffff", tone: "#339933" },
      { name: "Express", src: "https://cdn.simpleicons.org/express/000000", tone: "#ffffff" },
      { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/ffffff", tone: "#336791" },
    ],
  },
  {
    name: "AI",
    layout: "row-3",
    padClass: "pad-ai",
    keys: [
      { name: "TensorFlow", src: "https://cdn.simpleicons.org/tensorflow/ffffff", tone: "#FF6F00" },
      { name: "OpenCV", text: "CV", tone: "#5C3EE8" },
      {
        name: "Python",
        src: "https://cdn.simpleicons.org/python/3776AB",
        tone: "#FFD43B",
      },
    ],
  },
  {
    name: "Tools",
    layout: "row-5",
    padClass: "pad-tools",
    keys: [
      { name: "Git", src: "https://cdn.simpleicons.org/git/ffffff", tone: "#F05032" },
      { name: "GitHub", src: "https://cdn.simpleicons.org/github/ffffff", tone: "#181717" },
      { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/ffffff", tone: "#000000" },
      { name: "Postman", src: "https://cdn.simpleicons.org/postman/ffffff", tone: "#FF6C37" },
      { name: "Prisma", src: "https://cdn.simpleicons.org/prisma/ffffff", tone: "#2D3748" },
    ],
  },
];

function Keycap({ keyData }) {
  return (
    <div className="keycap-wrap">
      <motion.button
        className="keycap"
        type="button"
        title={keyData.name}
        aria-label={keyData.name}
        whileHover={{ y: 3, scale: 0.96, transition: { duration: 0.08, ease: "easeOut" } }}
        whileTap={{ y: 4, scale: 0.95, transition: { duration: 0.08, ease: "easeOut" } }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      >
        <span
          className="keycap-top"
          style={{ "--key-tone": keyData.tone, "--key-bg": keyData.bg || keyData.tone, "--key-side": keyData.side || keyData.tone }}
        >
          {keyData.text ? (
            <span className="keycap-fallback">{keyData.text}</span>
          ) : (
            <img src={keyData.src} alt={keyData.name} width={24} height={24} className="h-6 w-6 object-contain" loading="lazy" />
          )}
        </span>
        <span className="keycap-tooltip">{keyData.name}</span>
      </motion.button>
      <span className="keycap-label">{keyData.name}</span>
    </div>
  );
}

function SkillPad({ group, padIndex, inView }) {
  return (
    <article className="space-y-3">
      <p className="skill-category-label text-center">{group.name}</p>
      <div className="keyboard-pad-wrap">
        <div className={`keyboard-pad ${group.layout} ${group.padClass}`}>
          {group.keys.map((keyData, keyIndex) => (
            <motion.div
              key={`${group.name}-${keyData.name}-${padIndex * 10 + keyIndex}`}
              initial={{ opacity: 0, y: -30, scale: 0.5 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: padIndex * 0.4 + keyIndex * 0.07,
                type: "spring",
                stiffness: 500,
                damping: 22,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Keycap keyData={keyData} />
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Skills() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-[100px]" />
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <h2 className="font-display mt-1 text-3xl font-extrabold leading-tight tracking-tight text-ink md:mt-2 md:text-5xl md:leading-[1.1]">
            Stack
          </h2>
          <p className="font-accent mx-auto mt-4 max-w-2xl text-base leading-relaxed text-inkMuted md:text-lg">
            A tactile map of the tools I build with.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          {groups.map((group, index) => {
            const placement = group.name === "Tools" ? "md:col-span-2 md:max-w-[500px] md:justify-self-center w-full" : "";
            return (
              <div key={group.name} className={placement}>
                <SkillPad group={group} padIndex={index} inView={inView} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
