/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        
        light: '#f3f4f6',  // Example light gray
        DEFAULT: '#5c6ac4',  // Example brand color
        dark: '#202e78',    // Example dark blue
        orange: '#F77F00',
        darkblue:'#021E2D'
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
