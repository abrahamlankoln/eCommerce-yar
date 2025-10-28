/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b2140',
          dark: '#08162b',
          light: '#1b3763',
        },
        accent: '#d8b04a',
      },
    },
  },
  plugins: [],
}
