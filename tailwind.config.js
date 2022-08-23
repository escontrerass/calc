/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#20232a',
        fontPrimary: '#629e54',
        fontSecondary: '#3b5e8e',
      },
    },
  },
  plugins: [],
};
