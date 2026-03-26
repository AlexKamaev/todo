import Image from 'next/image';
import styles from './page.module.css';
import { TodoList } from '@/components/TodoList';
import { Filter } from '@/components/Filter';
import { ITodoPreview, ITodoPreviewListProps } from '@/types';
import { DataService } from '@/services/DataService';
import { HomeClient } from '@/components/HomeClient';

export default async function Home() {
  const todos = await DataService.GetTodos();

  return (
    <main className="alx-container">
      <div className="alx-section">
        <HomeClient todos={todos} />
      </div>
    </main>
  );
}
