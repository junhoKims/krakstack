import { Typo } from '@krakstack/ui/core';
import { Description } from '@/widgets/about/description';
import { Buttons } from '@/widgets/about/buttons';

export default function About() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Typo variant="BodyMBold">About</Typo>
        <Description />
        <Buttons />
      </main>
    </div>
  );
}
