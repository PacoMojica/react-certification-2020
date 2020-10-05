import { renderHook } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

describe('useRelatedVideos', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ videoId }) => useSearch(videoId),
      { initialProps: { videoId: 'test' }, }
    );

    expect(result.current.searchResults).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.searchResults[0].id).toBe('eW7Twd85m2g');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});