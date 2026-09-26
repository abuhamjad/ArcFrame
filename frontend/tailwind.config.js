/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#1E3A5F',
        blue: {
          primary: '#0066FF',
          dark: '#0052CC',
          light: '#E6F0FF',
        },
        cyan: {
          accent: '#00D4FF',
        },
        neutral: {
          850: '#F7F8FA',
          950: '#1A1D23',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
