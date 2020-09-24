import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

function useVideoList() {
  const { client, clientLoaded } = useGapi();
  const [videoList, setVideoList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVideoList() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const response = await client.youtube.videos.list({
            'part': ['snippet', 'contentDetails', 'statistics', 'status', 'player', 'topicDetails', 'recordingDetails'],
            'chart': 'mostPopular',
            'maxResults': 48,
            'regionCode': 'US',
          });

          setVideoList(response.result.items);
          setLoading(false);
        }
      } catch (error) {
        console.error('Youtube API: ', error);
        setError(error);
        setLoading(false);
      }
    }

    getVideoList();
  }, [client, clientLoaded]);

  return { videoList, loading, error };
}

export { useVideoList };