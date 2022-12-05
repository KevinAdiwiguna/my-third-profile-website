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
        'secondary:hover': '#64ffda',
        'frontendweb':'#0008C1',
        'frontendmobile':'#CFFDE1',
        'uiux':'#FF6D28',
        'backend':'#6D67E4',
        'devops':'#EFF5F5'
      },
      fontSize: {
        'xxs':'8px'
      }
    },
  },
  plugins: [],
}
