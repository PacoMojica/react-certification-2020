import React from 'react';
import { screen, fireEvent } from '@testing-library/react'

import App from '../../components/App';

import renderWithRouter from '../../utils/tests-utils/renderWithRouter';
import loginUser from '../../utils/tests-utils/loginUser';

jest.mock('../../pages/Home', () => ({
  __esModule: true,
  default: () => {
    return <div>Home page</div>;
  },
}));

describe('Login Page', () => {
  it('works as expected when user is NOT logged in', async () => {
    renderWithRouter(<App />, {
      route: '/login',
    });

    const username = await screen.findByTestId('username-input');
    fireEvent.change(username, { target: { value: 'wizeline' } });
    const password = await screen.findByTestId('password-input');
    fireEvent.change(password, { target: { value: 'Rocks!' } });
    const loginButton = await screen.findByTestId('login-submit');
    fireEvent.click(loginButton, 'submit');

    const home = await screen.findByText(/Home page/i);
    expect(home).toBeInTheDocument();
  });

  it('works as expected when user is logged in', async () => {
    loginUser();
    renderWithRouter(<App />, {
      route: '/login',
    });

    
    const home = await screen.findByText(/Home page/i);
    expect(home).toBeInTheDocument();
  });
});