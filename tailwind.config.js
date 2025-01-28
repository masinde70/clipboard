module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hs(171, 66%, 44%)',
        lightBlue: 'hs(233, 100%, 69%)',
        darkGrayishBlue: 'hs(210, 10%, 33%)',
        grayishBlue: 'hs(201, 11%, 66%)',
        },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
