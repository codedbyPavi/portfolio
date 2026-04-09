import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section id="achievements" className="section-wrap">
      <SectionTitle eyebrow="Achievements" title="Recognition earned with consistency" />
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-6"
          >
            <span className="badge-glow">Achievement</span>
            <p className="mt-3 text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
