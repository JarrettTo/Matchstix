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
      fontSize: {
        '64': '4rem',  // 64 pixels is equivalent to 4rem if the base font size is 16px
      },
      colors: {
        
        light: '#f3f4f6',  // Example light gray
        DEFAULT: '#5c6ac4',  // Example brand color
        dark: '#202e78',    // Example dark blue
        orange: '#F77F00',
        darkblue:'#021E2D'
        
      },
      letterSpacing: {
        tightest: '-0.08em', // -8% letter spacing
      },
      lineHeight: {
        tightest: '0.83', // 83% line height
      },
      height: {
        '2/12':'16.666%',
        '6/12': '50%', // 100 * 10/12
        '3/12': '25%', // 100 * 10/12
        '4/12': '33%', // 100 * 10/12
        '10/12': '83.333333%', // 100 * 10/12
        '11/12': '91.666667%', // 100 * 11/12
        '1/10':'10%',
        '2/10':'20%',
        '4/10':'40%',
        '6/10':'60%',
        '8/10':'80%',
        '9/10':'90%',
      },
      orange: {
        500: '#F77F00', // Example shade for orange-500
        600: '#ea580c', // Darker shade for orange-600
      },
      width: {
        '2/12':'16.666%',
        '6/12': '50%', // 100 * 10/12
        '3/12': '25%', // 100 * 10/12
        '4/12': '33%', // 100 * 10/12
        '10/12': '83.333333%', // 100 * 10/12
        '11/12': '91.666667%', // 100 * 11/12
        '1/10':'10%',
        '2/10':'20%',
        '4/10':'40%',
        '6/10':'60%',
        '8/10':'80%',
        '9/10':'90%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
