import { renderHook } from '@testing-library/react-hooks';
import { useGapiVideo } from './useGapiVideo';

describe('useVideo', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useGapiVideo(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.video).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.video.id).toBe('n9xhJrPXop4');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});