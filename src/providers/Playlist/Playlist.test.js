import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks';

import PlaylistProvider, { usePlaylist } from './Playlist.provider';
import FeedbackProvider from '../Feedback';
import AuthProvider from '../Auth';

import loginUser from '../../utils/tests-utils/loginUser';

import response from '../../utils/fixtures/sample-response.json';

describe('PlaylistProvider', () => {
  it('initializes with the expected values', () => {
    const wrapper = ({ children }) => (
      <FeedbackProvider>
        <AuthProvider>
          <PlaylistProvider>
            {children}
          </PlaylistProvider>
        </AuthProvider>
      </FeedbackProvider>
    );
    const { result } = renderHook(() => usePlaylist(), { wrapper });

    expect(result.current.favorites).toMatchObject({});
    expect(result.current.watchLater).toMatchObject({});
  });

  it('can add to the favorites playlist', async () => {
    loginUser();
    const video = response.items[0];
    const wrapper = ({ children }) => (
      <FeedbackProvider>
        <AuthProvider>
          <PlaylistProvider>
            {children}
          </PlaylistProvider>
        </AuthProvider>
      </FeedbackProvider>
    );
    const { result } = renderHook(() => usePlaylist(), { wrapper });

    render(
      <button onClick={() => result.current.addFavorite(video)}>
        Add video
      </button>
    );
    const addButton = await screen.findByText(/Add video/i);
    act(() => {
      fireEvent.click(addButton);
    });
    
    expect(result.current.favorites[video.id].snippet.title).toBe('Dune Official Trailer');
  });
  
  it('can add to the watch later playlist', async () => {
    loginUser();
    const video = response.items[0];
    const wrapper = ({ children }) => (
      <FeedbackProvider>
        <AuthProvider>
          <PlaylistProvider>
            {children}
          </PlaylistProvider>
        </AuthProvider>
      </FeedbackProvider>
    );
    const { result } = renderHook(() => usePlaylist(), { wrapper });

    render(
      <button onClick={() => result.current.addLater(video)}>
        Add video
      </button>
    );
    const addButton = await screen.findByText(/Add video/i);
    act(() => {
      fireEvent.click(addButton);
    });
    
    expect(result.current.watchLater[video.id].snippet.title).toBe('Dune Official Trailer');
  });

  it('can remove from the favorites playlist', async () => {
    loginUser();
    const video = response.items[0];
    const wrapper = ({ children }) => (
      <FeedbackProvider>
        <AuthProvider>
          <PlaylistProvider>
            {children}
          </PlaylistProvider>
        </AuthProvider>
      </FeedbackProvider>
    );
    const { result } = renderHook(() => usePlaylist(), { wrapper });

    render(
      <button onClick={() => result.current.removeFavorite(video)}>
        Remove video
      </button>
    );
    const removeButton = await screen.findByText(/Remove video/i);
    act(() => {
      fireEvent.click(removeButton);
    });

    expect(result.current.favorites[video.id]).toBe(undefined);
  });
  
  it('can remove from the watch later playlist', async () => {
    loginUser();
    const video = response.items[0];
    const wrapper = ({ children }) => (
      <FeedbackProvider>
        <AuthProvider>
          <PlaylistProvider>
            {children}
          </PlaylistProvider>
        </AuthProvider>
      </FeedbackProvider>
    );
    const { result } = renderHook(() => usePlaylist(), { wrapper });

    render(
      <button onClick={() => result.current.removeLater(video)}>
        Remove video
      </button>
    );
    const removeButton = await screen.findByText(/Remove video/i);
    act(() => {
      fireEvent.click(removeButton);
    });
    
    expect(result.current.watchLater[video.id]).toBe(undefined);
  });
});
