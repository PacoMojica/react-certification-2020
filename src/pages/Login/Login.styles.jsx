import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    width: '66%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(10),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  input: {
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));