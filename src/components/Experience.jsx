import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/8 blur-[110px]" />
      <div className="section-wrap">
        <SectionTitle title="Experience" subtitle="Internships in full-stack and frontend engineering." />

        <div className="relative mx-auto max-w-2xl">
          <div
            className="absolute bottom-6 left-[15px] top-6 w-px md:left-[19px]"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--accent-color) 55%, transparent), color-mix(in srgb, var(--accent-color) 35%, transparent))",
            }}
            aria-hidden
          />

          <ul className="relative m-0 list-none space-y-0 p-0">
            {experiences.map((exp, idx) => (
              <li key={exp.org} className="relative flex gap-0 pb-12 last:pb-0">
                <div className="flex w-8 shrink-0 justify-center pt-1 md:w-10">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 16, delay: idx * 0.1 }}
                    className="relative z-[1] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent shadow-glowSoft"
                  />
                </div>

                <motion.div
                  className="min-w-0 flex-1 pl-4 md:pl-6"
                  initial={{ opacity: 0, y: 24, rotate: -0.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.72, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="glass-card rounded-2xl p-6 text-left md:p-7"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 0 28px color-mix(in srgb, var(--accent-color) 18%, transparent)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Briefcase size={18} />
                      </span>
                    </div>
                    <h3 className="font-display mt-4 text-xl font-bold text-ink md:text-2xl">{exp.role}</h3>
                    <p className="mt-2 text-base text-inkMuted md:text-lg">{exp.org}</p>
                  </motion.div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
