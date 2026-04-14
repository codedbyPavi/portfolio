import { motion } from "framer-motion";

function SectionTitle({ eyebrow, title, subtitle, scriptAccent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
    >
      {eyebrow ? <p className="font-accent text-sm font-bold uppercase tracking-[0.16em] text-neon-pink md:text-base">{eyebrow}</p> : null}
      <h2 className="font-display mt-1 text-3xl font-extrabold leading-tight tracking-tight text-ink md:mt-2 md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {scriptAccent ? (
        <p className="font-script mt-3 text-3xl font-bold leading-none text-neon-magenta md:text-4xl">{scriptAccent}</p>
      ) : null}
      {subtitle ? (
        <p className="font-accent mx-auto mt-4 max-w-2xl text-base leading-relaxed text-inkMuted md:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}

export default SectionTitle;
