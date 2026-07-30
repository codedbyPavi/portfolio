import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const naturePhotos = [
  {
    src: "/image/scrapbook/street-view.jpeg",
    alt: "Dusk street scene lined with palm trees",
    caption: "dusk drive",
    imageClassName: "scrap-photo-street",
  },
  {
    src: "/image/scrapbook/sakleshpura.jpeg",
    alt: "Forest waterfall with Sakleshpura title",
    caption: "sakleshpura",
    imageClassName: "scrap-photo-sakleshpura",
  },
  {
    src: "/image/scrapbook/peacock.jpeg",
    alt: "Peacock perched on a pillar among palm trees",
    caption: "the watcher",
    imageClassName: "scrap-photo-peacock",
  },
  {
    src: "/image/scrapbook/kerala.jpeg",
    alt: "Kerala mountain and cloud landscape",
    caption: "kerala skies",
    imageClassName: "scrap-photo-kerala",
  },
];

// `line` is the connector endpoint in the 0-100 viewBox space of the dashed radial lines.
const tools = [
  { name: "CapCut", src: "/image/capcut.png", className: "scrap-sticker-capcut", line: [12, 17] },
  { name: "Canva", src: "/image/canva.png", className: "scrap-sticker-canva", line: [88, 18] },
  { name: "Photoroom", src: "/image/photoroom.png", className: "scrap-sticker-photoroom", line: [13, 82] },
  { name: "Captured live", icon: Camera, className: "scrap-sticker-camera", line: [83, 82] },
];

const toolsStageTrigger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const toolsStageSticker = (index) => ({
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 14, delay: 0.3 + index * 0.15 },
  },
});

const toolsStageConnector = (index) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.22 + index * 0.15 },
  },
});

function Captures() {
  return (
    <section id="captures" className="captures-section">
      <div className="section-wrap relative z-10">
        <motion.header
          className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-accent text-sm font-bold uppercase tracking-[0.16em] text-accent md:text-base">
            CAPTURES / VISUAL NOTES
          </p>
          <h2 className="captures-title">SCRAPBOOK</h2>
          <p className="captures-intro">Little pieces of light, places, and days I wanted to keep.</p>
        </motion.header>

        {/* STAGE 1 — Entrance */}
        <div className="captures-stage captures-stage-hero">
          <motion.figure
            className="scrap-polaroid scrap-polaroid-hero"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="washi-tape" aria-hidden="true" />
            <img src="/image/pavithra-camera.jpg" alt="Pavithra holding a camera" />
            <figcaption>behind the lens, always</figcaption>
          </motion.figure>
        </div>

        {/* STAGE 2 — The Tools */}
        <div className="captures-stage captures-stage-tools" aria-label="Editing tools">
          <div className="tools-stage-frame">
            <motion.svg
              className="tools-connectors"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {tools.map(({ name, line }, index) => (
                <motion.line
                  key={name}
                  x1="50"
                  y1="50"
                  x2={line[0]}
                  y2={line[1]}
                  vectorEffect="non-scaling-stroke"
                  variants={toolsStageConnector(index)}
                />
              ))}
            </motion.svg>

            <motion.figure
              className="scrap-polaroid scrap-polaroid-tools-anchor"
              initial={{ scale: 1 }}
              whileInView={{ scale: 0.6 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="washi-tape" aria-hidden="true" />
              <img src="/image/pavithra-camera.jpg" alt="" aria-hidden="true" />
              <figcaption>behind the lens, always</figcaption>
            </motion.figure>

            {tools.map(({ name, src, icon: Icon, className }, index) => (
              <motion.div
                key={name}
                className={`scrap-sticker ${className}`}
                variants={toolsStageTrigger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <motion.div className="scrap-sticker-content" variants={toolsStageSticker(index)}>
                  <span>
                    {Icon ? (
                      <Icon size={30} strokeWidth={1.7} />
                    ) : (
                      <img src={src} alt={`${name} editing tool`} width="52" height="52" />
                    )}
                  </span>
                  <small>{name}</small>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STAGE 3 — The Scrapbook */}
        <div className="captures-stage captures-stage-scrap">
          <motion.aside
            className="scrapbook-note"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.12 }}
          >
            traveled far just to catch these moments
          </motion.aside>

          <div className="scrapbook-board" aria-label="Photography scrapbook">
            {naturePhotos.map((photo, index) => (
              <motion.figure
                key={photo.caption}
                className={`scrap-polaroid scrap-polaroid-${index + 1}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                  delay: 0.12 + index * 0.1,
                }}
              >
                <span className="scrap-pin" aria-hidden="true" />
                <div className={`scrap-photo ${photo.imageClassName}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.div
            className="mt-8 flex justify-center text-center md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <a
              className="follow-roll-btn"
              href="https://www.instagram.com/_her_capture_story_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my page <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Captures;
