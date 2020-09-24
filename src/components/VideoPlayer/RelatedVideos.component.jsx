import React from 'react';
import { useParams } from 'react-router-dom';

import VideoCard from '../../components/VideoCard';
import VideoLoading from '../../components/VideoLoading';

import { useRelatedVideos } from '../../utils/hooks/useRelatedVideos';
// import response from '../../utils/sample-realted.json';

function RelatedVideos() {
// const { items: videoList } = response;
  const { id: videoId } = useParams();
  const { videoList, loading, error } = useRelatedVideos(videoId);

  return (
    <section>
      {loading && <VideoLoading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && videoList.map(relatedVideo => (
        <VideoCard key={relatedVideo.id} video={relatedVideo} />
      ))}
    </section>
  );
}

export default RelatedVideos;