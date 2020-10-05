import { renderHook } from '@testing-library/react-hooks';
import { useComments } from './useComments';

describe('useComments', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useComments(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.comments).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.comments[0].id).toBe('UgzVJRLLSglHMCqBeuF4AaABAg');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});