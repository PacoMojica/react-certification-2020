import Home from '@material-ui/icons/Home';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import WatchLater from '@material-ui/icons/WatchLater';

export const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
export const USER_STORAGE_KEY = 'wa_cert_user';

export const WATCH_LATER = 'watch_later';
export const FAVORITES = 'favorites';

export const LAPSE_SECONDS = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

export const DEFAULT_USERS = {
  'wizeline': {
    id: '123',
    name: 'Wizeline',
    username: 'wizeline',
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    password: 'Rocks!',
  },
};

export const MENU_ITEMS = [
  { text: 'Home', Icon: Home, to: '/', requiresAuth: false, },
  { text: 'Watch Later', Icon: WatchLater, to: '/watch-later', requiresAuth: true, },
  { text: 'Favorites', Icon: VideoLibrary, to: '/favorites', requiresAuth: true, },
];