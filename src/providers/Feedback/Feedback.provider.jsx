import React, { createContext, useContext, useState, useEffect } from 'react';

const FeedbackContext = createContext(null);

function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error(`Can't use "useFeedback" without an FeedbackProvider!`);
  }
  return context;
}

function FeedbackProvider({ children }) {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const showFeedback = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <FeedbackContext.Provider value={{ messageInfo, open, showFeedback, handleClose, handleExited }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export { useFeedback };

export default FeedbackProvider;