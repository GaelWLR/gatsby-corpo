module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0d92d2',
        secondary: '#e83278',
        tertiary: '#2e4057',
      },
      backgroundImage: theme => ({
        home: "url('../images/bg_home.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
