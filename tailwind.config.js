/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto',
      },
      fontSize: {
        title: ['34px', '54px'],
      },
      colors: {
        background: '#EEE9E3',
      },
      spacing: {
        hero: '43.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
