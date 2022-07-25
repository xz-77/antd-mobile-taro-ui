import React, { FC } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-divider`;

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center';
  direction?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
} & NativeProps;

const defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
};

export const Divider: FC<DividerProps> = p => {
  const props = mergeProps(defaultProps, p);
  return withNativeProps(
    props,
    <View
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.direction}`,
        `${classPrefix}-${props.contentPosition}`
      )}
    >
      {props.children && <View className={`${classPrefix}-content`}>{props.children}</View>}
    </View>
  );
};
