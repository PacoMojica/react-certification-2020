import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popper';

import WatchLater from '@material-ui/icons/WatchLater';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Close from '@material-ui/icons/Close';

import { usePlaylist } from '../../providers/Playlist';

import { useStyles } from '../../providers/Styles';

function Actions({ video, anchorEl, onClose: handleClose }) {
  const { classes } = useStyles();
  const { addLater, addFavorite, favorites, watchLater, removeFavorite, removeLater } = usePlaylist();
  const open = Boolean(anchorEl);
  const id = open ? 'video-popover' : undefined;
  const inWatchLater = !!watchLater[video.id];
  const inFavorites = !!favorites[video.id];

  return (
    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
      <Paper elevation={3} className={classes.paper}>
        <List dense={true}>
          <ListItem button onClick={() => inWatchLater ? removeLater(video) : addLater(video)}>
            <ListItemIcon>
              {inWatchLater ? <Close /> : <WatchLater />}
            </ListItemIcon>
            <ListItemText primary={inWatchLater ? 'Remove Watch later' : 'Save to Watch later'} />
          </ListItem>
          <ListItem button onClick={() => inFavorites ? removeFavorite(video) : addFavorite(video)}>
            <ListItemIcon>
              {inFavorites ? <Close /> : <PlaylistAdd />}
            </ListItemIcon>
            <ListItemText primary={inFavorites ? 'Remove from Favorites' : 'Save to Favorites'} />
          </ListItem>
        </List>
      </Paper>
    </Popover>
  );
}

export default Actions;