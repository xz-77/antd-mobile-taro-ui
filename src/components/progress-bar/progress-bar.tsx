import React, { FC, ReactNode } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';
import { isNodeWithContent } from 'antd-mobile/es/utils/is-node-with-content';
import { View } from '@tarojs/components';

const classPrefix = `adm-progress-bar`;

export type ProgressBarProps = {
  percent?: number;
  rounded?: boolean;
  text?: boolean | ReactNode | ((percent: number) => ReactNode);
} & NativeProps<'--track-width' | '--track-color' | '--fill-color' | '--text-width'>;

const defaultProps = {
  percent: 0,
  rounded: true,
  text: false,
};

export const ProgressBar: FC<ProgressBarProps> = p => {
  const props = mergeProps(defaultProps, p);
  const fillStyle = {
    width: `${props.percent}%`,
  };

  const textElement = (() => {
    if (props.text === true) {
      return `${props.percent}%`;
    }
    if (typeof props.text === 'function') {
      return (props.text as (percent: number) => ReactNode)(props.percent);
    }
    return props.text;
  })();

  return withNativeProps(
    props,
    <View className={classNames(classPrefix, props.rounded && `${classPrefix}-rounded`)}>
      <View className={`${classPrefix}-trail`}>
        <View className={`${classPrefix}-fill`} style={fillStyle} />
      </View>
      {isNodeWithContent(textElement) && <View className={`${classPrefix}-text`}>{textElement}</View>}
    </View>
  );
};
