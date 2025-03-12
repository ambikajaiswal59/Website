import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#B20000',
        light: '#FDF2E9',
        bg: '#FCF3F3' //fcebeb
      },
      'secondary': {
        DEFAULT: '#0245A3',
        light: '#F1F7FF',
      },
      'contrast': '#333333',
      'white': '#fff',
      'gray': {
        100: '#f5f5f5',
        300: '#e0e0e0'
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        figtree: ['Figtree'],
        Candal: ['Candal'],
        Poppins: ['Poppins'],
        parkinsans: ['Parkinsans', 'sans-serif'],
      },
      screens: {
        '2xl': '1440px', // Adjusting the 2xl breakpoint to 1440px
      },
      boxShadow: {
        // custom: '0 15px 0 #fff, inset 0 -15px 0 rgba(255, 255, 255, 0.25), 0 45px 0 rgba(0, 0, 0, 0.15)',
        custom3D: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        custom: 'rgba(10, 37, 64, 0.35) 0px -1px 2px 0px inset'
      },
      colors: {
        customBlue: '#0c315b',
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        float: 'float 2s infinite alternate ease-in-out',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
