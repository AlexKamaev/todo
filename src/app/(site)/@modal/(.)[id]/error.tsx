'use client';

import NotificationError from "@/components/Error/NotificationError";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <NotificationError error={error} />
  );
}
