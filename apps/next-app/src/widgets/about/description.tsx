import { Typo } from '@krakstack/ui/core';

export const Description = () => {
  return (
    <section className="flex flex-col items-center gap-2">
      <Typo as="h5" variant="BodyMRegular">
        Description
      </Typo>
      <div className="flex flex-col items-center">
        <Typo variant="CaptionRegular">This page is About.</Typo>
        <Typo variant="CaptionRegular">if you need help, call me</Typo>
      </div>
    </section>
  );
};
