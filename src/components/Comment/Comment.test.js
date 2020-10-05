import React from 'react';
import { render, screen } from '@testing-library/react'

import Comment from './Comment.component';

import response from '../../utils/fixtures/sample-comments.json';

describe('Comment', () => {
  it('displays the comment', async () => {
    const comment = response.items[0];
    render(<Comment comment={comment} />);
    const text = await screen.findByText(/You have to be kidding me/i);
    expect(text).toBeInTheDocument();
  });
})
