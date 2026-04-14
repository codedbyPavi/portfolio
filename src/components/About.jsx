import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { highlights, profile } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-magenta/8 blur-[100px]" />
      <div className="section-wrap">
        <SectionTitle
          title="About"
          subtitle="Computer Science student. Full-stack and AI work, with recent internships and competition experience."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-center"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-neon-pink/35 via-white/80 to-neon-cyan/30 p-[1px] shadow-[0_20px_60px_-15px_rgba(26,21,35,0.12)]">
              <motion.div
                className="overflow-hidden rounded-[1.95rem] border border-white/60 bg-white/40 backdrop-blur-xl"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="flex aspect-[4/5] flex-col items-center justify-center bg-gradient-to-br from-blush/90 via-white to-sand/90 px-8 py-10 text-center">
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.35em] text-inkMuted">At a glance</p>
                  <p className="font-display mt-4 text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
                    {profile.name
                      .split(/\s+/)
                      .filter((w) => w.length > 1)
                      .map((w) => w[0])
                      .join("")}
                  </p>
                  <p className="font-script mt-6 text-2xl leading-snug text-inkMuted md:text-3xl">{profile.name}</p>
                  <div className="font-accent mt-8 flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-inkMuted shadow-sticker">
                    <Sparkles className="h-4 w-4 text-neon-pink" />
                    {profile.title}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mx-auto w-full max-w-lg space-y-6 lg:mx-0">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-center text-lg leading-relaxed text-inkMuted lg:text-left md:text-xl"
            >
              I care about clear interfaces, reliable APIs, and ML where it genuinely helps the product — especially
              computer vision and auth-heavy flows.
            </motion.p>

            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sticker backdrop-blur-md transition hover:border-neon-pink/25 hover:shadow-[0_12px_40px_-10px_rgba(255,62,207,0.12)]"
                >
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 text-neon-pink transition group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className="font-display font-semibold text-ink">{item}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
