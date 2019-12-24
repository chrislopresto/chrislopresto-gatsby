module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTsx: true,
        jsxPragma: 'jsx',
        allExtensions: true
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    }
  ],
  siteMetadata: {
    title: 'Hello',
    titleTemplate: '%s · Chris LoPresto',
    description: 'Chris LoPresto - Engineering leader. Musician.',
    url: 'https://chrislopresto.com',
    image: '/images/chris-lopresto-640.jpg',
    twitterUsername: '@chrislopresto'
  }
};
