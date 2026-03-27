'use client';

import { ITodoPreviewListProps, ITodoPreviewListState } from '@/types';
import { Filter } from './Filter';
import { TodoList } from './TodoList';
import { useState } from 'react';
import { DataService } from '@/services/DataService';
import { useRouter } from 'next/navigation';

export function HomeClient(props: ITodoPreviewListProps) {
  async function onFilterChanged(
    searchText: string,
    completed: boolean | undefined,
  ) {
    const filteredTodos = (await DataService.GetTodos(completed)).filter(
      (todo) => todo.title.includes(searchText),
    );

    setState({ todos: filteredTodos, searchText });
  }

  function onTodoClicked(id: number) {
    router.push(`/${id}`);
  }

  const router = useRouter();

  const [state, setState] = useState<ITodoPreviewListState>({
    todos: props.todos,
    searchText: '',
  });

  return (
    <>
      <Filter onFilterChanged={onFilterChanged} />
      <TodoList
        todos={state.todos}
        searchText={state.searchText}
        onTodoClick={onTodoClicked}
      />
    </>
  );
}
