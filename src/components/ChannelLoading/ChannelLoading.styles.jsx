import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  channelAvatar: {
    gridArea: 'channelAvatar',
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1),
    justifySelf: 'center',
    alignSelf: 'start',
  },
  channelInfo: {
    gridArea: 'channelInfo',
  },
  descriptionText: {
    gridArea: 'descriptionText',
  },
}));