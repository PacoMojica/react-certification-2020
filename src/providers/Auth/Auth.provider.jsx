import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router';

import { AUTH_STORAGE_KEY, USER_STORAGE_KEY, DEFAULT_USERS } from '../../utils/constants';
import Storage from '../../utils/storage';

import { useFeedback } from '../Feedback';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const { showFeedback } = useFeedback();
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(Storage.get(AUTH_STORAGE_KEY));
  const [user, setUser] = useState(Storage.get(USER_STORAGE_KEY));

  useEffect(() => {
    const lastAuthState = Storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const lastUser = Storage.get(USER_STORAGE_KEY);

    setUser(lastUser);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((username, password, from) => {
    const dbUser = DEFAULT_USERS[username];
    if (dbUser && dbUser.password === password) {
      Storage.set(AUTH_STORAGE_KEY, true);
      Storage.set(USER_STORAGE_KEY, dbUser);
      setUser(dbUser);
      setAuthenticated(true);
      history.push(from);
      showFeedback('Welcome back!')();
    } else {
      showFeedback('Invalid credentials')();
    }
  }, [history, showFeedback]);

  const logout = useCallback(() => {
    Storage.set(AUTH_STORAGE_KEY, false);
    Storage.set(USER_STORAGE_KEY, null);
    setAuthenticated(false);
    setUser(null);
  }, []);

  const value = {
    login,
    logout,
    authenticated: authenticated,
    user: user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
