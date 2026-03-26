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
