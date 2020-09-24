import React from 'react';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';

import PlayArrow from '@material-ui/icons/PlayArrowRounded';
import WatchLater from '@material-ui/icons/WatchLater';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Close from '@material-ui/icons/Close';

import { formatVideoDuration } from '../../utils/iso8601Duration';

import { usePlaylist } from '../../providers/Playlist';

import { useStyles } from '../../providers/Styles';

function Thumbnail({ video }) {
  const { classes } = useStyles();
  const history = useHistory();
  const { addLater, addFavorite, favorites, watchLater, removeFavorite, removeLater } = usePlaylist();
  const snippet = video.snippet;
  const duration = video.contentDetails.duration;
  const sizes = Object.keys(snippet.thumbnails);
  const largestAvailable = sizes[sizes.length - 1];
  const thumbnail = snippet['thumbnails'][largestAvailable]['url'];
  const inWatchLater = !!watchLater[video.id];
  const inFavorites = !!favorites[video.id];

  const playVideo = () => history.push(`/video/${video.id}`);

  return (
    <CardActionArea className={classes.thumbnail}>
      <CardMedia
        component="img"
        alt={snippet.title}
        image={thumbnail}
        title={snippet.title}
        onClick={playVideo}
        className={classes.image}
      />
      <span className={classes.playIcon} onClick={playVideo}>
        <PlayArrow style={{ fontSize: 80 }} />
      </span>
      <span className={classes.laterIcon} onClick={() => inWatchLater ? removeLater(video) : addLater(video)}>
        <Tooltip title={inWatchLater ? 'Remove Watch Later' : 'Add Watch Later'} placement='left'>
          {inWatchLater ? <Close style={{ fontSize: 22 }} /> : <WatchLater style={{ fontSize: 22 }} />}
        </Tooltip>
      </span>
      <span className={classes.addIcon} onClick={() => inFavorites ? removeFavorite(video) : addFavorite(video)}>
        <Tooltip title={inFavorites ? 'Remove Favorite' : 'Add Favorite'} placement='left'>
          {inFavorites ? <Close style={{ fontSize: 22 }} /> : <PlaylistAdd style={{ fontSize: 22 }} />}
        </Tooltip>
      </span>
      <span className={classes.duration} onClick={playVideo}>
        {formatVideoDuration(duration)}
      </span>
    </CardActionArea>
  );
}

export default Thumbnail;