/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        river: "url(/river.jpg)",
        david: "url(/david.jpg)",
        hourse: "url(/hourse.jpg)",
        art: "url(/art.png)",
        wall: "url(/alarm.jpg)",
        oldSite: "url(/old-site.png)",
        wallpaper: "url(/wallpaper.jpg)",
        indexBg: "url(/index-bg.png)",
        firstRide: "url(/first-ride.jpeg)",
        secondRide: "url(/second-ride.jpeg)",
        wheels: "url(/wheels.jpeg)",
        cardBrush: "url(/label-background.png)",
        haIsh: "url(/ha-ish.png)",
        player: "url(/player.png)",
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
        pinkLighter: "#fff3f4",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        ignazio: ["Ignazio", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
