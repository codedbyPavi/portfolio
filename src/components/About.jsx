import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { highlights } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionTitle
        eyebrow="About Me"
        title="Building meaningful products with elegant interfaces"
        subtitle="Computer Science student passionate about full-stack development and AI."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((item, idx) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-6"
          >
            <p className="text-lg font-medium">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default About;
