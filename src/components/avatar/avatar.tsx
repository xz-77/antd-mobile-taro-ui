import React, { FC } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import type { ImageProps } from '@tarojs/components';
import { Image } from '@tarojs/components';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';

const classPrefix = 'adm-avatar';

export type AvatarProps = {
  fallback?: string;
} & Omit<ImageProps, 'style'> &
  NativeProps<'--size' | '--border-radius'>;

const defaultProps = {
  module: 'scaleToFill',
};

export const Avatar: FC<AvatarProps> = p => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <Image
      className={classNames(classPrefix, { [`${classPrefix}-fallback`]: !props.src })}
      src={props.src || props.fallback || ''}
    />
  );
};
