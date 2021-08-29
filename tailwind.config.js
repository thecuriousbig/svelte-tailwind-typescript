const production = !process.env.ROLLUP_WATCH
module.exports = {
  purge: {
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
      './public/index.html',
    ],
    enable: !production
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
