/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    // go to https://javisperez.github.io/tailwindcolorshades/
    // to pick color for tailwind css
    extend: {
      colors: {
        sb: {
          50: "#f2fafc",
          100: "#e4f3f7",
          200: "#c0e3ed",
          300: "#9fd1e3",
          400: "#61aacf",
          500: "#2c83ba",
          600: "#2572a8",
          700: "#19578c",
          800: "#104070",
          900: "#092b54",
          950: "#041836",
        },
        newYorkPink: {
          50: "#fcfaf7",
          100: "#faf4f0",
          200: "#f5e7df",
          300: "#edd4ca",
          400: "#deada4",
          500: "#d28484",
          600: "#bd6c6c",
          700: "#9c4949",
          800: "#7d2f2f",
          900: "#5e1a1a",
          950: "#3d0b0b",
        },
      },
    },
  },
  plugins: [],
};
