import type { ITouchEvent } from '@tarojs/components';
import { View } from '@tarojs/components';
import type { ReactElement } from 'react';
import React, { useMemo } from 'react';
import { NativeProps, withNativeProps } from '../../utils/native-props';

import { mergeProps } from '../../utils/with-default-props';

const classPrefix = `adm-mask`;

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
};

export type MaskProps = {
  visible?: boolean;
  onMaskClick?: (event: ITouchEvent) => void;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  disableBodyScroll?: boolean;
  color?: 'black' | 'white';
  opacity?: 'default' | 'thin' | 'thick' | number;
  getContainer?: ReactElement | null;
  afterShow?: () => void;
  afterClose?: () => void;
  stopPropagation?: ['click'];
} & NativeProps<'--z-index'>;

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  getContainer: null,
  stopPropagation: ['click'],
};

export const Mask: React.FC<MaskProps> = p => {
  const props = mergeProps(defaultProps, p);
  const background = useMemo(() => {
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === 'white' ? '255, 255, 255' : '0, 0, 0';
    return `rgba(${rgb}, ${opacity})`;
  }, [props.color, props.opacity]);
  return withNativeProps(
    props,
    <View
      className={classPrefix}
      style={{
        ...props.style,
        background,
        zIndex: props.visible ? 'var(--z-index)' : '-1',
        opacity: props.visible ? '1' : '0',
      }}
    >
      {props.onMaskClick && <View className={`${classPrefix}-aria-button`} onClick={props.onMaskClick} />}
      <View className={`${classPrefix}-content`}>{props.children}</View>
    </View>
  );
};
