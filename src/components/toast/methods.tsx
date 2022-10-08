import React from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { ImperativeHandler, renderImperatively } from '../../utils/render-imperatively';
import { InternalToast, ToastProps } from './toast';

let currentHandler: ImperativeHandler | null = null;
let currentTimeout: NodeJS.Timeout;

export type ToastShowProps = Omit<ToastProps, 'visible'>;

const defaultProps = {
  duration: 2000,
  position: 'center',
  maskClickable: true,
};

export type ToastHandler = {
  close: () => void;
};

const ToastInner = (
  props: ToastShowProps & {
    onClose?: () => void;
  }
) => <InternalToast {...props} />;

export function show(p: ToastShowProps | string) {
  const props = mergeProps(defaultProps, typeof p === 'string' ? { content: p } : p);
  const element = (
    <ToastInner
      {...props}
      onClose={() => {
        currentHandler = null;
      }}
    />
  );

  if (currentHandler) {
    currentHandler.replace(element);
  } else {
    currentHandler = renderImperatively(element);
  }

  if (currentTimeout) {
    clearTimeout(currentTimeout);
  }
  if (props.duration !== 0) {
    currentTimeout = setTimeout(() => {
      clear();
    }, props.duration);
  }

  return currentHandler as ToastHandler;
}

export function clear() {
  currentHandler?.close();
  currentHandler = null;
}

export function config(val: Pick<ToastProps, 'duration' | 'position' | 'maskClickable'>) {
  if (val.duration !== undefined) {
    defaultProps.duration = val.duration;
  }
  if (val.position !== undefined) {
    defaultProps.position = val.position;
  }
  if (val.maskClickable !== undefined) {
    defaultProps.maskClickable = val.maskClickable;
  }
}
