import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useUnmountedRef } from 'ahooks';
// import { useSpring, animated } from '@react-spring/web';
// import { renderToContainer, GetContainer } from 'antd-mobile/es/utils/render-to-container';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { PropagationEvent, withStopPropagation } from 'antd-mobile/es/utils/with-stop-propagation';
import { ITouchEvent, View } from '@tarojs/components';
import { useConfig } from '../config-provider';
import { useLockScroll } from '../../utils/use-lock-scroll';

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
  // getContainer?: GetContainer;
  afterShow?: () => void;
  afterClose?: () => void;
  stopPropagation?: PropagationEvent[];
  children?: React.ReactNode;
} & NativeProps<'--z-index'>;

const defaultProps = {
  visible: true,
  destroyOnClose: false,
  forceRender: false,
  color: 'black',
  opacity: 'default',
  disableBodyScroll: true,
  // getContainer: null,
  stopPropagation: ['click'],
};

export const Mask: React.FC<MaskProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { locale } = useConfig();

  const ref = useRef<HTMLElement>(null);

  useLockScroll(props.visible && props.disableBodyScroll);

  const background = useMemo(() => {
    const opacity = opacityRecord[props.opacity] ?? props.opacity;
    const rgb = props.color === 'white' ? '255, 255, 255' : '0, 0, 0';
    return `rgba(${rgb}, ${opacity})`;
  }, [props.color, props.opacity]);

  const [active, setActive] = useState(props.visible);

  const unmountedRef = useUnmountedRef();

  const init = useRef(true);

  useEffect(() => {
    if (init.current) return;
    if (unmountedRef.current) return;
    setActive(props.visible);
    if (props.visible) {
      setTimeout(() => {
        props.afterShow?.();
      }, 500);
    } else {
      setTimeout(() => {
        props.afterClose?.();
      }, 500);
    }
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
        ref={ref}
        style={{
          ...props.style,
          background,
          opacity: props.visible ? 1 : 0,
          zIndex: props.visible ? 'var(--z-index)' : '-1',
          // display: active ? undefined : 'none',
        }}
        onClick={e => {
          if (e.target === e.currentTarget) {
            props.onMaskClick?.(e);
          }
        }}
      >
        {props.onMaskClick && (
          <View
            className={`${classPrefix}-aria-button`}
            // role='button'
            aria-label={locale.Mask.name}
            onClick={props.onMaskClick}
          />
        )}
        <View className={`${classPrefix}-content`}>{props.children}</View>
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
