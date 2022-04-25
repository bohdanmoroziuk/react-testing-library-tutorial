import { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderWithRouter = (children: ReactNode) => render(
  <Router>
    {children}
  </Router>
);
