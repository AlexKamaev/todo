'use client';

import BlockError from '@/components/Error/BlockError';

export default function Error({ error }: { error: Error }) {
  return <BlockError error={error} />;
}
