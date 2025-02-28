'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@krakstack/ui/core/button';

export const Buttons = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <Button variant="tertiary" onClick={handleBack}>
        뒤로가기
      </Button>
      <Button variant="tertiary">샘플</Button>
    </div>
  );
};
