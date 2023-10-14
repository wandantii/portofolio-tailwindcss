/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '50px',
    },
    extend: {
      colors: {
        primary: '#9333ea',
        secondary: '#64748b',
        dark: '#1e1b4b',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': {transform:'rotate (-3deg)'},
          '50%': {transform:'rotate(3deg)'},
        },
      },
    },
  },
  plugins: [],
}

