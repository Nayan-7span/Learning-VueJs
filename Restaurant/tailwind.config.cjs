/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors:{
        orange:{
          primary: "#f39300",
        }
      }
    },
  },
  plugins: [],
}
