export const COPY_CONTAINER_MAX_WIDTH = '48rem';
export const copyContainer = { maxWidth: COPY_CONTAINER_MAX_WIDTH };

const space = [0, 1, 4, 8, 12, 16, 32, 40, 48];
const colors = {
  modes: {
    default: {
      text: '#456173',
      background: '#f2f2f0',
      primary: '#1b3c59',
      secondary: '#f2f2f0',
      accent: '#11bfae',
      shadow: 'rgba(0, 0, 0, 0.2)'
    },
    dark: {
      text: '#f2f2f0',
      background: '#1b3c59',
      primary: '#f2f2f0',
      secondary: '#456173',
      accent: '#11bfae',
      shadow: 'rgba(255, 255, 255, 0.2)'
    }
  }
};

export const themeUiTheme = {
  fonts: {
    hero: 'Marvin Visions Big, sans-serif',
    serif: 'Times New Roman',
    sans: 'Helvetica, sans-serif'
  },
  space,
  colors,
  text: {
    title: {
      fontFamily: 'hero',
      fontSize: 7,
      fontWeight: 'bold',
      lineHeight: 0.85,
      textShadow: (theme: any) => `3px 3px 0px ${theme.colors.shadow}`,
      mb: 2
    },
    subtitle: {
      fontFamily: 'hero',
      fontSize: 4,
      lineHeight: 0.85,
      textShadow: (theme: any) => `2px 2px 0px ${theme.colors.shadow}`,
      mb: 2
    },
    normal: {
      fontFamily: 'sans',
      fontSize: 2
    }
  },
  links: {
    plain: {
      color: 'text',
      textDecoration: 'none',
      '&:active': {
        color: 'accent'
      },
      '&:hover': {
        color: 'accent'
      },
      '&:focus': {
        color: 'accent'
      }
    },
    accent: {
      color: 'accent',
      textDecoration: 'none',
      '&:hover': {
        color: 'text'
      },
      '&:focus': {
        color: 'text'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'sans'
    },
    h1: {
      variant: 'text.title',
      mb: 3
    },
    h2: {
      variant: 'text.subtitle'
    },
    a: {
      color: 'text',
      textDecoration: 'underline',
      '&:hover': {
        color: 'accent'
      },
      '&:focus': {
        color: 'accent'
      }
    },
    p: {
      variant: 'text.normal',
      mb: 5
    }
  }
};

export type SiteThemeFonts = typeof themeUiTheme.fonts;
export type SiteThemeColors = typeof themeUiTheme.colors.modes.default;
