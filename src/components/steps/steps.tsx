import React, { FC } from 'react';
import classNames from 'classnames';
import { Text, View } from '@tarojs/components';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { StepProps } from './step';

const classPrefix = `adm-steps`;
const stepClassPrefix = `adm-step`;

const defaultIcon = <Text className={`${stepClassPrefix}-icon-dot`} />;

type Direction = 'horizontal' | 'vertical';

export type StepsProps = {
  current?: number;
  direction?: Direction;
  children?: React.ReactNode;
} & NativeProps<'--title-font-size' | '--description-font-size' | '--indicator-margin-right' | '--icon-size'>;

const defaultProps = {
  current: 0,
  direction: 'horizontal',
};

export const Steps: FC<StepsProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { direction, current } = props;
  const classString = classNames(classPrefix, `${classPrefix}-${direction}`);

  return withNativeProps(
    props,
    <View className={classString}>
      {React.Children.map(props.children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        const props = child.props as StepProps;
        let status = props.status || 'wait';

        if (index < current) {
          status = props.status || 'finish';
        } else if (index === current) {
          status = props.status || 'process';
        }

        const icon = props.icon ?? defaultIcon;

        return React.cloneElement(child, {
          status,
          icon,
        });
      })}
    </View>
  );
};
