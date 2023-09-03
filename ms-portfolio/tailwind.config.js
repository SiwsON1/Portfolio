/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    container: {
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      height: {
        '66': '66%',
      },
      width: {
        '66': '66%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gold': '#f2b63d',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'black': '#1f2126',
        'moreblack':'#000000',
        'red' : '#ff0000',
        'green': '#0f9b0f',
        'neon': '#03e9f4',
        'main': '#2e2257',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        star: 'url("/public/star-animated.png")',
        site: 'url("/public/site-bg-1.jpg")',
        site1: 'url("/public/site-bg.svg")',
        bottomLeftImage: 'url("/public/bottom-left.png")',
        avatar: 'url("/public/avatar.png")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      boxShadow: {
        'neon': '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'titillium': ['Titillium Web', 'sans-serif'],
        'neueMontreal': ['Neue Montreal', 'sans-serif']
      },
    },
  },
  plugins: [],
}
