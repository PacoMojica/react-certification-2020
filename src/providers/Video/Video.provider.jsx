import React, { createContext, useContext } from 'react';

const VideoContext = createContext({ video: null });

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ video, loading, error, children }) {

  return (
    <VideoContext.Provider value={{ video, loading, error }}>
      {children}
    </VideoContext.Provider>
  );
}

export { useVideo };

export default VideoProvider;