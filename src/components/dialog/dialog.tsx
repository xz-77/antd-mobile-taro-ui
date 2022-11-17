import React, { FC, ReactNode } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';
import { NativeProps } from 'antd-mobile/es/utils/native-props';
import { View, Image } from '@tarojs/components';
import { Action, DialogActionButton } from './dialog-action-button';
import AutoCenter from '../auto-center';
import CenterPopup, { CenterPopupProps } from '../center-popup';

export type DialogProps = Pick<
  CenterPopupProps,
  | 'afterClose'
  | 'afterShow'
  | 'bodyClassName'
  | 'bodyStyle'
  | 'destroyOnClose'
  | 'disableBodyScroll'
  | 'forceRender'
  | 'maskClassName'
  | 'maskStyle'
  | 'stopPropagation'
  | 'visible' // 不支持'getContainer'
> & {
  image?: string;
  header?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  actions?: (Action | Action[])[];
  onAction?: (action: Action, index: number) => void | Promise<void>;
  onClose?: () => void;
  closeOnAction?: boolean;
  closeOnMaskClick?: boolean;
} & NativeProps;

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  // getContainer: null,
};

export const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p);

  const element = (
    <>
      {!!props.image && (
        <View className={cls('image-container')}>
          {/* alt='dialog header image' */}
          <Image src={props.image} mode='widthFix' />
        </View>
      )}
      {!!props.header && (
        <View className={cls('header')}>
          <AutoCenter>{props.header}</AutoCenter>
        </View>
      )}
      {!!props.title && <View className={cls('title')}>{props.title}</View>}
      <View className={classNames(cls('content'), !props.content && cls('content-empty'))}>
        {typeof props.content === 'string' ? <AutoCenter>{props.content}</AutoCenter> : props.content}
      </View>
      <View className={cls('footer')}>
        {props.actions.map((row, index) => {
          const actions = Array.isArray(row) ? row : [row];
          return (
            <View className={cls('action-row')} key={index}>
              {actions.map((action, index) => (
                <DialogActionButton
                  key={action.key}
                  action={action}
                  onAction={async () => {
                    await Promise.all([action.onClick?.(), props.onAction?.(action, index)]);
                    if (props.closeOnAction) {
                      props.onClose?.();
                    }
                  }}
                />
              ))}
            </View>
          );
        })}
      </View>
    </>
  );

  return (
    <CenterPopup
      className={classNames(cls(), props.className)}
      style={props.style}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      onMaskClick={
        props.closeOnMaskClick
          ? () => {
              props.onClose?.();
            }
          : undefined
      }
      visible={props.visible}
      // getContainer={props.getContainer}
      bodyStyle={props.bodyStyle}
      bodyClassName={classNames(cls('body'), props.image && cls('with-image'), props.bodyClassName)}
      maskStyle={props.maskStyle}
      maskClassName={props.maskClassName}
      stopPropagation={props.stopPropagation}
      disableBodyScroll={props.disableBodyScroll}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
      role='dialog'
      aria-label={props['aria-label']}
    >
      {element}
    </CenterPopup>
  );
};

// function cls(name: string = '') {
//   return 'adm-dialog' + (name && '-') + name;
// }

function cls(name = '') {
  return `adm-dialog${name && '-'}${name}`;
}
