import { View } from '@tarojs/components';
import classNames from 'classnames';
import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { CloseIcon } from 'antd-mobile-taro-icons';
import { withStopPropagation } from 'antd-mobile/es/utils/with-stop-propagation';
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { useUnmountedRef } from 'ahooks';
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

  const [active, setActive] = useState(props.visible);

  const unmountedRef = useUnmountedRef();

  const init = useRef(true);

  useEffect(() => {
    if (init.current) return;
    if (unmountedRef.current) return;
    setActive(props.visible);
  }, [props.visible]);

  useEffect(() => {
    if (init.current) {
      setActive(true);
      init.current = false;
    }
  }, []);

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
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
            forceRender={props.forceRender}
            destroyOnClose={props.destroyOnClose}
            onMaskClick={e => {
              props.onMaskClick?.(e);
              if (props.closeOnMaskClick) {
                props.onClose?.();
              }
            }}
            className={props.maskClassName}
            style={props.maskStyle}
            disableBodyScroll={false}
            stopPropagation={props.stopPropagation}
            afterClose={() => {
              props.afterClose?.();
            }}
            afterShow={() => {
              props.afterShow?.();
            }}
          />
        )}
        <View
          className={bodyCls}
          style={{
            ...props.bodyStyle,
            transform: percent(100),
          }}
        >
          {props.showCloseButton &&
            withStopPropagation(
              ['click'],
              <View
                className={classNames(`${classPrefix}-close-icon`, 'adm-plain-anchor')}
                onClick={() => {
                  props.onClose?.();
                }}
              >
                <CloseIcon />
              </View>
            )}
          {props.children}
        </View>
      </View>
    )
  );

  return (
    <ShouldRender active={active} forceRender={props.forceRender} destroyOnClose={props.destroyOnClose}>
      {/* {renderToContainer(props.getContainer, node)} */}
      {node}
    </ShouldRender>
  );
};
