import React from 'react';
// import { GetContainer } from 'antd-mobile/es/utils/render-to-container';
import { ITouchEvent } from '@tarojs/components';
import { PropagationEvent } from 'antd-mobile/es/utils/with-stop-propagation';
import { MaskProps } from '../mask';

export type PopupBaseProps = {
  afterClose?: () => void;
  afterShow?: () => void;
  bodyClassName?: string;
  bodyStyle?: React.CSSProperties;
  closeOnMaskClick?: boolean;
  destroyOnClose?: boolean;
  disableBodyScroll?: boolean;
  forceRender?: boolean;
  // getContainer?: GetContainer;
  mask?: boolean;
  maskClassName?: string;
  maskStyle?: MaskProps['style'];
  onClick?: (event: ITouchEvent) => void;
  onClose?: () => void;
  onMaskClick?: (event: ITouchEvent) => void;
  showCloseButton?: boolean;
  stopPropagation?: PropagationEvent[];
  visible?: boolean;
};

export const defaultPopupBaseProps = {
  closeOnMaskClick: false,
  destroyOnClose: false,
  disableBodyScroll: true,
  forceRender: false,
  // getContainer: () => document.body,
  mask: true,
  showCloseButton: false,
  stopPropagation: ['click'],
  visible: false,
};
