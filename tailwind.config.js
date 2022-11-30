/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        poster: "url('/darker.jpg')",
        cubes: "url('/sotim.jpg')",
      },
      borderWidth: {
        30: "30px",
      },
      boxShadow: {
        bike: "0 0 0 4px #072c73",
      },
      lineHeight: {
        1.2: 1.2,
      },
      colors: {
        casualBlue: "#072c73",
        primaryText: "#291719",
        secondaryText: "#CB747D",
        blueLight: "#DDEDEA",
        pinkLight: "#ffd4d8",
        pinkTransp: "rgba(0,0,0,0.14)",
        pinkLighter: "#fff3f4",
        pinkLighterMedium: "#fce3e7",
        wine: "#b9251a",
      },
      fontFamily: {
        butlerSt: ["Butler-Stencil", ...defaultTheme.fontFamily.serif],
        butler: ["Butler", ...defaultTheme.fontFamily.serif],
        wremena: ["wremena", ...defaultTheme.fontFamily.serif],
        mazius: ["mazius", ...defaultTheme.fontFamily.serif],
        maziusExtra: ["mazius-extra-italic", ...defaultTheme.fontFamily.serif],
        sligoil: ["sligoil", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
