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
      <SEO title="Chris LoPresto | Living Style Guide Driven Development" />
      <SectionLayout>
        <div sx={copyContainer}>
          <section sx={{ mb: 6 }}>
            <Styled.h1 sx={{ mb: 1 }}>Living Style Guide Driven Development</Styled.h1>
            <p sx={{ fontSize: 1 }}>EmberConf 2016</p>
          </section>
          <section sx={{ mb: 6 }}>
            <Styled.h2>Synopsis</Styled.h2>
            <Styled.p>
              Creating a living design system is essential to developing a cohesive experience for users over the
              lifetime of a product. Ember tooling and conventions make this easier than you might expect.
            </Styled.p>
            <Styled.p sx={{ mb: 0 }}>
              By organizing your application functionality into Ember components, you can easily build a living style
              guide to showcase key features, design patterns, and user interactions. This fashion of style guide driven
              development enables a rapid implementation and feedback cycle, a comprehensive overview of key features,
              and the blissful feeling of providing order in a chaotic world.
            </Styled.p>
          </section>
          <section sx={{ mb: 6 }}>
            <Styled.h2>Video</Styled.h2>
            <div sx={{ mb: 1, ...contentContainer, ...imageStyles }}>
              <AspectRatio ratio={16 / 9}>
                <Embed sx={{}} src="https://www.youtube.com/embed/Z1lL_Zo62h0" />
              </AspectRatio>
            </div>
            <Styled.a as={Link} to="thoughts/conference-talks/living-style-guide-driven-development/full-transcript">
              Full transcript
            </Styled.a>
          </section>
          <section>
            <Styled.h2>Slide Deck</Styled.h2>
            <div sx={contentContainer}>
              <Link
                sx={{ variant: 'links.plain' }}
                to="/thoughts/conference-talks/living-style-guide-driven-development/slide-deck"
                {...externalLinkProps}
              >
                <img
                  alt="Title slide for the EmberConf 2016 presentation Chris gave called Living Style Guide Driven Development"
                  src="https://get.chrislopresto.com/living-style-guide-driven-development/0000.png"
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
