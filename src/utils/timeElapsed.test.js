import timeElapsed from './timeElapsed';

describe('utils/timeElapsed', () => {
  it('formats the values as expects', () => {
    const today = new Date();
    expect(timeElapsed(today)).toBe('A few moments ago');
  });
});