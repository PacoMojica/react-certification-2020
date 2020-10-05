import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  videoBottom: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `70% 30%`,
  },
  videoSection: {
    backgroundColor: 'black',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  videoContainer: {
    width: '75%',
  },
  video: {
    paddingTop: '56.25%',
    position: 'relative',
    width: '100%',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  infoSection: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(10),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  descriptionSection: {
    paddingBottom: theme.spacing(1),
    borderBottom: `solid 1px ${theme.palette.grey[500]}`,
  },
  title: {
    letterSpacing: '-0.022rem',
  },
  views: {
    '&::after': {
      content: '"•"',
      margin: '0 8px',
    },
  },
  bottom: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    borderBottom: `solid 1px ${theme.palette.grey[500]}`,
  },
  publishedDate: {
    flexGrow: 0.5,
  },
  actions: {
    flexGrow: 0.5,
  },
  sentiments: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  sentiment: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:first-child': {
      marginLeft: 'auto',
    },
  },
  channelTitle: {
    fontSize: '.85rem',
    marginBottom: '-0.33rem',
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
  description: {
    whiteSpace: 'pre-wrap',
    paddingTop: theme.spacing(2),
    overflow: 'hidden',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: `${theme.spacing(8)}px 1fr`,
    gridTemplateAreas: `
    "channelAvatar channelInfo"
    "channelAvatar descriptionText"
    `,
  },
  descriptionText: {
    gridArea: 'descriptionText',
    letterSpacing: '-0.022rem',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: '.80rem',
  },
  limitedHeight: {
    maxHeight: '16vh',
  },
  showMore: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(7),
  },
}));