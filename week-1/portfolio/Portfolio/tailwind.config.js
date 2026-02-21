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
        'outfit': ['Outfit', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
      colors: {
        'premium-black': '#0a0a0a',
        'premium-gray': '#1a1a1a',
        'off-white': '#fcfcfc',
        'accent-red': '#ff3333',
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
