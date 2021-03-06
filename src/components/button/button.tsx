import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import type { ButtonProps as BPS, ITouchEvent } from '@tarojs/components';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { isPromise } from 'antd-mobile/es/utils/validate';
import DotLoading from '../dot-loading';

const classPrefix = `adm-button`;

// type NativeButtonProps = React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// >;

export type ButtonProps = Pick<BPS, 'onTouchStart' | 'onTouchEnd' | 'onClick'> & {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean | 'auto';
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  disabled?: boolean;
  // onClick?: (event: ITouchEvent) => void | Promise<void> | unknown;
  // type?: 'submit' | 'reset' | 'Button';
  shape?: 'default' | 'rounded' | 'rectangular';
  children?: React.ReactNode;
} & NativeProps<
    '--text-color' | '--background-color' | '--border-radius' | '--border-width' | '--border-style' | '--border-color'
  >;

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null;
};

const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: <DotLoading color='currentColor' />,
  type: '',
  shape: 'default',
  size: 'middle',
  onTouchStart: () => {},
};

export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);

  const [innerLoading, setInnerLoading] = useState(false);
  const nativeButtonRef = useRef<HTMLButtonElement>(null);
  // @ts-ignore
  const loading = props.loading === 'auto' ? innerLoading : props.loading;
  const disabled = props.disabled || loading;

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current;
    },
  }));

  const handleClick = async (e: ITouchEvent) => {
    if (disabled) return;
    if (!props.onClick) return;

    const promise = props.onClick(e);

    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        await promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  };

  return withNativeProps(
    props,
    <View
      ref={nativeButtonRef}
      onClick={handleClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`
      )}
      // disabled={disabled}
      // onMouseDown={props.onMouseDown}
      // onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {loading ? (
        <View className={`${classPrefix}-loading-wrapper`}>
          {props.loadingIcon}
          {props.loadingText}
        </View>
      ) : (
        props.children
      )}
    </View>
  );
});
