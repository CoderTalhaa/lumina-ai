/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // md: "2rem",
        // lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-cormorant_upright)",
      secondary: "var(--font-open_sans)",
      zentry: ["zentry", "sans-serif"],
      "circular-web": ["circular-web", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF4D07",
        secondary: "#AAAAAA",
      },
    },
  },
  plugins: [],
};
