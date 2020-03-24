import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeReducer } from './color-scheme';
import { fontObserverReducer } from './font-observer';

export const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer,
  fontObserver: fontObserverReducer
});

export type RootState = ReturnType<typeof rootReducer>;
