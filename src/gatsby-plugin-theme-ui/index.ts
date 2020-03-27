export const COPY_CONTAINER_MAX_WIDTH = '48rem';
export const copyContainer = { maxWidth: COPY_CONTAINER_MAX_WIDTH };

const space = [0, 1, 4, 8, 12, 16, 32, 40, 48];

export const themeUiTheme = {
  fonts: {
    hero: 'Marvin Visions Big, sans-serif'
  },
  space,
  colors: {
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
  },
  styles: {
    a: {
      color: 'accent',
      '&:hover': {
        color: 'text'
      },
      '&:focus': {
        color: 'text'
      }
    },
    p: {
      marginBottom: `${space[4]}px`
    }
  }
};

export type SiteThemeFonts = typeof themeUiTheme.fonts;
export type SiteThemeColors = typeof themeUiTheme.colors.modes.default;

export default themeUiTheme;
