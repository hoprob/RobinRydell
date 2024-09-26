/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    colors:{
      primary: "#22333B",
      secondary: "#5E503F",
      teritary: "#354A54",
      light: "#F2F4F3",
      info: "#A9927D",
      dark: "#0A0908",
    },
    fontFamily:{
      'logo': ['Consolas', 'Courier New', 'monospace']
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        // 'waving-hand': 'wave 2s infinitive',
        'waving-hand': 'wave 2s 3',
      },
    },
  },
  plugins: [],
}

