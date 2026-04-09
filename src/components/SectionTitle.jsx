import { motion } from "framer-motion";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-pink-500/80">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-[#6B7280]">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionTitle;
