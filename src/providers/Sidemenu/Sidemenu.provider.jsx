import React, { createContext, useContext, useState } from 'react';

const SidemenuContext = createContext({
  open: false,
  setOpen: () => { },
});

function useSidemenu() {
  const context = useContext(SidemenuContext);
  if (!context) {
    throw new Error(`Can't use "useSidemenu" without an SidemenuProvider!`);
  }
  return context;
}

function SidemenuProvider({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' && (
        event.key === 'Tab' ||
        event.key === 'Shift'
      )) return;

    setOpen(open);
  };

  return (
    <SidemenuContext.Provider value={{ open, setOpen, toggleDrawer }}>
      {children}
    </SidemenuContext.Provider>
  );
}

export { useSidemenu };

export default SidemenuProvider;