'use client';

import BlockError from '@/components/Error/BlockError';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <BlockError error={error} />;
}
