import React from 'react';

import VideoFrame from './Frame.component';
import VideoDetails from './Details.component';
import RelatedVideos from './RelatedVideos.component';

import StylesProvider from '../../providers/Styles';

import useStyles from './VideoPlayer.styles';

function VideoPlayer() {
  const classes = useStyles();

  return (
    <StylesProvider classes={classes}>
      <div className={classes.root}>
        <VideoFrame />
        <div className={classes.videoBottom}>
          <VideoDetails />
          <RelatedVideos />
        </div>
      </div>
    </StylesProvider>
  );
}

export default VideoPlayer;