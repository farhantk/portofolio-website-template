/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#35B2EA',
        'secondary': '#0F172A',
        'third': '#11E293B',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
