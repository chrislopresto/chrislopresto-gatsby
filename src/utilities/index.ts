import { useThemeUI } from 'theme-ui';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

const useActiveLinkStyle = () => {
  const { theme } = useThemeUI();

  return {
    partiallyActive: true,
    activeStyle: { color: theme?.colors?.accent },
    sx: { variant: 'links.plain' }
  };
};

export { externalLinkProps, useActiveLinkStyle };
