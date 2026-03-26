import Image from 'next/image';
import styles from './page.module.css';
import { TodoList } from '@/components/TodoList';
import { Filter } from '@/components/Filter';
import { ITodoPreview as ITodoPreview } from '@/types';

export default async function Home() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=15',
  );

  const todos: ITodoPreview[] = await data.json();

  return (
    <main className="alx-container">
      <div className="alx-section">
        <Filter />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
