/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
      },
      colors: {
        'dark-base': '#181A1F',
        'dark-secondary': '#25282F',
        'dark-primary': '#272A32',
      },
    },
  },
  plugins: [],
};
