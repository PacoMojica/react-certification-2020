import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router';

import { USER_STORAGE_KEY, DEFAULT_USERS } from '../../utils/constants';
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
  const [user, setUser] = useState(Storage.get(USER_STORAGE_KEY));

  useEffect(() => {
    const lastUser = Storage.get(USER_STORAGE_KEY);

    setUser(lastUser);
  }, []);

  const login = useCallback((username, password, from) => {
    const dbUser = DEFAULT_USERS[username];
    if (dbUser && dbUser.password === password) {
      Storage.set(USER_STORAGE_KEY, dbUser);
      setUser(dbUser);
      history.push(from);
      showFeedback('Welcome back!')();
    } else {
      showFeedback('Invalid credentials')();
    }
  }, [history, showFeedback]);

  const logout = useCallback(() => {
    Storage.set(USER_STORAGE_KEY, null);
    setUser(null);
  }, []);

  const value = {
    login,
    logout,
    authenticated: Boolean(user),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
