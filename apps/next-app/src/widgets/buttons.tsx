'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@krakstack/ui/core/button';

export const Buttons = () => {
  const router = useRouter();

  const handleClickAbout = () => {
    router.push('/about');
  };

  const handleClickSetting = () => {
    router.push('/setting');
  };

  return (
    <div className="flex items-center gap-4">
      <Button onClick={handleClickAbout}>about</Button>
      <Button onClick={handleClickSetting}>setting</Button>
    </div>
  );
};
