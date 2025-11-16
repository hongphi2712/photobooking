/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': {
          50: '#fff5f9',
          100: '#ffe8f2',
          200: '#ffd1e6',
          300: '#ffaad4',
          400: '#ff7ab8',
          500: '#ff4d9c',
          600: '#f02e7d',
          700: '#d41d63',
          800: '#b01952',
          900: '#921847',
        },
      },
    },
  },
  plugins: [],
}
