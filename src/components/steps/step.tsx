import React, { FC } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-step`;

export type StepProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error';
} & NativeProps;

export const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props;

  return withNativeProps(
    props,
    <View className={classNames(`${classPrefix}`, `${classPrefix}-status-${status}`)}>
      <View className={`${classPrefix}-indicator`}>
        <View className={`${classPrefix}-icon-container`}>{icon}</View>
      </View>
      <View className={`${classPrefix}-content`}>
        <View className={`${classPrefix}-title`}>{title}</View>
        {!!description && <View className={`${classPrefix}-description`}>{description}</View>}
      </View>
    </View>
  );
};
