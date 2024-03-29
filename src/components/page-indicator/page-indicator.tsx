import React, { memo, ReactElement } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import classNames from 'classnames';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-page-indicator`;

export type PageIndicatorProps = {
  total: number;
  current: number;
  direction?: 'horizontal' | 'vertical';
  color?: 'primary' | 'white';
} & NativeProps<
  | '--dot-color'
  | '--active-dot-color'
  | '--dot-size'
  | '--active-dot-size'
  | '--dot-border-radius'
  | '--active-dot-border-radius'
  | '--dot-spacing'
>;

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
};

export const PageIndicator = memo<PageIndicatorProps>(p => {
  const props = mergeProps(defaultProps, p);

  const dots: ReactElement[] = [];
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <View
        key={i}
        className={classNames(`${classPrefix}-dot`, {
          [`${classPrefix}-dot-active`]: props.current === i,
        })}
      />
    );
  }

  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, `${classPrefix}-${props.direction}`, `${classPrefix}-color-${props.color}`)}
    >
      {dots}
    </View>
  );
});
