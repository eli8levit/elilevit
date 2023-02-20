/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

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
        haIsh: "url(/ha-ish-studio.jpg)",
        player: "url(/player.png)",
      },
      fontSize: {
        "7.5xl": "5.5rem",
      },
      boxShadow: {
        bike: `0 5px 25px -3px #000097, 0 0 40px 0 rgba(0,0,0,0.4)`,
        art: `0 5px 45px -10px #000097`,
        indexCard: `0 0 25px -5px #000097`,
        indexCardBg: `0 0 50px -2px #000097`,
      },
      colors: {
        pinkLighter: "#fff3f4",
        secondaryBg: "#00001a",
        bla: "#000069",
        blueDark: "#000084",
        secondaryBg2: "#0000d8",
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
