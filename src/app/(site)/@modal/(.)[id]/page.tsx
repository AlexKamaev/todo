import { DataService } from '@/services/DataService';
import { ITodoDetailPageProps } from '@/types';
import { renderStatus } from '@/utils/renderStatus';
import { Modal } from '@/components/Modal';

export default async function TodoModal({ params }: ITodoDetailPageProps) {
  const { id } = await params;

  const todo = await DataService.GetTodo(id);
  const user = await DataService.GetUser(todo.userId);

  return (
    <Modal>
      <div className="alx-card">
        <header className="alx-card-header">
          <p className="alx-card-header-title">Task #{id}</p>
          <span className="alx-card-header-icon" aria-label="is-completed">
            <span className="alx-card-header-icon" aria-label="is-completed">
              {renderStatus(todo.completed)}
            </span>
          </span>
        </header>
        <div className="alx-card-content">
          <p className="alx-title alx-is-4">{todo.title}</p>
          <p>
            <strong>Assigned to:</strong>
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    </Modal>
  );
}
