import React from 'react';
import { render } from '@testing-library/react';

import ContextComposer from './ContextComposer.component';

import AuthProvider from '../../providers/Auth';
import FeedbackProvider from '../../providers/Feedback';

describe('ContextComposer', () => {
  it('creates a wrapper with the provided context', async () => {
    render(
      <ContextComposer providers={[FeedbackProvider, AuthProvider]}>
        <div />
      </ContextComposer>
    );
  });
})
