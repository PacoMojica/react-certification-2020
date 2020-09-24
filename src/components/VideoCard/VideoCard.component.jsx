import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import Thumbnail from './Thumbnail.component';
import Details from './Details.component';

import StylesProvider from '../../providers/Styles';

import useStyles from './VideoCard.styles';

function VideoCard({ video }) {
  const classes = useStyles();
  const rootClasses = clsx(
    classes.root,
    classes.vertical,
  );
  return (
    <StylesProvider classes={classes}>
      <Card className={rootClasses}>
        <Thumbnail video={video} />
        <Details video={video} />
      </Card>
    </StylesProvider>
  );
}

export default VideoCard;