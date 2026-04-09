/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff4ecd",
          purple: "#8b5cf6",
          blue: "#4cc9f0",
          dark: "#070814",
        },
      },
      boxShadow: {
        glow: "0 0 25px rgba(139, 92, 246, 0.45)",
        soft: "0 10px 40px rgba(76, 201, 240, 0.15)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 20% 20%, rgba(139,92,246,0.45), transparent 50%), radial-gradient(at 80% 0%, rgba(255,78,205,0.38), transparent 50%), radial-gradient(at 50% 100%, rgba(76,201,240,0.25), transparent 60%)",
      },
    },
  },
  plugins: [],
}

