import { useState } from 'react';

import 'components/AddInput/AddInput.css';

export interface AddInputProps {
  onAdd: (text: string) => void;
}

export default function AddInput({ onAdd }: AddInputProps) {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if(!todo) return;
  
    onAdd(todo);
    setTodo('');
  }

  return (
    <div className="input-container" data-testid="add-input">
      <input 
        className="input" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button 
        className="add-btn"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  )
}
