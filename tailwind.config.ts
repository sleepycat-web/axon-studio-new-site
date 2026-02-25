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
        "gradient-premium": "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
        "gradient-subtle": "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primat: "rgba(231, 229, 228, 0.75)",
        primary: colors.neutral,
        // Premium accent colors
        accent: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
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
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.4)",
        "glow-lg": "0 0 60px -10px rgba(99, 102, 241, 0.5)",
        "glow-accent": "0 4px 30px -5px rgba(99, 102, 241, 0.4)",
        // softer shadow for reduced glow intensity
        "glow-subtle": "0 0 20px -10px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  plugins: [require("daisyui"), addVariablesForColors],
};
