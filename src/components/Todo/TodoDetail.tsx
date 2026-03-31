import { renderStatus } from '@/utils/renderStatus';
import { ITodoDetailProps } from '@/types';

export function TodoDetail({ todo, user }: ITodoDetailProps) {
    return (
        <div className="alx-card">
            <header className="alx-card-header">
                <p className="alx-card-header-title">Task #{todo.id}</p>
                <span
                    className="alx-card-header-icon"
                    aria-label="is-completed"
                >
                    {renderStatus(todo.completed)}
                </span>
            </header>
            <div className="alx-card-content">
                <p className="alx-title alx-is-5">{todo.title}</p>
                <hr />
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
    );
}
