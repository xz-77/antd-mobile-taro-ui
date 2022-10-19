import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { CheckIcon } from 'antd-mobile-taro-icons';
import { View } from '@tarojs/components';
import Space from '../space';
import Grid, { GridProps } from '../grid';

const classPrefix = `adm-selector`;

type SelectorValue = string | number;

export interface SelectorOption<V> {
  label: ReactNode;
  description?: ReactNode;
  value: V;
  disabled?: boolean;
}

export type SelectorProps<V> = {
  options: SelectorOption<V>[];
  columns?: GridProps['columns'];
  multiple?: boolean;
  disabled?: boolean;
  defaultValue?: V[];
  value?: V[];
  onChange?: (v: V[], extend: { items: SelectorOption<V>[] }) => void;
  showCheckMark?: boolean;
} & NativeProps<
  | '--color'
  | '--checked-color'
  | '--text-color'
  | '--checked-text-color'
  | '--border'
  | '--checked-border'
  | '--border-radius'
  | '--padding'
  | '--gap'
  | '--gap-vertical'
  | '--gap-horizontal'
>;

const defaultProps = {
  multiple: false,
  defaultValue: [],
  showCheckMark: true,
};

export const Selector = <V extends SelectorValue>(p: SelectorProps<V>) => {
  const props = mergeProps(defaultProps, p);
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option.value));
        },
      };
      props.onChange?.(val, extend);
    },
  });

  const items = props.options.map(option => {
    const active = (value || []).includes(option.value);
    const disabled = option.disabled || props.disabled;
    const itemCls = classNames(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !props.multiple,
      [`${classPrefix}-item-multiple-active`]: active && props.multiple,
      [`${classPrefix}-item-disabled`]: disabled,
    });

    return (
      <View
        key={option.value}
        className={itemCls}
        onClick={() => {
          if (disabled) {
            return;
          }
          if (props.multiple) {
            const val = active ? value.filter(v => v !== option.value) : [...value, option.value];
            setValue(val);
          } else {
            const val = active ? [] : [option.value];
            setValue(val);
          }
        }}
      >
        {option.label}
        {option.description && <View className={`${classPrefix}-item-description`}>{option.description}</View>}
        {active && props.showCheckMark && (
          <View className={`${classPrefix}-check-mark-wrapper`}>
            <CheckIcon />
          </View>
        )}
      </View>
    );
  });

  return withNativeProps(
    props,
    <View className={classPrefix}>
      {!props.columns && <Space wrap>{items}</Space>}
      {props.columns && <Grid columns={props.columns}>{items}</Grid>}
    </View>
  );
};
