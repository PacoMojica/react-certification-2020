import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../../components/Main';
import VideoPlayer from '../../components/VideoPlayer';

import VideoProvider from '../../providers/Video';

import { useGapiVideo } from '../../utils/hooks/useGapiVideo';

function Video() {
  const { id } = useParams();
  const { video, loading, error } = useGapiVideo(id);

  useEffect(() => {
    if (!loading && !error) {
      document.title = `${video.snippet.title} | WizeTube`;
    } else {
      document.title = `${id} | WizeTube`;
    }

    return () => document.title = 'WizeTube';
  }, [video, loading, error, id]);

  return (
    <Main withSidebar={false} noPadding={true}>
      <VideoProvider video={video} loading={loading} error={error}>
        <VideoPlayer />
      </VideoProvider>
    </Main>
  );
}

export default Video;