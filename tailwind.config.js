/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          text: 'hsl(200, 15%, 8%)', //Light Mode Text
          input: 'hsl(0, 0%, 52%)', //Light Mode Input
          background: 'hsl(0, 0%, 98%)', //Light Mode Background
          elements: 'hsl(0, 0%, 100%)', //Light Mode Elements
        },
        dark: {
          text: 'hsl(0, 0%, 100%)', //Dark Mode Text
          background: 'hsl(207, 26%, 17%)', //Dark Mode Background
          elements: 'hsl(209, 23%, 22%)', //Dark Mode Elements
        },
      },
      fontFamily: {
        defaultFont: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
