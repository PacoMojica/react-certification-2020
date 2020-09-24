import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import VideoCard from '../../components/VideoCard';
import Main from '../../components/Main';
import VideoLoading from '../../components/VideoLoading';

import { useSearch } from '../../utils/hooks/useSearch';

import useStyles from './Search.styles';

function Home() {
  const classes = useStyles();
  const { query } = useParams();
  const { searchResults: videoList, loading, error } = useSearch(query);

  useEffect(() => {
    document.title = 'Search | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  return (
    <Main withSidebar={true}>
      {loading && <VideoLoading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && (
        <section className={classes.content}>
          {videoList && videoList.length === 0 && (
            <p>No search results</p>
          )}
          {videoList && videoList.length > 0 && videoList.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </section>
      )}
    </Main>
  );
}

export default Home;