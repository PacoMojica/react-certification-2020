import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ThumbUp from '@material-ui/icons/ThumbUp';

import timeElapsed from '../../utils/timeElapsed';

import useStyles from './Comment.styles';

function Comment({ comment }) {
  const classes = useStyles();
  const topLevelComment = comment.snippet.topLevelComment.snippet;

  return (
    <div className={classes.root}>
      <Avatar alt={topLevelComment.authorDisplayName} src={topLevelComment.authorProfileImageUrl} className={classes.userAvatar} />
      <div className={classes.commentInfo}>
        <Typography component='p' variant='caption' className={classes.userName}>
          {topLevelComment.authorDisplayName}
        </Typography>
        <Typography color='textSecondary' variant='caption'>
          {timeElapsed(topLevelComment.publishedAt)}
        </Typography>
      </div>
      <Typography component='p' variant='body2' className={classes.commentText}>
        <span dangerouslySetInnerHTML={{ __html: topLevelComment.textDisplay }}></span>
      </Typography>
      <div className={classes.sentiments}>
        <Typography color='textSecondary' className={classes.sentiment} variant='caption'>
          <ThumbUp style={{ fontSize: 16 }} className={classes.icon} />
          {topLevelComment.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Typography>
      </div>
    </div>
  );
}

export default Comment;