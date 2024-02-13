/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#f5f5f5",
      transparent: "transparent",
      epic: {
        black: "#121212",
        gray: {
          50: "#2F2F2F",
          100: "#2A2A2A",
          200: "#202020",
        },
        blue: {
          50: "#26bbff",
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
  },
  plugins: [],
};
