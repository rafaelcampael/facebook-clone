/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gray-facebook':'#f0f2f5',
        'blue-facebook':'#1877f2',
        'green-facebook':'#42b72a',
      },
      spacing:{
        '580':'580px',
        '380':'380px',
        '450':'450px',
      }
    },
  },
  plugins: [],
}
