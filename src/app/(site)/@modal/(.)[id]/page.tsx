import { DataService } from '@/services/DataService';
import { ITodoDetailPageProps } from '@/types';
import { Modal } from '@/components/Modal';
import { TodoDetail } from '@/components/TodoDetail';

export default async function TodoModal({ params }: ITodoDetailPageProps) {
  const { id } = await params;

  const todo = await DataService.GetTodo(id);
  const user = await DataService.GetUser(todo.userId);

  return (
    <Modal>
      <TodoDetail todo={todo} user={user} />
    </Modal>
  );
}
