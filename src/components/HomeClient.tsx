'use client';

import { ITodoPreviewListProps } from '@/types';
import { Filter } from './Filter';
import { TodoList } from './TodoList';
import { useState } from 'react';

export function HomeClient(props: ITodoPreviewListProps) {
  const [todos, setTodos] = useState(props.todos);
  return (
    <>
      <Filter onFilterChanged={(filter: string) => {}} />
      <TodoList todos={todos} />
    </>
  );
}
