'use client';

import { ITodoPreviewListProps } from '@/types';
import { TodoPreview } from './TodoPreview';

export function TodoList({ todos }: ITodoPreviewListProps) {
  return (
    <div className="alx-columns alx-is-multiline">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="alx-column alx-is-12-mobile alx-is-6-tablet alx-is-4-desktop alx-is-3-widescreen">
          <TodoPreview todo={todo} />
        </div>
      ))}
    </div>
  );
}
