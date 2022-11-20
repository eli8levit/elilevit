/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      borderWidth: {
        30: "30px",
      },
      colors: {
        casualBlue: "#072c73",
        pBrown: "#9A7159",
        primaryText: "#291719",
        secondaryText: "#CB747D",
        blueLight: "#DDEDEA",
        pinkLight: "#ffd4d8",
        pinkLighter: "#fff3f4",
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
