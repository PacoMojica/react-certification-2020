import React, { createContext, useContext, useEffect, useState } from 'react';

import { WATCH_LATER, FAVORITES } from '../../utils/constants';
import Storage from '../../utils/storage';

import { useAuth } from '../Auth';
import { useFeedback } from '../Feedback';

const PlaylistContext = createContext(null);

function usePlaylist() {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error(`Can't use "usePlaylist" without an PlaylistProvider!`);
  }
  return context;
}

function PlaylistProvider({ children }) {
  const { authenticated, user } = useAuth();
  const { showFeedback } = useFeedback();
  const [favorites, setFavorites] = useState({});
  const [watchLater, setWatchLater] = useState({});

  useEffect(() => {
    const allFavorites = Storage.get(FAVORITES);
    const allWatchLater = Storage.get(WATCH_LATER);

    if (user) {
      if (!allFavorites) {
        Storage.set(FAVORITES, { [user.username]: {} });
      } else {
        setFavorites(allFavorites[user.username]);
      }

      if (!allWatchLater) {
        Storage.set(WATCH_LATER, { [user.username]: {} });
      } else {
        setWatchLater(allWatchLater[user.username]);
      }
    }
  }, [user]);

  const addFavorite = video => {
    if (!authenticated) return showFeedback('Login to add the video to your favorites')();

    const allFavorites = Storage.get(FAVORITES);
    const userVideos = allFavorites[user.username];
    if (!userVideos[video.id]) {
      const updatedVideos = {
        ...userVideos,
        [video.id]: video,
      };
      Storage.set(FAVORITES, {
        ...allFavorites,
        [user.username]: updatedVideos,
      });
      setFavorites(updatedVideos);
      showFeedback(`Saved to your favorites: "${video.snippet.title}"`)();
    } else {
      showFeedback(`Already in your favorites: "${video.snippet.title}"`)();
    }
  };

  const removeFavorite = video => {
    if (!authenticated) return showFeedback('Login to remove the video from your favorites')();

    const allFavorites = Storage.get(FAVORITES);
    const userVideos = allFavorites[user.username];
    if (!userVideos[video.id]) {
      showFeedback(`Not in your favorites: "${video.snippet.title}"`)();
    } else {
      delete userVideos[video.id]

      Storage.set(FAVORITES, {
        ...allFavorites,
        [user.username]: userVideos,
      });
      setFavorites(userVideos);
      showFeedback(`Removed from your favorites: "${video.snippet.title}"`)();
    }
  };

  const addLater = video => {
    if (!authenticated) return showFeedback('Login to add the video to watch later')();

    const allWatchLater = Storage.get(WATCH_LATER);
    const userVideos = allWatchLater[user.username];
    if (!userVideos[video.id]) {
      const updatedVideos = {
        ...userVideos,
        [video.id]: video,
      };
      Storage.set(WATCH_LATER, {
        ...allWatchLater,
        [user.username]: updatedVideos,
      });
      setWatchLater(updatedVideos);
      showFeedback(`Added to watch later: "${video.snippet.title}"`)();
    } else {
      showFeedback(`Already in watch later: "${video.snippet.title}"`)();
    }
  };

  const removeLater = video => {
    if (!authenticated) return showFeedback('Login to remove the video from watch later')();

    const allWatchLater = Storage.get(WATCH_LATER);
    const userVideos = allWatchLater[user.username];
    if (!userVideos[video.id]) {
      showFeedback(`Not in watch later: "${video.snippet.title}"`)();
    } else {
      delete userVideos[video.id]

      Storage.set(WATCH_LATER, {
        ...allWatchLater,
        [user.username]: userVideos,
      });
      setWatchLater(userVideos);
      showFeedback(`Removed from watch later: "${video.snippet.title}"`)();
    }
  };

  return (
    <PlaylistContext.Provider value={{ favorites, watchLater, addFavorite, removeFavorite, addLater, removeLater }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export { usePlaylist };

export default PlaylistProvider;