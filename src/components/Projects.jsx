import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

const fallbackImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

function projectThumb(project) {
  if (project.images?.length) return project.images[0];
  return project.image;
}

function FeaturedLaptop({ featuredProject, slides, slide, setSlide }) {
  return (
    <motion.div
      className="laptop-shell mx-auto max-w-4xl"
      style={{ perspective: 1400 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="featured-project-glow rounded-[1rem] p-[1px]"
        initial={false}
        animate={{ rotateX: 5, rotateY: -7, scale: 1 }}
        whileHover={{
          rotateX: 1.5,
          rotateY: -2,
          scale: 1.03,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="rounded-[0.95rem] bg-gradient-to-br from-white/50 via-blush/35 to-neon-cyan/15 p-1 md:p-1.5">
          <div className="laptop-lid shadow-laptop overflow-hidden rounded-t-lg">
            <div className="laptop-screen-inner relative aspect-[16/10] bg-[#0c0a10]">
              <img
                key={slide}
                src={slides[slide]}
                alt={`${featuredProject.name} screenshot ${slide + 1}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a10]/45 via-transparent to-white/[0.06]" />
            </div>
            <div className="flex justify-center pb-2 pt-1">
              <span className="h-1 w-10 rounded-full bg-black/40" />
            </div>
          </div>
          <div className="laptop-base mx-auto w-[min(100%,101%)]" />
        </div>
      </motion.div>

      {slides.length > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === slide ? "w-8 bg-gradient-to-r from-neon-pink to-neon-cyan shadow-glowSoft" : "w-2.5 bg-black/12 hover:bg-black/22"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function BrowserWindowCard({ project, index }) {
  const src = projectThumb(project) || fallbackImage;
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 });

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - py) * 10,
      y: (px - 0.5) * 12,
      gx: px * 100,
      gy: py * 100,
    });
  };

  const onLeave = () => setTilt({ x: 0, y: 0, gx: 50, gy: 50 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="project-card-tilt group relative flex flex-col overflow-hidden rounded-2xl border border-black/6 bg-white/80 shadow-sticker backdrop-blur-md"
    >
      <div
        className="project-shine"
        style={{
          background: `radial-gradient(240px circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.45), transparent 55%)`,
        }}
      />
      <div className="flex items-center gap-2 border-b border-black/5 bg-gradient-to-r from-blush/45 to-white px-3 py-2.5">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/90" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/90" />
        </span>
        <span className="font-accent min-w-0 flex-1 truncate text-center text-[10px] font-semibold uppercase tracking-wider text-inkMuted">
          {project.name.replace(/\s+/g, "-").toLowerCase()}
          .app
        </span>
      </div>
      <div className="relative aspect-video overflow-hidden bg-[#0c0a10]/5">
        <img
          src={src}
          alt={project.name}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-inkMuted">{project.type}</p>
          <h3 className="font-display mt-1 text-xl font-bold text-ink">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-inkMuted">{project.description}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="chip text-[0.65rem]">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <a className="action-btn text-xs" href={project.demo} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a className="action-btn text-xs" href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const featuredProject = useMemo(() => projects.find((p) => p.featured), []);
  const supporting = useMemo(() => projects.filter((p) => !p.featured), []);
  const [slide, setSlide] = useState(0);
  const slides = featuredProject?.images?.length ? featuredProject.images : [fallbackImage];

  const nextSlide = useCallback(() => {
    setSlide((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return undefined;
    const id = setInterval(nextSlide, 3400);
    return () => clearInterval(id);
  }, [slides.length, nextSlide]);

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blush/35 via-cream to-sand/40" />

      <div className="section-wrap">
        <SectionTitle
          title="Selected Projects"
          subtitle="Real-world builds blending AI, UI, and full-stack engineering."
        />

        {featuredProject && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-inkMuted">Featured</p>
            <h3 className="font-display mt-2 text-2xl font-extrabold text-ink md:text-3xl">{featuredProject.name}</h3>
            <p className="mx-auto mt-3 max-w-xl text-inkMuted">{featuredProject.description}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {featuredProject.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className="cta-btn" href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                Live demo
              </a>
              <a className="action-btn" href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        )}

        {featuredProject && (
          <div className="mx-auto mt-12 max-w-4xl md:mt-16">
            <FeaturedLaptop featuredProject={featuredProject} slides={slides} slide={slide} setSlide={setSlide} />
          </div>
        )}

        {supporting.length > 0 && (
          <>
            <h3 className="font-display mx-auto mb-8 mt-16 max-w-2xl text-center text-xl font-bold text-ink md:mt-20 md:text-2xl">
              More work
            </h3>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {supporting.map((project, index) => (
                <BrowserWindowCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
