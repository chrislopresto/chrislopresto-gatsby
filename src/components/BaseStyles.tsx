import * as fonts from '../fonts';
import { createGlobalStyle } from '../theme/styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Marvin Visions Big';
    font-style: normal;
    font-weight: 700;
    src: local('Marvin Visions Big'), url('${fonts.MarvinVisionsBigBold}') format('woff2');
  }

  body {
    background-color: ${props => props.theme.colors.alt};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.mono};
    margin: 0;
  }

  a {
    color: ${props => props.theme.colors.accent};
  }

  a:active,
  a:hover,
  a:focus {
    color: ${props => props.theme.colors.primary};
  }
`;
