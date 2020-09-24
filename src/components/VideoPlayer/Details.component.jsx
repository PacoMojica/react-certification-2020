import React from 'react';

import Loading from '../DescriptionLoading';

import Header from './Header.component';
import Description from './Description.component';
import Comments from './Comments.component';

import { useVideo } from '../../providers/Video';

import { useStyles } from '../../providers/Styles';

function VideoDetails() {
  const { classes } = useStyles();
  const { video, loading, error } = useVideo();

  return (
    <section className={classes.infoSection}>
      {loading && <Loading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && (
        <>
          <Header video={video} />
          <Description descriptionText={video.snippet.description} />
          <Comments />
        </>
      )}
    </section>
  );
}

export default VideoDetails;