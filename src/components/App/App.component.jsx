import React from 'react';
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
    <ContextComposer providers={providers}>
      <CssBaseline />
      <Sidemenu />
      <ToTop />
      <RouterSwitch />
      <ActionFeedback />
    </ContextComposer>
  );
}

export default App;