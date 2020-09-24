import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

function useChannel(channelId) {
  const { client, clientLoaded } = useGapi();
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getChannel() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const response = await client.youtube.channels.list({
            'part': ['snippet', 'contentDetails', 'statistics'],
            'id': [channelId],
          });

          setChannel(response.result.items[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Youtube API: ', error);
        setError(error);
        setLoading(false);
      }
    }

    getChannel();
  }, [client, clientLoaded, channelId]);

  return { channel, loading, error };
}

export { useChannel };