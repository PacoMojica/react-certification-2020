import React from 'react';
import { screen } from '@testing-library/react'

import App from './App.component';

import renderWithRouter from '../../utils/tests-utils/renderWithRouter';
import loginUser from '../../utils/tests-utils/loginUser';

describe('App', () => {
  it('starts at the home page', async () => {
    renderWithRouter(<App />, {
      route: '/',
    });
    const duneTrailer = await screen.findByText(/Dune Official Trailer/i);
    const callTrailer = await screen.findByText(/Call of Duty®: Black Ops Cold War - Multiplayer Reveal Trailer/i);
    expect(duneTrailer).toBeInTheDocument();
    expect(callTrailer).toBeInTheDocument();
  });

  it('displays the login page', async () => {
    renderWithRouter(<App />, {
      route: '/login',
    });
    const username = await screen.findByText(/Username/i);
    const password = await screen.findByText(/Password/i);

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('displays the video page', async () => {
    renderWithRouter(<App />, {
      route: '/video/n9xhJrPXop4',
    });
    const video = await screen.findByText(/Dune Official Trailer/i);
    const channel = await screen.findByText(/8.77M subscribers/i);
    const comment = await screen.findByText(/14k dislikes, must be the CHOAM company, spacing guild, Bene Gesserit and Harkonnens!/i);
    expect(video).toBeInTheDocument();
    expect(channel).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
  });
  
  it('displays the watch later page', async () => {
    loginUser();
    renderWithRouter(<App />, {
      route: '/watch-later',
    });
    const list = await screen.findByText(/No videos to show/i);

    expect(list).toBeInTheDocument();
  });
  
  it('displays the favorites page', async () => {
    loginUser();
    renderWithRouter(<App />, {
      route: '/favorites',
    });
    const list = await screen.findByText(/No videos to show/i);

    expect(list).toBeInTheDocument();
  });
  
  it('displays the search page', async () => {
    renderWithRouter(<App />, {
      route: '/search/asdf',
    });
    const result = await screen.findByText(/The Mandalorian | Season 2 Official Trailer | Disney+/i);

    expect(result).toBeInTheDocument();
  });

  it('redirects to not found page', async () => {
    renderWithRouter(<App />, {
      route: '/unkown-page',
    });
    const textToMatch = await screen.findByText(/We couldn't find that page/i);
    expect(textToMatch).toBeInTheDocument();
  });
})
