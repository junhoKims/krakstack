/* eslint-disable @next/next/no-img-element */
'use client';

import { Icon, UIComp } from '@krak/ui/core';

import { infoJson } from '@krak/ui/configs';
import { LineBase } from '@krak/ui/base';
import { strawberryFoodCompressed } from '@krak/ui/assets/images';

export const SomeComp = () => {
  console.log(infoJson);
  return (
    <div>
      SomeComp
      <div style={{ display: 'flex', gap: 10 }}>
        <img src={strawberryFoodCompressed.src} alt="strawberry-food" />
        <Icon icon="icAdd" />
        <UIComp />
        <LineBase />
      </div>
    </div>
  );
};
