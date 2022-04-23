import { render, screen } from '@testing-library/react';

import App from 'App';

describe('<App />', () => {
  test('renders successfully', () => {
    render(<App />);

    const appElement = screen.getByTestId('app')
    
    expect(appElement).toBeInTheDocument();
  });
});
