import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

import useStyles from './ChannelLoading.styles';

function DescriptionLoading () {
  const classes = useStyles();
  
  return (
    <>
      <Skeleton variant='circle' width={56} height={56} className={classes.channelAvatar} />
      <Box className={classes.channelInfo} pt={0.5}>
        <Skeleton width='85%' />
        <Skeleton width='55%' />
      </Box>
    </>
  );
}

export default DescriptionLoading;