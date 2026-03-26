import Image from 'next/image';
import styles from './page.module.css';
import { TodoList } from '@/components/TodoList';
import { Filter } from '@/components/Filter';
import { ITodoPreview as ITodoPreview } from '@/types';
import { DataService } from '@/services/DataService';

export default async function Home() {
  const todos = await DataService.GetTodos();

  return (
    <main className="alx-container">
      <div className="alx-section">
        <Filter />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
