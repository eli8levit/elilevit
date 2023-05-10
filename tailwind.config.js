/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        oldSite: "url(/old-site.jpg)",
        wallpaper: "url(/wallpaper.jpg)",
        firstRide: "url(/first-ride.jpg)",
        secondRide: "url(/second-ride.jpg)",
        wheels: "url(/wheels.jpg)",
        haIsh: "url(/ha-ish-studio.jpg)",
        player: "url(/player.png)",
      },
      boxShadow: {
        feed: "0 2px 30px -4px rgba(0, 0, 0, 0.03), 0 -6px 20px 0 rgba(219,40,119,0.05), 0 -10px 50px 0 rgba(0,0,255,0.05)",
        bikeCard:
          "inset 0 -3px 5px -3px rgba(255,255,255,0.45), rgba(0, 0, 0, 0.3) 0 6px 12px -5px",
        bikeCardSm:
          "inset 0 -3px 5px -3px rgba(255,255,255,0.45), rgba(0, 0, 0, 0.5) 0 6px 12px -5px, 0 5px 30px -7px rgba(0, 0, 0, 0.2)",
        nav: "0 0 0 1px rgba(1,1,1,.06), 0 0 2px 0 rgba(1,1,1,.02)",
        navActive: "0 0 0 0.5px rgba(1,1,1,.06)",
        scrollable: "-5px 0 40px 29px rgba(255,255,255,0.85)",
        cloud: "0 0 150px 150px #fff3f4",
      },
      colors: {
        primary: "#0000ff",
        secondary: "#db2877",
        pinkLighter: "#fff3f4",
        blackTransparent: "rgba(0, 0, 0, 0.75)",
        blackTransparentLighter: "rgba(255,255,255,0.4)",
        lightGray: "rgba(1,1,1,.01)",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        mona: ["Mona", ...defaultTheme.fontFamily.sans],
        monaWide: ["Mona Wide", ...defaultTheme.fontFamily.sans],
        hubot: ["Hubot", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
