/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "hsl(0, 0%, 98%)",
        darkGray: "hsl(0, 0%, 52%)",
        darkBlue_lmText: "hsl(200, 15%, 8%)",
        darkBlue_dmBg: "hsl(207, 26%, 17%)",
        darkBlue_dmElements: "hsl(209, 23%, 22%)",
      },
      backgroundImage: {
        searchIcon: "url('./pages/homeComponents/images/search.svg')",
        closeIcon: "url('./pages/homeComponents/images/close.png')",
      },
    },
  },
  plugins: [],
};
