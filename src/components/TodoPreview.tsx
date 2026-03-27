import styles from './TodoPreview.module.scss';

import { ITodoPreviewProps } from '@/types';

function renderStatus(completed: boolean) {
  return (
    <span
      className={`alx-tag ${completed ? 'alx-is-success' : 'alx-is-warning'}`}>
      {completed ? 'completed' : 'in progress'}
    </span>
  );
}

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
    <div className={`alx-card ${styles.todo_preview}`} onClick={() => onClick(todo.id)}>
      <header className="alx-card-header">
        <p className="alx-card-header-title">Task #{todo.id}</p>
        <span className="alx-card-header-icon" aria-label="is-completed">
          {renderStatus(todo.completed)}
        </span>
      </header>
      <div className="alx-card-content">
        <div className="alx-content">{renderTitle(todo.title, searchText)}</div>
      </div>
    </div>
  );
}
