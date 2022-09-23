import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { View, Text } from '@tarojs/components';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';

const classPrefix = `adm-dot-loading`;

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
};

export type DotLoadingProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  color?: 'default' | 'primary' | 'white' | (string & {});
} & NativeProps;

const defaultProps = {
  color: 'default',
};

export const DotLoading = memo<DotLoadingProps>(p => {
  const props = mergeProps(defaultProps, p);
  const backgroundColor = useMemo(() => colorRecord[props.color] ?? props.color, [props]);
  return withNativeProps(
    props,
    <View className={classNames('adm-loading', classPrefix)}>
      <View className='wrapper'>
        {['a', 'b', 'c'].map(item => (
          <Text
            key={item}
            className={classNames('dot', item)}
            style={{
              backgroundColor,
            }}
          />
        ))}
      </View>
    </View>
  );
});
