import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const VideoPage = lazy(() => import('../../pages/Video'));
const WatchLaterPage = lazy(() => import('../../pages/WatchLater'));
const FavoritesPage = lazy(() => import('../../pages/Favorites'));
const SearchPage = lazy(() => import('../../pages/Search'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

export default [
  { Component: HomePage, exact: true, path: '/', isPrivate: false },
  { Component: LoginPage, exact: true, path: '/login', isPrivate: false },
  { Component: VideoPage, exact: false, path: '/video/:id', isPrivate: false },
  { Component: WatchLaterPage, exact: true, path: '/watch-later', isPrivate: true },
  { Component: FavoritesPage, exact: true, path: '/favorites', isPrivate: true },
  { Component: SearchPage, exact: false, path: '/search/:query', isPrivate: false },
  { Component: NotFoundPage, exact: false, path: '*', isPrivate: false },
];