import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeReducer } from './color-scheme';

export const rootReducer = combineReducers({
  colorScheme: colorSchemeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
