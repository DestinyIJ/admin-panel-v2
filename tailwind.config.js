/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        SourceSanPro: ["Source Sans Pro", "sans-serif"],
        Tapestry: ["Tapestry", 'cursive']
       },
    },
  },
  plugins: [],
}