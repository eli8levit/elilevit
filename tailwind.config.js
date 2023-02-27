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
      colors: {
        pinkLighter: "#fff3f4",
      },
      fontFamily: {
        apfel: ["Apfel", ...defaultTheme.fontFamily.sans],
        ignazio: ["Ignazio", ...defaultTheme.fontFamily.sans],
        mona: ["Mona", ...defaultTheme.fontFamily.sans],
        monaNarrow: ["Mona Narrow", ...defaultTheme.fontFamily.sans],
        monaWide: ["Mona Wide", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
