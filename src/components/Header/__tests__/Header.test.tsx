import { render, screen } from '@testing-library/react';

import Header from 'components/Header/Header';

describe('<Header />', () => {
  test('renders successfully', () => {
    render(<Header title="Todo" />);

    const target = screen.getByTitle('Header');

    expect(target).toBeTruthy();
    expect(target).toBeInTheDocument();
    expect(target).toMatchSnapshot();
  });

  test('renders same text passed into title prop', () => {
    const title = "Followers";

    render(<Header title={title} />)

    const target = screen.getByTitle('Header');

    expect(target.textContent).toBe(title);
    expect(target).toHaveTextContent(title);
  });
});
