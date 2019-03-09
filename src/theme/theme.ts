interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  alt: string;
}

const lightColors: Colors = {
  primary: '#1b3c59',
  secondary: '#456173',
  accent: '#11bfae',
  alt: '#f2f2f0'
};

const darkColors: Colors = {
  primary: '#f2f2f0',
  secondary: '#456173',
  accent: '#11bfae',
  alt: '#1b3c59'
};

const breakpoints = ['576px', '768px', '992px', '1200px'];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96];
const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fonts = {
  sans: 'system-ui, sans-serif',
  mono: 'Menlo, monospace',
  hero: 'Marvin Visions Big, sans-serif'
};
const shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)'
};

interface Theme {
  breakpoints: string[];
  fontSizes: number[];
  fonts: { sans: string; mono: string; hero: string };
  space: number[];
  colors: Colors;
}

const light: Theme = {
  breakpoints,
  fontSizes,
  fonts,
  space,
  colors: lightColors
};

const dark: Theme = {
  ...light,
  colors: darkColors
};

const themes = { light, dark };

export { themes, Theme };
