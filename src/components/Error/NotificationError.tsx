import { IErrorProps } from '@/types';

export default function NotificationError({ error }: IErrorProps) {
  return (
    <div className="alx-notification alx-is-danger alx-is-radiusless">
      {error.message}
    </div>
  );
}
