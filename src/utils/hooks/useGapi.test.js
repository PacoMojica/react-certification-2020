import { renderHook } from '@testing-library/react-hooks';
import { useGapi } from './useGapi';

describe('useGapi', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useGapi(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.client).toBe(null);
    expect(result.current.clientLoaded).toBe(false);

    await waitForNextUpdate();

    expect(result.current.client).toBeTruthy();
    expect(result.current.clientLoaded).toBe(true);
  });
});