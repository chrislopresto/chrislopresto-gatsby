/** @jsx jsx */
import { AspectRatio, Embed, jsx, Styled } from 'theme-ui';
import { Link } from 'gatsby';
import { SectionLayout } from '../../../../components/section-layout';
import { SEO } from '../../../../components/seo';
import { copyContainer, contentContainer } from '../../../../gatsby-plugin-theme-ui';
import { MainLayout } from '../../../../layouts/main-layout';
import { externalLinkProps } from '../../../../utilities';
import { imageStyles } from '../../../../styles';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Hot Swapping Our Rails Front End in Secret" />
      <SectionLayout>
        <div sx={copyContainer}>
          <section sx={{ mb: 6 }}>
            <Styled.h1 sx={{ mb: 1 }}>Hot Swapping Our Rails Front End in Secret</Styled.h1>
            <p sx={{ fontSize: 1 }}>RailsConf 2018</p>
          </section>
          <section sx={{ mb: 6 }}>
            <Styled.h2>Synopsis</Styled.h2>
            <Styled.p>
              “Everything looks like this, but we want it to look like that.” This is the story of how the team at
              Betterment replaced our front end code base to launch our new brand. Across all our apps. In secret. And
              make everything responsive. In 8 weeks.
            </Styled.p>
            <Styled.p>
              Rails conventions come in handy when a wholesale UI transformation is called for. Learn how we launched a
              design system, dark deployed an all-new view layer, and unveiled our new brand identity right on schedule.
            </Styled.p>
            <Styled.p>
              We shipped a lot of code extremely quickly yet managed to elevate code quality and capabilities in the
              process.
            </Styled.p>
            <Styled.p sx={{ mb: 0 }}>Constraint breeds creativity.</Styled.p>
          </section>
          <section sx={{ mb: 6 }}>
            <Styled.h2>Video</Styled.h2>
            <div sx={{ ...contentContainer, ...imageStyles, mb: 1 }}>
              <AspectRatio ratio={16 / 9}>
                <Embed src="https://www.youtube.com/embed/Egumr5KiTNI" />
              </AspectRatio>
            </div>
            <Styled.a
              as={Link}
              to="/thoughts/conference-talks/hot-swapping-our-rails-front-end-in-secret/full-transcript"
            >
              Full transcript
            </Styled.a>
          </section>
          <section>
            <Styled.h2>Slide Deck</Styled.h2>
            <div sx={contentContainer}>
              <Link
                sx={{ variant: 'links.plain' }}
                to="/thoughts/conference-talks/hot-swapping-our-rails-front-end-in-secret/slide-deck"
                {...externalLinkProps}
              >
                <img
                  alt="Title slide for the RailsConf 2018 presentation Chris gave called Hot Swapping Our Rails Front End in Secret"
                  src="http://get.chrislopresto.com.s3.amazonaws.com/betterment-rebranding-bonanza/0000.png"
                  sx={{ ...imageStyles, mb: 2 }}
                />
              </Link>
            </div>
          </section>
        </div>
      </SectionLayout>
    </MainLayout>
  );
};
