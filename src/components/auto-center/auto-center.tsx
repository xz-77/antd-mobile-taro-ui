import React, { FC } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { View } from '@tarojs/components';

const classPrefix = 'adm-auto-center';

export type AutoCenterProps = { children?: React.ReactNode } & NativeProps;

export const AutoCenter: FC<AutoCenterProps> = props => {
  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-content`}>{props.children}</View>
    </View>
  );
};
