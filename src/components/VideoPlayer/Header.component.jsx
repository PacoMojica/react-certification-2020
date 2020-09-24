import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import count from '../../utils/count';

import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import { useStyles } from '../../providers/Styles';

function Header({ video }) {
  const { classes } = useStyles();
  return (
    <>
      <div>
        <Typography variant='h6' className={classes.title}>
          {video.snippet.title}
        </Typography>
      </div>
      <div className={classes.bottom}>
        <Typography color='textSecondary' variant='caption' className={classes.publishedDate}>
          <span className={classes.views}>
            {video.statistics.viewCount.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' views'}
          </span>
          {new Date(video.snippet.publishedAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          })}
        </Typography>
        <div className={classes.actions}>
          <div className={classes.sentiments}>
            <Tooltip title={count(video.statistics.likeCount) + ' likes'}>
              <Typography color='textSecondary' className={classes.sentiment} variant='caption'>
                <ThumbUp fontSize='small' className={classes.icon} />
                {count(video.statistics.likeCount)}
              </Typography>
            </Tooltip>
            <Tooltip title={count(video.statistics.dislikeCount) + ' dislikes'}>
              <Typography color='textSecondary' className={classes.sentiment} variant='caption'>
                <ThumbDown fontSize='small' className={classes.icon} />
                {count(video.statistics.dislikeCount)}
              </Typography>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;