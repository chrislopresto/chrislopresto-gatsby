import { colorSchemeReducer, toggleColorScheme } from '.';

describe('colorSchemeReducer', () => {
  it('toggles color scheme', () => {
    expect(colorSchemeReducer({ colorScheme: 'light' }, toggleColorScheme())).toEqual({ colorScheme: 'dark' });
    expect(colorSchemeReducer({ colorScheme: 'dark' }, toggleColorScheme())).toEqual({ colorScheme: 'light' });
  });
});
