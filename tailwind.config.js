/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        accent: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#fdf8f3",
        blush: "#fce7f3",
        blushDeep: "#fbcfe8",
        sand: "#f5e6d3",
        ink: "#1a1523",
        inkMuted: "#5c5569",
        neon: {
          pink: "#ff3ecf",
          magenta: "#e879f9",
          cyan: "#5eead4",
          violet: "#a78bfa",
          dark: "#070814",
        },
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 62, 207, 0.45), 0 0 64px rgba(94, 234, 212, 0.2)",
        glowSoft: "0 0 40px rgba(255, 62, 207, 0.25), 0 0 80px rgba(167, 139, 250, 0.15)",
        laptop: "0 40px 80px -20px rgba(26, 21, 35, 0.35), 0 0 0 1px rgba(255,255,255,0.08)",
        sticker: "0 8px 24px rgba(26, 21, 35, 0.12)",
      },
      backgroundImage: {
        "mesh-editorial":
          "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(252, 231, 243, 0.95), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(253, 224, 231, 0.7), transparent), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(254, 243, 199, 0.5), transparent)",
        "mesh-hero":
          "radial-gradient(circle at 15% 20%, rgba(255, 62, 207, 0.12), transparent 42%), radial-gradient(circle at 85% 10%, rgba(94, 234, 212, 0.1), transparent 38%), radial-gradient(circle at 50% 90%, rgba(252, 231, 243, 0.9), #fdf8f3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8px, -6px) scale(1.05)" },
          "66%": { transform: "translate(-6px, 4px) scale(0.98)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
