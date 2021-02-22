module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      light: '#e3d4cc',
      dark: '#647566',
    }),
    extend: {
      width: {
        '1/8': '12.5%',
        400: '400px',
        800: '800px',
      },
      height: {
        '1/8': '12.5%',
        400: '400px',
        800: '800px',
      },
      padding: {
        25: '25px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
