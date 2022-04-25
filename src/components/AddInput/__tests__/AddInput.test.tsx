import { render, screen, fireEvent } from '@testing-library/react';

import AddInput from 'components/AddInput';

describe('<AddInput />', () => {
  const mockOnAdd = jest.fn();

  test('renders successfully', () => {
    render(<AddInput onAdd={mockOnAdd} />);

    const target = screen.getByTestId('add-input');

    expect(target).toBeInTheDocument();
  });

  test('is able to type in input', () => {
    render(<AddInput onAdd={mockOnAdd} />);

    const text = 'Go Grocery Shopping';

    const target = screen.getByPlaceholderText<HTMLInputElement>(/Add a new task here/i);

    expect(target.value).toBe('');

    fireEvent.change(target, {
      target: {
        value: text,
      },
    })

    expect(target.value).toBe(text);
  });

  test('clears the input when presses the add button', () => {
    render(<AddInput onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText<HTMLInputElement>(/Add a new task here/i);
    const button = screen.getByText(/Add/i);

    fireEvent.click(button);

    expect(input.value).toBe('');
  });
});