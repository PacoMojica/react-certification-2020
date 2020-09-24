import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  open: false,
  setOpen: () => { },
});

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };

export default SearchProvider;