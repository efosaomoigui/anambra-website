// styles/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: ["custom-golden"],
  theme: {
    extend: {
      colors: {
        primary: "#0056B8",
        secondary: "#FFD700",
        background: "#FFF9F2",
        body: "#1E1E1E",
      },
      fontFamily: {
        instrument: ["var(--font-instrument)", "sans-serif"], // ✅ Use variable from next/font
        heading: ['"Integral CF"', "sans-serif"],
        body: ['"Playfair Display"', "serif"],
      },
      spacing: {
        section: "4rem",
        "section-md": "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
