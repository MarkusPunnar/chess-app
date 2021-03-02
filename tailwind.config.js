module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      light: '#e3d4cc',
      dark: '#647566',
    }),
    borderRadius: {
      circle: '50%',
    },
    extend: {
      width: {
        '1/8': '12.5%',
        15: '15px',
        400: '400px',
        800: '800px',
        resp: 'calc(min(100vw, 100vh) - 32px)',
      },
      height: {
        '1/8': '12.5%',
        15: '15px',
        400: '400px',
        800: '800px',
        resp: 'calc(min(100vw, 100vh) - 32px)',
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
