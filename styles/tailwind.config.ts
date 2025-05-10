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
        instrument: ["var(--font-instrument)", "sans-serif"], // ✅ Instrument Sans
        playfair: ["var(--font-playfair)", "serif"], // ✅ Playfair Display
        heading: ['"Integral CF"', "sans-serif"],
        body: ['"Playfair Display"', "serif"], // Optional default fallback
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
