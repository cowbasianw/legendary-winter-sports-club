module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',

  ],

  theme: {
    extend: {
      width: {
        '240px': '240px', // Custom width for 240px
      },
      screens: {
        'custom-lg': '1024px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      fontFamily: {
        schoolbook: ['New Century Schoolbook', 'TeX Gyre Schola', 'serif'],
        NotoSans: ['Noto Sans', 'serif'],
      },
      colors: {
        customOrange: '#ff8b3d', // Add your custom color here
      },
    },
  },
  plugins: [],
};