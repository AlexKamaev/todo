'use client';

import NotificationError from '@/components/Error/NotificationError';

export default function Error({ error }: { error: Error }) {
    return <NotificationError error={error} />;
}
