/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e', // green-500
          dark: '#16a34a',    // green-600
          light: '#bbf7d0',   // green-100
        },
        secondary: {
          DEFAULT: '#fde047', // yellow-400
          dark: '#facc15',   // yellow-500
          light: '#fef9c3',  // yellow-100
        },
      },
    },
  },
  plugins: [],
}