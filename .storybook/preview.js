import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import '../src/index.css';
import { storeDecorator } from '../src/store.storybook';
import { siteModeSliceDecorator } from '../src/theme/siteModeSlice.storybook';

addDecorator(withKnobs);
addDecorator(siteModeSliceDecorator);
addDecorator(storeDecorator);
