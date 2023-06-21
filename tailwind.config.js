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
        feed: "0 2px 40px -6px rgba(0,0,0,0.01),0 0 10px -4px rgba(255,47,141,0.1), 0 -10px 50px 0 rgba(0,0,255,0.08)",
        bikeCard: "rgba(0, 0, 0, 0.18) 0 4px 24px -3px",
        nav: "0 0 0 1px rgba(1,1,1,.06), 0 0 2px 0 rgba(1,1,1,.02)",
        navActive: "0 0 0 0.5px rgba(1,1,1,.06)",
        scrollable: "-5px 0 40px 29px rgba(255,255,255,0.85)",
        cloud: "0 0 150px 150px #fff3f4",
      },
      colors: {
        primary: "#0000ff",
        secondary: "#db2877",
        pinkLighter: "#ededff",
        blackTransparent: "rgba(0, 0, 0, 0.75)",
        blackTransparentLighter: "rgba(233,233,233,0.2)",
        lightGray: "rgba(1,1,1,.03)",
        panel: "rgba(255,255,255,0.05)",
        new: "rgba(255,47,141,0.1)",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        mona: ["Mona", ...defaultTheme.fontFamily.sans],
        monaWide: ["Mona Wide", ...defaultTheme.fontFamily.sans],
        hubot: ["Hubot", ...defaultTheme.fontFamily.sans],
        shantell: ["Shantell", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
