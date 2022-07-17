/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
};
