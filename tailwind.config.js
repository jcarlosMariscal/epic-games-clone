/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#f5f5f5",
      transparent: "transparent",
      epic: {
        black: "rgb(18,18,18)",
        red: "#de3341",
        gray: {
          50: "#404044",
          // 100: "#2F2F2F",
          100: "#202020",
          200: "#303034",
          300: "#18181C",
        },
        blue: {
          50: "#61CDFF",
          100: "#007DFC",
        },
      },
      epicgames: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
      },
    },
    screens: {
      ssm: "420px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      customMd: "880px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    keyframes: {
      slideBgDot: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
  },
  plugins: [],
};
