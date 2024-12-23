'use client';

import { Icon, UIComp } from '@krak/ui/core';

export const SomeComp = () => {
  return (
    <div>
      SomeComp
      <div style={{ display: 'flex', gap: 10 }}>
        <Icon icon="icAdd" />
        <UIComp />
      </div>
    </div>
  );
};
