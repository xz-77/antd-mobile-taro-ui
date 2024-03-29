import React, { CSSProperties, FC } from 'react';
import { ITouchEvent, Text } from '@tarojs/components';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import classNames from 'classnames';

const classPrefix = `adm-tag`;

const colorRecord: Record<string, string> = {
  default: '#666666',
  primary: 'var(--adm-color-primary, #1677ff)',
  success: 'var(--adm-color-success, #00b578)',
  warning: 'var(--adm-color-warning, #ff8f1f)',
  danger: 'var(--adm-color-danger, #ff3141)',
};

export type TagProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {});
  fill?: 'solid' | 'outline';
  round?: boolean;
  onClick?: (e: ITouchEvent) => void;
  children?: React.ReactNode;
} & NativeProps<'--border-color' | '--background-color' | '--text-color' | '--border-radius'>;

const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false,
};

export const Tag: FC<TagProps> = p => {
  const props = mergeProps(defaultProps, p);
  const color = colorRecord[props.color] ?? props.color;

  const style: CSSProperties & {
    '--border-color': string;
    '--text-color': string;
    '--background-color': string;
  } = {
    '--border-color': color,
    '--text-color': props.fill === 'outline' ? color : '#ffffff',
    '--background-color': props.fill === 'outline' ? 'transparent' : color,
  };
  return withNativeProps(
    props,
    <Text
      style={style}
      onClick={props.onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-round`]: props.round,
      })}
    >
      {props.children}
    </Text>
  );
};
