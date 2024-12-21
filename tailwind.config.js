/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        "main" : "#010211",
        "Blue" : "#1e98d5"
      },
      textColor : {
        "Blue" : "#1e98d5"
      }
    },
  },
  plugins: [],
}

