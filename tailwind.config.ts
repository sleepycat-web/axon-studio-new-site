const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-premium": "linear-gradient(135deg, rgb(var(--accent-primary)) 0%, rgb(var(--accent-secondary)) 50%, rgb(var(--accent-tertiary)) 100%)",
        "gradient-subtle": "linear-gradient(135deg, rgb(var(--accent-primary)) 0%, rgb(var(--accent-secondary)) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      colors: {
        primat: "rgba(231, 229, 228, 0.75)",
        primary: colors.neutral,
        // Premium accent colors
        accent: {
          50: "rgba(var(--accent-primary), <alpha-value>)",
          100: "rgba(var(--accent-primary), <alpha-value>)",
          200: "rgba(var(--accent-primary), <alpha-value>)",
          300: "rgba(var(--accent-primary), <alpha-value>)",
          400: "rgba(var(--accent-primary), <alpha-value>)",
          500: "rgba(var(--accent-primary), <alpha-value>)",
          600: "rgba(var(--accent-primary), <alpha-value>)",
          700: "rgba(var(--accent-primary), <alpha-value>)",
          800: "rgba(var(--accent-primary), <alpha-value>)",
          900: "rgba(var(--accent-primary), <alpha-value>)",
          950: "rgba(var(--accent-primary), <alpha-value>)",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(var(--accent-primary), 0.4)",
        "glow-lg": "0 0 60px -10px rgba(var(--accent-primary), 0.5)",
        "glow-accent": "0 4px 30px -5px rgba(var(--accent-primary), 0.4)",
        // softer shadow for reduced glow intensity
        "glow-subtle": "0 0 20px -10px rgba(var(--accent-primary), 0.2)",
      },
    },
  },
  plugins: [addVariablesForColors],
};
