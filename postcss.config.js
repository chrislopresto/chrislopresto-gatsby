module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      preserve: true,
      importFrom: './src/colors.js'
      // exportTo: './src/colors.css'
    }),
    require('tailwindcss'),
    require('autoprefixer')()
  ]
};
