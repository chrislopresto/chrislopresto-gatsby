import * as React from 'react';
import * as fonts from '../fonts';
import { createGlobalStyle, ThemeProvider } from '../theme/styled-components';
import { darkTheme, lightTheme } from '../theme/theme';
import { SiteModeContextConsumer, SiteModeContextProvider, SiteMode } from '../theme/SiteModeContext';
import SEO from './SEO';

const GlobalStyle = createGlobalStyle`
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

interface State {
  theme: 'light' | 'dark';
  setTheme: () => void;
}

export default class Layout extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      theme: 'dark',
      setTheme: this.setTheme
    };
  }

  setTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    });
  };

  render() {
    const defaultSiteMode: SiteMode = {
      theme: 'dark',
      setTheme: this.setTheme
    };

    return (
      <SiteModeContextProvider value={this.state}>
        <SiteModeContextConsumer>
          {siteModeContext => {
            let theme = siteModeContext!.theme === 'light' ? lightTheme : darkTheme;

            return (
              <ThemeProvider theme={theme}>
                <>
                  <SEO />
                  {this.props.children}
                  <GlobalStyle />
                </>
              </ThemeProvider>
            );
          }}
        </SiteModeContextConsumer>
      </SiteModeContextProvider>
    );
  }
}
