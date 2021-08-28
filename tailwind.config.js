module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  /*  theme: {
    extend: {
      backgroundImage: () => ({
        'floating-cogs-pattern': "url('./assets/images/floating-cogs-pattern.svg')"
      })
    }
  }, */
  variants: {
    extend: {}
  },
  plugins: []
};
