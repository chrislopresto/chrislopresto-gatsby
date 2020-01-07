import { siteModeReducer, toggleMode } from './siteModeSlice';

describe('siteModeReducer', () => {
  it('toggles site mode', () => {
    expect(siteModeReducer({ mode: 'light' }, toggleMode())).toEqual({ mode: 'dark' });
    expect(siteModeReducer({ mode: 'dark' }, toggleMode())).toEqual({ mode: 'light' });
  });
});
