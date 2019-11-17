import * as React from 'react';
import { FontSubscriber } from 'react-with-async-fonts';
import { useSiteMode } from '../theme/SiteModeContext';
import styled from '../theme/styled-components';

interface Props {
  className: string;
  children: React.ReactNode;
}

const StyledHeader = styled.h1`
  font-family: ${props => (props.theme.fonts.hero ? props.theme.fonts.hero : props.theme.fonts.sans)};
  font-size: ${props => props.theme.fontSizes[8]}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
`;

const Hero = ({ className, children }: Props) => {
  const [, dispatch] = useSiteMode();
  const toggleMode = () => dispatch({ type: 'toggleMode' });

  return (
    <FontSubscriber>
      {() => (
        <StyledHeader className={className} onClick={toggleMode}>
          {children}
        </StyledHeader>
      )}
    </FontSubscriber>
  );
};

export default Hero;
