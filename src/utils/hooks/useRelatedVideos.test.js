import { renderHook } from '@testing-library/react-hooks';
import { useRelatedVideos } from './useRelatedVideos';

describe('useRelatedVideos', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useRelatedVideos(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.videoList).toBeTruthy();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.videoList[0].id).toBe('eW7Twd85m2g');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});