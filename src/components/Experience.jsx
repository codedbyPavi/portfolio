import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <SectionTitle eyebrow="Experience" title="Journey through impactful internships" />
      <div className="relative border-l border-black/10 pl-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.org}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="timeline-dot" />
            <div className="glass-card p-5">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="mt-1 text-[#6B7280]">{exp.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
