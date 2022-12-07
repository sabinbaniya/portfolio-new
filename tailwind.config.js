/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#004DCA",
        "primary-light-blue": "#649FFF",
        background: "#070c12",
        text: "#f5f5f5",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
    },
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
