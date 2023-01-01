/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        poster: "url('/darker.jpg')",
        cubes: "url('/sotim.jpg')",
        bikes: "url('/bikes.jpg')",
        bike: "url(/bike.jpg)",
        art: "url(/proj.jpg)",
        blueNoise: "url(/blue-noise.png)",
        pinkNoise: "url(/pink-noise.png)",
        river: "url(/river.jpg)",
        david: "url(/david.jpg)",
        hourse: "url(/hourse.jpg)",
        art: "url(/art.png)",
        wall: "url(/wall.jpg)",
        nav: "url(/nav.png)",
        oldSite: "url(/old-site.png)",
        wallpaper: "url(/wallpaper.jpg)",
        blueBg: "url(/blue-background.png)",
        indexBg: "url(/index-background.png)",
        labelBg: "url(/label-background.png)",
        ask: "url(/what.png)",
      },
      borderWidth: {
        30: "30px",
      },
      boxShadow: {
        bike: "0 0 0 4px #ffffff",
      },
      lineHeight: {
        1.2: 1.2,
      },
      colors: {
        casualBlue: "#072c73",
        primaryText: "#0b224e",
        secondaryText: "#cb7492",
        blueLight: "#DCE3FF",
        pinkLight: "#ffd4d8",
        pinkTransp: "rgba(0,0,0,0.14)",
        pinkLighter: "#fff3f4",
        pinkLighterMedium: "#fce3e7",
        wine: "#621010",
      },
      fontFamily: {
        satisfy: ["Satisfy", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto Serif", ...defaultTheme.fontFamily.serif],
        apfel: ["Apfel", ...defaultTheme.fontFamily.serif],
        ignazio: ["Ignazio", ...defaultTheme.fontFamily.serif],
        frankRe: ["Frank-Re", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
