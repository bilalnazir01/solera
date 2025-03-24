/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        zero: "0px",
        300: "300px",
        768: "768px",
        1024: "1024px",
        1160: "1160px",
        1280: "1280px",
        1440: "1440px",
        1512: "1512px",

      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
      padding: {
        custom: "10px"
      },
      colors: {
        "yellow": "#FFCC00",
        "light-gray": "#FBF6EC",
      },
      maxWidth: {
        1240: "1240px",
        1920: "1920px"
      }
    },
  },
  plugins: [],
}