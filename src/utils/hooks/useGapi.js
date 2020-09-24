import { useState, useEffect, useCallback } from 'react';

const API_KEY = 'AIzaSyAhxX8TJ0Mb5txkNZjjmIn3f-rDLIKmauE';

function useGapi() {
  const [client, setClient] = useState(null);
  const [clientLoaded, setClientLoaded] = useState(false);

  const startGapi = useCallback(async () => {
    await window.gapi.client.init({
      'apiKey': API_KEY,
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    });
    setClient(window.gapi.client);
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    window.gapi.load('client', startGapi);
  }, [startGapi]);

  return { client, clientLoaded };
}

export { useGapi };