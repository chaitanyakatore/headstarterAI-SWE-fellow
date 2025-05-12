// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};
