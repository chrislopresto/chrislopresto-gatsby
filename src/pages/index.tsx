/** @jsx jsx */
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { jsx, Styled } from 'theme-ui';
import { ICON_SIZE } from '../components/nav';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { Signature } from '../components/signature';
import { MainLayout } from '../layouts/main-layout';

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

        <section sx={{ mb: 7 }}>
          <Styled.h2 sx={{ mb: 3 }}>Say Hello</Styled.h2>
          <Styled.a
            href="https://twitter.com/chrislopresto"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaTwitter size={ICON_SIZE} sx={{ mr: 3 }} />
            @chrislopresto
          </Styled.a>
          <Styled.a
            href="https://github.com/chrislopresto/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaGithub size={ICON_SIZE} sx={{ mr: 3 }} />
            @chrislopresto
          </Styled.a>
          <Styled.a
            href="https://www.linkedin.com/in/chrislopresto/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', mb: 2 }}
          >
            <FaLinkedin size={ICON_SIZE} sx={{ mr: 3 }} />
            chrislopresto
          </Styled.a>
        </section>

        <section sx={{ mb: 7 }}>
          <p sx={{ mb: 3, textTransform: 'uppercase' }}>Don't panic.</p>
          <Signature sx={{ width: '5rem' }} description="Chris LoPresto signatures" />
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
