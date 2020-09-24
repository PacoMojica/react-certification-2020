import React from 'react';
import { useParams } from 'react-router-dom';

import { useStyles } from '../../providers/Styles';

function VideoFrame() {
  const { classes } = useStyles();
  const { id: videoId } = useParams();
  const videoSrc = `//www.youtube.com/embed/${videoId}/?&autoplay=1`;

  return (
    <section className={classes.videoSection}>
      <div className={classes.videoContainer}>
        <div className={classes.video}>
          <iframe
            className={classes.iframe}
            title={videoSrc}
            src={videoSrc}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoFrame;