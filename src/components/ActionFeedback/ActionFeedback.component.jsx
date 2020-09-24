import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useFeedback } from '../../providers/Feedback';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function ConsecutiveSnackbars({ handleUndo }) {
  const { messageInfo, open, handleClose, handleExited  } = useFeedback();

  const classes = useStyles();
  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      onExited={handleExited}
      message={messageInfo ? messageInfo.message : undefined}
      action={
        <React.Fragment>
          {handleUndo && (
            <Button color='secondary' size='small' onClick={handleUndo}>
              UNDO
            </Button>
          )}
          <IconButton
            aria-label='close'
            color='inherit'
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}