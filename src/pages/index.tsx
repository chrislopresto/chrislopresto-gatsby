import React from 'react';
import { SectionLayout } from '../components/section-layout';
import { SEO } from '../components/seo';
import { Signature } from '../components/signature';
import { MainLayout } from '../layouts/main-layout';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ICON_SIZE } from '../components/nav';

export default () => {
  return (
    <MainLayout>
      <SEO title="Chris LoPresto | Engineering leader. Musician." />
      <SectionLayout>
        <section className="mb-10">
          <h1>
            Chris L<span className="text-5xl">o</span>Presto
          </h1>
          <p className="-mt-3 text-sm">Engineering leader. Musician.</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-1">Say Hello</h2>
          <a href="https://twitter.com/chrislopresto" target="_blank" rel="noopener noreferrer" className="flex mb-1">
            <FaTwitter size={ICON_SIZE} className="mr-2" />
            @chrislopresto
          </a>
          <a href="https://github.com/chrislopresto/" target="_blank" rel="noopener noreferrer" className="flex mb-1">
            <FaGithub size={ICON_SIZE} className="mr-2" />
            @chrislopresto
          </a>
          <a
            href="https://www.linkedin.com/in/chrislopresto/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mb-1"
          >
            <FaLinkedin size={ICON_SIZE} className="mr-2" />
            chrislopresto
          </a>
        </section>

        <section className="mb-10">
          <p className="mb-2 uppercase">Don't panic.</p>
          <Signature className="w-20 text-primary hover:text-accent" description="Chris LoPresto signatures" />
        </section>
      </SectionLayout>
    </MainLayout>
  );
};
