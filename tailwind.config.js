/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        river: "url(/river.jpg)",
        oldCity: "url(/old-city.jpg)",
        hourse: "url(/hourse.jpg)",
        art: "url(/art.png)",
        wall: "url(/alarm.jpg)",
        oldSite: "url(/old-site.jpg)",
        wallpaper: "url(/wallpaper.jpg)",
        firstRide: "url(/first-ride.jpg)",
        secondRide: "url(/second-ride.jpg)",
        wheels: "url(/wheels.jpg)",
        blackBrush: "url(/nav-brush.svg)",
        hoverNavBrush: "url(/hover-nav-brush.svg)",
        haIsh: "url(/ha-ish.jpg)",
        player: "url(/player.png)",
      },
      boxShadow: {
        bike: `0 5px 25px -3px ${colors.indigo["900"]}, 0 0 40px 0 rgba(0,0,0,0.4)`,
        art: `0 5px 45px -10px ${colors.indigo["400"]}`,
        indexCard: `0 0 25px -5px ${colors.indigo["400"]}`,
        footer: `0 0 25px -2px ${colors.indigo["200"]}`,
        indexCardBg: `0 0 50px -2px ${colors.indigo["800"]}`,
      },
      colors: {
        pinkLighter: "#fff3f4",
        secondaryBg: "#091223",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        ignazio: ["Ignazio", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
