import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

function useGapiVideo(videoId) {
  const { client, clientLoaded } = useGapi();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVideo() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const response = await client.youtube.videos.list({
            'part': ['snippet', 'contentDetails', 'statistics', 'status', 'player', 'topicDetails', 'recordingDetails'],
            'id': [videoId],
          });

          setVideo(response.result.items[0]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Youtube API: ', error);
        setError(error);
        setLoading(false);
      }
    }

    getVideo();
  }, [client, clientLoaded, videoId]);

  return { video, loading, error };
}

export { useGapiVideo };