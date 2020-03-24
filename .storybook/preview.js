import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import '../src/styles/core.css';
import { storeDecorator } from '../src/state/store/store.storybook';
import { colorSchemeSliceDecorator } from '../src/state/color-scheme/color-scheme-slice.storybook';

addDecorator(withKnobs);
addDecorator(colorSchemeSliceDecorator);
addDecorator(storeDecorator);
