import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import {
  RoundCheckFillIcon,
  RoundCloseFillIcon,
  InfoFillIcon,
  WarnFillIcon,
  TimeFillIcon,
} from 'antd-mobile-taro-icons';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-result`;

const iconRecord = {
  success: RoundCheckFillIcon,
  error: RoundCloseFillIcon,
  info: InfoFillIcon,
  waiting: TimeFillIcon,
  warning: WarnFillIcon,
};

const defaultProps = {
  status: 'info',
};

export type ResultProps = {
  status?: 'success' | 'error' | 'info' | 'waiting' | 'warning';
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
} & NativeProps;

export const Result: FC<ResultProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { status, title, description, icon } = props;
  if (!status) return null;
  const resultIcon = icon || React.createElement(iconRecord[status], { className: `${classPrefix}-iconfont` });

  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-${status}`)}>
      <View className={`${classPrefix}-icon`}>{resultIcon}</View>
      <View className={`${classPrefix}-title`}>{title}</View>
      {description ? <View className={`${classPrefix}-description`}>{description}</View> : null}
    </View>
  );
};
