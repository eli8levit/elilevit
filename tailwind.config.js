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
        blackTransparentLighter: "rgba(32,32,32,0.15)",
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
