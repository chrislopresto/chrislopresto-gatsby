import { combineReducers } from '@reduxjs/toolkit';
import { siteModeReducer } from './theme/siteModeSlice';

const rootReducer = combineReducers({
  siteMode: siteModeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
