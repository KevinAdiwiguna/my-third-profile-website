/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a192f',
        'slidebar': '#112240',
        'primary': '#ccd6f6',
        'secondary': '#53d3b9',
        'secondary:hover': '#64ffda'
      }
    },
  },
  plugins: [],
}
