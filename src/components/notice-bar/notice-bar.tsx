import React, { useState, useRef, memo, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { CloseIcon, NotificationIcon } from 'antd-mobile-taro-icons';
import { useTimeout } from 'ahooks';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { useResizeEffect } from 'antd-mobile/es/utils/use-resize-effect';
import { useMutationEffect } from 'antd-mobile/es/utils/use-mutation-effect';
import { View } from '@tarojs/components';
import { uuid } from '../../utils/uuid';
import Taro from '@tarojs/taro';

const classPrefix = `adm-notice-bar`;

export type NoticeBarProps = {
  /** 通告栏的类型 */
  color?: 'default' | 'alert' | 'error' | 'info';
  /** 开始滚动的延迟，单位 ms */
  delay?: number;
  /** 滚动速度，单位 px/s */
  speed?: number;
  /** 公告内容 */
  content: React.ReactNode;
  /** 是否可关闭 */
  closeable?: boolean;
  /** 关闭时的回调 */
  onClose?: () => void;
  /** 额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode;
  /** 左侧广播图标 */
  icon?: React.ReactNode;
} & NativeProps<
  '--background-color' | '--border-color' | '--text-color' | '--font-size' | '--icon-font-size' | '--height'
>;

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
  icon: <NotificationIcon />,
};

export const NoticeBar = memo<NoticeBarProps>(p => {
  const props = mergeProps(defaultProps, p);

  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [visible, setVisible] = useState(true);

  const { speed } = props;
  const [containerRefWidth, setContainerRefWidth] = useState(0);
  const [textRefWidth, setTextRefWidth] = useState(0);
  const containerRefId = useMemo(() => `${classPrefix}-content-${uuid()}`, []);
  const textRefId = useMemo(() => `${classPrefix}-content-inner-${uuid()}`, []);
  const delayLockRef = useRef(true);
  const animatingRef = useRef(false);

  function start() {
    if (delayLockRef.current) return;

    const container = containerRef.current;

    const text = textRef.current;
    if (!container || !text) return;
    // 但是 Taro 的虚拟 DOM 运行在小程序的逻辑层，并不是真实的小程序渲染层节点，它没有尺寸宽高等信息。
    if (containerRefWidth >= textRefWidth) {
      animatingRef.current = false;
      text.style.removeProperty('transition-duration');
      text.style.removeProperty('transform');
      return;
    }

    if (animatingRef.current) return;

    const initial = !text.style.transform;
    text.style.transitionDuration = '0s';
    if (initial) {
      text.style.transform = 'translateX(0)';
    } else {
      text.style.transform = `translateX(${containerRefWidth}px)`;
    }
    const distance = initial ? textRefWidth : containerRefWidth + textRefWidth;
    animatingRef.current = true;
    setTimeout(() => {
      text.style.transitionDuration = `${Math.round(distance / speed)}s`;
      text.style.transform = `translateX(-${textRefWidth}px)`;
    }, 500);
  }

  useEffect(() => {
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select(`#${containerRefId}`)
        .boundingClientRect(rect => {
          setContainerRefWidth(rect.width);
        })
        .exec();
      Taro.createSelectorQuery()
        .select(`#${textRefId}`)
        .boundingClientRect(rect => {
          setTextRefWidth(rect.width);
        })
        .exec();
    }, 0);
  }, []);

  useTimeout(() => {
    delayLockRef.current = false;
    start();
  }, props.delay);

  useResizeEffect(() => {
    start();
  }, containerRef);

  useMutationEffect(
    () => {
      start();
    },
    textRef,
    {
      subtree: true,
      childList: true,
      characterData: true,
    }
  );

  if (!visible) return null;

  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-${props.color}`)}>
      {props.icon && <View className={`${classPrefix}-left`}>{props.icon}</View>}
      <View ref={containerRef} id={containerRefId} className={`${classPrefix}-content`}>
        <View
          onTransitionEnd={() => {
            animatingRef.current = false;
            start();
          }}
          ref={textRef}
          id={textRefId}
          className={`${classPrefix}-content-inner`}
        >
          {props.content}
        </View>
      </View>
      {(props.closeable || props.extra) && (
        <View className={`${classPrefix}-right`}>
          {props.extra}
          {props.closeable && (
            <View
              className={`${classPrefix}-close`}
              onClick={() => {
                setVisible(false);
                props.onClose?.();
              }}
            >
              <CloseIcon className={`${classPrefix}-close-icon`} />
            </View>
          )}
        </View>
      )}
    </View>
  );
});
