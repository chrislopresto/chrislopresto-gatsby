import { reducer } from './site-mode-reducer';

it('toggles site mode', () => {
  expect(reducer({ mode: 'light' }, { type: 'toggleMode' })).toEqual({ mode: 'dark' });
  expect(reducer({ mode: 'dark' }, { type: 'toggleMode' })).toEqual({ mode: 'light' });
});
