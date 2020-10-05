import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import AuthProvider, { useAuth } from './Auth.provider';
import FeedbackProvider from '../Feedback';

describe('AuthProvider', () => {
  it('sets the user and authenticated when login in', () => {
    const wrapper = ({ children }) => (
      <BrowserRouter>
        <FeedbackProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </FeedbackProvider>
      </BrowserRouter>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.authenticated).toBe(false);
    expect(result.current.user).toBe(null);

    act(() => {
      result.current.login('wizeline', 'Rocks!', '/');
    });

    expect(result.current.authenticated).toBe(true);
    expect(result.current.user.id).toBe('123');
  });
  
  it('logs out as expected', () => {
    const wrapper = ({ children }) => (
      <BrowserRouter>
        <FeedbackProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </FeedbackProvider>
      </BrowserRouter>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.logout();
    });
    
    expect(result.current.authenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });
});
