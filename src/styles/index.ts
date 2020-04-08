import { Theme } from 'theme-ui';

const imageStyles = { boxShadow: (theme: Theme) => `3px 3px 0px ${theme?.colors?.shadow}`, borderRadius: 4 };
const cardImageStyles = { borderTopLeftRadius: 4, borderTopRightRadius: 4 };

export { imageStyles, cardImageStyles };
