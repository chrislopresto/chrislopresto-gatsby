import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import '../src/styles/core.css';
import { storeDecorator } from '../src/state/store/store.storybook';
import { fontLoadingSliceDecorator } from '../src/state/font-loading/font-loading-slice.storybook';
import { fontObserverDecorator } from '../src/fonts/font-observer.storybook';
import { themeProviderDecorator } from '../src/gatsby-plugin-theme-ui/theme-provider.storybook';

addDecorator(withKnobs);
addDecorator(themeProviderDecorator);
addDecorator(fontLoadingSliceDecorator);
addDecorator(fontObserverDecorator);
addDecorator(storeDecorator);

// BEGIN GATSY OVERRIDES
// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
// See additional Gatsby overrides in main.js

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
// END GATSY OVERRIDES
