/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "qoute-img": "url('./build/images/quote.png')",
      },
      colors: {
        "subtitle-red": "#f9004d",
      },
      boxShadow: {
        "primary-shadow": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      keyframes: {
        "linear-photoshop": {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
        "linear-figma": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "linear-adobe": {
          "0%": { width: "0%" },
          "100%": { width: "85%" },
        },
        "linear-design": {
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
