import * as React from 'react';
import { FontSubscriber } from 'react-with-async-fonts';
import { useSiteModeDispatch } from '../theme/SiteModeContext';
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
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

const Hero = ({ className, children }: Props) => {
  const dispatch = useSiteModeDispatch();
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
