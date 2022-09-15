/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        yellow: "#FFED4C",
        yellow100: "#ffff94",
        chartreuse: "#A7DF06",
        prp: "#AC9EFF",
        magenta: "#B415FF",
        cyan: "#0ADDD0",
        red: "#D92929",
        orange: "#FF6B00",
        green: "#00A300",
        blue: "#2421C6",
        trp: "transparent",
        black: "#000000",
        white: "#ffffff",
      }),
    },
  },
  plugins: [],
};
