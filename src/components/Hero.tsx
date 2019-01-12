import styled from '../theme/styled-components';
import { withFonts } from 'react-with-async-fonts';

const Hero = styled.h1`
  font-family: ${props => (props.theme.fonts.hero ? props.theme.fonts.hero : props.theme.fonts.sans)};
  font-size: ${props => props.theme.fontSizes[8]}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent};
`;

export default withFonts(Hero);
