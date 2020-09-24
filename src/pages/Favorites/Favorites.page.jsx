import React, { useEffect } from 'react';

import VideoCard from '../../components/VideoCard';
import Main from '../../components/Main';

import { usePlaylist } from '../../providers/Playlist';

import useStyles from './Favorites.styles';

function Favorites() {
  const classes = useStyles();
  const { favorites } = usePlaylist();
  const videoList = Object.values(favorites);

  useEffect(() => {
    document.title = 'Favorites | WizeTube';

    return () => document.title = 'WizeTube';
  }, []);

  return (
    <Main withSidebar={true}>
      <section className={classes.content}>
        {videoList.length === 0 && (
          <p>No videos to show</p>
        )}
        {videoList && videoList.length > 0 && videoList.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>
    </Main>
  );
}

export default Favorites;