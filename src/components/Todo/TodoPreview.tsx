import { renderStatus } from '@/utils/renderStatus';
import styles from './TodoPreview.module.scss';

import { ITodoPreviewProps } from '@/types';

function renderTitle(title: string, searchText: string | undefined) {
  if (!searchText) return <>{title}</>;

  const regex = new RegExp(`(${searchText})`, 'gi');
  const parts = title.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === searchText.toLowerCase() ? (
          <span key={i} className="alx-has-background-warning">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function TodoPreview({ todo, searchText, onClick }: ITodoPreviewProps) {
  return (
    <div
      data-testid="todo-preview"
      className={`alx-card ${styles.todo_preview}`}
      onClick={() => onClick(todo.id)}>
      <header className="alx-card-header">
        <p data-testid="todo-preview-id" className="alx-card-header-title">
          Task #{todo.id}
        </p>
        <span className="alx-card-header-icon" aria-label="status-text">
          {renderStatus(todo.completed)}
        </span>
      </header>
      <div className="alx-card-content">
        <div data-testid="todo-preview-title" className="alx-content">
          {renderTitle(todo.title, searchText)}
        </div>
      </div>
    </div>
  );
}
