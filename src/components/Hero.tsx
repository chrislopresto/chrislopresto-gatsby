import * as React from 'react';
import styled from '../theme/styled-components';
import { withFonts } from 'react-with-async-fonts';
import { useSiteMode } from '../theme/SiteModeContext';

interface Props {
  className: string;
}

const Hero: React.FC<Props> = ({ className, children }) => {
  const [, dispatch] = useSiteMode();
  const toggleMode = () => dispatch({ type: 'toggleMode' });

  return (
    <h1 className={className} onClick={toggleMode}>
      {children}
    </h1>
  );
};

const StyledHero = styled(Hero)`
  font-family: ${props => (props.theme.fonts.hero ? props.theme.fonts.hero : props.theme.fonts.sans)};
  font-size: ${props => props.theme.fontSizes[8]}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent};
`;

export default withFonts(StyledHero);
