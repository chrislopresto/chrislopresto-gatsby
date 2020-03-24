module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      preserve: true
    }),
    require('tailwindcss'),
    require('autoprefixer')()
  ]
};
