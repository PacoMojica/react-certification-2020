import React, { useEffect } from 'react';

import VideoCard from '../../components/VideoCard';
import Main from '../../components/Main';
import VideoLoading from '../../components/VideoLoading';

import { useVideoList } from '../../utils/hooks/useVideoList';

import useStyles from './Home.styles';

function Home() {
  const classes = useStyles();
  const { videoList, loading, error } = useVideoList();

  useEffect(() => {
    document.title = 'Home | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  return (
    <Main withSidebar={true}>
      {loading && <VideoLoading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && (
        <section className={classes.content}>
          {videoList && videoList.length && videoList.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </section>
      )}
    </Main>
  );
}

export default Home;