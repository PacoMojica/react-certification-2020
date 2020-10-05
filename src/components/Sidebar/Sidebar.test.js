import React from 'react';
import { screen, fireEvent } from '@testing-library/react'

import Sidebar from './Sidebar.component';
import RouterSwitch from '../RouterSwitch';

import AuthProvider from '../../providers/Auth';
import FeedbackProvider from '../../providers/Feedback';

import renderWithRouter from '../../utils/tests-utils/renderWithRouter';
import loginUser from '../../utils/tests-utils/loginUser';

jest.mock('../../pages/Home', () => ({
  __esModule: true,
  default: () => {
    return <div>Home</div>;
  },
}));
jest.mock('../../pages/WatchLater', () => ({
  __esModule: true,
  default: () => {
    return <div>Watch Later</div>;
  },
}));
jest.mock('../../pages/Favorites', () => ({
  __esModule: true,
  default: () => {
    return <div>Favorites</div>;
  },
}));

describe('Sidebar', () => {
  it('works as expected when user is NOT logged in', async () => {
    renderWithRouter(<FeedbackProvider>
      <AuthProvider>
        <RouterSwitch />
        <Sidebar />
      </AuthProvider>
    </FeedbackProvider>, {
      route: '/',
    });

    const home = await screen.findByText(/Home/i);
    expect(home).toBeInTheDocument();

    expect(screen.queryAllByTitle('Watch Later').length).toBe(0);
    expect(screen.queryAllByTitle('Favorites').length).toBe(0);
  });

  it('works as expected when user is logged in', async () => {
    loginUser();
    renderWithRouter(<FeedbackProvider>
      <AuthProvider>
        <RouterSwitch />
        <Sidebar />
      </AuthProvider>
    </FeedbackProvider>, {
      route: '/',
    });

    const home = await screen.findByText(/Home/i);
    expect(home).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('Watch Later'));
    const later = await screen.findByText(/Watch Later/i);
    expect(later).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('Favorites'));
    const favorites = await screen.findByText(/Favorites/i);
    expect(favorites).toBeInTheDocument();
  });
})
