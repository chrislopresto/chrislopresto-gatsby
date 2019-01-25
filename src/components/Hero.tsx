import * as React from 'react';
import styled from '../theme/styled-components';
import { withFonts } from 'react-with-async-fonts';
import { SiteMode, SiteModeContextConsumer, withSiteModeContext } from '../theme/SiteModeContext';

interface Props {
  className: string;
  siteModeContext: SiteMode;
}

const Hero: React.FC<Props> = ({ className, siteModeContext, children }) => {
  return (
    <h1 className={className} onClick={siteModeContext.setTheme}>
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

export default withFonts(withSiteModeContext(StyledHero));
