import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

import useStyles from './DescriptionLoading.styles';

function DescriptionLoading () {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Skeleton variant='rect' width='70%' height={40} />
      <Box className={classes.text} pt={0.5}>
        <Skeleton width='90' />
        <Skeleton width='60%' />
        <Skeleton width='80%' />
        <Skeleton width='40%' />
      </Box>
    </Box>
  );
}

export default DescriptionLoading;