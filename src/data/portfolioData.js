import smartMirrorOne from "../assets/smart-mirror1.png";
import smartMirrorTwo from "../assets/smart-mirror2.png";
import cinevaultMain from "../assets/cinevault-main.png";
import netflixUi from "../assets/netflix-ui.png";
import krytilAi from "../assets/krytil-ai.png";

export const profile = {
  name: "S Pavithra Devi",
  title: "Full Stack Developer | AI Enthusiast",
  email: "spavithradevi2025@gmail.com",
  linkedin: "https://linkedin.com/in/pavithra-devi-3b938a369//",
  github: "https://github.com/codedbyPavi/",
};

export const highlights = [
  "Full Stack Developer Intern",
  "Frontend Developer Intern",
  "Hackathon Finalist (Top 10)",
];

export const skills = [
  { category: "Languages", items: ["Python", "C", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["React", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "AI", items: ["OpenCV", "TensorFlow", "NLP"] },
  { category: "Tools", items: ["Git", "Prisma", "Postman", "Vercel"] },
];

export const projects = [
  {
    name: "AI Smart Mirror",
    type: "Featured AI Project",
    description:
      "AI-powered smart mirror with real-time skin analysis and virtual makeup try-on using gesture control.",
    tech: ["Python", "OpenCV", "Raspberry Pi"],
    // Featured Smart Mirror images from /src/assets
    images: [smartMirrorOne, smartMirrorTwo],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    name: "CineVault",
    type: "Movie Platform",
    description:
      "Cinematic streaming platform with JWT auth, protected routes, and immersive Netflix-style UI.",
    tech: ["React", "JWT", "Node.js"],
    // CineVault carousel images from /src/assets
    images: [cinevaultMain, netflixUi],
    demo: "https://cinevault-auth-kvt4.vercel.app/",
    github: "https://github.com/codedbyPavi/cinevault-auth",
    cinematic: true,
  },
  {
    name: "Krytil AI Academy",
    type: "AI LMS Platform",
    description:
      "AI-first learning platform with clean UX, guided learning paths, and scalable data modeling.",
    tech: ["React", "Prisma", "MySQL"],
    image: krytilAi,
    demo: "https://devacademy-five.vercel.app/",
    github: "https://github.com/codedbyPavi/Devacademy",
    aiGlow: true,
  },
];

export const experiences = [
  { role: "Full Stack Developer Intern", org: "KodNest" },
  { role: "Frontend Developer Intern", org: "Krytil" },
];

export const achievements = [
  "Hackathon Top 10 Finalist",
  "International Silver Medalist (Taekwondo)",
];
