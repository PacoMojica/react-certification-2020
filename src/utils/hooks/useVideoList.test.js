import { renderHook } from '@testing-library/react-hooks';
import { useVideoList } from './useVideoList';

describe('useVideoList', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useVideoList(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.videoList).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.videoList[0].id).toBe('n9xhJrPXop4');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});