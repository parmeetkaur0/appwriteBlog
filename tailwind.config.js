/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#FEF3E2',
        customGray: '#BEC6A0',
        customBlue: '#FEF3E2',
        customPink: '#FEF3E2',
      },
    },
  },
  plugins: [],
}

