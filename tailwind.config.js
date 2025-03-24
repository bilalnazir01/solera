/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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