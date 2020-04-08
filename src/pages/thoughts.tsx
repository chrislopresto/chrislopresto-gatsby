/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, Card, Grid, jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { MainLayout } from '../layouts/main-layout';
import { externalLinkProps } from '../utilities';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Thoughts" />
      <SectionLayout>
        <Styled.h1 sx={{ mb: 5 }}>Thoughts</Styled.h1>

        <section sx={{ mb: 7 }}>
          <div sx={{ mb: 5 }}>
            <Styled.h2>Conference Talks</Styled.h2>
            <p>Here are some conference talks I have given.</p>
          </div>
          <Grid gap={[5, 4]} columns={[1, 2, 3]}>
            <Link
              sx={{ variant: 'links.plain' }}
              to="/presentations/hot-swapping-our-rails-front-end-in-secret"
              {...externalLinkProps}
            >
              <Card>
                <img
                  alt="Title slide for the RailsConf 2018 presentation Chris gave called Hot Swapping Our Rails Front End in Secret"
                  src="http://get.chrislopresto.com.s3.amazonaws.com/betterment-rebranding-bonanza/0000.png"
                  sx={{ mb: 2 }}
                />
                <Box sx={{ p: 4, fontSize: 1 }}>
                  <h2 sx={{ variant: 'text.header' }}>Hot Swapping Our Rails Front End in Secret</h2>
                  <p sx={{ variant: 'text.subheader', mb: 3 }}>RailsConf 2018</p>
                  <Styled.p sx={{ variant: 'text.dainty', mb: 0 }}>
                    “Everything looks like this, but we want it to look like that.” This is the story of how the team at
                    Betterment replaced our front end code base to launch our new brand. Across all our apps. In secret.
                    And make everything responsive. In 8 weeks.
                  </Styled.p>
                  {/* <Styled.p sx={{ variant: 'text.dainty' }}>
                    Rails conventions come in handy when a wholesale UI transformation is called for. Learn how we
                    launched a design system, dark deployed an all-new view layer, and unveiled our new brand identity
                    right on schedule.
                  </Styled.p>
                  <Styled.p sx={{ variant: 'text.dainty' }}>
                    We shipped a lot of code extremely quickly yet managed to elevate code quality and capabilities in
                    the process.
                  </Styled.p>
                  <Styled.p sx={{ variant: 'text.dainty' }}>Constraint breeds creativity.</Styled.p> */}
                </Box>
              </Card>
            </Link>
            <Link
              sx={{ variant: 'links.plain' }}
              to="/presentations/living-style-guide-driven-development"
              {...externalLinkProps}
            >
              <Card>
                <img
                  alt="Title slide for the EmberConf 2016 presentation Chris gave called Living Style Guide Driven Development"
                  src="http://get.chrislopresto.com.s3.amazonaws.com/living-style-guide-driven-development/0000.png"
                  sx={{ mb: 2 }}
                />
                <Box sx={{ p: 4, fontSize: 1 }}>
                  <h2 sx={{ variant: 'text.header' }}>Living Style Guide Driven Development</h2>
                  <p sx={{ variant: 'text.subheader', mb: 3 }}>EmberConf 2016 </p>
                  <Styled.p sx={{ variant: 'text.dainty', mb: 0 }}>
                    Creating a living design system is essential to developing a cohesive experience for users over the
                    lifetime of a product. Ember tooling and conventions make this easier than you might expect.
                  </Styled.p>
                  {/* <Styled.p sx={{ variant: 'text.dainty', mb: 0 }}>
                    By organizing your application functionality into Ember components, you can easily build a living
                    style guide to showcase key features, design patterns, and user interactions. This fashion of style
                    guide driven development enables a rapid implementation and feedback cycle, a comprehensive overview
                    of key features, and the blissful feeling of providing order in a chaotic world.
                  </Styled.p> */}
                </Box>
              </Card>
            </Link>
          </Grid>
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
