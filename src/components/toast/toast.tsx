import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { CheckIcon, CloseIcon } from 'antd-mobile-taro-icons';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
// import { PropagationEvent } from 'antd-mobile/es/utils/with-stop-propagation';
// import { GetContainer } from 'antd-mobile/es/utils/render-to-container';
import { View } from '@tarojs/components';
import type { MaskProps } from '../mask';
import Mask from '../mask';
import AutoCenter from '../auto-center';
import DotLoading from '../dot-loading';

const classPrefix = `adm-toast`;

export interface ToastProps {
  afterClose?: () => void;
  maskStyle?: MaskProps['style'];
  maskClassName?: string;
  maskClickable?: boolean;
  content?: ReactNode;
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
  duration?: number;
  position?: 'top' | 'bottom' | 'center';
  visible?: boolean;
  // getContainer?: GetContainer;
  // stopPropagation?: PropagationEvent[];
}

const defaultProps = {
  maskClickable: true,
  stopPropagation: ['click'],
};

export const InternalToast: React.FC<ToastProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { maskClickable, content, icon, position } = props;

  const iconElement = useMemo(() => {
    if (icon === null || icon === undefined) return null;
    switch (icon) {
      case 'success':
        return <CheckIcon className={`${classPrefix}-icon-success`} style={{ fontSize: 36 }} />;
      case 'fail':
        return <CloseIcon className={`${classPrefix}-icon-fail`} />;
      case 'loading':
        return <DotLoading color='white' className={`${classPrefix}-loading`} />;
      default:
        return icon;
    }
  }, [icon]);

  const top = useMemo(() => {
    switch (position) {
      case 'top':
        return '20%';
      case 'bottom':
        return '80%';
      default:
        return '50%';
    }
  }, [position]);

  return (
    <Mask
      visible={props.visible}
      // destroyOnClose
      opacity={0}
      // disableBodyScroll={!maskClickable}
      // getContainer={props.getContainer}
      // afterClose={props.afterClose}
      style={{
        pointerEvents: maskClickable ? 'none' : 'auto',
        ...props.maskStyle,
      }}
      className={classNames(`${classPrefix}-mask`, props.maskClassName)}
      // stopPropagation={props.stopPropagation}
    >
      <View className={classNames(`${classPrefix}-wrap`)}>
        <View
          style={{ top }}
          className={classNames(`${classPrefix}-main`, icon ? `${classPrefix}-main-icon` : `${classPrefix}-main-text`)}
        >
          {iconElement && <View className={`${classPrefix}-icon`}>{iconElement}</View>}
          <AutoCenter>{content}</AutoCenter>
        </View>
      </View>
    </Mask>
  );
};
