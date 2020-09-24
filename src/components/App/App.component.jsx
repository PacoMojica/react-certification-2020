import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import ContextComposer from '../ContextComposer';

import AuthProvider from '../../providers/Auth';
import FeedbackProvider from '../../providers/Feedback';
import PlaylistProvider from '../../providers/Playlist';
import SidemenuProvider from '../../providers/Sidemenu';
import SearchProvider from '../../providers/Search';

import ToTop from '../ToTop';
import ActionFeedback from '../ActionFeedback';
import Sidemenu from '../Sidemenu';
import RouterSwitch from '../RouterSwitch';

function App() {
  const providers = [
    FeedbackProvider,
    AuthProvider,
    PlaylistProvider,
    SidemenuProvider,
    SearchProvider,
  ];
  return (
    <BrowserRouter basename=''>
      <CssBaseline />
      <ContextComposer providers={providers}>
        <Sidemenu />
        <ToTop />
        <RouterSwitch />
        <ActionFeedback />
      </ContextComposer>
    </BrowserRouter>
  );
}

export default App;