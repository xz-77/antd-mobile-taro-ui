import type { FC } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import React from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';

const classPrefix = 'adm-safe-area';

export type SafeAreaProps = {
  position: 'top' | 'bottom';
} & NativeProps;

export const SafeArea: FC<SafeAreaProps> = props => {
  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-position-${props.position}`)} />
  );
};
