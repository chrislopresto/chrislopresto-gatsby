import { fontObserverReducer, markHeroFontLoaded } from '.';

describe('fontObserverReducer', () => {
  it('marks hero font loaded', () => {
    expect(fontObserverReducer({ heroFontLoaded: false }, markHeroFontLoaded())).toEqual({ heroFontLoaded: true });
  });
});
