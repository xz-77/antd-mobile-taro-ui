import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { RightOutline } from './right-outline';
import { NativeProps, withNativeProps } from '../../utils/native-props';
import { isNodeWithContent } from '../../utils/is-node-with-content';

const classPrefix = `adm-list-item`;

export type ListItemProps = {
  title?: ReactNode;
  children?: ReactNode;
  description?: ReactNode;
  prefix?: ReactNode;
  extra?: ReactNode;
  clickable?: boolean;
  arrow?: boolean | ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
} & NativeProps<'--prefix-width' | '--align-items' | '--active-background-color'>;

export const ListItem: FC<ListItemProps> = props => {
  const clickable = props.clickable ?? !!props.onClick;
  const arrow = props.arrow === undefined ? clickable : props.arrow;

  const content = (
    <View className={`${classPrefix}-content`}>
      {isNodeWithContent(props.prefix) && (
        <View className={`${classPrefix}-content-prefix`}>{props.prefix}</View>
      )}
      <View className={`${classPrefix}-content-main`}>
        {isNodeWithContent(props.title) && (
          <View className={`${classPrefix}-title`}>{props.title}</View>
        )}
        {props.children}
        {isNodeWithContent(props.description) && (
          <View className={`${classPrefix}-description`}>{props.description}</View>
        )}
      </View>
      {isNodeWithContent(props.extra) && (
        <View className={`${classPrefix}-content-extra`}>{props.extra}</View>
      )}
      {isNodeWithContent(arrow) && (
        <View className={`${classPrefix}-content-arrow`}>
          {arrow === true ? <RightOutline /> : arrow}
        </View>
      )}
    </View>
  );

  return withNativeProps(
    props,
    React.createElement(
      View,
      {
        className: classNames(
          `${classPrefix}`,
          clickable ? ['adm-plain-anchor'] : [],
          props.disabled && `${classPrefix}-disabled`
        ),
        onClick: props.disabled ? undefined : props.onClick,
      },
      content
    )
  );
};
