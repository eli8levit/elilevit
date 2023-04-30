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
        bikeCard:
          "inset 0 -3px 5px -3px rgba(255,255,255,0.45), rgba(0, 0, 0, 0.5) 0 6px 12px -5px, 0 5px 50px -7px rgba(0, 0, 0, 0.3)",
        bikeCardSm:
          "inset 0 -3px 5px -3px rgba(255,255,255,0.45), rgba(0, 0, 0, 0.5) 0 6px 12px -5px, 0 5px 30px -7px rgba(0, 0, 0, 0.2)",
        nav: "0 0 0 1px rgba(1,1,1,.05)",
      },
      fontSize: {
        "7.5xl": "5rem",
      },
      borderWidth: {
        mini: "0.5px",
      },
      colors: {
        primary: "#0000ff",
        secondary: "#db2877",
        pinkLighter: "#fff3f4",
        pinkTransparent: "rgba(192,10,100,0.75)",
        pinkText: "#fff3f7",
        grayText: "#e3e3e3",
        pinkTransparentLighter: "rgba(192,9,100,0.4)",
        blackTransparent: "rgba(0, 0, 0, 0.75)",
        blackTransparentLighter: "rgba(255,255,255,0.4)",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        mona: ["Mona", ...defaultTheme.fontFamily.sans],
        monaWide: ["Mona Wide", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
