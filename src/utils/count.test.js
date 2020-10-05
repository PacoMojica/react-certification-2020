import count from './count';

describe('utils/count', () => {
  it('formats the values as expected', () => {
    expect(count(0)).toBe('0');
    expect(count(10)).toBe('10');
    expect(count(100)).toBe('100');
    expect(count(1000)).toBe('1K');
    expect(count(999999)).toBe('999K');
    expect(count(1000000)).toBe('1M');
    expect(count(1590000)).toBe('1.59M');
    expect(count(32730000)).toBe('32.72M');
  });
  
  it('appends the string as expected', () => {
    expect(count(0, ' views')).toBe('0  views');
    expect(count(1000, 'views')).toBe('1K views');
    expect(count(1590000, '   views')).toBe('1.59M    views');
  });
});
