/* eslint-disable @next/next/no-img-element */
'use client';

import { Icon, UIComp } from '@krakstack/ui/core';

import { infoJson } from '@krakstack/ui/configs';
import { LineBase } from '@krakstack/ui/base';
import { strawberryFoodCompressed } from '@krakstack/ui/assets/images';

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
