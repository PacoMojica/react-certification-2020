import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.33,
    textDecoration: 'none',
  },
  search: {
    flexGrow: 0.33,
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: theme.spacing(1),
    display: 'flex',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: theme.palette.primary.light,
  },
  input: {
    color: 'inherit',
    flexGrow: 1,
  },
  button: {
    color: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: theme.palette.primary.light,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
  actions: {
    marginLeft: 'auto',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));