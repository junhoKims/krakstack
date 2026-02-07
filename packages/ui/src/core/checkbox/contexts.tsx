import { createContext, useContext, useMemo } from 'react';
import type { CheckboxSizes } from '@/core/checkbox/constants.js';

interface CheckboxContextType {
  size?: CheckboxSizes;
  id?: string;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChangeChecked?: (checked: boolean) => void;
}
export interface CheckboxProviderProps extends CheckboxContextType {
  children: React.ReactNode;
}

const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

export const CheckboxProvider = ({
  size,
  id,
  name,
  value,
  defaultChecked,
  disabled,
  onChangeChecked,
  children,
}: CheckboxProviderProps) => {
  const memoized = useMemo(
    () => ({
      size,
      id,
      name,
      value,
      defaultChecked,
      disabled,
      onChangeChecked,
    }),
    [size, id, name, value, defaultChecked, disabled, onChangeChecked]
  );

  return <CheckboxContext.Provider value={memoized}>{children}</CheckboxContext.Provider>;
};

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('Need "Checkbox" Component for use it');
  }
  return context;
};
