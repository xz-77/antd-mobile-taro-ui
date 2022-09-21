import classNames from 'classnames';
import React, { FC, Fragment } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { View } from '@tarojs/components';

const classPrefix = `adm-badge`;

export const dot = <Fragment />;

export type BadgeProps = {
  content?: React.ReactNode | typeof dot;
  // color?: string;
  bordered?: boolean;
  children?: React.ReactNode;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
} & NativeProps<'--right' | '--top' | '--color'>;

export const Badge: FC<BadgeProps> = props => {
  const { content, children } = props;

  const isDot = content === dot;

  const badgeCls = classNames(
    classPrefix,
    !!children && `${classPrefix}-fixed`,
    isDot && `${classPrefix}-dot`,
    props.bordered && `${classPrefix}-bordered`
  );

  const element =
    content || content === 0
      ? withNativeProps(
          props,
          <View
            className={badgeCls}
            // style={
            //   {
            //     '--color': color,
            //   } as BadgeProps['style']
            // }
          >
            {!isDot && <View className={`${classPrefix}-content`}>{content}</View>}
          </View>
        )
      : null;

  return children ? (
    <View className={classNames(`${classPrefix}-wrapper`, props.wrapperClassName)} style={props.wrapperStyle}>
      {children}
      {element}
    </View>
  ) : (
    element
  );
};
