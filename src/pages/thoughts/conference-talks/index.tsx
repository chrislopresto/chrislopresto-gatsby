/** @jsx jsx */
import { Link } from 'gatsby';
import { Box, Card, Grid, jsx, Styled } from 'theme-ui';
import { SectionLayout } from '../../../components/section-layout';
import { SEO } from '../../../components/seo';
import emberConf2016Still from '../../../images/chris-lopresto-speaking-at-ember-conf-2016.jpg';
import railsConf2018Still from '../../../images/chris-lopresto-speaking-at-rails-conf-2018.jpg';
import { MainLayout } from '../../../layouts/main-layout';
import { cardImageStyles } from '../../../styles';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Conference Talks" />
      <SectionLayout>
        <Styled.h1 sx={{ mb: 5 }}>Conference Talks</Styled.h1>

        <section sx={{ mb: 7 }}>
          <div sx={{ mb: 5 }}>
            <p>Here are some conference talks I have given.</p>
          </div>
          <Grid gap={[5, 4]} columns={[1, 2, 3]}>
            <Link
              sx={{ variant: 'links.plain' }}
              to="/thoughts/conference-talks/hot-swapping-our-rails-front-end-in-secret"
            >
              <Card>
                <img
                  alt="Chris LoPresto speaking at RailsConf 2018"
                  src={railsConf2018Still}
                  sx={{ mb: 2, ...cardImageStyles }}
                />
                <Box sx={{ p: 4, fontSize: 1 }}>
                  <h2 sx={{ variant: 'text.header' }}>Hot Swapping Our Rails Front End in Secret</h2>
                  <p sx={{ variant: 'text.subheader', mb: 3 }}>RailsConf 2018</p>
                  <Styled.p sx={{ variant: 'text.dainty', mb: 0 }}>
                    “Everything looks like this, but we want it to look like that.” This is the story of how the team at
                    Betterment replaced our front end code base to launch our new brand. Across all our apps. In secret.
                    And make everything responsive. In 8 weeks.
                  </Styled.p>
                </Box>
              </Card>
            </Link>
            <Link sx={{ variant: 'links.plain' }} to="/thoughts/conference-talks/living-style-guide-driven-development">
              <Card>
                <img
                  alt="Chris LoPresto speaking at EmberConf 2016"
                  src={emberConf2016Still}
                  sx={{ mb: 2, ...cardImageStyles }}
                />
                <Box sx={{ p: 4, fontSize: 1 }}>
                  <h2 sx={{ variant: 'text.header' }}>Living Style Guide Driven Development</h2>
                  <p sx={{ variant: 'text.subheader', mb: 3 }}>EmberConf 2016 </p>
                  <Styled.p sx={{ variant: 'text.dainty', mb: 0 }}>
                    Creating a living design system is essential to developing a cohesive experience for users over the
                    lifetime of a product. Ember tooling and conventions make this easier than you might expect.
                  </Styled.p>
                </Box>
              </Card>
            </Link>
          </Grid>
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
