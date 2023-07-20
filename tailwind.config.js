/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customblack: "#262830",
        customwhite: "#c7c7c7",
        customyello: "#c6a45a",
        customskyblue: "#0c4f6e",
        customblue: "#344766",
        custompurple: "#2a2e42",
        white: "#fff",
        whitee: "#f3f4f5",
        black: "#000000",
        skyblue: "#5ADAE8",
      },
    },
  },
  plugins: [],

  fontFamily: {
    spartan: ["aktiv-grotesk, sans-serif"],
    open: ["Open Sans", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
  },
};
