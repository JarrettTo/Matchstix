const defaultTheme = require("tailwindcss/defaultTheme");
 
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      rotate: {
        'custom': '100deg', // Custom rotation angle
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
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
        offwhite:'#FFF1D6',
        darkgray:'#0A0A0A',
        lightgray:'#131313',
        light: '#f3f4f6',  // Example light gray
        DEFAULT: '#5c6ac4',  // Example brand color
        dark: '#202e78',    // Example dark blue
        orange: '#F77F00',
        darkblue:'#003049',
        navyblue: {
          600: '#030D17'  // Replace '#005f73' with the hex code of the color you want
        }
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
      navyblue: {
        500: '#F77F00', // Example shade for orange-500
        600: '#003049', // Darker shade for orange-600
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
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}