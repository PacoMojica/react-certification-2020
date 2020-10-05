import { formatVideoDuration } from './iso8601Duration';

describe('utils/iso8601Diration => formatVideoDuration', () => {
  it('formats the values as expects', () => {
    expect(formatVideoDuration('PT1H13M12S')).toBe('1:13:12');
    expect(formatVideoDuration('PT1H73M72S')).toBe('2:14:12');
    expect(formatVideoDuration('P2DT42M6S')).toBe('48:42:06');
    expect(formatVideoDuration('P3Y6M4DT12H30M5S')).toBe('30708:30:05');
  });
});
