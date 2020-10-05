import React from 'react';
import { screen, fireEvent } from '@testing-library/react'

import Topbar from './Topbar.component';
import RouterSwitch from '../RouterSwitch';

import AuthProvider from '../../providers/Auth';
import FeedbackProvider from '../../providers/Feedback';
import SidemenuProvider from '../../providers/Sidemenu';

import renderWithRouter from '../../utils/tests-utils/renderWithRouter';
import loginUser from '../../utils/tests-utils/loginUser';

jest.mock('../../pages/Home', () => ({
  __esModule: true,
  default: () => {
    return <div>Home page</div>;
  },
}));

describe('Topbar', () => {
  it('works as expected when user is NOT logged in', async () => {
    renderWithRouter(<FeedbackProvider>
      <AuthProvider>
        <SidemenuProvider>
          <RouterSwitch />
          <Topbar />
        </SidemenuProvider>
      </AuthProvider>
    </FeedbackProvider>, {
      route: '/',
    });

    const search = await screen.getAllByPlaceholderText(/Search/i)[0];
    expect(search).toBeInTheDocument();

    const login = await screen.queryByText('Login');
    fireEvent.click(login);

    const username = await screen.findByText(/Username/i);
    expect(username).toBeInTheDocument();
    const password = await screen.findByText(/Password/i);
    expect(password).toBeInTheDocument();
  });

  it('works as expected when user is logged in', async () => {
    loginUser();
    renderWithRouter(<FeedbackProvider>
      <AuthProvider>
        <SidemenuProvider>
          <RouterSwitch />
          <Topbar />
        </SidemenuProvider>
      </AuthProvider>
    </FeedbackProvider>, {
      route: '/',
    });

    const search = await screen.getAllByPlaceholderText(/Search/i)[0];
    expect(search).toBeInTheDocument();

    const user = await screen.queryByTitle('Wizeline');
    fireEvent.click(user);
    
    const actions = await screen.findByText(/Logout/i);
    expect(actions).toBeInTheDocument();
    
    fireEvent.click(actions);

    const home = await screen.findByText(/Home page/i);
    expect(home).toBeInTheDocument();
  });
});