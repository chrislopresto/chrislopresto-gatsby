import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import '../src/styles/core.css';
import { storeDecorator } from '../src/state/store/store.storybook';
import { colorSchemeSliceDecorator } from '../src/state/color-scheme/color-scheme-slice.storybook';
import { fontObserverSliceDecorator } from '../src/state/font-observer/font-observer-slice.storybook';
import { fontObserverDecorator } from '../src/fonts/font-observer.storybook';

addDecorator(withKnobs);
addDecorator(colorSchemeSliceDecorator);
addDecorator(fontObserverSliceDecorator);
addDecorator(fontObserverDecorator);
addDecorator(storeDecorator);
