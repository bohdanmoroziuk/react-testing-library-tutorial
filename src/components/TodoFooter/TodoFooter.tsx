import { Link } from "react-router-dom"

import 'components/TodoFooter/TodoFooter.css';

export interface TodoFooterProps {
  numberOfIncompleteTodos: number;
}

export default function TodoFooter({ numberOfIncompleteTodos }: TodoFooterProps) {
  return (
    <div className="todo-footer" data-testid="todo-footer">
      <p>{numberOfIncompleteTodos} {numberOfIncompleteTodos === 1 ? "task" : "tasks"} left</p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}
