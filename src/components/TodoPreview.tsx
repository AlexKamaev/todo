import { ITodoPreviewProps } from '@/types';

function renderStatus(completed: boolean) {
  return (
    <span
      className={`alx-tag ${completed ? 'alx-is-success' : 'alx-is-warning'}`}>
      {completed ? 'completed' : 'in progress'}
    </span>
  );
}

export function TodoPreview({ todo }: ITodoPreviewProps) {
  return (
    <div className="alx-card">
      <header className="alx-card-header">
        <p className="alx-card-header-title">Task #{todo.id}</p>
        <span className="alx-card-header-icon" aria-label="is-completed">
          {renderStatus(todo.completed)}
        </span>
      </header>
      <div className="alx-card-content">
        <div className="alx-content">{todo.title}</div>
      </div>
    </div>
  );
}
