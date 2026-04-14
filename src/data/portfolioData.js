import smartMirrorOne from "../assets/smart-mirror1.png";
import smartMirrorTwo from "../assets/smart-mirror2.png";
import cinevaultMain from "../assets/cinevault-main.png";
import netflixUi from "../assets/netflix-ui.png";
import krytilAi from "../assets/krytil-ai.png";

export const profile = {
  name: "S Pavithra Devi",
  title: "Full Stack Developer | AI Enthusiast",
  email: "spavithradevi2025@gmail.com",
  linkedin: "https://linkedin.com/in/pavithra-devi-3b938a369/",
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
    type: "Computer vision · Edge",
    description:
      "Mirror interface for live skin analysis and virtual makeup try-on. Gesture-based control on Raspberry Pi with OpenCV.",
    tech: ["Python", "OpenCV", "Raspberry Pi"],
    images: [smartMirrorOne, smartMirrorTwo],
    demo: "https://smart-mirror-delta.vercel.app/",
    github: "https://github.com/codedbyPavi/Smart-mirror",
    featured: true,
  },
  {
    name: "CineVault",
    type: "Full-stack app",
    description: "Streaming-style catalog with sign-in, JWT auth, protected routes, and a focused movie UI.",
    tech: ["React", "JWT", "Node.js"],
    images: [cinevaultMain, netflixUi],
    demo: "https://cinevault-auth-kvt4.vercel.app/",
    github: "https://github.com/codedbyPavi/cinevault-auth",
    cinematic: true,
  },
  {
    name: "Krytil AI Academy",
    type: "LMS",
    description: "Learning paths and course UI on top of a relational model with Prisma and MySQL.",
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
