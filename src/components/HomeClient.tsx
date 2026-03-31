'use client';

import {
  ITodoPreviewListProps,
  ITodoPreviewListState,
  SortType,
} from '@/types';

import { Filter } from './Filter/Filter';
import { TodoList } from './Todo/TodoList';
import { useState } from 'react';
import { DataService } from '@/services/DataService';
import { useRouter } from 'next/navigation';
import { delay } from '@/utils/delay';
import LoadingCards from './Loading/LoadingCards';

const LOADING_DELAY = 300;

export function HomeClient(props: ITodoPreviewListProps) {
  async function onFilterChanged(
    searchText: string,
    completed: boolean | undefined,
    sorting: SortType,
  ) {
    setState((prevState) => ({ ...prevState, isLoading: true }));

    // for demonstration purposes only, remove this in production
    await delay(LOADING_DELAY);

    const filteredTodos = (await DataService.GetTodos(completed)).filter(
      (todo) => todo.title.includes(searchText),
    );

    if (sorting === 'asc') {
      filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sorting === 'desc') {
      filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
    }

    setState({ todos: filteredTodos, searchText, isLoading: false });
  }

  function onTodoClicked(id: number) {
    router.push(`/${id}`);
  }

  const router = useRouter();

  const [state, setState] = useState<ITodoPreviewListState>({
    todos: props.todos,
    searchText: '',
    isLoading: false,
  });

  return (
    <>
      <Filter onFilterChanged={onFilterChanged} />
      {state.isLoading ? (
        <LoadingCards />
      ) : (
        <TodoList
          todos={state.todos}
          searchText={state.searchText}
          onTodoClick={onTodoClicked}
        />
      )}
    </>
  );
}
