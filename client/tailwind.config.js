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
      spacing: {
        128: "32rem",
        132: "34rem",
        140: "40rem",
        150: "50rem",
        180: "90rem",
        container: "1700px",
      },
      fontFamily: {
        gintonord: ["ABC Ginto Nord"],
        ginto: ["ABC Ginto"],
        Prophet: ["ABC Prophet"],
        viafont: ["ABC Viafont"],
        whytemono: ["ABC Whyte Mono"],
        whyteinktrap: ["ABC Whyte Inktrap"],
      },
    },
  },
  plugins: [],
};
