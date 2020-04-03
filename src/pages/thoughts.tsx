/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';
import { imageStyles } from '../styles';
import { externalLinkProps } from '../utilities';

const thumbnailWidthPx = 300;
const thumbnailAspectRatio = 16.0 / 9.0;
const thumbnailHeightPx = thumbnailWidthPx / thumbnailAspectRatio;

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Thoughts" />
      <SectionLayout>
        <Styled.h1>Thoughts</Styled.h1>

        <section sx={{ mb: 7 }}>
          <div sx={{ mb: 5 }}>
            <Styled.h2>Talks</Styled.h2>
            <p>Here are some conference talks I have given.</p>
          </div>
          <div sx={{ mb: 6 }}>
            <Link to="/presentations/hot-swapping-our-rails-front-end-in-secret" {...externalLinkProps}>
              <p>Hot Swapping Our Rails Front End in Secret</p>
              <p sx={{ mb: 3, fontSize: 0, fontWeight: 'bold' }}>RailsConf 2018</p>
              <img
                alt="Title slide for the RailsConf 2018 presentation Chris gave called Hot Swapping Our Rails Front End in Secret"
                src="http://get.chrislopresto.com.s3.amazonaws.com/betterment-rebranding-bonanza/0000.png"
                sx={imageStyles}
                width={`${thumbnailWidthPx}px`}
                height={`${thumbnailHeightPx}px`}
              />
            </Link>
          </div>
          <div sx={{ mb: 6 }}>
            <Link to="/presentations/living-style-guide-driven-development" {...externalLinkProps}>
              <p>Living Style Guide Driven Development</p>
              <p sx={{ mb: 3, fontSize: 0, fontWeight: 'bold' }}>EmberConf 2016</p>
              <img
                alt="Title slide for the EmberConf 2016 presentation Chris gave called Living Style Guide Driven Development"
                src="http://get.chrislopresto.com.s3.amazonaws.com/living-style-guide-driven-development/0000.png"
                sx={imageStyles}
                width={`${thumbnailWidthPx}px`}
                height={`${thumbnailHeightPx}px`}
              />
            </Link>
          </div>
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
