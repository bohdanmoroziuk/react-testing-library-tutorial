import { useMemo } from 'react';

import { TodoItem } from 'domain/todo';
import TodoFooter from '../TodoFooter/TodoFooter'

import 'components/TodoList/TodoList.css';

export interface TodoListProps {
  todos: TodoItem[];
  onUpdate: (id: string) => void;
}

export default function TodoList({ todos, onUpdate }: TodoListProps) {
  const incompleteTodos = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return (
    <div className="todo-list-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div 
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              key={todo.id}
              onClick={() => onUpdate(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTodos={incompleteTodos} />
      </div>
    </div>
  )
}
