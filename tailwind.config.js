/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        subtitle: '#475569',
        par: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

