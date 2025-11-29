/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
              slideInDown: {
          "0%": { transform: "translateY(-120px)", opacity: "0" },
           "60%":{ opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
               slideInDown: "slideInDown 2.8s ease-in-out  forwards",
      },
    },
  },
  plugins: [],
};
