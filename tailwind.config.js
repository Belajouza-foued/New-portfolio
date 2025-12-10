/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
        colors: {
        primary: "#3b82f6", // ta couleur principale
      },
      keyframes: {
              slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
           "50%":{ opacity: "0.5" },
          "100%": { transform: "translateX(-100)", opacity: "1" },
        },
      },
      animation: {
               slideInRight: "slideInRight 2.8s ease-in-out  forwards",
      },
          },
  },
    plugins: [],
};
