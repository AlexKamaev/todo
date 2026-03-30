'use client';

import {
  ITodoPreviewListProps,
  ITodoPreviewListState,
  SortType,
} from '@/types';
import { Filter } from './Filter/Filter';
import { TodoList } from './TodoList';
import { useState } from 'react';
import { DataService } from '@/services/DataService';
import { useRouter } from 'next/navigation';

export function HomeClient(props: ITodoPreviewListProps) {
  async function onFilterChanged(
    searchText: string,
    completed: boolean | undefined,
    sorting: SortType,
  ) {
    let filteredTodos = (await DataService.GetTodos(completed)).filter((todo) =>
      todo.title.includes(searchText),
    );

    if (sorting === 'asc') {
      filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting === 'desc') {
      filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sorting === 'none') {
    }

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
