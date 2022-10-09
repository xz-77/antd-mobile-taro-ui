import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React, { FC } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import Mask from '../mask';
import { defaultPopupBaseProps, PopupBaseProps } from './popup-base-props';

const classPrefix = `adm-popup`;

export type PopupProps = PopupBaseProps &
  PropsWithChildren<{
    position?: 'bottom' | 'top' | 'left' | 'right';
  }> &
  NativeProps<'--z-index'>;

const defaultProps = {
  ...defaultPopupBaseProps,
  position: 'bottom',
};

export const Popup: FC<PopupProps> = p => {
  const props = mergeProps(defaultProps, p);

  const bodyCls = classNames(
    `${classPrefix}-body`,
    props.bodyClassName,
    `${classPrefix}-body-position-${props.position}`
  );

  const percent = (v: number) => {
    if (props.visible) {
      return `translate(0, 0%)`;
    }
    if (props.position === 'bottom') {
      return `translate(0, ${v}%)`;
    }
    if (props.position === 'top') {
      return `translate(0, -${v}%)`;
    }
    if (props.position === 'left') {
      return `translate(-${v}%, 0)`;
    }
    if (props.position === 'right') {
      return `translate(${v}%, 0)`;
    }
    return 'none';
  };

  return withNativeProps(
    props,
    <View
      className={classPrefix}
      onClick={props.onClick}
      style={{
        opacity: props.visible ? '1' : '0',
        zIndex: props.visible ? 'var(--z-index)' : '-1',
      }}
    >
      {props.mask && (
        <Mask
          visible={props.visible}
          onMaskClick={props.onMaskClick}
          className={props.maskClassName}
          style={props.maskStyle}
          // disableBodyScroll={false}
          // stopPropagation={props.stopPropagation}
        />
      )}
      <View
        className={bodyCls}
        style={{
          ...props.bodyStyle,
          transform: percent(100),
        }}
      >
        {props.children}
      </View>
    </View>
  );
};
