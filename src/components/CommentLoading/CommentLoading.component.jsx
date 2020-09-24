import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

import useStyles from './CommentLoading.styles';

function SingleComment() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Skeleton variant='rect' width='70%' height={20} />
      <Box className={classes.text} pt={0.5}>
        <Skeleton width='60%' />
        <Skeleton width='80%' />
        <Skeleton width='40%' />
      </Box>
    </Box>
  );
}

function CommentLoading () {
  return (
    <>
      {new Array(12).fill('1').map((_, i) => (
        <SingleComment key={i} />
      ))}
    </>
  );
}

export default CommentLoading;