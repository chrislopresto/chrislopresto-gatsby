/** @jsx jsx */
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { jsx, Link, Styled, Text } from 'theme-ui';
import { ICON_SIZE } from '../components/nav';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { Signature } from '../components/signature';
import { copyContainer } from '../gatsby-plugin-theme-ui';
import underConstruction from '../images/under-construction.gif';
import { MainLayout } from '../layouts/main-layout';
import { externalLinkProps } from '../utilities';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Engineering leader. Musician." />
      <SectionLayout>
        <section sx={{ mb: 7 }}>
          <Styled.h1 sx={{ mb: 2 }}>
            Chris L<span sx={{ fontSize: 6 }}>o</span>Presto
          </Styled.h1>
          <p sx={{ fontSize: 1 }}>Engineering leader. Musician.</p>
        </section>

        <section sx={{ mb: 7, ...copyContainer }}>
          <Styled.h2>Hello</Styled.h2>
          <Styled.p>
            Thanks for stopping by. Back in the day, websites used to greet readers conversationally. In that spirit,
            hello.
          </Styled.p>
          <Styled.p>
            Also in that spirit, here's an ostensibly temporary indication that my site will soon have more content.
          </Styled.p>
          <img src={underConstruction} alt="This site is under construction" />
        </section>

        <section sx={{ mb: 7 }}>
          <Styled.h2 sx={{ mb: 3 }}>Say Hello</Styled.h2>
          <Link
            variant="accent"
            {...externalLinkProps}
            href="https://twitter.com/chrislopresto"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaTwitter size={ICON_SIZE} sx={{ mr: 3 }} />
            @chrislopresto
          </Link>
          <Link
            variant="accent"
            {...externalLinkProps}
            href="https://github.com/chrislopresto/"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaGithub size={ICON_SIZE} sx={{ mr: 3 }} />
            @chrislopresto
          </Link>
          <Link
            variant="accent"
            {...externalLinkProps}
            href="https://www.linkedin.com/in/chrislopresto/"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaLinkedin size={ICON_SIZE} sx={{ mr: 3 }} />
            chrislopresto
          </Link>
        </section>

        <section sx={{ mb: 5 }}>
          <Text as="p" variant="text.subtitle" sx={{ textTransform: 'uppercase' }}>
            Don't panic
          </Text>
        </section>

        <section sx={{ mb: 7 }}>
          <Signature sx={{ width: '10rem', ml: [-2, -3] }} description="Chris LoPresto signature" />
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
