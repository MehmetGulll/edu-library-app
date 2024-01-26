import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        silver_lake_blue: {
          DEFAULT: "#6290c3",
          100: "#101c2a",
          200: "#203854",
          300: "#30557e",
          400: "#4071a9",
          500: "#6290c3",
          600: "#80a5cf",
          700: "#a0bbdb",
          800: "#bfd2e7",
          900: "#dfe8f3",
        },
        persian_pink: {
          DEFAULT: "#ff88dc",
          100: "#4f0037",
          200: "#9d006e",
          300: "#ec00a5",
          400: "#ff3bc4",
          500: "#ff88dc",
          600: "#ffa1e3",
          700: "#ffb9ea",
          800: "#ffd0f1",
          900: "#ffe8f8",
        },
        turquoise: {
          DEFAULT: "#49dcb1",
          100: "#093125",
          200: "#13624a",
          300: "#1c936f",
          400: "#25c394",
          500: "#49dcb1",
          600: "#6ce3bf",
          700: "#90eacf",
          800: "#b5f1df",
          900: "#daf8ef",
        },
        earth_yellow: {
          DEFAULT: "#eeb868",
          100: "#3e2807",
          200: "#7b4f0e",
          300: "#b97715",
          400: "#e79c2a",
          500: "#eeb868",
          600: "#f2c686",
          700: "#f5d5a4",
          800: "#f8e3c2",
          900: "#fcf1e1",
        },
        delft_blue: {
          DEFAULT: "#23395b",
          100: "#070c12",
          200: "#0e1725",
          300: "#152337",
          400: "#1d2f49",
          500: "#23395b",
          600: "#395d93",
          700: "#5a82bf",
          800: "#91acd4",
          900: "#c8d5ea",
        },
      },
    },
  },
  plugins: [],
}
export default config
