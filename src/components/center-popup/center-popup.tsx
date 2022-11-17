import React, { FC, PropsWithChildren, useRef, useState } from 'react';
import { renderToContainer } from 'antd-mobile/es/utils/render-to-container';
import { withStopPropagation } from 'antd-mobile/es/utils/with-stop-propagation';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { useIsomorphicLayoutEffect } from 'ahooks';
// import { animated, useSpring } from '@react-spring/web'
import { useInnerVisible } from 'antd-mobile/es/utils/use-inner-visible';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { useLockScroll } from 'antd-mobile/es/utils/use-lock-scroll';
import { CloseIcon } from 'antd-mobile-taro-icons';
import { View } from '@tarojs/components';
import Mask from '../mask';
import { defaultPopupBaseProps, PopupBaseProps } from '../popup/popup-base-props';

export type CenterPopupProps = PopupBaseProps &
  PropsWithChildren<{
    // These props currently are only used internally. They are not exported to users:
    role?: string;
  }> &
  NativeProps<'--background-color' | '--border-radius' | '--max-width' | '--min-width' | '--z-index'>;

const defaultProps = {
  ...defaultPopupBaseProps,
  getContainer: null,
};

export const CenterPopup: FC<CenterPopupProps> = p => {
  const props = mergeProps(defaultProps, p);

  // const unmountedRef = useUnmountedRef();
  // const style = useSpring({
  //   scale: props.visible ? 1 : 0.8,
  //   opacity: props.visible ? 1 : 0,
  //   config: {
  //     mass: 1.2,
  //     tension: 200,
  //     friction: 25,
  //     clamp: true,
  //   },
  //   onRest: () => {
  //     if (unmountedRef.current) return;
  //     setActive(props.visible);
  //     if (props.visible) {
  //       props.afterShow?.();
  //     } else {
  //       props.afterClose?.();
  //     }
  //   },
  // });

  const [active, setActive] = useState(props.visible);
  useIsomorphicLayoutEffect(() => {
    if (props.visible) {
      setActive(true);
    }
  }, [props.visible]);

  const ref = useRef<HTMLDivElement>(null);
  useLockScroll(ref, props.disableBodyScroll && active);

  const maskVisible = useInnerVisible(active && props.visible);

  const body = (
    <View className={classNames('adm-center-popup-body', props.bodyClassName)} style={props.bodyStyle}>
      {props.children}
    </View>
  );

  const node = withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <View
        className='adm-center-popup'
        style={{
          display: active ? undefined : 'none',
          pointerEvents: active ? undefined : 'none',
        }}
      >
        {props.mask && (
          <Mask
            visible={maskVisible}
            forceRender={props.forceRender}
            destroyOnClose={props.destroyOnClose}
            onMaskClick={e => {
              props.onMaskClick?.(e);
              if (props.closeOnMaskClick) {
                props.onClose?.();
              }
            }}
            style={props.maskStyle}
            className={classNames('adm-center-popup-mask', props.maskClassName)}
            disableBodyScroll={false}
            stopPropagation={props.stopPropagation}
          />
        )}
        <View
          className='adm-center-popup-wrap'
          // role={props.role}
          aria-label={props['aria-label']}
        >
          <View style={{ display: maskVisible ? undefined : 'none' }} ref={ref}>
            {props.showCloseButton && (
              <View
                className={classNames('adm-center-popup-close', 'adm-plain-anchor')}
                onClick={() => {
                  props.onClose?.();
                }}
              >
                <CloseIcon />
              </View>
            )}
            {body}
          </View>
        </View>
      </View>
    )
  );

  return (
    <ShouldRender active={active} forceRender={props.forceRender} destroyOnClose={props.destroyOnClose}>
      {renderToContainer(props.getContainer, node)}
    </ShouldRender>
  );
};
