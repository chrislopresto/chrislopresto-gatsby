import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useColorMode } from 'theme-ui';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

interface Props {
  title: string;
  description: string;
  image: string;
  pathname: string;
  article: boolean;
}

const SEO = ({ title, description, image, pathname, article }: Props) => {
  const [colorMode] = useColorMode();

  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage, twitterUsername }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`
        };

        return (
          <Helmet
            title={seo.title}
            titleTemplate={titleTemplate}
            bodyAttributes={{ class: `color-scheme-${colorMode} bg-${colorMode}-alt` }}
          >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        );
      }}
    />
  );
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};

export { SEO };
