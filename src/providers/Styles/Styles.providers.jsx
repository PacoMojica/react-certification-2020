import React, { createContext, useContext } from 'react';

const StylesContext = createContext();

function useStyles() {
  const context = useContext(StylesContext);
  if (!context) {
    throw new Error(`Can't use '${useStyles.name}' without its provider!`);
  }
  return context;
}

function StylesProvider({ classes, children }) {

  return (
    <StylesContext.Provider value={{ classes }}>
      {children}
    </StylesContext.Provider>
  );
}

export { useStyles };

export default StylesProvider;