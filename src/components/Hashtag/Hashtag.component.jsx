import React from 'react';
import Typography from '@material-ui/core/Typography';

function Hashtag({ text }) {
  return (
    <Typography color='secondary' component='span' variant='caption'>
      {text}
    </Typography>
  );
}

export default Hashtag;