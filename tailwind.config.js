/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      fontFamily: {
        belanosima: ["Belanosima", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
