import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';

import MoreVert from '@material-ui/icons/MoreVert';

import Actions from './Actions.component';

import timeElapsed from '../../utils/timeElapsed';
import count from '../../utils/count';

import { useStyles } from '../../providers/Styles';

function Details({ video }) {
  const { classes } = useStyles();
  const { snippet, statistics } = video;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CardContent className={classes.content}>
      <Tooltip title={snippet.title} placement='top'>
        <Link color='inherit' href={`/video/${video.id}`} variant='body2' underline='none' title={snippet.title}>
          <span className={classes.title}>
            {snippet.title}
          </span>
        </Link>
      </Tooltip>
      <Tooltip title={snippet.channelTitle} placement='top-start'>
        <Typography color='textSecondary' className={classes.channel} variant='caption'>
          {snippet.channelTitle}
        </Typography>
      </Tooltip>
      <Typography color='textSecondary' variant='caption'>
        <span className={classes.views}>
          {count(statistics.viewCount, 'views')}
        </span>
        {timeElapsed(snippet.publishedAt)}
      </Typography>
      <ClickAwayListener onClickAway={handleClose}>
        <IconButton className={classes.more} onClick={handleClick}>
          <MoreVert />
        </IconButton>
      </ClickAwayListener>
      <Actions video={video} anchorEl={anchorEl} onClose={handleClose} />
    </CardContent>
  );
}

export default Details;