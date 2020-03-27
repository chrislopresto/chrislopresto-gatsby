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
