/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EE",
        sand: "#E8DDD0",
        stone: "#8C7B6B",
        ink: "#2C2018",
        terra: "#B5693A",
        "night-bg": "#1C1712",
        "night-surface": "#26211A",
        "night-text": "#E8DDD0",
        "night-muted": "#9C8E82",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(44,32,24,0.08)",
        "card-hover": "0 8px 32px 0 rgba(181,105,58,0.18)",
      },
    },
  },
  plugins: [],
};
