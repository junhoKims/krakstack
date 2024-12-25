export const EXCLUDES = [
  '**\/build/**',
  '**/{tests,specs}/e2e/**',
  '**/storybook-static/**',
  '.next/**',
  '.storybook/**',
];

export const COVERAGE_EXCLUDES = [
  '**/{postcss,tailwind}.config.*',
  '**/index.?(c|m)[jt]s?(x)',
  '**/{constants,types}.?(c|m)[jt]s?(x)',
];
