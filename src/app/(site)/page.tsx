import { DataService } from '@/services/DataService';
import { HomeClient } from '@/components/HomeClient';
import { delay } from '@/utils/delay';

const LOADING_DELAY = 1000;

export default async function Home() {
  const todos = await DataService.GetTodos();

  // TODO: for demonstration purposes only, remove this in production
  await delay(LOADING_DELAY);

  return (
    <main className="alx-container">
      <div className="alx-section">
        <HomeClient todos={todos} />
      </div>
    </main>
  );
}
