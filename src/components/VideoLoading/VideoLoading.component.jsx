import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

import useStyles from './VideoLoading.styles';

function VideoSkeleton() {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Skeleton variant="rect" width={320} height={180} />
      <Box pt={0.5}>
        <Skeleton width={320} />
        <Skeleton width={200} />
        <Skeleton width={280} />
      </Box>
    </Box>
  );
}

function VideoLoading({ vertical = false }) {
  return (
    <>
      {new Array(8).fill('1').map((_, i) => (
        <VideoSkeleton key={i} />
      ))}
    </>
  );
}

export default VideoLoading;