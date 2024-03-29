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
        dancing: ["Dancing Script", "cursive"],
        sofia: ["cursive"],
        belanosima: ["Belanosima", "sans-serif"],
        olden: ["Oldenburg", "kursif"],
        rem: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
