'use client';

import { ITodoPreviewListProps } from '@/types';
import { TodoPreview } from './TodoPreview';

export function TodoList({ todos, searchText }: ITodoPreviewListProps) {
  if (todos.length === 0) {
    return (
      <article className="alx-message alx-is-warning">
        <div className="alx-message-body">
          <p>No tasks found</p>
          <p>Try adjusting your search or create a new task.</p>
        </div>
      </article>
    );
  }
  return (
    <>
      <p className="alx-content">{todos.length} tasks found.</p>
      <div className="alx-columns alx-is-multiline">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="alx-column alx-is-12-mobile alx-is-6-tablet alx-is-4-desktop alx-is-3-widescreen">
            <TodoPreview todo={todo} searchText={searchText} />
          </div>
        ))}
      </div>
    </>
  );
}
