import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import { CheckboxGroupContext } from './group-context';
import { usePropsValue } from '@/utils/use-props-value';
import { mergeProps } from '@/utils/with-default-props';
import { CheckIcon } from './check-icon';

const classPrefix = `adm-checkbox`;

export type CheckboxValue = string | number;

export type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  value?: CheckboxValue;
  indeterminate?: boolean;
  block?: boolean;
  id?: string;
  icon?: (checked: boolean, indeterminate: boolean) => React.ReactNode;
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>;

const defaultProps = {
  defaultChecked: false,
  indeterminate: false,
};

export const Checkbox: FC<CheckboxProps> = p => {
  const groupContext = useContext(CheckboxGroupContext);

  const props = mergeProps(defaultProps, p);

  let [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  });
  let {disabled} = props;
  const { value } = props;
  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value);
    setChecked = (checked: boolean) => {
      if (checked) {
        groupContext.check(value);
      } else {
        groupContext.uncheck(value);
      }
      props.onChange?.(checked);
    };
    disabled = disabled || groupContext.disabled;
  }

  const renderIcon = () => {
    if (props.icon) {
      return (
        <View className={`${classPrefix}-custom-icon`}>
          {props.icon(checked, props.indeterminate)}
        </View>
      );
    }

    return (
      <View className={`${classPrefix}-icon`}>
        {props.indeterminate ? (
          <View className={`${classPrefix}-indeterminate-checked`} />
        ) : (
          checked && <CheckIcon className={`${classPrefix}-icon-checked`} />
        )}
      </View>
    );
  };

  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-indeterminate`]: props.indeterminate,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
      onClick={() => {
        if (disabled) return;
        setChecked(!checked);
      }}
    >
      {renderIcon()}
      {props.children && <View className={`${classPrefix}-content`}>{props.children}</View>}
    </View>
  );
};
