import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from 'tests/utils';
import Todo from 'components/Todo';

const addTodo = (text: string) => {
  const input = screen.getByPlaceholderText<HTMLInputElement>(/add a new task here/i);
  const button = screen.getByText<HTMLButtonElement>(/add/i);

  fireEvent.change(input, {
    target: {
      value: text,
    },
  });

  fireEvent.click(button);
};

describe('<Todo />', () => {
  test('renders successfully', () => {
    renderWithRouter(<Todo />);

    const target = screen.queryByTestId('todo-list');

    expect(target).toBeInTheDocument();
  });

  test('adds a new todo item to the list', () => {
    renderWithRouter(<Todo />);

    const text = 'Go Grocery Shopping';

    addTodo(text);

    const todo = screen.queryByText(text);

    expect(todo).toBeInTheDocument();
  });

  test('renders the todo list correctly', () => {
    renderWithRouter(<Todo />);

    addTodo('Go Grocery Shopping');
    addTodo('Pet my cat');

    const todos = screen.queryAllByTestId('todo-item');

    expect(todos.length).toBe(2);
  });

  test('the task does not have a completed class at initial display', () => {
    renderWithRouter(<Todo />);

    addTodo('Go Grocery Shopping');

    const todo = screen.getByText('Go Grocery Shopping');

    expect(todo.classList).not.toContain('todo-item-active');
  });

  test('switches the class of the task when clicking on the task', () => {
    renderWithRouter(<Todo />);

    addTodo('Go Grocery Shopping');

    const todo = screen.getByText('Go Grocery Shopping');

    expect(todo.classList).not.toContain('todo-item-active');

    fireEvent.click(todo);

    expect(todo.classList).toContain('todo-item-active');

    fireEvent.click(todo);
    
    expect(todo.classList).not.toContain('todo-item-active');
  });
});