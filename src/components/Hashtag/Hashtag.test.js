import React from 'react';
import { render, screen } from '@testing-library/react'

import Hashtag from './Hashtag.component';

describe('Hashtag', () => {
  it('displays the hashtag', async () => {
    const text = '#asdfasdf';
    render(<Hashtag text={text} />);
    const hashtag = await screen.findByText(/asdfasdf/i);
    expect(hashtag).toBeInTheDocument();
  });
})
