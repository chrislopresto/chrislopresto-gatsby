import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeReducer } from './color-scheme';
import { fontLoadingReducer } from './font-loading';

export const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
  fontObserver: fontLoadingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
