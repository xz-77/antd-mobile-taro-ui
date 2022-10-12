import React, { memo, useMemo } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { ProgressCircle } from 'antd-mobile-taro-ui';
import { View } from '@tarojs/components';

const classPrefix = 'adm-spin-loading';

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
};

export type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {});
} & NativeProps<'--color' | '--size'>;

const defaultProps = {
  color: 'default',
};

export const SpinLoading = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p);

  const color = useMemo(() => {
    if (props.color !== 'default') {
      return colorRecord[props.color] ?? props.color;
    }
    return props.style?.['--color'] ?? colorRecord[defaultProps.color];
  }, [props]);

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <ProgressCircle
        percent={80}
        className={`${classPrefix}-circle`}
        style={{
          '--fill-color': color,
          '--size': props.style?.['--size'] ?? '32px',
        }}
      />
    </View>
  );
});
