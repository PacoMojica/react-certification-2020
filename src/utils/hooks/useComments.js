import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

function useComments(videoId) {
  const { client, clientLoaded } = useGapi();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getComments() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const response = await client.youtube.commentThreads.list({
            'part': ['snippet,replies'],
            'maxResults': 100,
            'order': 'relevance',
            'videoId': videoId,
          });

          setComments(response.result.items);
          setLoading(false);
        }
      } catch (error) {
        console.error('Youtube API: ', error);
        setError(error);
        setLoading(false);
      }
    }

    getComments();
  }, [client, clientLoaded, videoId]);

  return { comments, loading, error };
}

export { useComments };