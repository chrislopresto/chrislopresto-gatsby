import { fontLoadingReducer, markHeroFontLoaded } from '.';

describe('fontLoadingReducer', () => {
  it('marks hero font loaded', () => {
    expect(fontLoadingReducer({ heroFontLoaded: false }, markHeroFontLoaded())).toEqual({ heroFontLoaded: true });
  });
});
