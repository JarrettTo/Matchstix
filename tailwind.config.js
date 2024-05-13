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
      height: {
        '2/12':'16.666%',
        '6/12': '50%', // 100 * 10/12
        '3/12': '25%', // 100 * 10/12
        '4/12': '33%', // 100 * 10/12
        '10/12': '83.333333%', // 100 * 10/12
        '11/12': '91.666667%', // 100 * 11/12
        '2/10':'20%',
        '4/10':'40%',
        '6/10':'60%',
        '8/10':'80%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
