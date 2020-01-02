// Inspired by https://github.com/tailwindcss/discuss/issues/100#issuecomment-407443169
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, `src`)
};

const purgeCssConfig = {
  paths: glob.sync(`${PATHS.src}/**/*.{tsx,css}`, { nodir: true }),
  extractors: [
    {
      // Custom extractor to allow special characters (like ":") in class names
      // See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
      extensions: [`tsx`, `css`]
    }
  ],
  whitelist: ['mode-dark', 'mode-light'],
  whitelistPatterns: [/body/, /html/, /\-primary/, /\-secondary/, /\-accent/, /\-alt/],
  whitelistPatternsChildren: [/BlogLayout$/]
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage.includes(`develop`)) return;

  // Add PurgeCSS in production
  // See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
  if (stage.includes(`build`)) {
    actions.setWebpackConfig({
      plugins: [new PurgeCssPlugin(purgeCssConfig)]
    });
  }
};
