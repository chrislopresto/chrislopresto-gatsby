import styled from '../theme/styled-components';
import { theme } from '../theme/theme';
import { withFonts } from 'react-with-async-fonts';

const Hero = styled.h1`
  font-family: ${props => (props.fonts.hero ? theme.fonts.hero : theme.fonts.sans)};
  font-size: ${theme.fontSizes[8]}px;
  font-weight: bold;
  text-transform: uppercase;
`;

export default withFonts(Hero);
