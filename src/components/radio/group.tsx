import React, { FC } from 'react';
import { RadioValue } from '.';
import { usePropsValue } from '../../utils/use-props-value';
import { mergeProps } from '../../utils/with-default-props';
import { RadioGroupContext } from './group-context';

export interface RadioGroupProps {
  value?: RadioValue | null;
  onChange?: (val: RadioValue) => void;
  defaultValue?: RadioValue | null;
  disabled?: boolean;
}

const defaultProps = {
  disabled: false,
  defaultValue: null,
};

export const Group: FC<RadioGroupProps> = p => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);
  return (
    <RadioGroupContext.Provider
      // TODO: 性能优化
      value={{
        value: value === null ? [] : [value],
        check: v => {
          setValue(v);
        },
        uncheck: () => {},
        disabled: props.disabled,
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  );
};
