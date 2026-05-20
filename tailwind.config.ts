import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        charcoal: "#2C2C2C",
        "accent-green": "#2D5A3D",
        terracotta: "#B87333",
        sand: "#D4C5A9",
        ink: "#161616",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(44, 44, 44, 0.08)",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(180deg, rgba(17, 17, 17, 0.18) 0%, rgba(17, 17, 17, 0.62) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
