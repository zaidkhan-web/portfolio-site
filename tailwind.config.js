/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "qoute-img": "url('./build/images/quote.png')",
      },
      colors: {
        "subtitle-red": "#FF014F",
        "black-bg": "#212428",
        "black-text": "rgb(179,189,203)",
        "white-bg": "#ECF0F3",
        "white-text": "#3C3E41",
        "header-cardBg": "linear-gradient(145deg, #e2e8ec, #ffffff)"
      },
      boxShadow: {
        "primary-shadow": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        "white-shadow": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        "inner-shadow": '1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset'
      },
      keyframes: {
        "linear-photoshop": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "linear-figma": {
          "0%": { width: "0%" },
          "100%": { width: "95%" },
        },
        "linear-adobe": {
          "0%": { width: "0%" },
          "100%": { width: "90%" },
        },
      },
      animation: {
        "linear-photoshop": "linear-photoshop 1s ease",
        "linear-figma": "linear-figma 1s ease",
        "linear-adobe": "linear-adobe 1s ease",
        "linear-design": "linear-design 1s ease",
      },
    },
    fontFamily: {
      myFont: ["Montserrat", "font-sans"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
