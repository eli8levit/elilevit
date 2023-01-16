/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bike: "url(/bike.jpg)",
        blueNoise: "url(/blue-noise.png)",
        pinkNoise: "url(/pink-noise.png)",
        river: "url(/river.JPEG)",
        david: "url(/david.JPEG)",
        hourse: "url(/hourse.jpg)",
        art: "url(/art.png)",
        wall: "url(/wall.JPEG)",
        nav: "url(/nav.png)",
        oldSite: "url(/old-site.png)",
        wallpaper: "url(/wallpaper.jpg)",
        blueBg: "url(/blue-background.png)",
        indexBg: "url(/index-bg.png)",
        labelBg: "url(/label-background.png)",
        firstRide: "url(/first-ride.jpeg)",
        secondRide: "url(/second-ride.jpeg)",
        wheels: "url(/wheels.jpeg)",
        cardBrush: "url(/label-background.png)",
        pinkBrush: "url(/pink-background.png)",
        haIsh: "url(/ha-ish.png)",
        player: "url(/player.png)",
      },
      dropShadow: {
        menu: `0 20px 15px ${colors.indigo["300"]}`,
        menuActive: `20px 2px 10px ${colors.purple["800"]}`,
        white: `0 0 20px ${colors.white}`,
        text: `0 6px 10px ${colors.indigo["200"]}`,
      },
      borderWidth: {
        30: "30px",
        0.5: "0.5px",
      },
      boxShadow: {
        bike: `0 5px 25px -3px ${colors.indigo["900"]}, 0 0 40px 0 rgba(0,0,0,0.4)`,
        art: `0 5px 45px -10px ${colors.indigo["400"]}`,
        indexCard: `0 0 25px -5px ${colors.indigo["400"]}`,
        indexCardBg: `0 0 50px -2px ${colors.indigo["800"]}`,
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
        satisfy: ["Satisfy", ...defaultTheme.fontFamily.serif],
        roboto: ["Roboto Serif", ...defaultTheme.fontFamily.serif],
        apfel: ["Apfel", ...defaultTheme.fontFamily.serif],
        ignazio: ["Ignazio", ...defaultTheme.fontFamily.serif],
        frankRe: ["Frank-Re", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
