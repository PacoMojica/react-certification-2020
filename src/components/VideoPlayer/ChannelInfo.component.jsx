import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Loading from '../ChannelLoading';

import count from '../../utils/count';

import { useVideo } from '../../providers/Video';
import { useChannel } from '../../utils/hooks/useChannel';

import { useStyles } from '../../providers/Styles';

function ChannelInfo() {
  const { classes } = useStyles();

  const { video } = useVideo();
  const { channel, loading, error } = useChannel(video.snippet.channelId);

  const sizes = !loading && !error && Object.keys(channel.snippet.thumbnails);
  const largestAvailable = !loading && !error && sizes[sizes.length - 1];
  const channelAvatar = !loading && !error && channel.snippet['thumbnails'][largestAvailable]['url'];

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && (
        <>
          <Avatar alt={channel.snippet.title} src={channelAvatar} className={classes.channelAvatar} />
          <div className={classes.channelInfo}>
            <Typography variant='caption' className={classes.channelTitle} component='p'>
              {channel.snippet.title}
            </Typography>
            <Typography variant='caption' color='textSecondary' className={classes.channelSubscribers} component='p'>
              {count(channel.statistics.subscriberCount)} subscribers
            </Typography>
          </div>
        </>
      )}
    </>
  );
}

export default ChannelInfo;