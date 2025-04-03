/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'], 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        zoomIn: 'zoomIn 1.5s ease-in-out',
        spin: 'spin 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
