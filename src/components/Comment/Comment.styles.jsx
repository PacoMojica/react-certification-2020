import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: `${theme.spacing(8)}px 1fr`,
    gridTemplateAreas: `
      "userAvatar commentInfo"
      "userAvatar commentText"
      "userAvatar sentiments"
    `,
  },
  userAvatar: {
    gridArea: 'userAvatar',
    alignSelf: 'start',
    justifySelf: 'center',
  },
  userName: {
    fontSize: '.85rem',
    fontWeight: 600,
    marginRight: theme.spacing(1),
  },
  commentInfo: {
    gridArea: 'commentInfo',
    display: 'flex',
    alignItems: 'center',
  },
  commentText: {
    whiteSpace: 'pre-wrap',
    gridArea: 'commentText',
    letterSpacing: '-0.022rem',
    fontSize: '.80rem',
  },
  sentiments: {
    gridArea: 'sentiments',
    paddingTop: theme.spacing(1),
  },
  sentiment: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  }
}));