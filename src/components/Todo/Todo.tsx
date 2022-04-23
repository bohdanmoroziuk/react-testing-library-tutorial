import { useState } from 'react'
import { v4 } from 'uuid';

import { TodoItem } from 'domain/todo';

import AddInput from 'components/AddInput';
import Header from 'components/Header';

import TodoList from '../TodoList/TodoList'

import 'components/Todo/Todo.css';

export default function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: v4(),
        task: text,
        completed: false,
      },
    ]);
  };

  const updateTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )));
  }

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput onAdd={addTodo} />
      <TodoList 
        todos={todos}
        onUpdate={updateTodo}
      />
    </div>
  );
}
