/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'fade-out': 'fade-out 5s ease both'
      },
      keyframes: {
        'fade-out': {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: []
}
