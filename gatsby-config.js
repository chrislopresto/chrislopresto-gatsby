module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/layouts/blog-layout.tsx'),
          default: require.resolve('./src/layouts/main-layout.tsx')
        }
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
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
