import { useState, useEffect } from 'react';

import { useGapi } from './useGapi';

// import queryResult from '../sample-search.json';

// function encodeQuery(query) {
//   const pipeEscaped = query.replace('-', '%7C');
//   return encodeURIComponent(pipeEscaped);
// }

function useSearch(query) {
  const { client, clientLoaded } = useGapi();
  const [searchResults, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSearch() {
      try {
        if (clientLoaded) {
          setLoading(true);
          const queryResult = await client.youtube.search.list({
            'part': ['id'],
            'maxResults': 48,
            'type': ['video'],
            'q': query,
          });
          const response = await client.youtube.videos.list({
            'part': ['snippet', 'contentDetails', 'statistics', 'status', 'player', 'topicDetails', 'recordingDetails'],
            'id': queryResult.result.items.map(item => item.id.videoId).join(','),
            // 'id': queryResult.items.map(item => item.id.videoId).join(','),
          });

          setResults(response.result.items);
          setLoading(false);
        }
      } catch (error) {
        console.error('Youtube API: ', error);
        setError(error);
        setLoading(false);
      }
    }

    getSearch();
  }, [client, clientLoaded, query]);

  return { searchResults, loading, error };
}

export { useSearch };