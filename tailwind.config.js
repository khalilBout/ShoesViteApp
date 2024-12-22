/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      // screens: {
      //   xs: "320px",
      //   sm: "375px",
      //   sml: "500px",
      //   md: "667px",
      //   mdl: "768px",
      //   lg: "960px",
      //   lgl: "1024px",
      //   xl: "1280px",
      // },
      fontFamily: {
        title: ["Kaushan Script", "sans-serif"],
        body: ["Sirin Stencil", "sans-serif"],
        arabicFont: ["Amiri", "sans-serif"],
      },
      colors: {
        primary: "#f19509",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray: "#1a1f25",
        lightGray: "#272c35",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
