import React, { FC } from 'react';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { CheckboxValue } from '.';
import { CheckboxGroupContext } from './group-context';

export interface CheckboxGroupProps {
  value?: CheckboxValue[];
  onChange?: (val: CheckboxValue[]) => void;
  defaultValue?: CheckboxValue[];
  disabled?: boolean;
}

const defaultProps = {
  disabled: false,
  defaultValue: [],
};

export const Group: FC<CheckboxGroupProps> = p => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue(props);

  return (
    <CheckboxGroupContext.Provider
      // TODO: 性能优化
      value={{
        value,
        disabled: props.disabled,
        check: v => {
          setValue([...value, v]);
        },
        uncheck: v => {
          setValue(value.filter(item => item !== v));
        },
      }}
    >
      {props.children}
    </CheckboxGroupContext.Provider>
  );
};
