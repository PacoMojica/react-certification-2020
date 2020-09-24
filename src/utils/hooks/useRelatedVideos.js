import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

function useRelatedVideos(videoId) {
  const { client, clientLoaded } = useGapi();
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRelatedVideos() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const queryResult = await client.youtube.search.list({
            'part': ['id'],
            'maxResults': 48,
            'type': ['video'],
            'relatedToVideoId': videoId,
          });

          const response = await client.youtube.videos.list({
            'part': ['snippet', 'contentDetails', 'statistics', 'status', 'player', 'topicDetails', 'recordingDetails'],
            'id': queryResult.result.items.map(item => item.id.videoId).join(','),
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

    getRelatedVideos();
  }, [client, clientLoaded, videoId]);

  return { videoList, loading, error };
}

export { useRelatedVideos };