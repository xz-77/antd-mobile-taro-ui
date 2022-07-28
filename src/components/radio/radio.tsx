import { View } from '@tarojs/components';
import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { CheckIcon } from './check-icon';
import { RadioGroupContext } from './group-context';

const classPrefix = `adm-radio`;

export type RadioValue = string | number;

export type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  value?: RadioValue;
  block?: boolean;
  id?: string;
  icon?: (checked: boolean) => React.ReactNode;
} & NativeProps<'--icon-size' | '--font-size' | '--gap'>;

const defaultProps = {
  defaultChecked: false,
};

export const Radio: FC<RadioProps> = p => {
  const props = mergeProps(defaultProps, p);
  const groupContext = useContext(RadioGroupContext);

  let [checked, setChecked] = usePropsValue<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
    onChange: props.onChange,
  });

  let { disabled } = props;

  const { value } = props;
  if (groupContext && value !== undefined) {
    checked = groupContext.value.includes(value);
    // eslint-disable-next-line @typescript-eslint/no-shadow
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
      return <View className={`${classPrefix}-custom-icon`}>{props.icon(checked)}</View>;
    }

    return (
      <View className={`${classPrefix}-icon`}>
        {checked && <CheckIcon className={`${classPrefix}-icon-checked`} />}
      </View>
    );
  };

  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, props.className, {
        [`${classPrefix}-checked`]: checked,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-block`]: props.block,
      })}
      style={props.style}
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
