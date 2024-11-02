/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#F4ACB7',
        customLightPink: '#FFCAD4',
        customDustyRose: "#9D8189",
        customGreen: '#D8E2DC',
        customPeach: '#FFE5D9'
      },

      keyframes: {
        moveIn: {
          '0%': { transform: 'translateY(-0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(10%)' },
        },
        infiniteScroll: {
          
          '100%': { transform: 'translate(calc(-50% - 0.25rem))' },
        },
        loopScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

        shake: {
          '0%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(-5px)'},
          '50%': {transform: 'translateX(5px)'},
          '75%': {transform: 'translateX(-5px)'},
          '100%': {transform: 'translateX(0)'},

        },

      },

      animation: {
        moveIn: 'moveIn 0.7s ease-out forwards',
        upDown: 'upDown 1.5s ease-in-out infinite',
        infiniteScroll: 'infiniteScroll 10s linear infinite',
        loopScroll: 'loopScroll 50s linear infinite',
        shake: ' shake 0.5s ease-in-out',
      },

    },
  },
  plugins: [],
}

