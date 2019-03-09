import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import BaseStyles from './BaseStyles';
import { darkTheme, lightTheme } from '../theme/theme';
import { SiteModeContextConsumer, SiteModeContextProvider, SiteMode } from '../theme/SiteModeContext';
import SEO from './SEO';

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
                  <BaseStyles />
                </>
              </ThemeProvider>
            );
          }}
        </SiteModeContextConsumer>
      </SiteModeContextProvider>
    );
  }
}
