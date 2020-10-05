import { renderHook } from '@testing-library/react-hooks';
import { useChannel } from './useChannel';

describe('useChannel', () => {
  it('returns expected initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(
      ({ channelId }) => useChannel(channelId),
      { initialProps: { channelId: 'test' }, }
    );

    expect(result.current.channel).toBe(null);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.channel.id).toBe('UCjmJDM5pRKbUlVIzDYYWb6g');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});