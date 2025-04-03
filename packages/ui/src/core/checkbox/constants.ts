export const CheckboxSizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
} as const;
export type CheckboxSizes = (typeof CheckboxSizes)[keyof typeof CheckboxSizes];
