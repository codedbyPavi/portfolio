import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { achievements } from "../data/portfolioData";

const icons = [Award, Medal];
const confetti = [
  { x: -22, y: -20, c: "#ff2d78" },
  { x: 24, y: -18, c: "#f59e0b" },
  { x: -28, y: 8, c: "#00d4ff" },
  { x: 30, y: 10, c: "#a855f7" },
  { x: 0, y: -30, c: "#00e5a0" },
  { x: -8, y: 28, c: "#fda4af" },
];

function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-wrap">
        <SectionTitle title="Milestones" subtitle="Hackathons and competitive sport." />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 26, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.72, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="achievement-card group relative flex min-h-[180px] flex-col overflow-hidden rounded-[1.75rem] border border-black/5 p-8 backdrop-blur-md"
                style={{ background: i === 0 ? "#fffbeb" : "#f8fafc" }}
                whileHover={{ y: -4, boxShadow: "0 0 32px rgba(255,62,207,0.12), 0 20px 48px -12px rgba(26,21,35,0.1)" }}
              >
                <span className="font-accent pointer-events-none absolute right-4 top-3 z-10 rounded-full border border-black/10 bg-white/85 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-inkMuted">
                  {i === 0 ? "🏆 Top 10" : "🥈 International"}
                </span>
                <span className="pointer-events-none absolute bottom-2 right-3 text-[7rem] leading-none opacity-[0.06]">
                  {i === 0 ? "🏆" : "🥈"}
                </span>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neon-pink/12 blur-2xl transition group-hover:bg-neon-cyan/15" />
                <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/95 text-neon-pink shadow-glowSoft">
                    <Icon size={22} strokeWidth={1.6} />
                    {confetti.map((dot, idx) => (
                      <motion.span
                        key={`${item}-${idx}`}
                        className="absolute h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: dot.c }}
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                        whileInView={{ x: dot.x, y: dot.y, opacity: [0, 1, 0], scale: [0, 1, 0.7] }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.95, delay: 0.12 + idx * 0.045, ease: "easeOut" }}
                      />
                    ))}
                  </span>
                  <p className="font-display text-left text-lg font-semibold leading-snug text-ink md:text-xl">{item}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
