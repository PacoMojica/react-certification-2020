import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  vertical: {
    width: 320,
    height: theme.spacing(38),
  },
  horizontal: {
    width: 320,
    height: 'auto',
  },
  root: {
    margin: theme.spacing(2),
    position: 'relative',
    '&:hover $playIcon': {
      opacity: 0.85,
    },
    '&:hover $laterIcon': {
      opacity: 1,
    },
    '&:hover $addIcon': {
      opacity: 1,
    },
    '&:hover $more': {
      opacity: 0.75,
    },
  },
  content: {
    height: 'calc(100% - 180px)',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: `${theme.spacing(1)}px !important`,
  },
  channel: {
    marginTop: 'auto',
    lineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    boxOrient: 'vertical',
  },
  views: {
    '&::after': {
      content: '"•"',
      margin: '0 4px',
    },
  },
  playIcon: {
    position: 'absolute',
    top: 45,
    left: 120,
    color: 'white',
    opacity: 0,
    transition: '0.66s',
  },
  laterIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(0.1),
    color: 'white',
    opacity: 0,
    transition: '0.66s',
    backgroundColor: '#111111d5',
  },
  addIcon: {
    position: 'absolute',
    top: theme.spacing(4.7),
    right: theme.spacing(1),
    padding: theme.spacing(0.1),
    color: 'white',
    opacity: 0,
    transition: '0.66s',
    backgroundColor: '#111111d5',
  },
  duration: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(0.66),
    color: 'white',
    transition: '0.66s',
    backgroundColor: '#111111',
  },
  more: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    opacity: 0,
    transition: '0.33s',
  },
  paper: {
    width: 280,
  },
  thumbnail: {
    paddingTop: '56.25%',
    position: 'relative',
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  title: {
    letterSpacing: '-0.022rem',
    lineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    boxOrient: 'vertical',
  },
}));