import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import '../src/styles/core.css';
import { storeDecorator } from '../src/state/store/store.storybook';
import { colorSchemeSliceDecorator } from '../src/state/color-scheme/color-scheme-slice.storybook';
import { fontLoadingSliceDecorator } from '../src/state/font-loading/font-loading-slice.storybook';
import { fontObserverDecorator } from '../src/fonts/font-observer.storybook';

addDecorator(withKnobs);
addDecorator(colorSchemeSliceDecorator);
addDecorator(fontLoadingSliceDecorator);
addDecorator(fontObserverDecorator);
addDecorator(storeDecorator);
