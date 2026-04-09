import { motion } from "framer-motion";
import { Bot, Braces, Database, Languages, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

const categoryIcons = {
  Languages: Languages,
  Frontend: Braces,
  Backend: Database,
  AI: Bot,
  Tools: Wrench,
};

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionTitle
        eyebrow="Skills"
        title="Technical stack built for production"
        subtitle="Organized by domain for a clear view of languages, frameworks, backend systems, and AI tooling."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              {(() => {
                const Icon = categoryIcons[group.category] || Braces;
                return <Icon size={18} className="text-pink-500" />;
              })()}
              <h3 className="text-xl font-semibold text-gray-800">{group.category}</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.items.map((skill) => (
                <div key={skill} className="skill-item-card">
                  <span className="skill-dot" />
                  <span className="text-gray-500">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
