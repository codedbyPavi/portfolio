import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

const fallbackImage =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80";

function TiltCard({ children, className = "" }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -16;
    setTilt({ x, y });
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 95, damping: 14 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

function Projects() {
  const featuredProject = useMemo(() => projects.find((project) => project.featured), []);
  const regularProjects = useMemo(() => projects.filter((project) => !project.featured), []);
  const cineProject = useMemo(() => regularProjects.find((project) => project.name === "CineVault"), [regularProjects]);
  const otherProjects = useMemo(() => regularProjects.filter((project) => project.name !== "CineVault"), [regularProjects]);
  const [currentImage, setCurrentImage] = useState(0);
  const [cineImage, setCineImage] = useState(0);

  useEffect(() => {
    if (!featuredProject?.images?.length) return undefined;
    const slider = setInterval(() => {
      setCurrentImage((index) => (index + 1) % featuredProject.images.length);
    }, 2500);
    return () => clearInterval(slider);
  }, [featuredProject]);

  useEffect(() => {
    if (!cineProject?.images?.length) return undefined;
    const timer = setInterval(() => {
      setCineImage((index) => (index + 1) % cineProject.images.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [cineProject]);

  return (
    <section id="projects" className="section-wrap">
      <SectionTitle
        eyebrow="Projects"
        title="Product-focused project showcase"
        subtitle="Each case study is designed as a polished, user-centered product experience."
      />
      {featuredProject && (
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="featured-project mb-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500/80">Featured Project</p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{featuredProject.name}</h3>
              <p className="mt-4 text-[#6B7280]">{featuredProject.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a className="action-btn" href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a className="action-btn" href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <TiltCard className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-4">
              <div className="relative h-80 overflow-hidden rounded-2xl md:h-96">
                <img
                  src={featuredProject.images?.[currentImage] || fallbackImage}
                  alt={featuredProject.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = fallbackImage;
                  }}
                />
              </div>
            </TiltCard>
          </div>
        </motion.article>
      )}

      {cineProject && (
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card mb-10 overflow-hidden p-6"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative h-72 overflow-hidden rounded-2xl md:h-80">
              <img
                src={cineProject.images?.[cineImage % cineProject.images.length] || fallbackImage}
                alt={cineProject.name}
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-pink-500/75">{cineProject.type}</p>
              <h3 className="mt-3 text-3xl font-semibold">{cineProject.name}</h3>
              <p className="mt-3 text-[#6B7280]">{cineProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cineProject.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a className="action-btn" href={cineProject.demo} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a className="action-btn" href={cineProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {otherProjects.map((project, idx) => (
          <TiltCard
            key={project.name}
            className={`glass-card group overflow-hidden ${project.cinematic ? "cinematic-card" : ""} ${
              project.aiGlow ? "ai-card" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-52 overflow-hidden"
            >
              <img
                src={project.images ? project.images[cineImage % project.images.length] : project.image}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm text-white">{project.type}</p>
            </motion.div>
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a className="action-btn" href={project.demo} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a className="action-btn" href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;
