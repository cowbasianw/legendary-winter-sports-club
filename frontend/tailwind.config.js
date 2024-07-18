module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',

  ],
  theme: {
    extend: {
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