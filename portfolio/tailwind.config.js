/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        heading: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6', // Purple 500 (Accent)
        secondary: '#1f2937', // Gray 800
        accent: '#a78bfa', // Purple 400
        background: '#ffffff', // White
        surface: '#f9fafb', // Gray 50
        'surface-accent': '#fdf4ff', // Light Purple for About section
      }
    },
  },
  plugins: [],
}
