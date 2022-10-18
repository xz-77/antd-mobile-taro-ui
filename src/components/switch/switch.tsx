import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { isPromise } from 'antd-mobile/es/utils/validate';
import { View } from '@tarojs/components';
import SpinLoading from '../spin-loading';
import { useConfig } from '../config-provider';

const classPrefix = `adm-switch`;

export type SwitchProps = {
  loading?: boolean;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  /** @deprecated use `onChange` instead */
  beforeChange?: (val: boolean) => Promise<void>;
  onChange?: (checked: boolean) => void | Promise<void>;
  checkedText?: ReactNode;
  uncheckedText?: ReactNode;
} & NativeProps<'--checked-color' | '--width' | '--height' | '--border-width'>;

const defaultProps = {
  defaultChecked: false,
};

export const Switch: FC<SwitchProps> = p => {
  const props = mergeProps(defaultProps, p);
  const disabled = props.disabled || props.loading || false;
  const [changing, setChanging] = useState(false);
  const { locale } = useConfig();

  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  });

  const onClick = async () => {
    if (disabled || props.loading || changing) {
      return;
    }
    const nextChecked = !checked;
    if (props.beforeChange) {
      setChanging(true);
      try {
        await props.beforeChange(nextChecked);
        setChanging(false);
      } catch (e) {
        setChanging(false);
        throw e;
      }
    }
    const result = setChecked(nextChecked);
    if (isPromise(result)) {
      setChanging(true);
      try {
        await result;
        setChanging(false);
      } catch (e) {
        setChanging(false);
        throw e;
      }
    }
  };

  return withNativeProps(
    props,
    <View
      onClick={onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled || changing,
      })}
      // role='switch'
      aria-label={locale.Switch.name}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <View className={`${classPrefix}-checkbox`}>
        <View className={`${classPrefix}-handle`}>
          {(props.loading || changing) && <SpinLoading className={`${classPrefix}-handle-loading`} />}
        </View>
        <View className={`${classPrefix}-inner`}>{checked ? props.checkedText : props.uncheckedText}</View>
      </View>
    </View>
  );
};
