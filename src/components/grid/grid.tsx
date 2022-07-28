import React, { FC } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { toCSSLength } from 'antd-mobile/es/utils/to-css-length';
import { ITouchEvent, View } from '@tarojs/components';

const classPrefix = `adm-grid`;

export type GridProps = {
  columns: number;
  gap?: number | string | [number | string, number | string];
  children?: React.ReactNode;
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>;

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  };
  const { gap } = props;
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0]);
      style['--gap-vertical'] = toCSSLength(gap[1]);
    } else {
      style['--gap'] = toCSSLength(gap);
    }
  }

  return withNativeProps(
    props,
    <View className={classPrefix} style={style}>
      {props.children}
    </View>
  );
};

export type GridItemProps = {
  span?: number | string;
  onClick?: (event: ITouchEvent) => void;
  children?: React.ReactNode;
} & NativeProps;

type GridItemStyle = React.CSSProperties & Record<'--item-span', GridItemProps['span']>;

export const GridItem: FC<GridItemProps> = p => {
  const props = mergeProps({ span: '1' }, p);

  const itemStyle: GridItemStyle = {
    '--item-span': String(props.span),
  };
  return withNativeProps(
    props,
    <View className={`${classPrefix}-item`} style={itemStyle} onClick={props.onClick}>
      {props.children}
    </View>
  );
};
