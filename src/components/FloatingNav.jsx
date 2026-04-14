import { motion } from "framer-motion";

const links = ["home", "about", "skills", "projects", "experience", "achievements", "contact"];

function FloatingNav() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 20, delay: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-3 md:px-10 md:pt-5">
        <nav className="flex items-center justify-center gap-1 overflow-x-auto rounded-full border border-black/5 bg-cream/85 py-2 pl-3 pr-3 shadow-sticker backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] md:gap-2 md:px-4 md:py-2.5 [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default FloatingNav;
