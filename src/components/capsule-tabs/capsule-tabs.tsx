import React, { FC, ReactNode, ReactElement, ComponentProps, useState, useMemo, useEffect, useCallback } from 'react';
import classNames from 'classnames';
// import { animated } from 'react-spring';
import { ITouchEvent, ScrollView, View } from '@tarojs/components';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { usePropsValue } from 'antd-mobile/es/utils/use-props-value';
// import { useResizeEffect } from 'antd-mobile/es/utils/use-resize-effect';
// import { useTabListScroll } from 'antd-mobile/es/utils/use-tab-list-scroll';
import { ShouldRender } from 'antd-mobile/es/utils/should-render';
import { traverseReactNode } from 'antd-mobile/es/utils/traverse-react-node';
import Taro from '@tarojs/taro';
import { uuid } from '../../utils/uuid';
// import ScrollMask from '../scroll-mask';

const classPrefix = `adm-capsule-tabs`;

export type CapsuleTabProps = {
  key: string;
  title: ReactNode;
  disabled?: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children?: ReactNode;
} & NativeProps;

export const CapsuleTab: FC<CapsuleTabProps> = () => {
  return null;
};

export type CapsuleTabsProps = {
  activeKey?: string | null;
  defaultActiveKey?: string | null;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
} & NativeProps;

// TODO: 待优化
export const CapsuleTabs: FC<CapsuleTabsProps> = props => {
  // 生成唯一id
  const id = useMemo(() => uuid(16, undefined, false), []);
  // const tabListContainerRef = useRef<HTMLDivElement>(null);
  // const rootRef = useRef<HTMLDivElement>(null);
  // const keyToIndexRecord: Record<string, number> = {};
  let firstActiveKey: string | null = null;

  const panes: ReactElement<ComponentProps<typeof CapsuleTab>>[] = [];

  traverseReactNode(props.children, (child, index) => {
    if (!React.isValidElement(child)) return;
    const { key } = child;
    if (typeof key !== 'string') return;
    if (index === 0) {
      firstActiveKey = key;
    }
    panes.push(child);
    // const length = panes.push(child);
    // keyToIndexRecord[key] = length - 1;
  });

  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? firstActiveKey,
    onChange: v => {
      if (v === null) return;
      props.onChange?.(v);
    },
  });

  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   for (let i = 0; i < panes.length; i++) {
  //     if (panes[i].key === (props.defaultActiveKey ?? firstActiveKey)) {
  //       setActiveIndex(i);
  //       break;
  //     }
  //   }
  // }, []);

  // const { scrollLeft, animate } = useTabListScroll(tabListContainerRef, keyToIndexRecord[activeKey as string]);

  // useResizeEffect(() => {
  //   animate(true);
  // }, rootRef);

  const [scrollLeft, setScrollLeft] = useState(0);

  const [layoutWidth, setLayoutWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let width = 0;
      Taro.createSelectorQuery()
        .select(`#${id}  .adm-capsule-tabs-header`)
        .boundingClientRect(rect => {
          setLayoutWidth(rect?.width ?? 0);
          width = rect?.width ?? 0;
        })
        .exec();

      const map = new Map<string, number>();
      for (let i = 0; i < panes.length; i++) {
        map.set(panes[i].key as string, i);
      }
      Taro.createSelectorQuery()
        .selectAll(`#${id} .adm-capsule-tabs-tab-wrapper`)
        .boundingClientRect(rect => {
          let offsetLeft = 0;
          // @ts-ignore
          const m = map.get(activeKey) as number;
          // eslint-disable-next-line no-restricted-syntax
          for (const [, index] of map) {
            if (index < m) {
              // @ts-ignore
              offsetLeft += rect[index].width;
            }
          }
          // @ts-ignore
          const obj = rect[m] as Taro.NodesRef.BoundingClientRectCallbackResult;

          setScrollLeft(offsetLeft - width / 2 + obj.width / 2);
        })
        .exec();
    }, 0);
  }, []);

  const handleAnimation = useCallback(
    (e: ITouchEvent) => {
      Taro.createSelectorQuery()
        .select(`#${e.target.id}`)
        .boundingClientRect(rect => {
          // @ts-ignore
          setScrollLeft(e.target.offsetLeft - layoutWidth / 2 + rect.width / 2);
        })
        .exec();
    },
    [layoutWidth]
  );

  return withNativeProps(
    props,
    <View className={classPrefix} id={id}>
      <View className={`${classPrefix}-header`}>
        {/* <ScrollMask scrollTrackRef={tabListContainerRef} /> */}
        {/* <animated.div className={`${classPrefix}-tab-list`} ref={tabListContainerRef} scrollLeft={scrollLeft}> */}

        <ScrollView scrollX scrollLeft={scrollLeft} scrollWithAnimation>
          <View className={`${classPrefix}-tab-list`}>
            {panes.map(pane =>
              withNativeProps(
                pane.props,
                <View key={pane.key as string} className={`${classPrefix}-tab-wrapper`}>
                  <View
                    onClick={e => {
                      const { key } = pane;
                      if (pane.props.disabled) return;
                      if (key === undefined || key === null) {
                        return;
                      }
                      setActiveKey(key.toString());
                      // animation 滑动距离计算
                      handleAnimation(e);
                    }}
                    className={classNames(`${classPrefix}-tab`, {
                      [`${classPrefix}-tab-active`]: pane.key === activeKey,
                      [`${classPrefix}-tab-disabled`]: pane.props.disabled,
                    })}
                  >
                    {pane.props.title}
                  </View>
                </View>
              )
            )}
          </View>
          {/* </animated.div> */}
        </ScrollView>
      </View>
      {panes.map(pane => {
        if (pane.props.children === undefined) {
          return null;
        }
        const active = pane.key === activeKey;
        return (
          <ShouldRender
            key={pane.key}
            active={active}
            forceRender={pane.props.forceRender}
            destroyOnClose={pane.props.destroyOnClose}
          >
            <View className={`${classPrefix}-content`} style={{ display: active ? 'block' : 'none' }}>
              {pane.props.children}
            </View>
          </ShouldRender>
        );
      })}
    </View>
  );
};
