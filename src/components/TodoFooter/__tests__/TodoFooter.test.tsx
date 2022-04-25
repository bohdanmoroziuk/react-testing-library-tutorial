import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import TodoFooter from 'components/TodoFooter';

const renderWithRouter = (children: ReactNode) => render(
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe('<TodoFooter />', () => {
  test('renders successfully', () => {
    renderWithRouter(
      <TodoFooter numberOfIncompleteTodos={0} />
    );

    const target = screen.getByTestId('todo-footer');

    expect(target).toMatchSnapshot();
  });

  test('renders the correct amount of incomplete tasks', () => {
    renderWithRouter(
      <TodoFooter numberOfIncompleteTodos={5} />
    );

    const target = screen.getByText(/5 tasks left/i);

    expect(target).toBeInTheDocument();
  });

  test('renders "task" when the number of incomplete task is one', () => {
    renderWithRouter(
      <TodoFooter numberOfIncompleteTodos={1} />
    );

    const target = screen.getByText(/1 task left/i);

    expect(target).toBeInTheDocument();
  });
});