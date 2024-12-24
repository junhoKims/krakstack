/**
 * @type {import("prettier").Config}
 */
export const base = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
};
