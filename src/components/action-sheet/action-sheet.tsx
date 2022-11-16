import React, { FC, ReactNode } from 'react';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { renderImperatively } from '../../utils/render-imperatively';
import Popup, { PopupProps } from '../popup';
import SafeArea from '../safe-area';

const classPrefix = `adm-action-sheet`;

export type Action = {
  key: string | number;
  text: ReactNode;
  disabled?: boolean;
  description?: ReactNode;
  danger?: boolean;
  bold?: boolean;
  onClick?: () => void;
};

export type ActionSheetProps = {
  visible?: boolean;
  actions: Action[];
  extra?: React.ReactNode;
  cancelText?: React.ReactNode;
  onAction?: (action: Action, index: number) => void;
  onClose?: () => void;
  onMaskClick?: () => void;
  closeOnAction?: boolean;
  closeOnMaskClick?: boolean;
  safeArea?: boolean;
  popupClassName?: string;
  popupStyle?: React.CSSProperties;
} & Pick<PopupProps, 'afterClose' | 'destroyOnClose' | 'forceRender'> & // 不支持getContainer属性
  NativeProps;

const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnAction: false,
  closeOnMaskClick: true,
  safeArea: true,
  destroyOnClose: false,
  forceRender: false,
};

export const ActionSheet: FC<ActionSheetProps> = p => {
  const props = mergeProps(defaultProps, p);

  return (
    <Popup
      visible={props.visible}
      onMaskClick={() => {
        props.onMaskClick?.();
        if (props.closeOnMaskClick) {
          props.onClose?.();
        }
      }}
      afterClose={props.afterClose}
      className={classNames(`${classPrefix}-popup`, props.popupClassName)}
      style={props.popupStyle}
      // getContainer={props.getContainer}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
    >
      {withNativeProps(
        props,
        <View className={classPrefix}>
          {props.extra && <View className={`${classPrefix}-extra`}>{props.extra}</View>}
          <View className={`${classPrefix}-button-list`}>
            {props.actions.map((action, index) => (
              <View key={action.key} className={`${classPrefix}-button-item-wrapper`}>
                <View
                  className={classNames('adm-plain-anchor', `${classPrefix}-button-item`, {
                    [`${classPrefix}-button-item-danger`]: action.danger,
                    [`${classPrefix}-button-item-disabled`]: action.disabled,
                    [`${classPrefix}-button-item-bold`]: action.bold,
                  })}
                  onClick={() => {
                    action.onClick?.();
                    props.onAction?.(action, index);
                    if (props.closeOnAction) {
                      props.onClose?.();
                    }
                  }}
                >
                  <View className={`${classPrefix}-button-item-name`}>{action.text}</View>
                  {action.description && (
                    <View className={`${classPrefix}-button-item-description`}>{action.description}</View>
                  )}
                </View>
              </View>
            ))}
          </View>

          {props.cancelText && (
            <View className={`${classPrefix}-cancel`}>
              <View className={`${classPrefix}-button-item-wrapper`}>
                <View
                  className={classNames('adm-plain-anchor', `${classPrefix}-button-item`)}
                  onClick={() => {
                    props.onClose?.();
                  }}
                >
                  <View className={`${classPrefix}-button-item-name`}>{props.cancelText}</View>
                </View>
              </View>
            </View>
          )}

          {props.safeArea && <SafeArea position='bottom' />}
        </View>
      )}
    </Popup>
  );
};

export type ActionSheetShowHandler = {
  close: () => void;
};

export function showActionSheet(props: Omit<ActionSheetProps, 'visible' | 'destroyOnClose' | 'forceRender'>) {
  return renderImperatively(<ActionSheet {...props} />) as ActionSheetShowHandler;
}
