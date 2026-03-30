import { TodoDetail } from '@/components/TodoDetail';
import { DataService } from '@/services/DataService';
import { ITodoDetailPageProps } from '@/types';

export default async function TodoDetailPage({ params }: ITodoDetailPageProps) {
  const { id } = await params;

  const todo = await DataService.GetTodo(id);
  const user = await DataService.GetUser(todo.userId);

  return (
    <div className="alx-container">
      <div className="alx-columns alx-is-centered alx-m-1">
        <div className="alx-column alx-is-half">
          <TodoDetail todo={todo} user={user} />
        </div>
      </div>
    </div>
  );
}
