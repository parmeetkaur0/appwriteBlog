/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#FFEBD4',
        customGray: '#F0A8D0',
        customBlue: '#FFC6C6',
        customPink: '#F7B5CA',
      },
    },
  },
  plugins: [],
}

