/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';
import { jsx, Text } from 'theme-ui';
import { copyContainer } from '../../gatsby-plugin-theme-ui';
import { MainContentLayout } from '../main-content-layout';
import { SectionLayout } from '../section-layout';

interface BlogContentLayoutProps {
  children?: ReactNode;
}

export const BlogContentLayout = ({ children }: BlogContentLayoutProps) => {
  return (
    <MDXProvider
      components={{
        h1: props => <Text as="h1" variant="title" sx={{ mb: 6 }} {...props} />,
        h2: props => <Text as="h2" variant="subtitle" sx={{ mb: 3, mt: 6 }} {...props} />,
        p: props => <Text as="p" variant="normal" sx={{ mb: 4, fontSize: 2 }} {...props} />,
        img: props => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img sx={{ boxShadow: theme => `3px 3px 0px ${theme.colors.shadow}`, borderRadius: 4 }} {...props} />
        )
      }}
    >
      <MainContentLayout>
        <SectionLayout>
          <div sx={{ ...copyContainer }}>{children}</div>
        </SectionLayout>
      </MainContentLayout>
    </MDXProvider>
  );
};
