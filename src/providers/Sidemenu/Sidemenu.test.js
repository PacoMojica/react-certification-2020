import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks';
import SidemenuProvider, { useSidemenu } from './Sidemenu.provider';

describe('SidemenuProvider', () => {
  it('can change open state', () => {
    const wrapper = ({ children }) => (
      <SidemenuProvider>
        {children}
      </SidemenuProvider>
    );
    const { result } = renderHook(() => useSidemenu(), { wrapper });

    expect(result.current.open).toBe(false);

    act(() => {
      result.current.setOpen(true);
    });

    expect(result.current.open).toBe(true);
  });

  it('can toggle open state', async () => {
    const wrapper = ({ children }) => (
      <SidemenuProvider>
        {children}
      </SidemenuProvider>
    );
    const { result } = renderHook(() => useSidemenu(), { wrapper });

    expect(result.current.open).toBe(false);

    render(
      <button onClick={result.current.toggleDrawer(true)}>
        Click Me!
      </button>
    );
    const toggleButton = await screen.findByText(/Click Me!/i);
    act(() => {
      fireEvent.click(toggleButton);
    });

    expect(result.current.open).toBe(true);
  });
});
