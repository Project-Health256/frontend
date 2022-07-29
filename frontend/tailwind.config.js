const { blue } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      blueRYB: {
        "50": "#ADADFF",
        "100": "#9999FF",
        "200": "#8585FF",
        "300": "#7070FF",
        "400": "#5C5CFF",
        "500": "#4747FF",
        "600": "#3333FF",
        "700": "#1F1FFF",
        "800": "#0A0AFF",
        "900": "#0000F5",
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
