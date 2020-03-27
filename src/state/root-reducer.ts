import { combineReducers } from '@reduxjs/toolkit';
import { fontLoadingReducer } from './font-loading';

export const rootReducer = combineReducers({
  fontObserver: fontLoadingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
