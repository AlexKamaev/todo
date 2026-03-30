import { IErrorProps } from '@/types';

export default function BlockError({ error }: IErrorProps) {
  return (
    <main className="alx-container">
      <div className="alx-section">
        <article className="alx-message alx-is-danger">
          <div className="alx-message-header">
            <p>Error</p>
            <button className="alx-delete" aria-label="delete"></button>
          </div>
          <div className="alx-message-body">{error.message}</div>
        </article>
      </div>
    </main>
  );
}
