import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    paddingTop: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: theme.spacing(2),
    minHeight: '100vh',
  },
  paddingLeft: {
    paddingLeft: theme.spacing(12),
  },
  paddingBoth: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  noPadding: {
    paddingTop: theme.spacing(8),
  },
}));