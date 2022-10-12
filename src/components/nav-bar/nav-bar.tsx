import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { BackIcon } from 'antd-mobile-taro-icons';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-nav-bar`;

export type NavBarProps = {
  back?: string | null;
  backArrow?: boolean | ReactNode;
  left?: ReactNode;
  right?: ReactNode;
  onBack?: () => void;
  children?: React.ReactNode;
} & NativeProps<'--height' | '--border-bottom'>;

const defaultProps = {
  back: '',
  backArrow: true,
};
export const NavBar: FC<NavBarProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { back, backArrow } = props;

  return withNativeProps(
    props,
    <View className={classNames(classPrefix)}>
      <View className={`${classPrefix}-left`}>
        {back !== null && (
          <View className={`${classPrefix}-back`} onClick={props.onBack}>
            {backArrow && (
              <View className={`${classPrefix}-back-arrow`}>{backArrow === true ? <BackIcon /> : backArrow}</View>
            )}
            <View aria-hidden='true'>{back}</View>
          </View>
        )}
        {props.left}
      </View>
      <View className={`${classPrefix}-title`}>{props.children}</View>
      <View className={`${classPrefix}-right`}>{props.right}</View>
    </View>
  );
};
